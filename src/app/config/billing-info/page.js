import SidebarConfig, { SidebarItemConfig } from "@/components/SideBarConfig";
import Image from "next/image"
import { Switch } from "@/components/ui/switch"
import Link from "next/link";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"


export default function BillingInfo() {
    return (
        <div className="flex h-svh">
            <div className='my-10'>
                <SidebarConfig>
                    <SidebarItemConfig icon={ <Image src="/icons/user.svg" alt="User Icon" width={18} height={18} /> } text="User Info" url={`/config/user-info`}/>
                    <SidebarItemConfig icon={ <Image src="/icons/lock.svg" alt="Password Icon" width={18} height={18} /> } text="Password" url={`/config/password`} />
                    <SidebarItemConfig icon={ <Image src="/icons/info.svg" alt="Information Icon" width={18} height={18} /> } text="Personal Info" url={`/config/address-info`} />
                    <li className="relative flex items-center py-3 px-3 my-0 font-medium rounded-md cursor-pointer transition-colors group hover:bg-background-50 hover:text-text-950 text-text-50/50">
                        <Image src="/icons/credit-card-config.svg" alt="Credit Car Config Icon" width={18} height={18} />
                        <Link
                            href="/config/billing-info"
                            className="overflow-hidden transition-all w-52 ml-3">
                            <AlertDialog>
                                <AlertDialogTrigger className="w-full h-full my-0 top-0 left-0 absolute">Billing</AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction>Continue</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </Link>
                    </li>
                </SidebarConfig>
            </div>
        </div>
    )
}