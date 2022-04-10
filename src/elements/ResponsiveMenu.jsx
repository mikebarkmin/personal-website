import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useMedia from "../hooks/useMedia";
import MenuSvg from "../images/menu.svg";
import CloseSvg from "../images/close.svg";

const SmallMenu = styled.nav`
  position: sticky;
  top: 0;
  z-index: 99;
  padding-top: 15px;
  text-align: center;
  background: #000;
  min-height: 80px;
`;

const LargeMenu = styled.nav`
  position: sticky;
  top: 0;
  border-radius: 0.5rem;
  border-color: #fbb03b;
  border-style: solid;
  border-width: 4px;
  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  background: #000;
  min-height: 80px;

  transition: all 0.5s ease-in-out;
`;

const MenuIcon = styled.button`
  width: 48px;
  height: 48px;
  background: url(${(props) => props.icon});
  border: 0;

  transition: all 0.5s ease-in-out;
`;

const ResponsiveMenu = ({ menu, changeMenuOn }) => {
  const [showMenu, setShowMenu] = useState(false);
  const match = useMedia(`(min-width: ${changeMenuOn})`);

  function handleClick() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      {match ? (
        <LargeMenu>{menu}</LargeMenu>
      ) : (
        <SmallMenu>
          {!showMenu ? (
            <MenuIcon
              aria-label="Open Menu"
              onClick={handleClick}
              icon={MenuSvg}
            />
          ) : (
            <MenuIcon
              aria-label="Close Menu"
              onClick={handleClick}
              icon={CloseSvg}
            />
          )}
          {showMenu ? <div>{menu}</div> : null}
        </SmallMenu>
      )}
    </>
  );
};
ResponsiveMenu.propTypes = {
  menu: PropTypes.node.isRequired,
  changeMenuOn: PropTypes.string.isRequired,
};

export default ResponsiveMenu;
