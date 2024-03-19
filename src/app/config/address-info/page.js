import SidebarConfig, { SidebarItemConfig } from "@/components/SideBarConfig";
import Image from "next/image"

export default function AddressInfo() {
    return (
        <div className="flex h-svh">
            <div className='my-10'>
                <SidebarConfig>
                    <SidebarItemConfig icon={ <Image src="/icons/user.svg" alt="User Icon" width={18} height={18} /> } text="User Info" url={`/config/user-info`}/>
                    <SidebarItemConfig icon={ <Image src="/icons/lock.svg" alt="Password Icon" width={18} height={18} /> } text="Password" url={`/config/password`} />
                    <SidebarItemConfig icon={ <Image src="/icons/info.svg" alt="Information Icon" width={18} height={18} /> } text="Personal Info" url={`/config/address-info`} active={true} />
                    <SidebarItemConfig icon={ <Image src="/icons/credit-card-config.svg" alt="Credit Card Config Icon" width={18} height={18} /> } text="Billing" url={`/config/billing-info`} />
                </SidebarConfig>
            </div>
            <div className="flex grow my-10 mr-10">
                <div className="flex items-center justify-center  w-full h-full rounded-[30px] bg-background-50/10">
                    <h1 className="text-2xl font-semibold">Config</h1>
                </div>
            </div>
        </div>
    )
}