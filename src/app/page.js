// noinspection JSValidateTypes

import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import adobe from "../../public/icons/Adobe.svg";
import arc from "../../public/icons/Arc.svg";
import conver from "../../public/icons/conver.svg";
import descript from "../../public/icons/descript.svg";
import revolute from "../../public/icons/revolut.svg";
import mercury from "../../public/icons/mercury.svg";
import ramp from "../../public/icons/ramp.svg";
import raycast from "../../public/icons/raycast.svg";
import remote from "../../public/icons/remote.svg";
import retool from "../../public/icons/retool.svg";
import runway from "../../public/icons/runway.svg";
import vercel from "../../public/icons/vercel.svg";

export default function Home() {
    return (
        <main className="min-h-screen">
            <section className="flex flex-col h-max">
                <h1 className="text-[192px] font-bold text-center">
                    NEW ERA OF
                </h1>
                <h1 className="text-primary-default text-[192px] font-bold text-center">
                    BANKING
                </h1>
                <div className="relative flex justify-center">
                    <div
                        className="w-[450px] h-[290px] z-10 left-40 -top-6 relative rotate-[-76.81deg] bg-background-50 bg-opacity-10 rounded-[40px] shadow-lg shadow-background-950 border-l-4 border-b-4 border-background-50 border-opacity-30 backdrop-blur-[5px]">
                        <span
                            className="w-[328.03px] h-[68.89px] left-[59.27px] top-[201.67px] absolute text-slate-100 text-2xl font-medium">Luis
                            Alferez
                        </span>
                        <span
                            className="w-[279.89px] h-[68.89px] left-[57.48px] top-[141.55px] absolute text-slate-100 text-2xl font-medium">****
                            **** **** ****
                        </span>
                    </div>
                    <div
                        className="w-[450px] h-[290px] top-[20vh] -left-40 relative rotate-[-76.81deg] bg-background-50 bg-opacity-10 rounded-[40px] shadow-lg shadow-background-950 border-l-4 border-b-4 border-background-50 border-opacity-30">
                        <span
                            className="w-[328.03px] h-[68.89px] left-[59.27px] top-[201.67px] absolute text-slate-100 text-2xl font-medium">Yamile
                            Robledo
                        </span>
                        <span
                            className="w-[279.89px] h-[68.89px] left-[57.48px] top-[141.55px] absolute text-slate-100 text-2xl font-medium">****
                            **** **** ****
                        </span>
                    </div>
                    <div
                        className="w-[450px] h-[290px] top-[10vh] absolute rotate-[-76.81deg] bg-background-50 bg-opacity-10 rounded-[40px] shadow-lg shadow-background-950 border-l-4 border-b-4 border-background-50 border-opacity-30 backdrop-blur-[5px]">
                        <span
                            className="w-[328.03px] h-[68.89px] left-[59.27px] top-[201.67px] relative text-slate-100 text-2xl font-medium">David
                            Martínez
                        </span>
                        <span
                            className="w-[279.89px] h-[68.89px] left-[57.48px] top-[141.55px] absolute text-slate-100 text-2xl font-medium">****
                            **** **** ****
                        </span>
                    </div>
                </div>
            </section>
            <section className="flex flex-row mt-[500px]">
                <div className="basis-1/3 items-center justify-center flex">
                    <h2 className="text-5xl font-normal leading-8">
                        The platform aimed to provide users with a seamless and educational experience, integrating
                        advanced features to simplify credit card management
                    </h2>
                </div>
                <div className="basis-1/3 relative">
                    <Image src="/images/card.svg" alt="Cards" layout="fill" objectFit="cover"/>
                    <div className="absolute top-[45vh] left-[35vh]">
                        <Button variant="card" size="lg" asChild>
                            <Link href="/login" className="flex gap-3">
                                Start Now
                                <Image src="/icons/open.svg" alt="Arrow Right" width={18} height={18}/>
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="basis-1/3 grid gap-16">
                    <div>
                        <Image src="/icons/credit-card.svg" alt="Credit Card" width={48} height={48}/>
                        <h3 className="text-xl font-normal leading-7">
                            Advanced Credit Card Management
                        </h3>
                        <p>
                            Experience seamless control over your credit cards with our intuitive platform. Easily access detailed information on transactions, balances, and credit limits all in one place.
                        </p>
                    </div>
                    <div>
                        <Image src="/icons/credit-card.svg" alt="Credit Card" width={48} height={48}/>
                        <h3 className="text-xl font-normal leading-7">
                            Integrated Educational Experience
                        </h3>
                        <p>
                            Empower yourself with financial knowledge through our integrated educational experience. Access interactive resources and personalized financial tips to make informed decisions and optimize your credit card usage.
                        </p>
                    </div>
                    <div>
                        <Image src="/icons/credit-card.svg" alt="Credit Card" width={48} height={48}/>
                        <h3 className="text-xl font-normal leading-7">
                            Advanced Features for Simplified Management
                        </h3>
                        <p>
                            Benefit from cutting-edge features designed to make credit card management easier than ever. From payment reminders to personalized alerts, our platform leverages state-of-the-art technology to simplify your experience and enhance your financial well-being.
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col my-52">
                <h2 className="text-center text-5xl leading-9">
                    Trusted by 50,000 businesses.
                </h2>
                <h3 className="text-center text-4xl text-zinc-400 leading-7 mt-3">
                    From next-generation startups to fully established companies.
                </h3>
                <div className="grid grid-cols-6 gap-10 mx-72 my-12">
                    <Link title={'Adobe'} href={'https://adobe.com'} className="flex h-14 w-44 items-center justify-center">
                        <Image src={adobe} alt="Adobe Logo" className="h-auto w-2/3 hover:scale-125"/>
                    </Link>
                    <Link title={'Arc Browser'} href={'https://arc.net/'} className="flex h-14 w-44 items-center justify-center">
                        <Image src={arc} alt="Arc Browser Logo" className="h-auto w-2/3 hover:scale-125"/>
                    </Link>
                    <Link title={'ConverKit'} href={'https://convertkit.com/'} className="flex h-14 w-44 items-center justify-center">
                        <Image src={conver} alt="ConverKit Logo" className="h-auto w-4/5 hover:scale-125"/>
                    </Link>
                    <Link title={'Descript'} href={'https://descript.com'} className="flex h-14 w-44 items-center justify-center">
                        <Image src={descript} alt="Descript Logo" className="h-auto w-2/3 hover:scale-125"/>
                    </Link>
                    <Link title={'Hex'} href={'https://revolut.com'} className="flex h-14 w-44 items-center justify-center">
                        <Image src={revolute} alt="Revolute  Logo" className="h-2/3 w-2/3 hover:scale-125"/>
                    </Link>
                    <Link title={'Mercury'} href={'https://mercury.com'} className="flex h-14 w-44 items-center justify-center">
                        <Image src={mercury} alt="Mercury Logo" className="h-auto w-4/5 hover:scale-125"/>
                    </Link>
                    <Link title={'Ramp'} href={'https://ramp.com'} className="flex h-14 w-44 items-center justify-center">
                        <Image src={ramp} alt="Ramp  Logo" className="h-auto w-2/3 hover:scale-125"/>
                    </Link>
                    <Link title={'Raycast'} href={'https://raycast.com'} className="flex h-14 w-44 items-center justify-center">
                        <Image src={raycast} alt="Raycast Logo" className="h-auto w-2/3 hover:scale-125"/>
                    </Link>
                    <Link title={'Remote'} href={'https://remote.com'} className="flex h-14 w-44 items-center justify-center">
                        <Image src={remote} alt="Remote Logo" className="h-auto w-2/3 hover:scale-125"/>
                    </Link>
                    <Link title={'Retool'} href={'https://retool.com'} className="flex h-14 w-44 items-center justify-center">
                        <Image src={retool} alt="Retool Logo" className="h-auto w-2/3 hover:scale-125"/>
                    </Link>
                    <Link title={'Runway'} href={'https://runway.com'} className="flex h-14 w-44 items-center justify-center">
                        <Image src={runway} alt="Runway Logo" className="h-auto w-2/3 hover:scale-125"/>
                    </Link>
                    <Link title={'Vercel'} href={'https://vercel.com'} className="flex h-14 w-44 items-center justify-center">
                        <Image src={vercel} alt="Vercel Logo" className="h-auto w-2/3 hover:scale-125"/>
                    </Link>
                </div>
            </section>
        </main>
    );
}
