import { Header, Table } from "@/components"
import { getTables } from "@/lib/getData";
import TablesList from "@/components/tables-list";
import sx from "@/styles/component.module.scss";

const Dashboard = async () => {
    const tables = await getTables()

    return (
        <>
            <Header title="Restaurant" description="Choose a table to see more details" />
            <div className={sx["body"]} >
                <div className={sx["body-content"]}>
                    <TablesList tables={tables} isEditable={false} />
                </div>
            </div>
        </>
    )
}

export default Dashboard