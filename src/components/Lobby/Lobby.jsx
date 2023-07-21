
import Back from "../background/Back"

import profile from './Image/foto-perfil.jpg'
import logo from "./Image/dev-bg-1200x800.jpg"
import linkedinLogo from "./Image/linkedin_black_icon.png"
import whtasappLogo from "./Image/whatsapp_black_icon.png"
import GitIcon from "./Image/github_git_icon.png"
import './Lobby.scss'
const Lobby = () => {
    return (
        <>
        <div className="container">
            <div className="section">
                <img src={profile} alt=" foto de perfil" className="profile" />
                <img src={logo} alt="background perfil" className="image1" />
                <h1 className="fullName"> Caio Tomaskok </h1>
                <span>Front-End JR</span>
                <ul>
                    <li><a href="https://www.linkedin.com/in/tomaskok/"><img src={linkedinLogo} alt="Logo Linkedin" /></a></li>
                    <li><a href="https://github.com/Caiotomaskok?tab=repositories"><img className="icon-git" src={GitIcon} alt="Icon GitHub" /></a></li>
                    <li><a href="#"><img src={whtasappLogo} alt="Icon Whatsapp" /></a></li>

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