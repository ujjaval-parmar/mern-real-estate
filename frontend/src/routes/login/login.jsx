import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Login() {

  const navigate = useNavigate();


  const {updateUser} = useContext(AuthContext);

  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async(e)=>{
    e.preventDefault();

    setError('');

    const formData = new FormData(e.target);

    const username = formData.get('username');
    const password = formData.get('password');

    if(!username || !password){

      setError('All fields required!');
      return;
    }

    try{

      setLoader(false);

      const body = { username, password};
      
      const response = await fetch('http://localhost:5000/api/auth/login',{
        method: 'POST',
        body: JSON.stringify(body),
        credentials: 'include',
        "Access-Control-Allow-Origin": "*",
        headers: {
          'Content-Type': 'application/json',
        }
      })

      // console.log(response.headers.get('Set-Cookie'));

      const data = await response.json();

      if(!response.ok){
        throw new Error(data.error);
      }


      updateUser(data.user);

      navigate('/');



    }catch(error){
      setError(error.message);
    }finally{
      setLoader(false);
    }


  }



  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />

          {error && <p>{error}</p>}

          <button>{!loader ? 'Login' : 'Loading...'}</button>
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
