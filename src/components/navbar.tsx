"use client"
import Link from "next/link"
import { usePathname,useRouter } from 'next/navigation'
import { signOut,useSession } from "next-auth/react"
import { use,useState } from 'react'

export default function Navbar() {
  // const navigation = ["Home", "Sliperd", "Comunicación"];
  const [openMenu,setOpenMenu] = useState(false)
  const { status } = useSession()
  const router = useRouter()
  const path = usePathname()
  const navigation = [
    {
      name: "INICIO",
      href: "/",
    },
    {
      name: "SLIPERD",
      href: "/sliperd",
    },
    {
      name: "COMUNICACIÓN",
      href: "/comunicacion",
    }
  ]

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <button
          className={`border border-solid border-white ${path === '/' ? "text-white" : "text-gray-600"} rounded`}
          onClick={() => {
            signOut({ redirect: false }).then(() => {
              router.push("/")
            })

          }}
        >
          SALIR
        </button>
      )
    } else if (status === "loading") {
      return (
        <span className={`${path === '/' ? "text-white" : "text-gray-600"} text-sm mt-7`}>Loading...</span>
      )
    } else {
      return (
        <Link
          href="/login"
          className={`inline-block px-4 py-2 text-lg font-normal ${path === '/' ? "text-white" : "text-gray-600"}  no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none`}
        >
          ENTRAR
        </Link>
      )
    }
  }

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">

        {/*  menu sandwiche with icon sandwiche*/}
        <div className="block ">
          <button
            id="menu-sandwich"
            className={`flex items-center px-3 py-2 ${path === '/' ? "text-white" : "text-gray-600"}  border border-white rounded border-opacity-50 hover:text-white hover:border-white`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>


        {/*  menu */}
        <div className={`${openMenu ? 'bg-gray-500/35 fixed right-0 top-0 px-16 py-28 ' : 'hidden'}`}>
          {/* <div className="lg:hidden lg:flex-grow lg:items-center lg:w-auto lg:px-3 lg:space-x-4"></div> */}

          <ul className="items-center   list-none   ">
            {navigation.map((nav,index) => (
              <li className=" nav__item" key={index}>
                <Link href={nav.href} className={`inline-block px-4 py-2 text-lg font-normal ${path === '/' ? "text-white" : "text-gray-600"} no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none`}>
                  {nav.name}
                </Link>
              </li>
            ))}
            {showSession()}
          </ul>
        </div>

      </nav>
    </div>
  )
}
