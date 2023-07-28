import { Button, Header } from "@/components"
 
const Page = () => {
    return (
        <>
            <Header title="New Guest" description="Add below the details about the new guest" />
            <form>
                <input type="text" name="name" />
                <div>
                    <Button url="/guests" >Cancel</Button>
                </div>
            </form>
        </>
    )
}

export default Page  