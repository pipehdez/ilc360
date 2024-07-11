"use client"
import { FormEvent,useRef,useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { register } from "@/actions/register"
import mongoose, { mongo } from 'mongoose'


export default function Register() {
    const [error,setError] = useState<string>()
    const router = useRouter()
    const ref = useRef<HTMLFormElement>(null)

    const handleSubmit = async (formData: FormData) => {
        const r = await register({
            email: formData.get("email"),
            password: formData.get("password"),
            name: formData.get("name"),
            plan: new mongoose.Types.ObjectId('668ecc48d9bcdf41b9ad484b')
        })
        ref.current?.reset()
        if (r?.error) {
            setError(r.error)
            return
        } else {
            return router.push("/login")
        }
    }

    return (
        <section className="w-full h-screen flex items-center justify-center bg-hero-background-image bg-no-repeat bg-cover">
            <form ref={ref}
                action={handleSubmit}
                className="p-6 w-full max-w-[400px] flex flex-col justify-between items-center gap-2 
        border border-solid border-black bg-white rounded">
                {error && <div className="">{error}</div>}
                <h1 className="mb-5 w-full text-2xl font-bold text-blue-500">Register</h1>

                <label className="w-full text-sm text-blue-500">Full Name</label>
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full h-8 border border-solid border-blue-500 py-1 px-2.5 rounded text-[13px]"
                    name="name"
                />

                <label className="w-full text-sm text-blue-500">Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full h-8 border border-solid border-blue-500 py-1 px-2.5 rounded"
                    name="email"
                />

                <label className="w-full text-sm text-blue-500">Password</label>
                <div className="flex w-full">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full h-8 border border-solid border-blue-500 py-1 px-2.5 rounded"
                        name="password"
                    />
                </div>

                <button className="w-full border border-solid border-blue-500 py-1.5 mt-2.5 rounded
        transition duration-150 ease hover:bg-black text-blue-500">
                    Sign up
                </button>


                <Link href="/login" className="text-sm text-blue-500/25 transition duration-150 ease hover:text-black">
                    Already have an account?
                </Link>
            </form>
        </section>
    )
}
