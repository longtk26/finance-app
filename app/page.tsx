"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchUser } from "@/utils";
import { Header, MoneyTracking, Transaction } from "@/components";

export default function Home() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    const getUser = async () => {
        try {
            const data = await fetchUser();

            if (data.success) {
                setUser(data.user);
            } else {
                router.push("/auth/login");
                setUser(null);
            }
        } catch (error) {
            throw new Error("Failed to get user");
        }
    };

    useEffect(() => {
        // getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (user) {
        return <h1>You need login</h1>;
    } else {
        return (
            <>
                <Header page="home" />
                <MoneyTracking />
                <Transaction />
                <Transaction />
                <Transaction />
            </>
        );
    }
}
