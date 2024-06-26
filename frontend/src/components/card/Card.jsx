import { Link } from 'react-router-dom'
import './card.scss'

const Card = ({ item }) => {
    // console.log(item);
    return (
        <div className='card'>
            <Link
                to={`/${item._id}`}
                className='imageContainer'>
                <img src={item.images[0]} alt="item" />

            </Link>
            <div className="textContainer">
                <h2 className='title'>
                    <Link to={`/${item._id}`}>{item.title}</Link>
                </h2>
                <p className="address">
                    <img src="./pin.png" alt="address" />
                    <span>{item.address}</span>
                </p>
                <p className="price">${item.price}</p>

                <div className="bottom">

                    <div className="features">
                        <div className="feature">
                            <img src="/bed.png" alt="bed" />
                            <span>{item.bedroom} bedroom</span>
                        </div>

                        <div className="feature">
                            <img src="/bath.png" alt="bath" />
                            <span>{item.bathroom} bathroom</span>
                        </div>

                    </div>

                    <div className="icons">
                        <div className="icon">
                            <img src="./save.png" alt="" />
                        </div>
                        <div className="icon">
                            <img src="./chat.png" alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Card