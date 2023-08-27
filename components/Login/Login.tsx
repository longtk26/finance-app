"use client";

import { useState } from "react";
import { PasswordSVGClose, PasswordSVGOpen } from "@/SVGs";
import Link from "next/link";
import { Button } from "..";
import { onSignInAccount } from "@/utils/serverActions";
import { checkEmailValid, checkPasswordValid } from "@/utils";

const Login = () => {
    const [displayPass, setDisplayPass] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let userTypeEmail = !!email;
    let userTypePassword = !!password;

    const emailValid = checkEmailValid(email);
    const passwordValid = checkPasswordValid(password);

    const onSignIn = async (formData: FormData) => {
        const res = await onSignInAccount(formData);

        if (res) {
            alert(res.message);
        }
    };

    return (
        <section>
            <span className="text-[16px] hidden text-[#707070] mb-6 md:block">
                Using Money Lover account
            </span>
            <form
                className="relative seperate mb-6"
                action={emailValid && passwordValid ? onSignIn : () => {}}
            >
                <input
                    className="input-form mb-6"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email"
                    autoComplete="username"
                />
                {!emailValid && userTypeEmail && (
                    <span className="text-red-500 text-[12px] block ml-1 relative bottom-5">
                        Email is invalid.
                    </span>
                )}
                <div className="relative cursor-pointer">
                    <input
                        className="input-form"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Password"
                        autoComplete="currentPassword"
                    />
                    <div
                        className="absolute right-4 md:right-2 top-[50%] translate-y-[-50%]"
                        onClick={() => setDisplayPass((pre) => !pre)}
                    >
                        {displayPass ? (
                            <PasswordSVGOpen />
                        ) : (
                            <PasswordSVGClose />
                        )}
                    </div>
                </div>
                {!passwordValid && userTypePassword && (
                    <span className="text-red-500 text-[12px] block ml-1">
                        Password must contain at least 6 characters.
                    </span>
                )}
                <Link
                    href="/auth/forgot"
                    className="text-second block text-right mt-2 hover:text-primary cursor-pointer"
                >
                    Forgot Password
                </Link>
                <Button type="login" content="log in" />
            </form>
            <div>
                Don&apos;t have an account ?
                <Link href="/auth/register" className="underline text-second">
                    {" "}
                    Register
                </Link>
            </div>
        </section>
    );
};

export default Login;
