import styled from 'styled-components';


export const FilterItemContainer = styled.div`
    display: flex;
    gap: 10px;

    align-items: center;

    h1 {
        font-size: 20px;
    }

    select{
        padding: 15px;
        width: 200px;
    }
    @media (max-width: 600px) {
        h1 {
            font-size: 12px;
        }
        select{
            padding: 5px;
            width: 100px;
        }
        flex-direction: column;
    }
`;