"use client";

import { useRouter } from "next/navigation";

export default function Home() {
    const isLogin = false;
    const route = useRouter();

    if (!isLogin) {
        route.push("/login");
        return <h1>You need login</h1>;
    } else {
        return <h1>Home page</h1>;
    }
}
