import sx from "@/styles/component.module.scss"
import { Button, Header, Input } from "@/components"
import Link from "next/link"
import { setGuest } from "@/lib/setData"
import { redirect } from "next/navigation"
 
const Page = () => {
    async function createGuest(data: FormData) {
        "use server"
        const fname = data.get("firstname")?.valueOf()
        const lname = data.get("lastname")?.valueOf()

        // console.log("name: ", data)

        if(typeof fname !== "string" || fname.length === 0 ) {
            throw new Error("First name is invalid!")
        }

        if(typeof lname !== "string" || lname.length === 0 ) {
            throw new Error("Last name is invalid!")
        }

        await setGuest(fname, lname)

        redirect("/guests")
        
    }

    return (
        <>
            <Header title="New Guest" description="Add below the details about the new guest" />
            <div className={sx["body"]}>
                <form action={createGuest} className={sx["body-content"]} style={{"display": "grid", "gridTemplateRows": "min-content min-content", "gap": "24px"}}>
                    <div style={{"display": "grid", "gridTemplateRows": "1fr 1fr", "gap": "12px"}}>
                        <Input id="fname" type="text" name="firstname" variant="solid" placeholder="Enter firstname" size="L" />
                        <Input id="lname" type="text" name="lastname" variant="solid" placeholder="Enter lastname" size="L" />
                    </div>
                    <div className={sx["actions"]}>
                        <Link href="/guests">
                            <Button type="button" size="M" variant="solid" mode="secondary" style={{"width": "100%"}}>Cancel</Button>
                        </Link>
                        <Button type="submit" size="M" variant="solid" mode="primary">Save</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Page  