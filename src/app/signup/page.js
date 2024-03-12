'use client';
import SignUpForm from "@/components/forms/SignUpForm";
import Image from "next/image";
import { Button } from '@/components/ui/button';
import Link from "next/link";


export default function SignUp() {
    return (
        <main className="flex flex-col items-center justify-center h-svh p-5">
            <Button asChild variant="link" className="mb-auto">
                <Link href="/">
                    <p className="text-[32px] leading-[48px]">
                        BLosthex
                    </p>
                </Link>
            </Button>
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