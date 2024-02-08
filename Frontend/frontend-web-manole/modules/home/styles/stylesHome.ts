import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    
    .header {
        width: 100%;
        max-width: 624px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
        gap: 12px
    }
    `;

export const CardUser = styled.div`
    max-width: 640px;
    width: 100%;
    border: 1px solid ${({theme}) => theme.colors.green200};
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 12px;
    box-shadow: 10px 10px 40px 0px rgba(0,0,0,0.14);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    
    > div {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .icons {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 18px;
        justify-content: flex-end;

        > svg {
            cursor: pointer;
        }
    }

    @media screen and (min-width: 768px) {
        flex-direction: row-reverse;

        .icons {
            width: 20%;
        }
        
    }
`

export const InfoUser = styled.div`
    display: flex;
    gap: 4px;
`

export const ButtonAdd = styled.button`
    background-color: ${({theme}) => theme.colors.green200};
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
`;