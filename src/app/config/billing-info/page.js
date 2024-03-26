import SidebarConfig, { SidebarItemConfig } from "@/components/SideBarConfig";
import Image from "next/image"
import { Switch } from "@/components/ui/switch"
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
                    <SidebarItemConfig icon={ <Image src="/icons/credit-card-config.svg" alt="Credit Car Config Icon" width={18} height={18} /> } text="Billing" url={`/config/billing-info`} active={true} />
                </SidebarConfig>
            </div>
            <div className="flex grow my-10 mr-10">
                <div className="flex items-center justify-center  w-full h-full rounded-[30px] bg-background-50/10">
                    <h1 className="text-2xl font-semibold">
                    <AlertDialog>
                                <AlertDialogTrigger className="w-full h-full my-0 top-0 left-0">open</AlertDialogTrigger>
                                <AlertDialogContent className="bg-black border-0">
                                    <AlertDialogHeader>
                                    <AlertDialogTitle className=" h-[80px] text-center text-slate-100 text-xl font-normal font-['Kode Mono'] leading-8 justify-center self-center">
                                            Preferences
                                            <AlertDialogCancel className="w-5 h-5 px-0 py-0 rounded-full border-transparent absolute top-4 right-4"><Image src="/icons/Icon.svg" alt="Image about closed session is like an x" className="absolute" width={16} height={16}/></AlertDialogCancel>
                                            </AlertDialogTitle>
                                        <AlertDialogDescription className="text-zinc-400 text-[22.67px] font-semibold font-['Kode Mono'] leading-[34px] tracking-tight">
                                            <Switch className="data-[state=checked]:bg-primary-default" /> Desactivate Card
                                        </AlertDialogDescription >
                                        <AlertDialogDescription className="text-zinc-400 text-[22.67px] font-semibold font-['Kode Mono'] leading-[34px] tracking-tight">
                                            <Switch className="data-[state=checked]:bg-primary-default"/> Get transaction notifications
                                        </AlertDialogDescription>
                                        <AlertDialogDescription className="text-zinc-400 text-[22.67px] font-semibold font-['Kode Mono'] leading-[34px] tracking-tight">
                                            <Switch className="data-[state=checked]:bg-primary-default"/> Protect against scams
                                        </AlertDialogDescription>
                                        <AlertDialogDescription className="text-zinc-400 text-[22.67px] font-semibold font-['Kode Mono'] leading-[34px] tracking-tight">
                                            <Switch className="data-[state=checked]:bg-primary-default"/> Spend limit
                                        </AlertDialogDescription>
                                        <AlertDialogDescription className="text-zinc-400 text-[22.67px] font-semibold font-['Kode Mono'] leading-[34px] tracking-tight">
                                            <Switch className="data-[state=checked]:bg-primary-default"/> Ask before buying online
                                        </AlertDialogDescription>
                                        <AlertDialogDescription className="text-zinc-400 text-[22.67px] font-semibold font-['Kode Mono'] leading-[34px] tracking-tight">
                                            <Switch className="data-[state=checked]:bg-primary-default"/> Get latest offers
                                        </AlertDialogDescription>
                                        <AlertDialogDescription className="text-zinc-400 text-[22.67px] font-semibold font-['Kode Mono'] leading-[34px] tracking-tight">
                                            <Switch className="data-[state=checked]:bg-primary-default"/> Silent mode
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                </AlertDialogContent>
                            </AlertDialog>
                    </h1>
                </div>
            </div>
        </div>
    )
}