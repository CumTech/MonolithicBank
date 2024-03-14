import React from 'react'

export const CardHome = ( {name} ) => {
    return (
        <div
            className="w-[450px] h-[290px] z-10 left-40 -top-[5vh] relative rotate-[-76.81deg] bg-background-50 bg-opacity-10 rounded-[40px] shadow-lg shadow-background-950 border-l-4 border-b-4 border-background-50 border-opacity-30 backdrop-blur-[5px]">
            <span className="w-[328.03px] h-[68.89px] left-[59.27px] top-[201.67px] absolute text-slate-100 text-2xl font-medium">
                {name}
            </span>
            <span className="w-[279.89px] h-[68.89px] left-[57.48px] top-[141.55px] absolute text-slate-100 text-2xl font-medium">
                **** **** **** ****
            </span>
        </div>
    )
}
