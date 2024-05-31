import { useLoaderData } from 'react-router-dom'
import Map from '../../components/map/Map'
import Slider from '../../components/slider/Slider'
import { singlePostData, userData } from '../../lib/dummy-data'
import './singlePage.scss'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import DOMPurify from 'dompurify';


const SinglePage = () => {

  const post = useLoaderData();

  // const { currentUser } = useContext(AuthContext);

  // console.log(post)


  return (
    <div className='singlePage'>

      <div className="details">
        <div className="wrapper">

          <Slider images={post.images} />

          <div className="info">

            <div className="top">

              <div className="post">

                <h1>{post.title}</h1>
                <div className="address">
                  <img src="./pin.png" alt="address" />
                  <span>{post.address}</span>
                </div>
                <div className="price">
                  ${post.price}
                </div>

              </div>

              {/* <div className="user">
                <img src={currentUser.avatar} alt="user" />
                <span>{currentUser.username}</span>
              </div> */}

            </div>


            <div className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.desc)
              }}
            >
              
            </div>
          </div>

        </div>
      </div>

      <div className="features">
        <div className="wrapper">

          <p className="title">General</p>
          <div className="listVerticle">

            <div className="feature">
              <img src="./utility.png" alt="feature" />
              <div className="featureText">
                <span>Utilities</span>
                <p>{
                  post.utilities === 'owner' ? "Owner is responsible" : "Tenant is responsible"
                }
                </p>
              </div>
            </div>

            <div className="feature">
              <img src="./pet.png" alt="feature" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>{post.pet === 'allowed' ? "Pets are allowed" : "Pets are not allowed"}</p>
              </div>
            </div>

            <div className="feature">
              <img src="./fee.png" alt="feature" />
              <div className="featureText">
                <span>Income Policy</span>
                <p>Must have 3X {post.income} the total household income</p>
              </div>
            </div>

          </div>


          <p className="title">Room Sizes</p>
          <div className="sizes">

            <div className="size">
              <img src="/size.png" alt="size" />
              <span>{post.size} sq/ft</span>
            </div>

            <div className="size">
              <img src="/bed.png" alt="size" />
              <span>{post.bedroom} Bed</span>
            </div>

            <div className="size">
              <img src="/bath.png" alt="size" />
              <span>{post.bathroom} Bathroom</span>
            </div>

          </div>

          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>{post.school}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{post.bus}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.restaurant}m away</p>
              </div>
            </div>
          </div>


          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[post]} />
          </div>

          <div className="buttons">

            <button>
              <img src="./chat.png" alt="" />
              Send a Message
            </button>

            <button>
              <img src="./save.png" alt="" />
              Save the Place
            </button>

          </div>


        </div>
      </div>

    </div>
  )
}

export default SinglePage