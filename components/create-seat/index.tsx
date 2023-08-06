"use client"

import { Button } from "@/components"
import { addSeat } from "@/lib/actions"
import { useTransition } from "react"

type CreateSeatProps = {
    tableId: string;
    onCreate: (tableId: string) => Promise<void>
}

const CreateSeat = ({tableId, onCreate}: CreateSeatProps) => {
    let [isPending, startTransition] = useTransition()

    return (
        // <Button type="button" size="M" variant="solid" style={{"width": "100%"}} onClick={async () => {await onCreate(tableId)}}>Add Chair</Button>
        <Button type="button" size="M" variant="solid" style={{"width": "100%"}} onClick={() => startTransition(() => addSeat(tableId))}>Add Chair</Button>
    )
}

export default CreateSeat