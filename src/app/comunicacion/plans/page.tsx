import Link from 'next/link'
import React from 'react'

export default function Page() {
    const plans = [
        {
            title: "PRUEBA GRATUITA",
            subtitle: "15 DIAS DE PRUEBA",
            description: "PLAN GRATUITO POR USUARIO",
            price: "$0",
            features: [
                "ACCESO A UN MÓDULO DE ELECCIÓN",
            ],
        },
        {
            title: "BÁSICO",
            subtitle: "PLAN MENSUAL",
            description: "SUSCRIPCIÓN POR 30 DÍAS",
            price: "$180.000",
            features: [
                "ACCESO A UN MÓDULO DE ELECCIÓN",
            ],
        },
        {
            title: "ESTÁNDAR",
            subtitle: "PLAN 12 MESES",
            description: "AHORRE UN 30% CON LA SUSCRIPCIÓN ANUAL",
            price: "$378.000",
            features: [
                "ACCESO A 3 MÓDULOS DE ELECCIÓN",
            ],
        },
        {
            title: "PREMIUM",
            subtitle: "PLAN 12 MESES",
            description: "SUSCRIPCIÓN A COMUNICACIÓN DIGITAL Y SLIPERD",
            price: "$4.536.000",
            features: [
                "ACCESO A 3 MÓDULOS + ACCESO AL SERVICIO DE SLIPERD",
            ],
        },
    ]

    return (
        <div className="flex flex-col items-center p-4 bg-gray-100 gap-10">
            <h1 className="text-3xl font-bold mb-6 text-blue-500">PLANES Y PRECIOS</h1>
            <div className="grid md:grid-cols-4 gap-4 w-full">
                {plans?.map((plan,index) => (
                    <div key={index} className="bg-blue-500 shadow-lg rounded-lg p-6">
                        <h2 className={`text-2xl font-bold mb-4 text-center ${index === 0 ? 'bg-yellow-400' : index === 1 ? 'bg-yellow-400' : index === 2 ? 'bg-yellow-400' : 'bg-yellow-400'} p-2 rounded`}>{plan.title}</h2>
                        <p className="text-center mb-4 text-white">{plan.description}</p>
                        <p className="text-center text-white text-4xl font-bold mb-6">{plan.price}</p>
                        <p className="text-center text-white mb-4">{plan.subtitle}</p>
                        <ul className="mb-6">
                            {plan.features.map((feature,idx) => (
                                <li key={idx} className="flex items-center mb-2">
                                    <span className="text-white font-bold">+</span>
                                    <span className="ml-2 text-white">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            {/* opcion para registrarse  */}
            <div className="p-6">
                {/* registrate para obtener una prueba gratuita */}

                <Link href="/login" className=" p-5 bg-blue-500 rounded-md text-white ">
                    Registrate para obtener una prueba gratuita por 30 días
                </Link>

            </div>
        </div>
    )
}
