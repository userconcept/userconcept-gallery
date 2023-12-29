import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.header`
    padding: 1.6rem 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
`;

export const Center = styled.div`
    max-width: ${(props) => props.theme.sizes.containerWidth};
    margin: 0 auto;
    padding: 0 1.6rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled(Link).attrs({
    to: '/',
})`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    color: ${(props) => props.theme.colors.grey5};
    text-decoration: none;
    transition: ${(props) => `${props.theme.transitions.small}color`};

    &:hover {
        color: blue;
    }

    svg {
        display: block;
        margin-right: 1.4rem;
    }
`;

export const LogoText = styled.span``;

export const Nav = styled.nav``;

export const NavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
`;

export const NavItem = styled.li`
    margin-right: 3.2rem;

    &:last-of-type {
        margin-right: 0;
    }
`;

export const NavLinkStyled = styled(NavLink)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    color: ${(props) => props.theme.colors.grey5};
    text-decoration: none;
    transition: ${(props) => `${props.theme.transitions.small}color`};

    &:hover {
        color: blue;
    }

    svg {
        display: block;
        margin-right: 0.4rem;
    }
`;

export const NavLinkText = styled.span`
    display: block;
`;

export const HeaderRight = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
`;

export const AccountButton = styled(Link)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    margin-right: 3.2rem;
    color: ${(props) => props.theme.colors.grey5};
    text-decoration: none;
    transition: ${(props) => `${props.theme.transitions.small}color`};

    &:last-of-type {
        margin-right: 0;
    }

    &:hover {
        color: blue;
    }

    svg {
        display: block;
        margin-right: 0.6rem;
    }
`;

export const AccountButtonText = styled.span``;

export const AccountButtonLogout = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    margin-right: 3.2rem;
    color: ${(props) => props.theme.colors.grey5};
    text-decoration: none;
    transition: ${(props) => `${props.theme.transitions.small}color`};

    &:last-of-type {
        margin-right: 0;
    }

    &:hover {
        color: blue;
    }

    svg {
        display: block;
        margin-right: 0.6rem;
    }
`;
