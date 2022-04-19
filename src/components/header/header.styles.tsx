import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderFixer = styled.div`
  position: fixed;
  height: 70px;
  width: 100%;
  left: 0px;
  top: 0px;
  z-index: 1;
`;

export const HeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  background-color: rgba(190, 190, 190, 0.9);
  position: absolute;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  transform: translate(0px, -15%);
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const UserMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const SignOutOption = styled(OptionLink)`
  padding: 5px 15px;
`;
