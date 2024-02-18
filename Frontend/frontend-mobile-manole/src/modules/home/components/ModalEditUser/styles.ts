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
  width: 25%;
`

export const InputText = styled.TextInput`
  flex: 1;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  padding: 4px 12px;
`

export const ButtonContent = styled.View`
  width: 100%;
  align-items: flex-end;
  padding: 24px;
`

export const ButtonSave = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.green200};
  padding: 8px 12px;
  border-radius: 4px;
`

export const ButtonText = styled.Text`
  font-size: 16px;
`
