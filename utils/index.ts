import { BASE_URL } from "@/constants";
import { getCookie } from "./serverActions";

// Authentication
export const loginGoogle = () => {
    window.open(
        `${BASE_URL}/auth/google`,
        "_parent",
        "width=200, height=200, left=30, right=30, top=30, bottom=30"
    );
};

// Fetch data
export const fetchUser = async () => {
    try {
        const token = await getCookie("token");
        const res = await fetch(`${BASE_URL}/auth/login/success`, {
            credentials: "include",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await res.json();

        return data;
    } catch (error) {
        console.log("Failed to fetch user: ", error);
    }
};

export const registerAccount = async (info: {
    email: FormDataEntryValue | null;
    password: FormDataEntryValue | null;
}) => {
    try {
        const res = await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(info),
            cache: "no-cache",
        });

        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const signInAccount = async (info: {
    email: FormDataEntryValue | null;
    password: FormDataEntryValue | null;
}) => {
    try {
        const res = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(info),
            cache: "no-cache",
        });

        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};

// Form check
export const checkEmailValid = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return regex.test(email);
};

export const checkPasswordValid = (password: string) => {
    const regex = /^.{6,}$/;

    return regex.test(password);
};
