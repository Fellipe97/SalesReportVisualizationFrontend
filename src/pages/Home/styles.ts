import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;

    background-color: red;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 370px;
    padding: 10px;
`;

export const TopContent = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 45px;
    h1{
        font-size: ${(props) => props.theme.fontSizes['title']};
    }
`;