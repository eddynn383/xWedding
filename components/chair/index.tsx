import sx from "@/styles/component.module.scss"

type ChairProps = {
    status: string;
}

const Chair = ({ status }: ChairProps) => {
    return (
        <span className={sx["chair"]} data-status={status}></span>
    )
}

export default Chair 