export default function SocialLink({ itemClass, link }) {
  return (
    <li>
      <a href={link.url} target="_blank" rel="noreferrer" className={itemClass}>
        <i className={link.icon}></i>
      </a>
    </li>
  )
}
