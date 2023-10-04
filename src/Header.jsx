import { useRef } from "react";

const Header = () => {
    const burger = useRef();
    const menu = useRef();

    const openMenu = () => {
        burger.current.classList.toggle('active');
        menu.current.classList.toggle('active');
    }

    return (
        <div className="header">
            <div className="header__content">
                <div className="header__logo">
                    <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="logo" />
                </div>
                <div className="header__menu">
                    <ul className="header__list" ref={menu}>
                        <li className="header__list-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="header__list-item">
                            <a href="#">About</a>
                        </li>
                        <li className="header__list-item">
                            <a href="#">Portfolio</a>
                        </li>
                        <li className="header__list-item">
                            <a href="#">Careers</a>
                        </li>
                        <li className="header__list-item">
                            <div className="header__login">
                                <a href="#">Login</a>
                            </div>
                            <div className="header__sign-up">
                                <a href="#">Sign Up</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="burger" ref={burger} onClick={openMenu}>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Header;