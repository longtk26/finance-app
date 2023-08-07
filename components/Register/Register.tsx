"use client";

import { useState } from "react";
import { PasswordSVGClose, PasswordSVGOpen } from "@/SVGs";
import Link from "next/link";
import { Button } from "..";

const Register = () => {
    const [displayPass, setDisplayPass] = useState(false);

    return (
        <section>
            <span className="text-[16px] text-[#707070] mb-6 block">
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
                        className="absolute right-2 top-[50%] translate-y-[-50%]"
                        onClick={() => setDisplayPass((pre) => !pre)}
                    >
                        {displayPass ? (
                            <PasswordSVGOpen />
                        ) : (
                            <PasswordSVGClose />
                        )}
                    </div>
                </div>

                <Button type="register" content="register" />
            </form>
            <div>
                Have you an account ?
                <Link href="/auth/login" className="underline text-second">
                    {" "}
                    Sign in
                </Link>
            </div>
        </section>
    );
};

export default Register;
