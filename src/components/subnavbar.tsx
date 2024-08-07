import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";

interface SubnavbarProps {
  navigation: {
    name: string;
    href: string;
  }[];
}

export default function Subnavbar({ navigation }: SubnavbarProps) {

  const getRoute = (route: string) => {
    if (route === `/sliperd/sliperd/${route}`) {
      return route.replace(`/sliperd/sliperd/`, `/sliperd/`);
    } 
    return route; // Add a default return statement
  }

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between py-8 px-0 mx-auto lg:justify-between xl:px-0">
        {/* menu  */}
        <div className="mx-auto hidden text-center lg:flex lg:items-center">
          <ul className="justify-center flex-1 pt-6 list-none lg:pt-0 lg:flex ">
            {navigation.map((nav, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={getRoute(nav.href)} className="px-4 py-2 text-lg font-normal text-white no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
                    {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
