import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Money Lover V2 Auth",
    description: "Finance app",
};

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="min-h-[100vh] bg-[#e4e4e4] ">
                <div className="w-full h-[100vh] relative bg-[#ebebeb]">
                    <div className="w-full h-[42%] bg-primary"></div>
                    <main className="w-full fixed left-0 top-0 bottom-0 md:bottom-20 md:top-[15%] flex">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
