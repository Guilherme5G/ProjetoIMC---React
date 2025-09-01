import '../css/header.css'
import logo from '../assets/img/logo.png'

function Header(){
    return(
        <header>
            <div className='logo'>
                <a href="#"><img src={logo} alt="logo IMC" /></a>
            </div>
            <div className='nav'>
                <nav>
                    <ul>
                        <li><a href="#"><i className='fa-regular fa-house'></i> Home</a></li>
                        <li><a href="https://github.com/Guilherme5G" target='_blank'><i className='fa_brand fa-github'></i>GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/guilherme-de-ara%C3%B9jo-moreira-7440602b5/" target='_blank'><i className='fa_brand fa-linkedin'></i>LinkedIn</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header