import sx from "@/styles/component.module.scss";
import { Header, Table, GuestSelector } from "@/components"

const Page = ({ params }: { params: { id: string } }) => {

    const users = [
        {
            name: "John Monroe"
        },
        {
            name: "Taylor Mike"
        },
        {
            name: "Billy Goe"
        },
        {
            name: "Lenn Agier"
        },
        {
            name: "Antony Gullis"
        },
        { 
            name: "Victor Popescu"
        },
        {
            name: "Curtis Vorner"
        }
    ]

    return (
        <>
            <Header title="Details" description="Choose a table to see more details" />
            <div className={sx["body"]}>
                <div className={sx["body-top"]}>
                    <Table id={params.id} number={7} style={{"padding": "20px", "minHeight": "160px", "maxWidth": "300px", "margin": "0 auto"}} />
                </div>
                <div className={sx["body-bottom"]}>
                    <ul className={sx["guest-list"]}>
                        {
                            users.map((user, idx) => (
                                <li key={idx} className="list--reset">
                                    <GuestSelector data={user}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        
        </>
    )
}

export default Page