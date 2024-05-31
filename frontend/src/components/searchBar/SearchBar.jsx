import { useState } from 'react';
import './searchBar.scss';
import { NavLink } from 'react-router-dom';

const types = ['buy', 'rent'];

const SearchBar = () => {

    const [query, setQuery] = useState({
        type: 'buy',
        city: '',
        minPrice: '',
        maxPrice: '',
    })

    const switchType = (val) => {
        setQuery(prev => ({ ...prev, type: val }))
    }

    // console.log(query);

 let params = '';
 if(query.city ){
    params += `&city=${query.city}`
}
if(query.minPrice){
    params += `&minPrice=${query.minPrice}`
    
 }
if(query.maxPrice){
    params += `&maxPrice=${query.maxPrice}`
    
 }
console.log(`/list?type=${query.type}${params}`);

    const handleChange = e => {
        setQuery(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    return (
        <div className="searchBar">

            <div className="type">
                {types.map(type => <button
                    key={type}
                    className={query.type === type ? 'active' : ''}
                    onClick={e => switchType(type)}>{type}
                </button>
                )}
            </div>

            <form action="">
                <input type="text" name='city' placeholder='City Location'
                    onChange={handleChange}
                />

                <input type="number" name='minPrice' placeholder='Min Price' min={0} max={100000} onChange={handleChange} />

                <input type="number" name='maxPrice' min={0} max={100000} placeholder='Max Price' onChange={handleChange} />
                <NavLink to={`/list?type=${query.type}${params}`}>
                    <button type='submit'>
                        <img src="./search.png" alt="search-button" />
                    </button>
                </NavLink>

            </form>

        </div>
    )
}

export default SearchBar