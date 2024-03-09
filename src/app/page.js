import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen">
            <section className="flex flex-col h-max border-4">
                <h1 className="text-text-50 text-[192px] font-bold text-center">
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
            <section className="flex flex-row border-4 my-[500px]">
                <div className="basis-1/3 items-center justify-center flex border-2 border-amber-200">
                    <h2 className="text-text-50 text-5xl font-normal leading-8">
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
                        <h3 className="text-text-50 text-xl font-normal leading-7">
                            Advanced Credit Card Management
                        </h3>
                        <p>
                            Experience seamless control over your credit cards with our intuitive platform. Easily access detailed information on transactions, balances, and credit limits all in one place.
                        </p>
                    </div>
                    <div>
                        <Image src="/icons/credit-card.svg" alt="Credit Card" width={48} height={48}/>
                        <h3 className="text-text-50 text-xl font-normal leading-7">
                            Integrated Educational Experience
                        </h3>
                        <p>
                            Empower yourself with financial knowledge through our integrated educational experience. Access interactive resources and personalized financial tips to make informed decisions and optimize your credit card usage.
                        </p>
                    </div>
                    <div>
                        <Image src="/icons/credit-card.svg" alt="Credit Card" width={48} height={48}/>
                        <h3 className="text-text-50 text-xl font-normal leading-7">
                            Advanced Features for Simplified Management
                        </h3>
                        <p>
                            Benefit from cutting-edge features designed to make credit card management easier than ever. From payment reminders to personalized alerts, our platform leverages state-of-the-art technology to simplify your experience and enhance your financial well-being.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
