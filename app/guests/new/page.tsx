import sx from "@/styles/component.module.scss"
import { Button, Header, Input } from "@/components"
 
const Page = () => {
    async function createGuest(data: FormData) {
        "use server"
        
        console.log("hi hi")
    }

    return (
        <>
            <Header title="New Guest" description="Add below the details about the new guest" />
            <div className={sx["body"]}>
                <form action={createGuest}>
                    <Input id="name" type="text" name="mame" variant="solid" />
                    <div className="">
                        <Button url="/guests" >Cancel</Button>
                        <Button type="submit">Save</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Page  