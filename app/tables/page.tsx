import { Button, Header, Modal, Table } from "@/components"
import { getTables } from "@/lib/getData";
import TablesList from "@/components/tables-list";
import sx from "@/styles/component.module.scss"

const Tables = async () => {

    const tables = await getTables()

    return (
        <>        
            <Header title="Tables" description="Define your tables here" />
            <div className={sx["body"]}>
                <div className={sx["body-content"]} style={{"gridTemplateRows": "min-content min-content", "gap": "32px"}}>
                    <TablesList tables={tables} isEditable={true} />
                    <Button url="/tables/new" type="button" variant="solid" size="M" style={{"width": "100%"}}>Add table</Button>
                </div>
            </div>
        </>
    )
}

export default Tables 