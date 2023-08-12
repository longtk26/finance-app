"use client";

import { useState } from "react";
import { PasswordSVGClose, PasswordSVGOpen } from "@/SVGs";
import Link from "next/link";
import { Button } from "..";

const Login = () => {
    const [displayPass, setDisplayPass] = useState(false);

    return (
        <section>
            <span className="text-[16px] hidden text-[#707070] mb-6 md:block">
                Using Money Lover account
            </span>
            <form className="relative seperate mb-6">
                <input
                    className="input-form mb-6"
                    type="email"
                    required
                    placeholder="Email"
                    autoComplete="username"
                />
                <div className="relative cursor-pointer">
                    <input
                        className="input-form"
                        type="password"
                        required
                        placeholder="Password"
                        autoComplete="currentPassword"
                    />
                    <div
                        className="absolute right-12 md:right-2 top-[50%] translate-y-[-50%]"
                        onClick={() => setDisplayPass((pre) => !pre)}
                    >
                        {displayPass ? (
                            <PasswordSVGOpen />
                        ) : (
                            <PasswordSVGClose />
                        )}
                    </div>
                </div>
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
