import { Navbar } from "@/components";
import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Money Lover V2",
    description: "Finance app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="min-h-[100vh] bg-[#e4e4e4] relative -z-10 flex justify-center px-4 md:px-0">
                <Navbar />
                <main className="mt-[100px] min-w-[294px] rounded bg-[#f4f4f4] shadow-main relative -z-30">
                    {children}
                </main>
            </body>
        </html>
    );
}
