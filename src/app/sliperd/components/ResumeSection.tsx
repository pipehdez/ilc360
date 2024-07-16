interface ResumeSectionProps {
    title: string
    description: string
    image: string
    onClick?: () => void
    textButton?: string
}

const ResumeSection = ({ title,description,image,onClick,textButton = "Iniciar" }: ResumeSectionProps) => {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: image }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white p-8 max-w-2xl bg-black bg-opacity-50 rounded-lg">
                <h1 className="text-4xl font-bold mb-6">{title}</h1>
                <p className="mb-6">
                    {description}
                </p>
                {
                    onClick && (
                        <button className="mt-4 px-6 py-3 bg-gray-800 bg-opacity-70 rounded-lg hover:bg-opacity-90 transition duration-300" onClick={onClick}>
                            {textButton}
                        </button>
                    )
                }
                {/* <button className="mt-4 px-6 py-3 bg-gray-800 bg-opacity-70 rounded-lg hover:bg-opacity-90 transition duration-300"
                    // llamar al id
                    // @ts-ignore
                    onClick={() => document.getElementById('resume').scrollIntoView({ behavior: 'smooth' })}
                >
                    Iniciar
                </button> */}
            </div>
        </div>
    )
}

export default ResumeSection