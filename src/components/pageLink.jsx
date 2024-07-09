export default function PageLink({ link, itemClass }) {
  return (
    <li key={link.id}>
      <a href={link.url} className={itemClass}>
        {' '}
        {link.text}{' '}
      </a>
    </li>
  )
}
