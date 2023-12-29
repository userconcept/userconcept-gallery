import styled from 'styled-components';

export const Container = styled.ul`
    margin: 0 -1.6rem;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const Pagination = styled.div`
    & div {
        display: inline-block;
        vertical-align: top;
        padding: 1rem;
        border: 0.1rem solid blue;

        & + div {
            margin-left: 1rem;
        }
    }
`;
