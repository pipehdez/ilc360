"use client"
import { usePathname, useRouter } from 'next/navigation'
import { Provider } from './provider'
import Navbar from '@/components/navbar'

export default function Wrapper({ children }: Readonly<{ children: React.ReactNode }>) {
    const path = usePathname()
    return (
        <Provider>
            <main className={`flex min-h-screen flex-col items-center ${path === '/' ? 'bg-hero-background-image bg-no-repeat bg-cover' : 'bg-white'}  `}>
                <Navbar />
                {children}
            </main>
        </Provider>
    )
}