import Form from "@/components/Form/Form";

const AuthLogin = () => {
    return (
        <div className="w-full h-[100vh] relative bg-[#ebebeb]">
            <div className="w-full h-[42%] bg-primary"></div>
            <main className="w-full fixed left-0 top-[30%] flex">
                <Form type="login" title="log in" />
            </main>
        </div>
    );
};

export default AuthLogin;
