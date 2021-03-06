import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { AuthContext } from "../context/auth";

export default function MenuBar() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;
  // /login
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const handleItemClick = (e, { name }) => setActiveItem(name);
  const [activeItem, setActiveItem] = useState(path);
  const menuBar = user ? (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item name={user.username} as={Link} to="/" />

      <Menu.Menu position="right">
        <Menu.Item name="logout" onClick={logout} />
      </Menu.Menu>
    </Menu>
  ) : (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />

      <Menu.Menu position="right">
        <Menu.Item
          name="login"
          active={activeItem === "login"}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        />
        <Menu.Item
          name="register"
          active={activeItem === "register"}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        />
      </Menu.Menu>
    </Menu>
  );
  return menuBar;
}
