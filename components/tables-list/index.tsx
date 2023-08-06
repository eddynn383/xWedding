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
                            <Link href={`/tables/${table.id}`}>
                                <Table id={table.id} number={table.number} isRemovable={idx === tables.length - 1} />
                            </Link>
                        </li>
                    ))
                ) : (
                    tables.map((table: { id: string; number: number; }, idx: Key | null | undefined) => (
                        <li key={idx}>
                            <Link href={`/dashboard/${table.id}`}>
                                <Table id={table.id} number={table.number} isRemovable={false} />
                            </Link>
                        </li>
                    ))
                )
            }
        </ul>
    )
}

export default TablesList