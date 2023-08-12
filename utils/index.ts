export const loginGoogle = () => {
    window.open(
        "http://localhost:8080/api/auth/google",
        "_parent",
        "width=200, height=200, left=30, right=30, top=30, bottom=30"
    );
};

export const fetchUser = async () => {
    try {
        const res = await fetch(
            "http://localhost:8080/api/auth/login/success",
            {
                credentials: "include",
            }
        );

        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch user");
    }
};
