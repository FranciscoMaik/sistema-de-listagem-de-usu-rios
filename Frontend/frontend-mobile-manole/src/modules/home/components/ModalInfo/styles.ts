import styled from 'styled-components/native'

export const Container = styled.View``

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
  padding: 24px 16px;
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
`

export const ClosedModal = styled.TouchableOpacity``

export const ContentInfo = styled.View`
  gap: 24px;
  padding: 24px;
`

export const Infos = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`

export const Strong = styled.Text`
  font-size: 18px;
  font-weight: 600;
`

export const Paragraph = styled.Text`
  font-size: 18px;
`
