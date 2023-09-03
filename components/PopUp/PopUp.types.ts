import { ReactNode } from "react";

export type PopUpProps = {
    isOpen: boolean;
    close?: () => void;
    children: ReactNode;
};
