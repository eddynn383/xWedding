import { prisma } from "@/db";

export async function getGuests() {
    return prisma.guest.findMany();
}

export async function getGuestsByName(name: string | undefined) {
    if (name) {        
        return prisma.guest.findMany({
            where: {
                name: {
                    contains: name,
                    mode: 'insensitive'
                }
            }
        });
    } else {
        return prisma.guest.findMany()
    }
}

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