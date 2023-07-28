"use client"
import sx from "@/styles/component.module.scss"

import { usePathname } from "next/navigation"
import Item from "./item"

type NavigationProps = {
    items: any;
}

const Navigation = ({items}:NavigationProps) => {
    const pathname = usePathname()
    
    return (
        <nav className={sx["navigation"]}>
            <ul>
                {
                    items.map((link: any) => {
                        const isActive = pathname === link.url

                        return (
                            <li key={link.name || link.icon}>
                                <Item item={link} state={isActive ? "selected": "default"}/>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
    
Navigation.Item = Item; 

export default Navigation