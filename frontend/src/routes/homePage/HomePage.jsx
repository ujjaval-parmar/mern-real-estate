
import { useContext, useEffect } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss';
import { AuthContext, AuthProvider } from '../../context/AuthContext';

const HomePage = () => {

    const { currentUser } = useContext(AuthContext);


    useEffect(()=>{

        

        const getData = async()=>{
            const response = await fetch("http://localhost:5000/api/user/", {
                // credentials: true,
                credentials: 'include',
                "Access-Control-Allow-Origin": "*",
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // console.log(response);

            const data = await response.json(); 

            // console.log(data);

            


        }

        getData();
    }, [])

    // console.dir(document)

    // console.log(currentUser);

    return (
        <div className="homePage">

            <div className="textContainer">
                <div className="wrapper">

                    <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                        explicabo suscipit cum eius, iure est nulla animi consequatur
                        facilis id pariatur fugit quos laudantium temporibus dolor ea
                        repellat provident impedit!
                    </p>

                    <SearchBar />

                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>

                </div>
            </div>


            <div className="imgContainer">
                <img src="./bg.png" alt="hero-img" />
            </div>


        </div>
    )
}

export default HomePage