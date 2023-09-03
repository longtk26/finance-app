"use client";

import { useState } from "react";

const usePopUp = () => {
    const [isOpen, setIsOpen] = useState(false);

    const popUp = {
        isOpen: isOpen,
        open() {
            setIsOpen(true);
        },
        close() {
            setIsOpen(false);
        },
    };

    return popUp;
};

export default usePopUp;
