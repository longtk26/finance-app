"use client";

import useAnimate from "@/hooks/useAnimate";

const MoneyTracking = () => {
    const { animate, active, handleClick } = useAnimate();

    return (
        <>
            <nav className="w-full md:px-20 rounded-tl rounded-tr bg-white h-[80px] border-b border-b-[#e4e4e4] sticky top-[44px] -z-20">
                <ul className="w-full h-full flex items-end relative">
                    {listDays.map((item) => (
                        <li
                            key={item.time}
                            className="py-4 px-6 text-[12px]  md:text-[14px] text-nav uppercase cursor-pointer font-medium"
                            style={{
                                color: active === item.time ? "#00bc2a" : "",
                            }}
                            onClick={(e) => handleClick(e, item.time)}
                            id={item.time}
                        >
                            {item.time}
                        </li>
                    ))}
                    <div
                        className={`absolute transition-all duration-300 bottom-0 h-[2px] bg-second`}
                        style={{
                            width: `${animate.width}px`,
                            left: `${animate.position}px`,
                        }}
                    ></div>
                </ul>
            </nav>
            <section className="w-full pb-4 pt-2 bg-white relative -z-30">
                <div className="px-4 w-full mt-4">
                    <div className="flex items-center justify-between mb-4 text-[14px]">
                        <span>Inflow</span>
                        <span className="text-blue-400">0</span>
                    </div>
                    <div className="flex items-center justify-between text-[14px]">
                        <span>Outflow</span>
                        <span className="text-red-500">-1,234,324</span>
                    </div>
                    <div className="w-full text-right pt-2">
                        <span
                            className="inline-block relative mt-1
                    after:absolute after:w-[110%] after:h-[1px] after:bg-[#e4e4e4]
                    after:right-0 after:-top-1"
                        >
                            -1,234,324
                        </span>
                    </div>
                </div>
                <button className="uppercase text-second text-center w-full mt-4 text-[14px] font-medium">
                    view report for this period
                </button>
            </section>
        </>
    );
};

const listDays = [
    // {
    //     time: "01/06/2023-30/06/2023",
    // },
    {
        time: "last month",
    },
    {
        time: "this month",
    },
    {
        time: "future",
    },
];

export default MoneyTracking;
