import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function setSeatForTable(id: string) {
    if (id) {  
        try {
            const newEntry = await prisma.seat.create({
                data: {
                    tableId: id
                }
            });

            return NextResponse.json({ newEntry }, { status: 200 })
        } catch (error) {
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
        }      
    }
}

export async function setGuest(fname: string, lname: string) {

    if (fname && lname) {  
        try {
            const newEntry = await prisma.guest.create({
                data: {
                    name: fname + " " + lname,
                }
            });

            return NextResponse.json({ newEntry }, { status: 200 })
        } catch (error) {
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
        }      
    }
}

export async function setTable(number: string) {

    const num = parseInt(number)

    if (num) {  
        try {
            const newEntry = await prisma.table.create({
                data: {
                    number: num
                }
            });

            return NextResponse.json({ newEntry }, { status: 200 })
        } catch (error) {
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
        }      
    }
}