export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full h-[100vh] relative bg-[#ebebeb]">
            <div className="w-full h-[42%] bg-primary"></div>
            <main className="w-full fixed left-0 top-[28%] flex">
                {children}
            </main>
        </div>
    );
}
