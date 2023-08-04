import sx from "@/styles/component.module.scss"
import { Button, Icon } from ".."
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const GuestEdit = ({data}: any) => {
    return (
        <div className={sx["user"]}>
            <div className={sx["user-details"]}>
                {data.name && <span className={sx["user-name"]}>{data.name}</span>}
                {data.table && <span className={sx["user-table"]}>{data.table}</span>}
            </div>
            <Link href={`/guests/${data.id}`}>
                <Button type="button" size="M" variant="solid" mode="secondary" shade="100" content="icon">
                    <Icon value="pen" />
                </Button>
            </Link>
        </div>
    )
}

export default GuestEdit 