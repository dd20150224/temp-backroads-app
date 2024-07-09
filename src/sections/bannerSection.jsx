export default function BarnnerSection() {
  const title = 'continue exploring'
  const description =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo debitis est autem dicta.'
  const link = {
    href: '#tours',
    text: 'explore tours',
  }

  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={link.href} className="btn hero-btn">
          {link.text}
        </a>
      </div>
    </section>
  )
}
