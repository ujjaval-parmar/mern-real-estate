import { useState } from 'react';
import './searchBar.scss';

const types = ['buy', 'rent'];

const SearchBar = () => {

    const [query, setQuery] = useState({
        type: 'buy',
        location: '',
        minPrice: 0,
        maxPrice: 0,
    })

    const switchType = (val) => {
        setQuery(prev=> ( {...prev, type: val} ))
    }

    // console.log(query);

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
                <input type="text" name='location' placeholder='City Location' />
                <input type="number" name='minPrice' placeholder='Min Price' min={0} max={100000} />
                <input type="number" name='maxPrice' min={0} max={100000} placeholder='Max Price' />

                <button type='submit'>
                    <img src="./search.png" alt="search-button" />
                </button>

            </form>

        </div>
    )
}

export default SearchBar