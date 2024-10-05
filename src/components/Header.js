import { LOGO_URL} from "../utils/constants";

const Header =() =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" 
                src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul className="nav-list">
                    <li className="Home">Home</li>
                    <li className="About US">About US</li>
                    <li className="Contact US">Contact US</li>
                    <li className="Cart">Cart</li>
                </ul>

            </div>
        </div>
    );
    };


export default Header;