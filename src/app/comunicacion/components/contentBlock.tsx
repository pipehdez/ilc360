import Image from 'next/image'

const ContentBlock = ({ title,imageSrc }: { title: string,imageSrc: any }) => {
    return (
        <div className="flex flex-col md:flex-row items-center mb-8">
            <Image src={imageSrc} alt={title} width={300} height={200} className="md:w-1/2" />
            <div className="md:w-1/2 md:ml-8">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p>
                    Para las personas en condición de discapacidad cognitiva, este aspecto es sumamente difícil, lo que conlleva a que no se contrate laboralmente.
                </p>
            </div>
        </div>
    )
}

export default ContentBlock
