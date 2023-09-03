"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { registerAccount, signInAccount } from ".";

// Helpers for Form submission -- Server actions
export const onCreateAccount = async (formData: FormData) => {
    const infoRegister = {
        email: formData.get("email"),
        password: formData.get("password"),
    };

    const data = await registerAccount(infoRegister);

    if (data?.token) {
        cookies().set("token", data?.token);

        redirect("/");
    } else {
        return data;
    }
};

export const onSignInAccount = async (formData: FormData) => {
    const infoSignIn = {
        email: formData.get("email"),
        password: formData.get("password"),
    };

    const data = await signInAccount(infoSignIn);

    if (data?.token) {
        cookies().set("token", data?.token);

        redirect("/");
    } else {
        return data;
    }
};

// Cookies
export const checkUserLogin = async () => {
    const token = await getCookie("token");
    const oauth = await getCookie("connect.sid");

    return !!token || !!oauth;
};

export const getCookie = async (name: string) => {
    return cookies().get(name)?.value ?? "";
};
