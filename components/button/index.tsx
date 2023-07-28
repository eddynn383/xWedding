import sx from "@/styles/component.module.scss"
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactElement } from "react";

type ButtonProps = {
    url?: Url;
    state?: "default" | "selected";
    children: ReactElement | string;
}

const Button = ({url, state = "default", children}: ButtonProps) => {
    return (
        <div className={sx["button"]} data-state={state}>
            {
                url && <Link href={url} className={sx["button-inner"]}>{children}</Link>
            }
            {
                !url && <span className={sx["button-inner"]}>{children}</span>
            }
        </div>
    )
}

export default Button  