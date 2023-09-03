"use client";

import { useState, useEffect } from "react";
import {
    AccountIcon,
    ArrowLeftIcon,
    CategoryIcon,
    TransactionIcon,
} from "@/SVGs";
import { fetchUser } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const Account = () => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        fetchUser().then((data) => setUser(data?.user));
    }, []);

    console.log(user);

    return (
        <aside
            className="absolute left-0 top-0 bottom-0 w-[364px] bg-white"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex flex-col items-center py-8 border-b border-b-[#ccc]">
                {user?.provider ? (
                    <Image
                        src={user?.image}
                        width={64}
                        height={64}
                        className="rounded-[50%]"
                        alt="logo_account"
                    />
                ) : (
                    <div className="w-16 h-16 bg-yellow-300 rounded-[50%] flex">
                        <span className="m-auto text-white text-[28px] font-bold uppercase">
                            {user?.email.slice(0, 1)}
                        </span>
                    </div>
                )}
                <div className="flex flex-col items-center mt-6">
                    <span className="text-[16px] capitalize">
                        {user?.email.replace("@gmail.com", "")}
                    </span>
                    <span className="text-[12px] text-nav">{user?.email}</span>
                </div>
            </div>
            <section>
                {listMenu.map((menu) => (
                    <menu.wrapper
                        key={menu.id}
                        href={menu.href}
                        className="flex items-center cursor-pointer hover:bg-third transition-color duration-300"
                    >
                        <div className="px-[28px]">
                            <menu.icon />
                        </div>
                        <div className="flex items-center justify-between w-full border-b border-b-[#ccc] py-4 pr-[12px]">
                            <span className="capitalize text-[14px]">
                                {menu.title}
                            </span>
                            <ArrowLeftIcon width={20} height={20} />
                        </div>
                    </menu.wrapper>
                ))}
            </section>
        </aside>
    );
};

const listMenu = [
    {
        id: 1,
        title: "my account",
        wrapper: "div",
        href: "/",
        icon: AccountIcon,
    },
    {
        id: 2,
        title: "my wallets",
        wrapper: Link,
        href: "/my-wallets",
        icon: TransactionIcon,
    },
    {
        id: 3,
        title: "categories",
        wrapper: Link,
        href: "/categories",
        icon: CategoryIcon,
    },
];

export default Account;
