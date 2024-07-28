import { MouseEventHandler } from "react";

export interface ButtonPropsType {
    type: 'Link' | 'a' | 'tab',
    text: string,
    href?: string,
    className?: string,
    onClick?: MouseEventHandler
}