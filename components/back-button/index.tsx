"use client"

import { Button, Icon } from "@/components"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

type BackButtonProps = {
    url: string;
}

const BackButton = ({url}: BackButtonProps) => {

    const router = useRouter()

    function backHanlder () {
        revalidatePath(url)
        router.push(url)
    }

    return (
        <Button type="button" size="L" onClick={backHanlder}><Icon value="chevron-left" /> Back</Button>
    )
}

export default BackButton