import { SOCIAL_LINKS } from '@/data'
import SocialLink from './socialLink'

export default function SocialLinks({ parentClass, itemClass }) {
  return (
    <ul className={parentClass}>
      {SOCIAL_LINKS.map((link) => (
        <SocialLink key={link.id} link={link} itemClass={itemClass} />
      ))}
    </ul>
  )
}
