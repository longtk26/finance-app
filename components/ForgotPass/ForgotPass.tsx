import Link from "next/link";
import { Button } from "..";

const ForgotPass = () => {
    return (
        <section className="flex flex-col justify-center items-center">
            <p className="mb-8 max-w-[450px] text-center -mt-4">
                Enter the email address you used to register, and we will send
                you an email to recover your password in no time.
            </p>
            <form className="flex flex-col">
                <input
                    className="input-form mb-4"
                    type="email"
                    required
                    placeholder="Email"
                    autoComplete="username"
                />
                <Button type="confirm" content="confirm" />
            </form>
            <div>
                <Link href="/auth/login" className="text-second">
                    Back to Login{" "}
                </Link>
                or
                <Link href="/auth/register" className="text-second">
                    {" "}
                    Create an account
                </Link>
            </div>
        </section>
    );
};

export default ForgotPass;
