import styled from 'styled-components';

export const Header = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    background: #333;
    justify-content: center;
    padding: 20px;
`;

Header.Container = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    align-items: center;
`;

export const Avatar = styled.div`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background: #fff ${props => props.image ? `url(${props.image})` : null };
    ${props => props.image ? `background-size: 100%;` :  null}
    border-radius: ${props => props.size / 2}px;
`;