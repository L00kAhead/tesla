import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="tesla logo" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu>Menu</CustomMenu>
      </RightMenu>

      <BurgerNav>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Cyber Truck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 3.2rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 500;
    text-transform: uppercase;
    padding: 0 0.8rem;
    flex-wrap: nowrap;
  }

  @media (max-width: 987px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 500;
    text-transform: uppercase;
    margin-right: 0.8rem;
  }
`;

const CustomMenu = styled.a`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom 0;
  right 0;
  background-color: #fff;
  width: 20rem;
  z-index: 16;
  list-style: none;
  padding: 1.25rem;
  text-align: left;

  li {
      padding : 1rem 0;
      border-bottom: 1px solid rgba(0,0,0,0.2);
      a {
          font-weight: bold;
      } 
  }
`;
