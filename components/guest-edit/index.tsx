import sx from "@/styles/component.module.scss"
import { Button } from ".."
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const GuestEdit = ({data}: any) => {
    return (
        <div className={sx["user"]}>
            <div className={sx["user-details"]}>
                {data.name && <span className={sx["user-name"]}>{data.name}</span>}
                {data.table && <span className={sx["user-table"]}>{data.table}</span>}
            </div>
            <Button url={`/guests/${data.id}`}>
                <FontAwesomeIcon icon="user-pen" />
            </Button>
        </div>
    )
}

export default GuestEdit 