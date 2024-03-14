'use client';
import SignUpForm from "@/components/forms/SignUpForm";
import Image from "next/image";


export default function SignUp() {
    return (
        <main className="flex flex-col items-center justify-center h-svh p-5">
            <h2 className="text-[32px] leading-[48px] mb-auto">
                Blosthex
            </h2>
            <div className="flex items-center px-40 gap-32 mb-auto">
                <SignUpForm />
                <div className="flex flex-col w-2/5 items-center">
                    <Image src="/images/bank.svg" alt="Bank image" width={262} height={200} />
                    <h1 className="text-center text-6xl font-bold leading-[96px]">
                        You are joining the new
                    </h1>
                    <h1 className="text-center text-primary-default text-8xl">
                        ERA
                    </h1>
                </div>
            </div>
        </main>
    );
}