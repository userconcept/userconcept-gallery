import styled from 'styled-components';

export const Container = styled.li`
    margin: 0;
    padding: 1rem 0;
    border-bottom: 0.1rem solid black;
    display: grid;
    grid-template-columns: 1fr 4fr repeat(4, 1fr);
`;

export const Name = styled.div`
    grid-column-start: 2;
`;

export const Type = styled.div``;

export const Date = styled.div`
    grid-column-start: 5;
    justify-self: center;
`;

export const Size = styled.div`
    grid-column-start: 6;
    justify-self: center;
`;
