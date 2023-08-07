// "use client"
import { Key, useEffect, useState } from "react"
import { Table } from "@/components";
import Link from "next/link";
import sx from "@/styles/component.module.scss"

type TablesListProps = {
    tables: any;
    isEditable: boolean;
}

const TablesList = ({tables, isEditable}: TablesListProps) => {

    return (
        <ul className={`${sx["tables-list"]} list--reset`}>
            {
                isEditable ? (
                    tables.map((table: { id: string; number: number; }, idx: Key | null | undefined) => (
                        <li key={idx}>
                            <Table id={table.id} number={table.number} isEditable={isEditable} isRemovable={idx === tables.length - 1} />
                        </li>
                    ))
                ) : (
                    tables.map((table: { id: string; number: number; }, idx: Key | null | undefined) => (
                        <li key={idx}>
                            <Table id={table.id} number={table.number} isEditable={isEditable} isRemovable={false} />
                        </li>
                    ))
                )
            }
        </ul>
    )
}

export default TablesList