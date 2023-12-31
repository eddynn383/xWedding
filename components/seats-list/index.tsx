"use client"

import sx from "@/styles/component.module.scss"
import { CreateSeat, Seat } from "@/components";
import { Key, useEffect, useState } from "react";

type SeatsListProps = {
    seats: any;
    tableId: string;
    onCreate?: any;
    onRemove?: any;
}

const SeatsList = ({seats, tableId, onCreate, onRemove}: SeatsListProps) => {
    // const [data, setData] = useState(seats)

    // useEffect(() => {
    //     console.log(data)
    //     setData(seats)
    // }, [seats, data])

    return (
        <ul className={`${sx["seats-list"]} list--reset`}>
            {
                seats?.map((seat: any, idx: Key) => (
                    <li key={idx}>
                        <Seat key={idx} id={seat.id} size="M" state={seat.state} isRemovable={true} onRemove={onRemove} />
                    </li>
                ))
            }
            <li>
                <CreateSeat tableId={tableId} />
            </li>
        </ul>
    )
}

export default SeatsList