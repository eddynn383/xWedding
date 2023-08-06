"use client"

import { Button, Icon } from "@/components";
import { State } from "@prisma/client";
import { deleteSeat } from "@/lib/removeData";
import { Size } from "@/interfaces/global";
import sx from "@/styles/component.module.scss"
import { useEffect } from "react";
import { useTransition } from "react";
import { removeSeat } from "@/lib/actions";
import RemoveButton from "../removeButton";

type SeatProps = {
    id: string;
    state?: State | undefined | null;
    size?: Size;
    isRemovable?: boolean;
    onRemove?: (id: string) => Promise<void>;
}

const Seat = ({ id, state="empty", size="S", isRemovable=false, onRemove }: SeatProps) => {

    let [isPending, startTransition] = useTransition();

    return (
        <>
            {size === "S" && <span className={sx["seat"]} data-state={state} data-size={size}></span>}
            {
                size === "M" && 
                <span className={sx["seat"]} data-state={state} data-size={size}>
                    <div className={sx["seat-inner"]}>
                        <Icon value="chair" />
                    </div>
                    {
                        (isRemovable && onRemove) &&
                        <div className={sx["seat-close"]} >
                            <RemoveButton id={id} removeHandler={removeSeat} />
                        </div>
                    }
                </span>
            }
        </>
    )
}

export default Seat 