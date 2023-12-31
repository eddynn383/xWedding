"use client"

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { Icon, Input } from "@/components";
import sx from "@/styles/component.module.scss"

type SearchProps = {
    search?: string;
}

const Search = ({search = ""}: SearchProps) => {

    console.log("search: ", search )

    const router = useRouter()
    const initialRender = useRef(true)

    const [text, setText] = useState(search)
    const [query] = useDebounce(text, 750)

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return
        }

        if (!query) {
            router.push("/guests")
        } else {
            router.push(`/guests?search=${query}`)
        }
    }, [query])

    return (
        <div className={sx["search"]}>
            <Input id="search" name="search" type="text" placeholder="Search..." variant="solid" size="L" shade={300} value={text} iconBefore={<Icon value="magnifying-glass" />} onChange={(e: any) => setText(e.target.value)} />
        </div>
    )
} 

export default Search;