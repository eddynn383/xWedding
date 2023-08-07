"use server"

import { Key, startTransition, useEffect, useState } from "react";
import { Button, Seat, Icon, SeatsList } from "@/components"
import sx from "@/styles/component.module.scss"
import { getAllSeatsById } from "@/lib/getData";
import RemoveButton from "../removeButton";
import { removeTable } from "@/lib/actions";
import Link from "next/link";

type TableProps = {
    id: string;
    places?: any;
    number: number;
    isSelected?: boolean;
    isRemovable?: boolean;
    isEditable?: boolean;
    style?: React.CSSProperties;
    onClick?: () => void;
    onRemove?: () => void;
}

const Table = async ({ id, number, isSelected=false, isRemovable=false, style, isEditable=false, onRemove }:TableProps) => {
    const seats =  await getAllSeatsById(id)

    return (
        <>        
            <div className={sx["table"]} style={style} data-selected={isSelected}>
                <Link href={`${isEditable ? '/tables/' : '/dashboard/'}${id}`}>                
                    <div className={sx["table-inner"]}>

                        {/* <SeatsList seats={seats} /> */}
                        {
                            seats?.map((item: any, idx: Key) => (
                                <Seat key={idx} id={item.id} state={item.state} size="S" />
                            ))
                        }
                        <span className={sx["table-number"]}>{number}</span>
                    </div>
                </Link>
                {
                    isRemovable &&
                    <div className={sx["table-close"]} >
                        <RemoveButton id={id} removeHandler={removeTable} />
                    </div>
                }
            </div>
        </>
    )
}

export default Table