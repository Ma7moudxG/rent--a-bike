import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Icons } from "./Icons"
import NavItems from "./NavItems"
import { buttonVariants } from "./ui/button"
import Cart from "./Cart"
import { getServerSideUser } from "@/lib/payload-utils"
import {cookies} from "next/headers"
import UserAccountNav from "./UserAccountNav"
import Image from "next/image"

const Navbar = async () => {
    const nextCookies = cookies()
    const { user } = await getServerSideUser(nextCookies)

    return (
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-white">
                <MaxWidthWrapper className="">
                    <div className="border-b border-gray-200 ">
                        <div className="flex h-16 items-center">

                            {/* TODO: Mobile Nav */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link href="/">
                                    {/* <Icons.logo className="h-10 w-10"/> */}
                                    <Image src="/logo.png" alt="Logo" width={36} height={36}/>
                                </Link>
                                <h3 className="pl-8 flex text-center justify-center justify-items font-bold text-xl text-orange-500 my-0 ">
                                    Rent A Bike
                                </h3>
                            </div>

                            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                                {/* <NavItems /> */}
                            </div>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {user ? null : 
                                    <Link href="/sign-in" className={buttonVariants({variant: "ghost"})}>Sign in</Link>}

                                    {user ? null : <span className="h-6 w-px bg-gray-200" aria-hidden="true" />}

                                    {user ? ( 
                                        <UserAccountNav  user={user}/>
                                        ) : <Link 
                                               href='Sign-up' 
                                               className={buttonVariants({
                                                variant: "ghost"
                                                })}>
                                                Create account
                                            </Link>}

                                    {user ? <span 
                                               className="h-6 w-px bg-gray-200" 
                                               aria-hidden="true" /> : null}

                                    { user ? null : <div className="flex lg:ml-6">
                                            <span 
                                               className="h-6 w-px bg-gray-200" 
                                               aria-hidden="true" />
                                        </div>
                                        }
                                    <div className="ml-4 flow-root lg:ml-6 ">
                                        <Cart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default Navbar