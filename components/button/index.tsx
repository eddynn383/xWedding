// import sx from "@/styles/component.module.scss"
// import { Url } from "next/dist/shared/lib/router/router";
// import Link from "next/link";
// import { ReactElement } from "react";

// type ButtonProps = {
//     type?: "button" | "submit" | "reset";
//     url?: Url;
//     state?: "default" | "selected";
//     variant: "primary" | "secondary";
//     style?: React.CSSProperties;
//     children: ReactElement | string;
//     onClick?: () => void;
// }

// const Button = ({type="button", url, state = "default", variant, style, children, onClick}: ButtonProps) => {
//     return (
//         <button type={type} className={sx["button"]} data-state={state} data-variant={variant} style={style} onClick={onClick}>
//             {
//                 url && <Link href={url} className={sx["button-inner"]}>{children}</Link>
//             }
//             {
//                 !url && <span className={sx["button-inner"]}>{children}</span>
//             }
//         </button>
//     )
// }

// export default Button  

"use client";

import { Status, Shade, Mode, Size, Content } from "@/interfaces/global"
import sx from "@/styles/component.module.scss";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export interface ButtonProps {
    id?: string;
    type: "button" | "submit" | "reset";
    title?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
    selected?: boolean;
    controls?: string,
    size: Size;
    mode?: Mode;
    status?: Status;
    variant?: "solid" | "outline";
    shade?: Shade;
    content?: Content;
    value?: string;
    url?: Url;
    onClick?: any;
    children?: React.ReactNode | React.ReactNode[] | string;
}


const Button = ({ id, value, url, size = "M", mode = "primary", status = "accent", variant = "solid", shade = "100", content = "text", selected, type = "button", title, disabled, style, controls, onClick, children }: ButtonProps) => {


    const defaultAttrs = {
        className: sx["button"],
        id,
        type,
        title,
        disabled,
        value,
        style
    }

    const customAttrs = {
        "data-mode": mode,
        "data-variant": variant,
        "data-status": status,
        "data-shade": shade,
        "data-size": size,
        "data-content": content,
        "data-selected": selected
    }

    const a11y = {
        "aria-controls": controls,
    }

    const events = {
        onClick
    }

    return (
        <>        
            {
                !url && 
                <button {...defaultAttrs} {...customAttrs} {...a11y} {...events} >
                    {children ? children : value}
                </button>
            }
            {
                url && 
                <Link href={url} {...defaultAttrs} {...customAttrs} {...a11y} {...events} >
                    {children ? children : value}
                </Link>
            }
        </>
        
    )
}

export default Button