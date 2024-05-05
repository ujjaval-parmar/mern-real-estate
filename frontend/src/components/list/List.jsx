import { listData } from '../../lib/dummy-data'
import Card from '../card/Card';

import './list.scss'

const data = listData;

const List = () => {
  return (
    <div className='list'>
        {data.map(item=>{
           return <Card key={item.id} item={item} />
        })}
    </div>
  )
}

export default List