import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import head from "../assets/scss/Header.module.scss";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };
    return (
        <header className={head.header}>
            <div className={[head.header, head.content].join(' ')}>
                <NavLink to="/" className={[head.header, head.content, head.logo].join(' ')}>Rookie</NavLink>
                <nav className={`${head.header} ${head.content} ${head.nav}
                                 ${menuOpen && size.width < 768 ? head.isMenu : ""}`}>
                    <ul>
                        <li>
                            <NavLink to="/" onClick={menuToggleHandler}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/music" onClick={menuToggleHandler}>Music</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" onClick={menuToggleHandler}>About</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={[head.header, head.content, head.toggle].join(' ')}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
