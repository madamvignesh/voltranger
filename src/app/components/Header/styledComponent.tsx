import { MdMenu, MdClose } from "react-icons/md";
import styled from "styled-components";

interface IconProps {
  isOpen?: boolean;
}

export const MenuIcon = styled(MdMenu)<IconProps>`
  display: none;
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'none' : 'block'};
    font-size: 2rem;
    color: white;
    cursor: pointer;
  }
`;

export const CloseIcon = styled(MdClose)<IconProps>`
  display: none;
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    font-size: 2rem;
    color: white;
    cursor: pointer;
  }
`;
