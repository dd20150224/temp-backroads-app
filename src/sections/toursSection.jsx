import Title from '@/components/title'
import Tour from '@/components/tour'
import { TOURS } from '@/data'

export default function ToursSection() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div className="section-center featured-center">
        {TOURS.map((tour) => (
          <Tour tour={tour} />
        ))}
      </div>
    </section>
  )
}
