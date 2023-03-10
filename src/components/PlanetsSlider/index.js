import {Component} from 'react'

import Slider from 'react-slick'

import './index.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import PlanetItem from '../PlanetItem'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div className="bg-container">
        <ul className="lists-planets">
          {planetsList.map(eachObject => (
            <Slider {...settings}>
              <PlanetItem eachPlantsObject={eachObject} key={eachObject.name} />
            </Slider>
          ))}
        </ul>
      </div>
    )
  }
}

export default PlanetsSlider
