import Image from "next/image";
import { TransactionProps } from "./Transaction.type";

const Transaction = () => {
    const total = listFoods.reduce((acc, item) => {
        if (item.income) {
            acc += Number(item.price);
        } else {
            acc -= Number(item.price);
        }

        return acc;
    }, 0);

    return (
        <section className="bg-white mt-8 relative -z-30">
            <div className="flex h-[57px] border-b border-b-[#e4e4e4] px-4 items-center justify-between sticky top-[122px] z-30 bg-white">
                <div className="flex items-center">
                    <span className="text-[34px]">{time.day}</span>
                    <div className="ml-4 flex flex-col text-[12px]">
                        <span className="capitalize text-nav font-bold">
                            {time.weekDay}
                        </span>
                        <span className="capitalize text-nav">
                            {time.month + " " + time.year}
                        </span>
                    </div>
                </div>
                <span className="text-[14px] font-medium">{total}</span>
            </div>
            <ul>
                {listFoods.map((food) => (
                    <li
                        key={food.id}
                        className="flex items-center justify-between px-4 py-4 
                        cursor-pointer hover:bg-third transition-colors duration-300"
                    >
                        <div className="flex items-center">
                            <div className="relative">
                                <Image
                                    width={40}
                                    height={40}
                                    src="/categories/an_uong.png"
                                    alt={food.type}
                                />
                                <div className="w-4 h-4 rounded-[50%] bg-white absolute -bottom-1 right-0 flex">
                                    <Image
                                        width={16}
                                        height={16}
                                        src="/categories/wallet_icon.png"
                                        alt={food.type}
                                        className="m-auto"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col ml-4">
                                <span className="text-[14px] font-medium">
                                    {food.type}
                                </span>
                                <span className="text-[12px] text-nav">
                                    {food.note}
                                </span>
                            </div>
                        </div>
                        <span
                            className={`text-[14px] ${
                                food.income ? "text-blue-500" : "text-red-500"
                            }`}
                        >
                            {food.price}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

const time = {
    day: "17",
    weekDay: "thursday",
    month: "august",
    year: "2023",
};

const listFoods = [
    {
        id: 1,
        type: "Ăn uống",
        note: "Tối: dưa hấu",
        price: 10000,
        income: false,
    },
    {
        id: 2,
        type: "Di chuyển",
        note: "Đổ xăng",
        price: 50000,
        income: false,
    },
    {
        id: 3,
        type: "Hóa đơn tiện ích khác",
        note: "Hóa đơn điện nước",
        price: 38000,
        income: false,
    },
    {
        id: 4,
        type: "Ăn uống",
        note: "Sáng: bánh mì",
        price: 10000,
        income: false,
    },
    {
        id: 5,
        type: "Ăn uống",
        note: "Trưa: cơm ếch",
        price: 30000,
        income: false,
    },
];

export default Transaction;
