interface HeaderProps {
    title: string
    description: string
}

const Header = ({ title, description }: HeaderProps) => {
    return (
        <div className="relative bg-white">
            <div className="bg-sliperd-backgroud-image bg-no-repeat bg-cover bg-opacity-20 -z-10">
                <div className=" flex flex-col items-center justify-center  text-white gap-5 py-10">
                    <h1 className="text-5xl font-bold p-5 bg-gray-500/30">{title}</h1>
                    <p className="text-xl p-5 mx-10 text-justify bg-gray-500/30">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Header