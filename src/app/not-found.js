import Link from 'next/link';
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="basis-1/3 relative text-center">
              <div className="flex basis-1/3 justify-center items-center gap-2.5">
                <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
                <h1 className="text-[40px] bg-clip-text text-transparent bg-gradient-to-tl from-primary-200 to-text-50 ">
                    Blosthex
                </h1>
            </div>
             <Image className='mt-6' src="/images/dolar.svg" alt="Not Found" width={10000} height={600} />
            <h2 className="text-center text-5xl leading-9 mb-8">PAGE NOT FOUND</h2>
            <Link className="place-content-center text-sm leading-9 hover:leading-loose text-stone-400	" href="/">HOME PAGE</Link>
        </div>
    )
}