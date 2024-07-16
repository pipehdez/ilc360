"use client"
import Link from "next/link"
import { usePathname,useRouter } from 'next/navigation'
import { signOut,useSession } from "next-auth/react"
import { use,useEffect,useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  // const navigation = ["Home", "Sliperd", "Comunicación"];
  const [openMenu,setOpenMenu] = useState(false)
  const { status } = useSession()
  const router = useRouter()
  const path = usePathname()

  useEffect(() => {
    setOpenMenu(false)
  }, [path])

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
        <div className="pl-40 nav__item">
        <button
          className={`inline-block px-4 py-2 text-lg font-normal ${path === '/' ? "text-white" : "text-white"} no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none`}
          onClick={() => {
            signOut({ redirect: false }).then(() => {
              router.push("/")
            })

          }}
        >
          SALIR
        </button>
      </div>
      )
    } else if (status === "loading") {
      return (
        <span className={`${path === '/' ? "text-white" : "text-gray-600"} text-sm mt-7`}>Loading...</span>
      )
    } else {
      return (
        <div className="pl-40 nav__item">
        <Link
          href="/login"
          className={`inline-block px-4 py-2 text-lg font-normal ${path === '/' ? "text-white" : "text-white"} no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none`}
        >
          ENTRAR
        </Link>
        </div>
      )
    }
  }

  return (
    <div className="w-full">
      <nav className="w-full relative z-10 flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0 ">

        {/*  menu sandwiche with icon sandwiche*/}
        


        {/*  menu */}
        <div className={`${openMenu ? 'bg-gray-500/75 absolute left-0 top-0 px-16 py-28 z-0' : 'hidden'}`}>

          <ul className="items-center list-none   ">
            {navigation.map((nav,index) => (
              <li className="pl-40 nav__item" key={index}>
                <Link href={nav.href} className={`inline-block px-4 py-2 text-lg font-normal ${path === '/' ? "text-white" : "text-white"} no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none`}>
                  {nav.name}
                </Link>
              </li>
            ))}
            {showSession()}
          </ul>
        </div>

        <div className="relative pl-40">
          <button
            id="menu-sandwich"
            className={`flex items-center px-3 py-2 ${path === '/' ? "text-white" : "text-gray-600"}  border border-gray-600 rounded border-opacity-50  z-20`}
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
                fill={path === '/' ? "text-white" : "text-gray-600"}
              />
            </svg>
          </button>
        </div>

        <div className="pl-40">
          {
            path !== "/" && (
              <Link href="/" className="flex items-center">
                {/* <img
                  src={path.includes('comunicacion') ? "/img/logo-comunicacion.png" : "/img/logo-sliperd.jpg"}
                  alt="Logo"
                  className="h-10"
                /> */}
                <Image src={path.includes('comunicacion') ? "/img/logo-comunicacion.png" : "/img/logo-sliperd.jpg"} alt="Logo" width={100} height={100} className='h-20 w-auto mr-10' />
              </Link>
            )
          }
          </div>

      </nav>
    </div>
  )
}
