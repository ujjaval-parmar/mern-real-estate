import { useContext, useState } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget";

function ProfileUpdatePage() {

  const navigate = useNavigate();

  const { currentUser, updateUser } = useContext(AuthContext);


  const [avatar, setAvatar] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoader(true);

    const formData = new FormData(e.target);

    // console.log(Object.fromEntries(formData));

    const { username, email, password } = Object.fromEntries(formData);


    try {
      const response = await fetch('http://localhost:5000/api/user/' + currentUser._id, {
        method: "PUT",
        body: JSON.stringify({ username, email ,password, avatar: avatar[0] }),
        credentials: 'include',
        "Access-Control-Allow-Origin": "*",
        headers: {
          'Content-Type': 'application/json'
        }

      });

      const data = await response.json();

      if(!response.ok){
        throw new Error(data.error);
      }

      // console.log(data.data);

      updateUser(data.data);

      navigate('/profile');




    } catch (err) {
      setError(err.message);
    } finally {
      setLoader(false);
      
    }


  }

  console.log(avatar[0]);

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email" >Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          {error && <p>{error}</p>}
          <button>Update</button>
        </form>
      </div>
      <div className="sideContainer">
        <img src={avatar[0] || currentUser.avatar || './noavatar.jpg'} alt="" className="avatar" />

        <UploadWidget 
          uwConfig={{
            cloudName: 'dpxxfb4dv',
            uploadPreset: 'estate',
            multiple: false,
            maxImageFileSize: 2000000,
            folder: 'avatars'
          }}
          setState={setAvatar}
        />

      </div>
    </div>
  );
}

export default ProfileUpdatePage;
