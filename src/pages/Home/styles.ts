import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const FilterDiv = styled.div`
    display: flex;
    width: 100%;
    margin-top: 25px;
    justify-content: space-around;
`;

export const FilterByMonthDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 50px;
`;
export const FilterByMonthItem = styled.div`
    display: flex;
    gap: 10px;

    h1{
        font-size: ${(props) => props.theme.fontSizes['title']};
    }
`;
export const FilterByMonthItemSelect = styled.div`
    display: flex;
    justify-content: space-around;
    cursor: pointer;

    margin-top: 20px;
    h1{
        font-size: ${(props) => props.theme.fontSizes['text']};
    }
`;


export const GraphicDiv = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;