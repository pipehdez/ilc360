"use client"
import { FormEvent,useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Login() {
    const [error,setError] = useState("")
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const res = await signIn("credentials",{
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false,
        })
        if (res?.error) {
            setError(res.error as string)
        }
        if (res?.ok) {
            return router.push("/")
        }
    };

    return (
        <section className="w-full h-screen flex items-center justify-center bg-hero-background-image bg-no-repeat bg-cover ">
            <form
                className="p-6 w-full max-w-[400px] flex flex-col justify-between items-center gap-2 
        border border-solid border-black bg-white rounded"
                onSubmit={handleSubmit}>
                {error && <div className="text-black">{error}</div>}
                <h1 className="mb-5 w-full text-2xl font-bold text-blue-500 ">Sign In</h1>
                <label className="w-full text-sm text-blue-500 ">Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full h-8 border border-solid border-blue-500 rounded p-2"
                    name="email" />
                <label className="w-full text-sm text-blue-500 ">Password</label>
                <div className="flex w-full">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full h-8 border border-solid border-blue-500 rounded p-2"
                        name="password" />
                </div>
                <button className="w-full border border-solid border-blue-500 rounded text-blue-500 ">
                    Sign In
                </button>

                <Link
                    href="/register"
                    className="text-sm text-blue-500/25 text-blue-500   transition duration-150 ease hover:text-black">
                    No una tienes cuenta?
                </Link>
            </form>
        </section>
    );
 }