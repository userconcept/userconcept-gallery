import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../reducers/userReducer';
import { useTypedSelector } from './../../hooks/useTypedSelector';
import Icon from './../Icon';
import {
    Container,
    Center,
    Logo,
    LogoText,
    Nav,
    NavList,
    NavItem,
    NavLinkStyled,
    NavLinkText,
    HeaderRight,
    AccountButton,
    AccountButtonText,
    AccountButtonLogout,
} from './styles';

const Header: React.FC = () => {
    // const isAuth = useTypedSelector((state) => state.user.isAuth);
    const { isAuth, currentUser } = useTypedSelector((state) => state.user);
    const dispatch = useDispatch();

    const navData = [
        {
            id: 0,
            href: '/',
            icon: <Icon name="home" csswidth="2.4" cssheight="2.4" color="currentColor" />,
            text: 'Home',
        },
        {
            id: 1,
            href: '/photos',
            icon: <Icon name="image" csswidth="2.4" cssheight="2.4" color="currentColor" />,
            text: 'Photos',
        },
        {
            id: 2,
            href: '/users',
            icon: <Icon name="user" csswidth="2.4" cssheight="2.4" color="currentColor" />,
            text: 'Users',
        },
        {
            id: 3,
            href: '/disk',
            icon: <Icon name="cloud" csswidth="2.4" cssheight="2.4" color="currentColor" />,
            text: 'Disk',
        },
        {
            id: 4,
            href: '/contact',
            icon: <Icon name="contact" csswidth="2.4" cssheight="2.4" color="currentColor" />,
            text: 'Contact',
        },
    ];

    return (
        <Container>
            <Center>
                <Logo>
                    <Icon name="logo" csswidth="4.8" cssheight="4.8" color="none" />
                    <LogoText>Photos</LogoText>
                </Logo>
                <Nav>
                    <NavList>
                        {navData.map((obj) => (
                            <NavItem key={obj.id}>
                                <NavLinkStyled
                                    to={obj.href}
                                    className={({ isActive }) => (isActive ? 'active' : '')}>
                                    {obj.icon}
                                    <NavLinkText>{obj.text}</NavLinkText>
                                </NavLinkStyled>
                            </NavItem>
                        ))}
                    </NavList>
                </Nav>
                <HeaderRight>
                    {isAuth ? (
                        <AccountButtonLogout onClick={() => dispatch(logout())}>
                            <Icon
                                name="log_out"
                                csswidth="2.4"
                                cssheight="2.4"
                                color="currentColor"
                            />
                            <AccountButtonText>{currentUser.email} Log Out</AccountButtonText>
                        </AccountButtonLogout>
                    ) : (
                        <>
                            <AccountButton to={'/registration'}>
                                <Icon
                                    name="registration"
                                    csswidth="2.4"
                                    cssheight="2.4"
                                    color="currentColor"
                                />
                                <AccountButtonText>Registration</AccountButtonText>
                            </AccountButton>
                            <AccountButton to={'/login'}>
                                <Icon
                                    name="log_in"
                                    csswidth="2.4"
                                    cssheight="2.4"
                                    color="currentColor"
                                />
                                <AccountButtonText>Log In</AccountButtonText>
                            </AccountButton>
                        </>
                    )}
                </HeaderRight>
            </Center>
        </Container>
    );
};

export default Header;
