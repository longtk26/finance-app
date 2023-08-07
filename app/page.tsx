"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const isLogin = false;
    const route = useRouter();

    useEffect(() => {
        if (!isLogin) {
            route.push("/auth/login");
        }
    }, []);

    if (!isLogin) {
        return <h1>You need login</h1>;
    } else {
        return <h1>Home page</h1>;
    }
}
