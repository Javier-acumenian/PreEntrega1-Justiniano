import './NavBarComponent.css';
import CardWidjetComponent from './CardWidjetComponent'
const NavBarComponent = () => {
      return (
      <>
        <ul>
            <div className="menu-left">
                <li><a href="#home">Home</a></li>
                <li><a href="#news">Cadenas</a></li>
                <li><a href="#contact">Aretes</a></li>
                <li><a href="#contact">Anillos</a></li>
            </div>
            <li className="about">
                <CardWidjetComponent />
            </li>
        </ul>
      </>
    );
  };
  
  export default NavBarComponent;