import { Button, Icon } from '@/components'
import Link from 'next/link'

const Item = ({ item, state }: any) => {
    return (
        <Link href={item.url}>
            <Button type="button" size="M" variant="solid" mode="secondary" status="accent" selected={state} content="icon">
                <Icon value={item?.icon} />
            </Button>
        </Link>
    )
}

export default Item 