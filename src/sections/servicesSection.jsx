import Service from '@/components/service'
import Title from '@/components/title'
import { SERVICES } from '@/data'

export default function ServicesSection() {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {SERVICES.map((service, index) => (
          <Service key={index} service={service} />
        ))}
      </div>
    </section>
  )
}
