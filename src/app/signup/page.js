'use client';
import Image from "next/image";


export default function SignUp() {
    return (
        <main className="flexs h-screen items-center border-2 border-primary-200 px-40 flex-grow gap-32">
            <div className="w-3/5 border-2 border-red-500">
            </div>
            <div className="flex flex-col w-2/5 items-center border-2 border-accent-400">
                <Image src="/images/bank.svg" alt="Bank image" width={262} height={200}/>
                <h1 className="text-center text-6xl font-bold leading-[96px]">
                    You are joining the new
                </h1>
                <h1 className="text-center text-primary-default text-8xl leading-[144px]">
                    ERA
                </h1>
            </div>
        </main>
    );
}