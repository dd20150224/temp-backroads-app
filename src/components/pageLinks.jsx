import { PAGE_LINKS } from '@/data'
import PageLink from './pageLink'

export default function PageLinks({ parentClass, itemClass }) {
  return (
    <ul className={parentClass}>
      {PAGE_LINKS.map((item) => (
        <PageLink key={item.id} itemClass={itemClass} link={item} />
      ))}
    </ul>
  )
}
