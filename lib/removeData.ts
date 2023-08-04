import { prisma } from "@/db";

export async function deleteTable(id: string) {
    if (id) {        
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