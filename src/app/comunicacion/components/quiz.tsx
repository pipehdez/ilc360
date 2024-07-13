'use client'
import React,{ useState,useEffect } from 'react'
import Image from 'next/image'
import { DndContext,closestCenter,PointerSensor,useSensor,useSensors } from '@dnd-kit/core'
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
    useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface ImageItem {
    id: string
    src: string
    name: string
}

const SortableItem: React.FC<{ id: string; src: string; name: string }> = ({ id,src,name }) => {
    const { attributes,listeners,setNodeRef,transform,transition } = useSortable({ id })
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="bg-blue-100 flex items-center justify-center cursor-pointer">
            <Image src={src} alt={name} width={200} height={200} />
        </div>
    )
}

interface QuizProps {
    images: ImageItem[]
    onClick: () => void
}
const Quiz = ({images, onClick}: QuizProps) => {
    const [currentStep,setCurrentStep] = useState(0)
    const [shuffledImages,setShuffledImages] = useState<ImageItem[]>([])
    const [selectedImages,setSelectedImages] = useState<ImageItem[]>([])
    const [isCorrectOrder,setIsCorrectOrder] = useState(false)
    const [timeLeft,setTimeLeft] = useState(10);

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
    },[currentStep]);

    const shuffle = (array: ImageItem[]): ImageItem[] => {
        let newArray = array.slice()
        for (let i = newArray.length - 1; i > 0; i--) {
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

        if (active.id !== over.id) {
            setShuffledImages((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id)
                const newIndex = items.findIndex((item) => item.id === over.id)
                const newItems = arrayMove(items,oldIndex,newIndex)
                checkOrder(newItems)
                return newItems
            })
        }
    }

    const checkOrder = (items: ImageItem[]) => {
        const isCorrect = items.every((item,index) => item.id === images[index].id)
        setIsCorrectOrder(isCorrect)
    }

    const resetQuiz = () => {
        setSelectedImages([])
        setCurrentStep(0)
        setIsCorrectOrder(false)
        setTimeLeft(10);
    }

    return (
        <div className="bg-white shadow-lg rounded-lg items-center p-8 mx-auto  mb-10 max-w-screen-2xl">
            {/* {currentStep === 0 && (
                <>
                    <div className="text-center text-2xl mb-4">Tiempo restante: {timeLeft} segundos</div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {images.map((image) => (
                            <div key={image.id}>
                                <Image src={image.src} alt={image.name} width={200} height={200} />
                                <p className="text-center">{image.name}</p>
                            </div>
                        ))}
                    </div>
                </>
            )} */}
            {/* {currentStep === 1 && ( */}
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext items={shuffledImages} strategy={verticalListSortingStrategy}>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                            {shuffledImages.map((image) => (
                                <SortableItem key={image.id} id={image.id} src={image.src} name={image.name} />
                            ))}
                        </div>
                    </SortableContext>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {selectedImages.map((image) => (
                            // <div key={image.id} className="bg-blue-200 flex items-center justify-center h-32">
                                <Image src={image.src} alt={image.name} width={200} height={200} />
                            // </div>
                        ))}
                        {/* {Array.from({ length: images.length - selectedImages.length }).map((_,idx) => (
                            <div key={idx} className="bg-blue-200 h-32 flex items-center justify-center"></div>
                        ))} */}
                    </div>
                    {isCorrectOrder && (
                        <div className="mt-4">
                            <button onClick={onClick} className="bg-green-500 text-white px-4 py-2 rounded">Enviar</button>
                        </div>
                    )}
                    <div className="mt-4">
                        <button onClick={resetQuiz} className="bg-blue-500 text-white px-4 py-2 rounded">Reiniciar</button>
                    </div>
                </DndContext>
            {/* )} */}
        </div>
    )
}

export default Quiz
