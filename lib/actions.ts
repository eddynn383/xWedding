"use server"

import { revalidatePath } from "next/cache";
import { setSeatForTable, setTable } from "./setData";
import { deleteSeat, deleteTable } from "./removeData";
import { redirect } from "next/navigation";

export async function addTable(number: string) {
    await setTable(number)

    revalidatePath('/tables')
}

export async function removeTable(id: string) {
    console.log("Delete Id: ", id)
    await deleteTable(id)

    revalidatePath('/tables')

    redirect('/tables')
}

export async function addSeat(id: string) {
    await setSeatForTable(id)

    revalidatePath('/tables')
}

export async function removeSeat(id: string) {
    await deleteSeat(id)

    revalidatePath('/tables')
}