import './index.css'

const PlanetItem = props => {
  const {eachPlantsObject} = props
  const {name, imageUrl, description} = eachPlantsObject

  return (
    <div className="list-type-plants">
      <h1 className="heading-planets">PLANETS</h1>

      <img src={imageUrl} alt={name} className="image-url-plants" />
      <h1 className="name-heading">{name}</h1>
      <p className="name-description">{description}</p>
    </div>
  )
}

export default PlanetItem
