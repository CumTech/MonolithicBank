import { Button } from "@/components/ui/button"
import Link from "next/link";
import Image from "next/image";

export default function NavBarHome() {
    return (
        <div className="flex w-full px-12">
            <div className="flex basis-1/3 justify-start items-center gap-8">
                <Button variant="link" asChild>
                    <Link href={"/"}>
                        <p className="text-2xl leading-9">
                            Home
                        </p>
                    </Link>
                </Button>
                <Button variant="link" asChild>
                    <Link href={"#features"}>
                        <p className="text-2xl leading-9">
                            Features
                        </p>
                    </Link>
                </Button>
                <Button variant="link" asChild>
                    <Link href={"#faq"}>
                        <p className="text-2xl leading-9">
                            FAQ
                        </p>
                    </Link>
                </Button>
                <Button variant="link" asChild>
                    <Link href={"/blogblosthex.vercel.app"} className="flex gap-2">
                        <p className="text-2xl leading-9">
                            Blog
                        </p>
                        <Image src="/icons/blog.svg" alt="blog" width={16} height={16} />
                    </Link>
                </Button>
            </div>
            <div className="flex basis-1/3 justify-center items-center gap-2.5">
                <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
                <h1 className="text-[40px] bg-clip-text text-transparent bg-gradient-to-tl from-primary-200 to-text-50 ">
                    Blosthex
                </h1>
            </div>
            <div className="flex basis-1/3 justify-end">
                <div className="justify-center items-center gap-4 flex">
                    <Button variant="outline" asChild>
                        <Link href={"/login"}>
                            Login
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href={"/signup"}>
                            Sign Up
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}