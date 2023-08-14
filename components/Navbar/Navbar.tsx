"use client";

import { useState } from "react";
import { BudgetIcon, MenuIcon, ReportIcon, TransactionIcon } from "@/SVGs";
import Link from "next/link";

const Navbar = () => {
    const [active, setActive] = useState(0);

    return (
        <nav className="bg-white w-[80px] fixed left-0 top-0 bottom-0 shadow-nav">
            <div className="w-full flex flex-col items-center py-5 hover:bg-hover cursor-pointer">
                <MenuIcon width={24} height={24} />
            </div>

            <ul className="w-full">
                {navItems.map((item) => (
                    <li
                        key={item.id}
                        className={`w-full
                        ${
                            active === item.id
                                ? "text-icon"
                                : "hover:bg-hover text-[#bdbdbd]"
                        }`}
                        onClick={() => setActive(item.id)}
                    >
                        <Link
                            href={`${item.seg}`}
                            className="w-full py-4 cursor-pointer flex-col-center"
                        >
                            {
                                <item.icon
                                    width={24}
                                    height={24}
                                    fill={`${
                                        active === item.id
                                            ? "#2db84c"
                                            : "#bdbdbd"
                                    }`}
                                    className="mb-2"
                                />
                            }
                            <span className="text-[12px] capitalize">
                                {item.text}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const navItems = [
    {
        id: 1,
        icon: TransactionIcon,
        text: "transactions",
        seg: "/",
    },
    {
        id: 2,
        icon: ReportIcon,
        text: "report",
        seg: "/report",
    },
    {
        id: 3,
        icon: BudgetIcon,
        text: "budget",
        seg: "/budget",
    },
];

export default Navbar;
