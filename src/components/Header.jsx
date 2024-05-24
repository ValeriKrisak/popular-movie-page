import MenuButton from "./UI/MenuButton/MenuButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { MENU_LIST, ICON_MENU } from "../constants/constants";
import { useState, useEffect, useCallback } from "react";

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className={visible ? "visible" : "hidden"}>
        <div className="nav-bars">
          <nav className="sub-menus">
            <div className="logo">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="The movie database logo"
              />
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </div>
            <div className={`menu-content ${menuOpen ? "open" : ""}`}>
              {MENU_LIST.map((item) => {
                return (
                  <MenuButton key={item.id} options={item.categories}>
                    {item.name}
                  </MenuButton>
                );
              })}
            </div>
          </nav>
          <nav className="user-menus">
            {ICON_MENU.map((item) => {
              return (
                <button key={item.id} className="icon-menu">
                  <FontAwesomeIcon icon={item.name} />
                </button>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
