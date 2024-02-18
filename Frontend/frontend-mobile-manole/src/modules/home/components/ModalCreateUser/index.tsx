import React, { useState } from 'react'
import { Alert, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'

import { useUserContext } from '../../hooks/useUserContext'
import { IUser } from '../../types/IUser'

import * as S from './styles'
interface ModalCreateUserProps {
  visible: boolean
  title: string
  onClosed: () => void
  children?: React.ReactNode
}

export const ModalCreateUser: React.FC<ModalCreateUserProps> = ({
  children,
  onClosed,
  title,
  visible,
}) => {
  const { colors } = useTheme()
  const { createUser } = useUserContext()

  const [newUser, setNewUser] = useState<Partial<IUser>>({
    age: 0,
    email: '',
    name: '',
    phone: '',
  })

  const createNewUser = async () => {
    if (!newUser.name) {
      Alert.alert('Erro', 'Preencha o campo nome!')
      return
    }

    if (!newUser.email) {
      Alert.alert('Erro', 'Preencha o campo e-mail!')
      return
    }

    if (!newUser.phone) {
      Alert.alert('Erro', 'Preencha o campo telefone!')
      return
    }

    if (newUser.phone.length < 11) {
      Alert.alert('Erro', 'O telefone tem que ter no mínimo 11 dígitos!')
      return
    }

    if (!newUser.age) {
      Alert.alert('Erro', 'Preencha o campo idade!')
      return
    }

    await createUser(newUser)

    setNewUser({
      age: 0,
      email: '',
      name: '',
      phone: '',
    })

    onClosed()
  }

  return (
    <S.Container>
      <S.Modal
        visible={visible}
        animationType="slide"
        onRequestClose={onClosed}
      >
        <S.Content>
          <S.Header>
            <View />
            <S.Title>{title}</S.Title>
            <S.ClosedModal onPress={onClosed}>
              <Feather name="x" size={24} color={colors.black} />
            </S.ClosedModal>
          </S.Header>
        </S.Content>

        <S.ContentInfo>
          <S.Infos>
            <S.Strong>Nome:</S.Strong>
            <S.InputText
              value={newUser.name}
              onChangeText={(text) => setNewUser({ ...newUser, name: text })}
            />
          </S.Infos>
          <S.Infos>
            <S.Strong>E-mail:</S.Strong>
            <S.InputText
              value={newUser.email}
              onChangeText={(text) => setNewUser({ ...newUser, email: text })}
            />
          </S.Infos>
          <S.Infos>
            <S.Strong>Telefone:</S.Strong>
            <S.InputText
              value={newUser.phone}
              onChangeText={(text) => setNewUser({ ...newUser, phone: text })}
            />
          </S.Infos>
          <S.Infos>
            <S.Strong>Idade:</S.Strong>
            <S.InputText
              value={String(newUser.age)}
              onChangeText={(text) =>
                setNewUser({ ...newUser, age: Number(text) })
              }
              keyboardType="numeric"
            />
          </S.Infos>
        </S.ContentInfo>

        <S.ButtonContent>
          <S.ButtonSave onPress={createNewUser}>
            <S.ButtonText>Salvar</S.ButtonText>
          </S.ButtonSave>
        </S.ButtonContent>

        {children}
      </S.Modal>
    </S.Container>
  )
}
