import Link from 'next/link'

const Header = () => {
    return (
        <header className="w-full bg-blue-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Comunicación</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/about">Qué es</Link></li>
                    <li><Link href="/programs">Programas</Link></li>
                    <li><Link href="/subscription">Suscripción</Link></li>
                    <li><Link href="/contact">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
