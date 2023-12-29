import styled from 'styled-components';

export const IconWrapper = styled.svg`
    display: inline-block;
    vertical-align: top;
    width: ${({ $csswidth }: any) => `${$csswidth}rem`};
    height: ${({ $cssheight }: any) => `${$cssheight}rem`};
    fill: ${({ $fill }: any) => $fill};
    transition: ${(props) => `${props.theme.transitions.small}fill`};
`;
