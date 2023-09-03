import { useState, useEffect } from "react";

const useAnimate = () => {
    const [active, setActive] = useState("this month");
    const [animate, setAnimate] = useState({
        position: "",
        width: "",
    });

    const handleClick = (
        e: React.MouseEvent<Element, MouseEvent>,
        time: string
    ) => {
        const target = e.target as HTMLElement;
        const width = target.clientWidth.toString();
        const position = target.offsetLeft.toString();

        setAnimate({
            position,
            width,
        });

        setActive(time);
    };

    useEffect(() => {
        setAnimate({
            position: document
                .getElementById("this month")
                ?.offsetLeft.toString()!,
            width: document
                .getElementById("this month")
                ?.clientWidth.toString()!,
        });
    }, []);

    return { animate, active, handleClick };
};

export default useAnimate;
