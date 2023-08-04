import { Button, Header, Modal, Table } from "@/components"
import { getTables } from "@/lib/getData";
import Link from "next/link";
import sx from "@/styles/component.module.scss"
import { redirect } from "next/navigation";

const Tables = async () => {

    const tables = await getTables()

    // await prisma.seat.create({
    //     data: {
    //         status: "empty",
    //         tableId: "64c79bfd156f75c0b8798d78"
    //     }
    // })
    
    return (
        <>        
            <Header title="Tables" description="Define your tables here" />
            <div className={sx["body"]}>
                <div className={sx["body-content"]}>
                    <ul className={`${sx["tables-list"]} list--reset`}>
                        {
                            tables.map((table, idx) => (
                                <li key={idx}>
                                    <Link href={`/tables/${table.id}`}>
                                        <Table id={table.id} number={table.number} isRemovable={idx === tables.length - 1} />
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <Button url="/tables/new" type="button" variant="solid" size="M" style={{"width": "100%"}}>Add table</Button>
                </div>
            </div>
        </>
    )
}

// {
//     selected && 
//     <div className={sx["table-details"]}>
//         <ul className={`${sx["seats-list"]} list--reset`}>
//             {
//                 seats?.map((seat, idx) => (
//                     <li key={idx}>
//                         <Chair key={idx} size="M" />
//                     </li>
//                 ))
//             }
//         </ul>
//         <form action={createHandle}>
//             <Button type="submit" size="M" variant="solid" style={{"width": "100%"}}>Add Chair</Button>
//         </form>
//     </div>
// }

export default Tables 