import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function SidebarConfig({ children }) {

    return (
        <nav className="h-full flex flex-col justify-center items-center shadow-sm">
            {/*Header*/}
            <div className='flex w-4/5 mb-16'>
                <Button
                    variant="icon"
                    asChild
                    className="p-1.5 rounded-lg"
                >
                    <Link href={"/dashboard"}>
                        <Image 
                        src={"/icons/angle-left.svg"} 
                        alt={''} 
                        width={18} 
                        height={18}
                        className='text-secondary-400' 
                        />
                    </Link>
                </Button>
            </div>
            {/*Content*/}
            <ul className="flex-1 px-3 w-4/5">{children}</ul>
        </nav>
    )
}

export function SidebarItemConfig({ icon, text, active, url }) {

    return (
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-background-200/10 text-text-50/50 hover:bg-background-50 hover:text-text-950" : "hover:bg-background-50 hover:text-text-950 text-text-50/50"}`}>
            {icon}
            <Link
                href={url}
                className="overflow-hidden transition-all w-52 ml-3">
                {text}
            </Link>
        </li>
    )
}