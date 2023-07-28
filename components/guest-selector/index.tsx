import sx from "@/styles/component.module.scss"

const GuestSelector = ({data}: any) => {
    return (
        <div className={sx["user"]}>{data.name}</div>
    )
}

export default GuestSelector 