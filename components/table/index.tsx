"use client"

import { Key, useState } from "react";
import { Button, Seat, Icon } from "@/components"
import { deleteTable } from "@/lib/removeData";
import sx from "@/styles/component.module.scss"

type TableProps = {
    id: string;
    places?: any;
    number: number;
    isSelected?: boolean;
    isRemovable?: boolean;
    style?: React.CSSProperties;
    onClick?: () => void;
    onRemove?: () => void;
}

const defaultPlaces = [
    {
        id: 1,
        state: "filled"
    },
    {
        id: 2,
        state: "empty"
    },
    {
        id: 3,
        state: "empty"
    },
    {
        id: 4,
        state: "empty"
    },
    {
        id: 5,
        state: "empty"
    },
    {
        id: 6,
        state: "empty"
    },
    {
        id: 7,
        state: "empty"
    },
    {
        id: 8,
        state: "empty"
    },
    {
        id: 9,
        state: "empty"
    },
    {
        id: 10,
        state: "empty"
    }
]


const Table = ({ id, places = defaultPlaces, number, isSelected=false, isRemovable=false, style, onRemove }:TableProps) => {

    const [selected, setSelected] = useState(isSelected)

    // const deleteHanlder = async () => {
    //     "use server"
    //     // return await deleteTable(id)
    // }
    // async function deleteHanlder() {
    //     "use server"
    //     return await deleteTable(id)
    // }

    console.log(id)

    function selectHandler() {
        console.log("Its clicked!")
        setSelected(true)
    }

    return (
        <>        
            <div className={sx["table"]} style={style} data-selected={selected} onClick={selectHandler}>
                <div className={sx["table-inner"]}>
                    {
                        places?.map((item: any, idx: Key | null | undefined) => (
                            <Seat key={idx} id={item.id} state={item.state} size="S" />
                        ))
                    }
                    <span className={sx["table-number"]}>{number}</span>
                </div>
                {
                    isRemovable &&
                    <div className={sx["table-close"]} >
                        <Button type="submit" size="XXS" status="fail" variant="outline" content="icon">
                            <Icon value="close" />
                        </Button>
                    </div>
                }
            </div>
        </>
    )
}

export default Table