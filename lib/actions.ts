"use server"

import { revalidatePath } from "next/cache";
import { setSeatForTable, setTable } from "./setData";
import { deleteSeat, deleteTable } from "./removeData";

export async function addTable(number: string) {
    await setTable(number)

    revalidatePath('/tables/[id]')
}

export async function removeTable(id: string) {
    await deleteTable(id)

    revalidatePath('/tables')
}

export async function addSeat(id: string) {
    await setSeatForTable(id)

    revalidatePath('/tables/[id]')
}

export async function removeSeat(id: string) {
    await deleteSeat(id)

    revalidatePath('/tables/[id]')
}