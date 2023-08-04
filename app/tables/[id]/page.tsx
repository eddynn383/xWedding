
import { Header, CreateSeat, SeatsList } from "@/components"
import { setSeatForTable } from "@/lib/setData";
import { getAllSeatsById, getTableById } from "@/lib/getData";
import { deleteSeat } from "@/lib/removeData";
import sx from "@/styles/component.module.scss"

type TablePageProps = {
    params: {
        id: string
    }
}

const TablePage = async ({ params: { id } }: TablePageProps) => {
    
    const table = await getTableById(id)
    const seats = await getAllSeatsById(id)
    
    async function createHandler() {
        "use server"
        await setSeatForTable(id)
    }

    async function removeHandler(seatId: string) {
        "use server"
        await deleteSeat(seatId)
    }

    return (
        <>
            <Header title={`Table No: ${table?.number}`} description="Define the number of the chairs place on the table" />
            <div className={sx["body"]}>
                <div className={sx["body-content"]}>
                    <SeatsList seats={seats} onRemove={removeHandler} />
                    <CreateSeat tableId={id} onCreate={createHandler} />
                </div>
            </div>
        </>
    )
}

export default TablePage