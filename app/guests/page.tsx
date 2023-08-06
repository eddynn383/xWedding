import { Button, GuestEdit, Header, Icon, Input } from "@/components";
import { Search } from "@/components";
import { prisma } from "@/db";
import sx from "@/styles/component.module.scss";
import Link from "next/link";
import { getGuests, getGuestsByName } from "@/lib/getData";

// function getGuests() {
//     return prisma.guest.findMany();
// }

type PageProps = {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

const Page = async ({ searchParams }: PageProps) => {

    console.log("Search Params: ", searchParams)

    // const page = typeof searchParams.page === "string" ? Number(searchParams.page) : 1
    // const limit = typeof searchParams.limit === "string" ? Number(searchParams.limit) : 10

    const search = typeof searchParams.search === "string" ? searchParams.search: undefined

    const guests = await getGuestsByName(search);
    // if (!searchParams) {
    //     const guests = await getGuests();
    // } else {
    // }

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
            <div className={sx["body"]} data-layout="two" style={{"gridTemplateRows": "min-content calc(100% - 71px)"}}>
                <div className={sx["body-top"]}>
                    <Search search={search} />
                </div>
                <div className={sx["body-content"]} style={{"gridTemplateRows":"min-content auto"}}>
                    <ul className={sx["guest-list"]}>
                        {guests?.map((guest) => (
                            <li key={guest.id}>
                                <GuestEdit data={guest} />
                            </li>
                        ))}
                    </ul>
                    <div className={sx["body-actions"]}>
                        <Link href="/guests/new">
                            <Button variant="solid" mode="primary" type="button" size="L" style={{"width": "100%"}}>Add Guest</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    ); 
};

export default Page;
