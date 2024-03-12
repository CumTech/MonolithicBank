'use client';
import Sidebar, {SidebarItem} from "@/components/SideBarHome";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="flex h-svh">
            <div className='my-10'>
                <Sidebar>
                    <SidebarItem icon={ <Image src="/icons/apps.svg" alt="Dashboard Icon" width={18} height={18} /> } text="Dashboard" url={`/dashboard`} alert={false} active={true} />
                    <SidebarItem icon={ <Image src="/icons/credit-card-gray.svg" alt="Cards Icon" width={18} height={18} /> } text="Cards" url={`/dashboard`} alert={false} />
                    <SidebarItem icon={ <Image src="/icons/transfer.svg" alt="Transfer Icon" width={18} height={18} /> } text="Transfer" url={`/dashboard`} alert={false}  />
                    <SidebarItem icon={ <Image src="/icons/request.svg" alt="Request Icon" width={18} height={18} /> } text="Request" url={`/dashboard`} alert={false}  />
                    <SidebarItem icon={ <Image src="/icons/vault.svg" alt="Investments" width={18} height={18} /> } text="Investments" url={`/dashboard`} alert={false}  />
                </Sidebar>
            </div>
            <div className="flex grow my-10 mr-10">
                <div className="flex items-center justify-center  w-full h-full rounded-[30px] bg-background-50/10">
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                </div>
            </div>
        </div>
    )
}