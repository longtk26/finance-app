import Image from "next/image";
import { HeaderProps } from "./Header.type";
import { CalendarIcon, MenuIcon, SearchIcon, ViewIcon } from "@/SVGs";
import { Button } from "..";

const Header = ({ page }: HeaderProps) => {
    return (
        <header className="fixed top-0 left-0 right-0 h-[64px] bg-white -z-[2] shadow-head">
            <div className="absolute w-full h-full z-10 flex items-center justify-between px-[20px]">
                <div className="lg:ml-[90px] flex items-center cursor-pointer gap-4">
                    <div className="flex h-full lg:hidden flex-col items-center py-2 px-2 hover:bg-hover cursor-pointer">
                        <MenuIcon width={24} height={24} />
                    </div>
                    <div className="flex items-center">
                        <Image
                            src="/global_img.png"
                            priority={true}
                            width={40}
                            height={40}
                            alt="total_img"
                            className="mr-2"
                        />
                        <div className="flex flex-col">
                            <span className="relative text-[12px] header-total block">
                                Total
                            </span>
                            <span className="text-[14px] font-bold">
                                -17,504,000
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2 md:gap-6">
                    <button className="group hidden md:block">
                        <CalendarIcon className="group-hover:fill-black fill-[#757575]" />
                    </button>
                    <button className="group hidden md:block">
                        <ViewIcon className="group-hover:fill-black fill-[#757575]" />
                    </button>
                    <button className="group">
                        <SearchIcon className="group-hover:fill-black fill-[#757575]" />
                    </button>
                    <div className="hidden md:block">
                        <Button
                            type="addTransaction"
                            content="add transaction"
                        />
                    </div>
                    <div className="md:hidden">
                        <Button type="addTransactionMobile" content="+" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
