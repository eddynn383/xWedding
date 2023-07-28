"use client";

import sx from "@/styles/layout.module.scss"
import { config } from "@fortawesome/fontawesome-svg-core";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export function Providers({ children }: any) {
    library.add(fas)
    return (
        <main className={sx["main"]}>
            {children}
        </main>
    )
}  