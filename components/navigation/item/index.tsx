import { Button, Icon } from '@/components'

const Item = ({ item, state }: any) => {
    return (
        <Button url={item.url} state={state}>
            <Icon value={item?.icon} />
        </Button>
    )
}

export default Item 