import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: ${({ theme }) => theme.colors.ice};
    padding: 60px 20px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`

export const Title = styled.Text`
    font-size: 20px;
    font-weight: 600;
`

export const Button = styled.TouchableOpacity`
    padding: 4px 12px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.green200};
`

export const Cards = styled.View`
    background-color: ${({ theme }) => theme.colors.white};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 8px;
    margin-bottom: 12px;

    border-style: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.green200};
    border-radius: 4px;
`

export const Icons = styled.View`
    flex-direction: row;
    gap: 6px;
`