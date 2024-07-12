'use client'
import React,{ useState,useEffect } from 'react'
import Image from 'next/image'
import { DndContext,closestCenter,PointerSensor,useSensor,useSensors } from '@dnd-kit/core'
import {
  SortableContext,
  useSortable,
  rectSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

export interface ImageItem {
  id: string
  src: string
  name: string
}

const emptySlots = [
  { id: 'slot1' },
  { id: 'slot2' },
  { id: 'slot3' },
  { id: 'slot4' },
]

const SortableItem: React.FC<{ id: string; src: string; name: string }> = ({ id,src,name }) => {
  const { attributes,listeners,setNodeRef,transform,transition } = useSortable({ id })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="flex-col  align-middle bg-blue-100 flex items-center justify-center cursor-pointer p-2">
      <Image src={src} alt={name} width={200} height={200} className=' object-content ' />
    </div>
  )
}

const DroppableSlot: React.FC<{ id: string; children?: React.ReactNode }> = ({ id,children }) => {
  const { setNodeRef } = useSortable({ id })

  return (
    <div ref={setNodeRef} className="bg-blue-200 h-32 flex items-center justify-center">
      {children}
    </div>
  )
}

interface QuizSlotsProps {
  images: ImageItem[]
  onClick: () => void
}

const QuizSlots = ({ images,onClick }: QuizSlotsProps) => {
  const [currentStep,setCurrentStep] = useState(0)
  const [shuffledImages,setShuffledImages] = useState<ImageItem[]>([])
  const [slots,setSlots] = useState<(ImageItem | null)[]>(Array(4).fill(null))
  const [isCorrectOrder,setIsCorrectOrder] = useState(false)
  const [timeLeft,setTimeLeft] = useState(10)

  useEffect(() => {
    setShuffledImages(shuffle(images))
  },[])

  const shuffle = (array: ImageItem[]): ImageItem[] => {
    let newArray = array?.slice()
    for (let i = newArray?.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i],newArray[j]] = [newArray[j],newArray[i]]
    }
    return newArray
  }

  const sensors = useSensors(
    useSensor(PointerSensor)
  )

  const handleDragEnd = (event: any) => {
    const { active,over } = event

    if (active && over) {
      const activeIndex = shuffledImages.findIndex((item) => item.id === active.id)
      const overIndex = emptySlots.findIndex((slot) => slot.id === over.id)

      if (overIndex !== -1) {
        setSlots((prev) => {
          const newSlots = [...prev]
          newSlots[overIndex] = shuffledImages[activeIndex]
          return newSlots
        })
        setShuffledImages((prev) => prev.filter((item) => item.id !== active.id))
      }
    }
  }

  const checkOrder = () => {
    const isCorrect = slots.every((slot,index) => slot && slot.id === images[index].id)
    setIsCorrectOrder(isCorrect)
  }

  const resetQuiz = () => {
    setShuffledImages(shuffle(images))
    setSlots(Array(4).fill(null))
    setIsCorrectOrder(false)
    setCurrentStep(0)
    setTimeLeft(10);
  }

  useEffect(() => {
    //  valida el resetQuiz
    // resetQuiz
      resetQuiz()
    }, [images])


  useEffect(() => {
    if (currentStep === 0) {
      setShuffledImages(shuffle(images))
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 1) {
            clearInterval(timer)
            setCurrentStep(1)
            return 0
          }
          return prevTime - 1
        })
      },1000)
      return () => clearInterval(timer)
    }
  },[currentStep,images]);

  useEffect(() => {
    checkOrder()
  },[slots])

  return (
    <div className="bg-white shadow-lg rounded-lg items-center p-8 mx-auto  mb-10 max-w-screen-2xl">
      {currentStep === 0 && (
        <>
          <div className="text-center text-2xl mb-4">Tiempo restante: {timeLeft} segundos</div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {images?.map((image) => (
              <div key={image.id} className='
                flex-col  align-middle bg-blue-100 flex items-center justify-center cursor-pointer p-2
              '>
                <Image src={image.src} alt={image.name} width={200} height={200} className='object-content' />
                <p className="text-center font-serif  ">{image.name}</p>
              </div>
            ))}
          </div>
        </>
      )}
      {currentStep === 1 && (
        <>
          {
            shuffledImages.length === 0 &&
            <>
              <div className="text-center text-2xl mb-4">
                {isCorrectOrder ? '¡Correcto!' : '¡Incorrecto!'}
              </div>
              <div className="text-center text-xl mb-4"> 
                {isCorrectOrder ? 'Puedes avanzar!' : 'Vuelve a intentarlo!'}
              </div>
            </>
          }
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {shuffledImages?.map((image) => (
                <SortableItem key={image.id} id={image.id} src={image.src} name={image.name} />
              ))}
            </div>
            <SortableContext items={emptySlots} strategy={rectSortingStrategy}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {slots.map((slot,index) => (
                  <DroppableSlot key={index} id={`slot${index + 1}`}>
                    {slot && <Image src={slot.src} alt={slot.name} width={200} height={200} className='object-content'/>}
                  </DroppableSlot>
                ))}
              </div>
            </SortableContext>
            {isCorrectOrder && (
              <div className="mt-4">
                  <button onClick={onClick} className="bg-green-500 text-white px-4 py-2 rounded">Enviar</button>
              </div>
            )}
            <div className="mt-4">
              <button onClick={resetQuiz} className="bg-blue-500 text-white px-4 py-2 rounded">Reiniciar</button>
            </div>
          </DndContext>
        </>
      )}
    </div>
  )
}

export default QuizSlots
