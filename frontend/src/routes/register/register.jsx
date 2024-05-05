import { useState } from "react";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  
  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');


  const handleSubmit = async(e) =>{
    setError('');

    e.preventDefault();

    const formData = new FormData(e.target);

    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

    // console.log(username,email,password)

    if(!username || !email || !password) {
      setError('All fields required!');
      return;
    }

    const body = {
      username, email, password,
      avatar: 'https://avatars.githubusercontent.com/u/154329143?v=4'
    }

   try{
    setLoader(true);
    const response = await fetch('http://localhost:5000/api/auth/register',{
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // console.log(response)
    
    const data = await response.json();

    if(!response.ok){
      throw new Error(data.error)
    }

    // console.log('data: ', data);

    navigate('/login');

   }catch(error){
    // console.log('error: ', error.message);
    setError(error.message);
   }finally{
    setLoader(false)
   }
    

  }

  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />

          {error && <p>{error}</p>}

          <button >{!loader ? 'Register' : 'Loading...'}</button>


          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
