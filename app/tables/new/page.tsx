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
                <form action={createTable} className={sx["body-content"]} style={{"gridTemplateRows": "min-content min-content", "gap": "32px"}}>
                    <Input id="table-number" type="number" name="number" variant="solid" placeholder="Enter Table No." size="L" />
                    <div className={sx["actions"]} style={{'gap': '12px'}}>
                        <Button url="/tables" type="button" size="L" variant="solid" mode="secondary">Cancel</Button>
                        <Button type="submit" size="L" variant="solid" mode="primary">Save</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Page