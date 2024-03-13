import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useContext, createContext, useState } from "react"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const SidebarContext = createContext()

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true)

    return (
        <nav className="h-full flex flex-col justify-center items-center shadow-sm">
            {/*Header*/}
            <div className='flex justify-center items-center mt-3'>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar className={`overflow-hidden transition-all ${expanded ? " mr-3 " : "hidden"}`}>
                            <AvatarImage src="https://github.com/LurchingDart.png" />
                            <AvatarFallback>
                                <p className="text-text-950">
                                    LD
                                </p>
                            </AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                Profile
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Billing
                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Settings
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Keyboard shortcuts
                                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>Email</DropdownMenuItem>
                                        <DropdownMenuItem>Message</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>More...</DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                            <DropdownMenuItem>
                                New Team
                                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                        <DropdownMenuItem disabled>API</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <p className={`overflow-hidden transition-all ${expanded ? "w-auto mr-5" : "hidden"}`}>
                    LurchingDart
                </p>
                <Button
                    variant="icon"
                    onClick={() => setExpanded((curr) => !curr)}
                    className="p-1.5 rounded-lg"
                >
                    {expanded ? <Image src={"/icons/angle-left.svg"} alt={''} width={18} height={18}
                        className='text-secondary-400' /> :
                        <Image src={"/icons/angle-right.svg"} alt={''} width={18} height={18} />}
                </Button>
            </div>
            <div className="flex justify-start items-center w-4/5 pt-3 px-2">
                <div className=''>
                    <Button
                        variant="icon"
                        className={`overflow-hidden transition-all ${expanded ? "w-auto" : "hidden"}`}
                    >
                        <Image src="/icons/bell.svg" alt="Notifications" width={18} height={18} />
                    </Button>
                    <Button
                        variant="icon"
                        className={`overflow-hidden transition-all ${expanded ? "w-auto" : "hidden"}`}
                    >
                        <Image src="/icons/settings-sliders.svg" alt="Settings" width={18} height={18} />
                    </Button>
                </div>

            </div>
            {/*Content*/}
            <SidebarContext.Provider value={{ expanded }}>
                <ul className={`flex-1 px-3  ${expanded ? "w-4/5" : ""}`}>{children}</ul>
            </SidebarContext.Provider>
            {/*Footer*/}
            <div className="flex p-3">
                <div
                    className={`flex flex-col items-start overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}
                >
                    <Button variant='icon' className='opacity-60'>
                        <Image src="/icons/interrogation.svg" alt="Add" width={18} height={18} className='mr-4' />
                        <p className='text-[#ef4444]'>
                            Help
                        </p>
                    </Button>
                    <Button variant='icon' className='opacity-60'>
                        <Image src="/icons/sign-out.svg" alt="Add" width={18} height={18} className='mr-4' />
                        <p className='text-[#ef4444]'>
                            Sign Out
                        </p>
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export function SidebarItem({ icon, text, active, alert, url }) {
    const { expanded } = useContext(SidebarContext)

    return (
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-background-200/10 text-text-50/50 hover:bg-background-50 hover:text-text-950" : "hover:bg-background-50 hover:text-text-950 text-text-50/50"}`}>
            {icon}
            <Link
                href={url}
                className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
                {text}
            </Link>
            {alert && (<div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`} />)}
            {!expanded && (<div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-background-200 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}> {text} </div>)}
        </li>
    )
}