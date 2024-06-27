import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  gap: 20px;
  background-color: #358eac;
  background-image: linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 2px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 2px, transparent 2px);
  background-size: 20px 20px, 20px 20px, 10px 10px, 10px 10px;
  background-position: 0 0, 0 0, 0 1px, 1px 0;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const UserDiv = styled.div`
    display: flex;
    align-items: center;
    span{
        margin-left: 10px;
        font-weight: normal;
        color: ${(props) => props.theme.colors['white']};
    }
`;

export const CircleIcon = styled.div`
    width: 30px;
    height: 30px;
    background-color: red; 
    border-radius: 50%;
`;

export const TitleDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    h1{
        font-weight: bold;
        color: ${(props) => props.theme.colors['white']};
    }
`;
