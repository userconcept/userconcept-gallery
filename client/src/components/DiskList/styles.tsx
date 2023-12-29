import styled from 'styled-components';

export const Container = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const Header = styled.li`
    display: grid;
    grid-template-columns: 1fr 4fr repeat(4, 1fr);
`;

export const Name = styled.div`
    grid-column-start: 2;
`;

export const Date = styled.div`
    grid-column-start: 5;
    justify-self: center;
`;

export const Size = styled.div`
    grid-column-start: 6;
    justify-self: center;
`;
