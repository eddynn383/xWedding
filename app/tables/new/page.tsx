import { Button, Header, Input } from "@/components"
import { redirect } from "next/navigation"
import { setTable } from "@/lib/setData"
import Link from "next/link"
import sx from "@/styles/component.module.scss"

const Page = () => {

    async function createTable(data: FormData) {
        "use server"
        let number = data.get("number")?.valueOf()
        
        if(typeof number !== "string" || number.length === 0) {
            console.log("true")
            throw new Error("Number is invalid!")
        }
        
        await setTable(number)
        console.log("created!")

        redirect("/tables")
    }

    return (
        <>
            <Header title="New Table" description="Add below the details about the new table" />
            <div className={sx["body"]}>
                <form action={createTable}>
                    <Input id="table-number" type="number" name="number" variant="solid" placeholder="Enter Table No." />
                    <div className={sx["actions"]}>
                        <Button url="/tables" type="button" size="M" variant="solid" mode="secondary">Cancel</Button>
                        <Button type="submit" size="M" variant="solid" mode="primary">Save</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Page