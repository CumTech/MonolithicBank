// noinspection JSValidateTypes


import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import webflow from "../../public/icons/webflow.svg";
import arc from "../../public/icons/arc.svg";
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
import NavBarHome from "@/components/NavBarHome";
import {CardHome} from "@/components/CardHome";

const Companies = [
    {
        name: 'Webflow',
        url: 'https://webflow.com',
        logo: webflow,
    },
    {
        name: 'Arc Browser',
        url: 'https://arc.net/',
        logo: arc,
    },
    {
        name: 'ConverKit',
        url: 'https://convertkit.com/',
        logo: conver,
        width: 'w-4/5',
    },
    {
        name: 'Descript',
        url: 'https://descript.com',
        logo: descript,
    },
    {
        name: 'Hex',
        url: 'https://revolut.com',
        logo: revolute,
    },
    {
        name: 'Mercury',
        url: 'https://mercury.com',
        logo: mercury,
        width: 'w-4/5',
    },
    {
        name: 'Ramp',
        url: 'https://ramp.com',
        logo: ramp,
    },
    {
        name: 'Raycast',
        url: 'https://raycast.com',
        logo: raycast,
    },
    {
        name: 'Remote',
        url: 'https://remote.com',
        logo: remote,
    },
    {
        name: 'Retool',
        url: 'https://retool.com',
        logo: retool,
    },
    {
        name: 'Runway',
        url: 'https://runway.com',
        logo: runway,
    },
    {
        name: 'Vercel',
        url: 'https://vercel.com',
        logo: vercel,

    }
]

export default function Home() {
    return (
        <main className="min-h-screen">
            <NavBarHome />
            <section className="flex flex-col h-max">
                <h1 className="text-[192px] font-bold text-center">
                    NEW ERA OF
                </h1>
                <h1 className="text-primary-default text-[192px] font-bold text-center">
                    BANKING
                </h1>
                <div className="relative flex justify-center">
                    <CardHome name="Luis Alferez" />
                    <div
                        className="w-[450px] h-[290px] top-[15vh] -left-40 relative rotate-[-76.81deg] bg-background-50 bg-opacity-10 rounded-[40px] shadow-lg shadow-background-950 border-l-4 border-b-4 border-background-50 border-opacity-30">
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
                        className="w-[450px] h-[290px] top-[5vh] absolute rotate-[-76.81deg] bg-background-50 bg-opacity-10 rounded-[40px] shadow-lg shadow-background-950 border-l-4 border-b-4 border-background-50 border-opacity-30 backdrop-blur-[5px]">
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
            <section className="flex flex-row mt-[500px] px-10">
                <div className="basis-1/3 items-center justify-center flex">
                    <h2 className="text-5xl font-normal leading-8">
                        The platform aimed to provide users with a seamless and educational experience, integrating
                        advanced features to simplify credit card management
                    </h2>
                </div>
                <div className="basis-1/3 relative">
                    <Image src="/images/card.svg" alt="Cards" width={600} height={600} />
                    <div className="absolute top-[45vh] left-[35vh]">
                        <Button variant="card" size="lg" asChild>
                            <Link href="/login" className="flex gap-3">
                                Start Now
                                <Image src="/icons/open.svg" alt="Arrow Right" width={18} height={18} />
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="basis-1/3 grid gap-16">
                    <div>
                        <Image src="/icons/credit-card.svg" alt="Credit Card" width={48} height={48} />
                        <h3 className="text-xl font-normal leading-7">
                            Advanced Credit Card Management
                        </h3>
                        <p>
                            Experience seamless control over your credit cards with our intuitive platform. Easily access detailed information on transactions, balances, and credit limits all in one place.
                        </p>
                    </div>
                    <div>
                        <Image src="/icons/credit-card.svg" alt="Credit Card" width={48} height={48} />
                        <h3 className="text-xl font-normal leading-7">
                            Integrated Educational Experience
                        </h3>
                        <p>
                            Empower yourself with financial knowledge through our integrated educational experience. Access interactive resources and personalized financial tips to make informed decisions and optimize your credit card usage.
                        </p>
                    </div>
                    <div>
                        <Image src="/icons/credit-card.svg" alt="Credit Card" width={48} height={48} />
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
                    {Companies.map((company, index) => (
                        <Link key={index} title={company.name} href={company.url} className="flex h-14 w-44 items-center justify-center">
                            <Image src={company?.logo} alt={`${company.name} Logo`} className={`h-auto ${company.width ? company.width : 'w-2/3' } hover:scale-125`} />
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
