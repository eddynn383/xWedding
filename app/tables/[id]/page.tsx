import { Header, CreateSeat, SeatsList, DeleteTable, Button, Icon } from "@/components"
import { setSeatForTable } from "@/lib/setData";
import { getAllSeatsById, getTableById } from "@/lib/getData";
import { deleteSeat } from "@/lib/removeData";
import sx from "@/styles/component.module.scss"
import BackButton from "@/components/back-button";

type TablePageProps = {
    params: {
        id: string
    }
}

const TablePage = async ({ params: { id } }: TablePageProps) => {
    
    const table = await getTableById(id)
    const seats = await getAllSeatsById(id)

    async function removeHandler(seatId: string) {
        "use server"
        await deleteSeat(seatId)
    }

    return (
        <>
            <Header title={`Table No: ${table?.number}`} description="Define the number of the chairs place on the table" />
            <div className={sx["body"]} >
                <div className={sx["body-content"]} style={{"gridTemplateRows": "min-content min-content", "gap": "32px"}}>
                    <SeatsList seats={seats} tableId={id} onRemove={removeHandler}/>
                    <div className={sx["actions"]}>
                        <DeleteTable tableId={id} />
                        <Button url="/tables" type="button" size="L"><Icon value="chevron-left" /> Back</Button>
                        <BackButton url="/tables" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TablePage