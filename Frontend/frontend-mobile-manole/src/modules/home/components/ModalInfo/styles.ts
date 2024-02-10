import styled from 'styled-components/native'

export const Container = styled.View`
`

export const Modal = styled.Modal`
    align-items: center;
    justify-content: center;
`

export const Content = styled.View`
    background-color: ${({ theme }) => theme.colors.white};
`

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 8px 24px 16px;
`

export const ClosedModal = styled.TouchableOpacity``