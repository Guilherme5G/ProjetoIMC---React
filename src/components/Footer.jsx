import "../css/footer.css"
import logo from "../assets/img/logo.png"

function Footer() {
  return (
    <footer>
        <div className="logo">
          <a href="#"><img src={logo} alt="logo IMC" /></a>
        </div>
        <div className="social-links">
          <a href="https://github.com/Guilherme5G" target="_blank"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/guilherme-de-ara%C3%B9jo-moreira-7440602b5/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
      <p>Todos os direitos reservados &copy; 2025</p>
    </footer>
  );
}

export default Footer;
