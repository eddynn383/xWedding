"use client"

import { Button, Icon } from "@/components";
import { State } from "@prisma/client";
import { deleteSeat } from "@/lib/removeData";
import { Size } from "@/interfaces/global";
import sx from "@/styles/component.module.scss"

type SeatProps = {
    id: string;
    state?: State | undefined | null;
    size?: Size;
    isRemovable?: boolean;
    onRemove?: (id: string) => Promise<void>;
}

const Seat = ({ id, state="empty", size="S", isRemovable=false, onRemove }: SeatProps) => {

    // async function removeHandler () {
    //     console.log("delete seat!")
    //     await deleteSeat(id)
    // }

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
                            <Button type="button" size="XXS" status="fail" variant="outline" content="icon" onClick={async () => {await onRemove(id)}}>
                                <Icon value="close" />
                            </Button>
                        </div>
                    }
                </span>
            }
        </>
    )
}

export default Seat 