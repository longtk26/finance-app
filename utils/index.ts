import { BASE_URL } from "@/constants";

// Authentication
export const loginGoogle = () => {
    window.open(
        `${BASE_URL}/auth/google`,
        "_parent",
        "width=200, height=200, left=30, right=30, top=30, bottom=30"
    );
};

// Fetch data
export const fetchUserOauth = async () => {
    try {
        const res = await fetch(`${BASE_URL}/auth/login/success`, {
            credentials: "include",
        });

        const data = await res.json();

        console.log(data);

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
