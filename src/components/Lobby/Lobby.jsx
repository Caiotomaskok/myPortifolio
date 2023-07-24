
import Back from "../background/Back"

import profile from './Image/foto-perfil.jpg'
import logo from "./Image/dev-bg-1200x800.jpg"
import linkedinLogo from "./Image/linkedin_black_icon.png"
import whtasappLogo from "./Image/whatsapp_black_icon.png"
import GitIcon from "./Image/github_git_icon.png"
import './Lobby.scss'
import MenuBar from "../MenuBar/MenuBar"
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
                 <p className="about-me"> Olá! Eu sou o Caio, Front-end Developer. Eu moro em Guarulhos-São Paulo, estou em busca da minha primeira oportunidade para atuar na area. Atualmente sou estudante de React.Js, Typescript e nest.js . Gosto muito do que faço. Um prazer te-lo aqui! </p>
                    <MenuBar />
                    <br></br>
            </div>
        </div>
        <Back />
        </>
        )
}

export default Lobby 