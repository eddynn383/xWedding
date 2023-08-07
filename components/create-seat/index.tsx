"use client"

import { Button, Icon } from "@/components"
import { addSeat } from "@/lib/actions"
import { useTransition } from "react"

type CreateSeatProps = {
    tableId: string;
}

const CreateSeat = ({tableId}: CreateSeatProps) => {
    let [isPending, startTransition] = useTransition()

    return (
        <Button type="button" size="M" variant="solid" content="icon" onClick={() => startTransition(() => addSeat(tableId))}>
            <Icon value="plus" />
        </Button>
    )
}

export default CreateSeat