import { prisma } from "@/db";
import { getAllSeatsById } from "./getData";

export async function deleteTable(id: string) {
    if (id) {
        const seats = await getAllSeatsById(id)
        if(seats) {
            await prisma.seat.deleteMany({
                where: {
                    tableId: id
                }
            })
        }  
        return prisma.table.delete({
            where: {
                id
            }
        })
    }
}

export async function deleteSeat(id: string) {
    if (id) {        
        return prisma.seat.delete({
            where: {
                id
            }
        })
    }
}