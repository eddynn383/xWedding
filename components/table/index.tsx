import { Key } from "react";
import { Chair } from "@/components"
import Link from "next/link"; 
import sx from "@/styles/component.module.scss"

type TableProps = {
    id: string;
    places?: any;
    number: number;
    style?: React.CSSProperties
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

const Table = ({id, places = defaultPlaces, number, style}:TableProps) => {
    return (
        <Link href={id}>            
            <div className={sx["table"]} style={style}>
                {
                    places.map((item: any, idx: Key | null | undefined) => (
                        <Chair key={idx} status={item.state} />
                    ))
                }
                <span className={sx["table-number"]}>{number}</span>
            </div>
        </Link>

    )
}

export default Table