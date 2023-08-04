import { prisma } from "@/db";

export async function getTables() {
    return prisma.table.findMany();
}

export async function getAllSeatsById(id: string) {
    if (id) {        
        return prisma.seat.findMany({
            where: {
                tableId: id
            }
        })
    }
}

export async function getTableById(id: string) {
    if (id) {        
        return prisma.table.findUnique({
            where: {
                id
            }
        })
    }
}