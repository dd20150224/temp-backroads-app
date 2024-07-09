import React from 'react'

const tour = ({ tour }) => {
  const { id, title, date, country, durationInDays, lowestPrice, info, image } =
    tour

  return (
    <article className="tour-card" key={id}>
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{' '}
            {country}
          </p>
          <p>{durationInDays} days</p>
          <p>from ${lowestPrice}</p>
        </div>
      </div>
    </article>
  )
}

export default tour
