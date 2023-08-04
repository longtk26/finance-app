import "./globals.css";
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
            <body className="min-h-[100vh]">{children}</body>
        </html>
    );
}
