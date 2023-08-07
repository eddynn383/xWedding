"use client"

import { Button, Modal } from "@/components"
import { removeTable } from "@/lib/actions"
import { useState, useTransition } from "react"
import sx from "@/styles/component.module.scss"
import { redirect } from "next/navigation"

type DeleteTableProps = {
    tableId: string;
}

const DeleteTable = ({tableId}: DeleteTableProps) => {
    const [showModal, setShowModal] = useState(false)
    let [isPending, startTransition] = useTransition()

    // const deleteHanlder = () => {
    //     redirect('/tables')
    //     removeTable(tableId)
    // }

    return (
        <>
            <Button type="button" size="L" variant="solid" mode="secondary" status="fail" style={{"width": "100%"}} onClick={() => setShowModal(true)}>Delete Table</Button>
            {
                showModal && 
                <Modal isClosable={false}>
                    <p>Deleting this table will also delete the allocated seats. <br/>Are you sure you want to proceed?</p>
                    <div className={sx["actions"]}>
                        <Button type="button" size="L" variant="solid" mode="primary" status="fail" style={{"width": "100%"}} onClick={() => startTransition(() => removeTable(tableId))}>Delete Table</Button>
                        <Button type="button" size="L" variant="outline" mode="secondary" shade="200" status="accent" style={{"width": "100%"}} onClick={() => setShowModal(false)}>Cancel</Button>
                    </div>
                </Modal>
            }

        </>
    )
}

export default DeleteTable