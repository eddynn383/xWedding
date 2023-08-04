"use client"

import { Button } from "@/components"

type CreateSeatProps = {
    tableId: string;
    onCreate: (tableId: string) => Promise<void>
}

const CreateSeat = ({tableId, onCreate}: CreateSeatProps) => {
    return (
        <Button type="button" size="M" variant="solid" style={{"width": "100%"}} onClick={async () => {await onCreate(tableId)}}>Add Chair</Button>
    )
}

export default CreateSeat