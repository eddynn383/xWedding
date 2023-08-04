import { Button, GuestEdit, Header, Icon, Input } from "@/components";
import { prisma } from "@/db";
import sx from "@/styles/component.module.scss";
import Link from "next/link";

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
            <div className={sx["body"]} data-layout="two">
                <div className={sx["body-content"]} style={{"gridTemplateRows":"min-content auto"}}>
                    <Input id="search" name="search" type="text" placeholder="Search..." variant="solid" shade={300} iconBefore={<Icon value="magnifying-glass" />} />
                    <ul className={sx["guest-list"]}>
                        {guests.map((guest) => (
                            <li key={guest.id}>
                                <GuestEdit data={guest} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={sx["body-actions"]}>
                    <Link href="/guests/new">
                        <Button variant="solid" mode="primary" type="button" size="M" style={{"width": "100%"}}>Add Guest</Button>
                    </Link>
                </div>
            </div>
        </>
    ); 
};

export default Guests;
