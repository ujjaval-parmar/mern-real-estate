import { useLoaderData } from 'react-router-dom';
import Card from '../../components/card/Card';
import Filter from '../../components/filter/Filter';
import Map from '../../components/map/Map';
import { listData } from '../../lib/dummy-data'
import './listPage.scss'

const data = listData;

const ListPage = () => {

  const data = useLoaderData();

  console.log(data)

  return (
    <div className='listPage'>

      <div className="listContainer">
        <div className="wrapper">
        
          <Filter />

          {data.map(item=>{
           return <Card key={item._id} item={item} />
          })}

        </div>
      </div>

      <div className="mapContainer">
        <Map items={data}/>
      </div>


    </div>
  )
}

export default ListPage