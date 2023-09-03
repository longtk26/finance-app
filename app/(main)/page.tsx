import { redirect } from "next/navigation";
import { checkUserLogin } from "@/utils/serverActions";
import { Header, MoneyTracking, Transaction } from "@/components";

export default async function Home() {
    const isLogin = await checkUserLogin();

    if (!isLogin) {
        redirect("/auth/login");
    }

    if (!isLogin) {
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
