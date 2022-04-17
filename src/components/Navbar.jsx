import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Logo from "../assets/img/logo.png";
import { useState } from "react";

const Navbar = () => {

    const [shown, setShown] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img src={Logo} alt="logo" />
            </div>
            <ul className="navbar__list">
                <li className="navbar__list_items">
                    <a href="#home">Home</a>
                </li>
                <li className="navbar__list_items">
                    <a href="#about">About</a>
                </li>
                <li className="navbar__list_items">
                    <a href="#menu">Menu</a>
                </li>
                <li className="navbar__list_items">
                    <a href="#awards">Awards</a>
                </li>
                <li className="navbar__list_items">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="navbar__last">
                <div className="navbar__last_login">Login</div>
                <div className="navbar__last_divider"></div>
                <div className="navbar__last_book">Book</div>
            </div>

            <div className="navbar__smallscreen">
                <GiHamburgerMenu color="#fff" fontFamily={27} onClick={() => setShown(!shown)} />
                {
                    shown ?
                        <>
                            <div className="navbar__smallscreen__overlay">
                                <div className="navbar__smallscreen__overlay_close">
                                <AiOutlineCloseCircle color="#fff" fontFamily={27} onClick={() => setShown(!shown)} />
                                </div>
                                <ul className="navbar__smallscreen__list">
                                    <li className="navbar__smallscreen__list_items">
                                        <a href="#home">Home</a>
                                    </li>
                                    <li className="navbar__smallscreen__list_items">
                                        <a href="#about">About</a>
                                    </li>
                                    <li className="navbar__smallscreen__list_items">
                                        <a href="#menu">Menu</a>
                                    </li>
                                    <li className="navbar__smallscreen__list_items">
                                        <a href="#awards">Awards</a>
                                    </li>
                                    <li className="navbar__smallscreen__list_items">
                                        <a href="#contact">Contact</a>
                                    </li>
                                </ul><div className="navbar__smallscreen__last">
                                    <div className="navbar__smallscreen_last_login">Login</div>
                                    <div className="navbar__smallscreen_last_divider"></div>
                                    <div className="navbar__smallscreen_last_book">Book</div>
                                </div>
                            </div>

                        </>

                        :
                        ''
                }
            </div>
        </div>
    );
};

export default Navbar;
