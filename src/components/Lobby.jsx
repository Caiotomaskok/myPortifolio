
import Back from "./Back"

import profile from '../assents/foto-perfil.jpg'
import logo from "../assents/dev-bg-1200x800.jpg"

import './Lobby.scss'
const Lobby = () => {
    return (
        <>
        <div className="container">
            <div className="section">
                <img src={profile} alt=" foto de perfil" className="profile" />
                <img src={logo} alt="background perfil" className="image1" />
                <h1 className="fullName"> Caio Tomaskok </h1>
                <span>Function</span>
                <ul>
                    <li><a href="#">Linkedin</a></li>
                    <li><a href="#">Git Hub</a></li>
                    <li><a href="#">Facebook</a></li>

                </ul>
            </div>
            <div className="section-information">
                <h1 className="about-title">About me</h1>
                 <br />
                 <p className="about-me"> Hello! I’m Caio Tomaskok.
                    Back-end & Frond-end developer from UK, London. I have rich experience in wordpress, also I am good at Magento. I love to talk with you about our unique.</p>
            </div>
        </div>
        <Back />
        </>
        )
}

export default Lobby 