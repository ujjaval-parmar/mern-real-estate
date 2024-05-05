import { useState } from 'react'
import './chat.scss'

const Chat = () => {

    const [chat, setChat] = useState(true);


    return (
        <div className='chat'>

            <div className="messages">
                <h1>Messages</h1>

                <div className="message">
                    <img src="https://avatars.githubusercontent.com/u/154329143?v=4" alt="user" />
                    <span>Ujjaval Parmar</span>
                    <p>Lorem ipsum dolor sit amet....</p>
                </div>

                <div className="message">
                    <img src="https://avatars.githubusercontent.com/u/154329143?v=4" alt="user" />
                    <span>Ujjaval Parmar</span>
                    <p>Lorem ipsum dolor sit amet....</p>
                </div>

                <div className="message">
                    <img src="https://avatars.githubusercontent.com/u/154329143?v=4" alt="user" />
                    <span>Ujjaval Parmar</span>
                    <p>Lorem ipsum dolor sit amet....</p>
                </div>

                <div className="message">
                    <img src="https://avatars.githubusercontent.com/u/154329143?v=4" alt="user" />
                    <span>Ujjaval Parmar</span>
                    <p>Lorem ipsum dolor sit amet....</p>
                </div>

                <div className="message">
                    <img src="https://avatars.githubusercontent.com/u/154329143?v=4" alt="user" />
                    <span>Ujjaval Parmar</span>
                    <p>Lorem ipsum dolor sit amet....</p>
                </div>


            </div>

            {chat && <div className="chatBox">

                <div className="top">
                    <div className="user">
                        <img src="https://avatars.githubusercontent.com/u/154329143?v=4" alt="user" />
                        Ujjaval Parmar
                    </div>
                    <span className="close" onClick={() => setChat(false)}>X</span>
                </div>

                <div className="center">
                    <div className="chatMessage">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, rerum.
                        <span>1 Hour Ago</span>
                    </div>
                    <div className="chatMessage own">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, rerum.
                        <span>1 Hour Ago</span>
                    </div>
                    <div className="chatMessage">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, rerum.
                        <span>1 Hour Ago</span>
                    </div>
                    <div className="chatMessage own">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, rerum.
                        <span>1 Hour Ago</span>
                    </div>
                    <div className="chatMessage">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, rerum.
                        <span>1 Hour Ago</span>
                    </div>
                    <div className="chatMessage own ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, rerum.
                        <span>1 Hour Ago</span>
                    </div>
                    <div className="chatMessage own">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, rerum.
                        <span>1 Hour Ago</span>
                    </div>
                    <div className="chatMessage">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, rerum.
                        <span>1 Hour Ago</span>
                    </div>
                    <div className="chatMessage own ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, rerum.
                        <span>1 Hour Ago</span>
                    </div>
                    
                </div>

                <div className="bottom">
                    <textarea ></textarea>
                    <button>Send</button>
                </div>
            </div>
            }

        </div>
    )
}

export default Chat