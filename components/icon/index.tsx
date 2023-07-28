"use client";

import sx from "@/styles/component.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProps } from "./interface";

const Icon = ({ value, status = "default", shake, beatFade, style }: IconProps) => {
    return (
        <div className={sx["icon"]} data-status={status}>
            <FontAwesomeIcon icon={value} shake={shake} beatFade={beatFade} style={style} />
        </div>
    )
}
 
export default Icon  