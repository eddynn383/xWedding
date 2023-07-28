import { Button, GuestEdit, Header } from "@/components";
import { prisma } from "@/db";
import sx from "@/styles/component.module.scss";

function getGuests() {
    return prisma.guest.findMany();
}

const Guests = async () => {
    const guests = await getGuests();

    console.log(guests);
    // await prisma.guest.create({
    //     data: {
    //         name: "Popa Doina",
    //         arrived: false
    //     }
    // })

    return (
        <>
            <Header title="Guests" description="Choose a guest to see more details" />
            <div className={sx["body"]}>
                <div className={sx["body-content"]}>
                    <ul className={sx["guest-list"]}>
                        {guests.map((guest) => (
                            <li key={guest.id}>
                                <GuestEdit data={guest} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={sx["body-actions"]}>
                    <Button url="/guests/new">Add Guest</Button>
                </div>
            </div>
        </>
    ); 
};

export default Guests;
