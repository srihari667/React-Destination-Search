// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {destination} = this.props
    const {name, imgUrl} = destination
    return (
      <li className="destination-item">
        <img src={imgUrl} className="image" alt={name} />
        <p className="destination-name">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
