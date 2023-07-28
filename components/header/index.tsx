import sx from "@/styles/component.module.scss"

type HeaderProps = {
    title: string;
    description: string
}

const Header = ({title, description}: HeaderProps) => {
  return (
    <div className={sx["header"]}>
        <h1 className={sx["header-title"]}>{title}</h1>
        <span className={sx["header-description"]}>{description}</span>
    </div>
  )
}

export default Header 