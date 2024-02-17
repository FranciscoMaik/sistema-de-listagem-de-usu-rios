import React from 'react'
import { Text, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'

import * as S from './styles'
import { IUser } from '../../types/IUser'

interface ModalInfoProps {
    visible: boolean
    title: string
    onClosed: () => void
    user: IUser | null
    children?: React.ReactNode
}

export const ModalInfo: React.FC<ModalInfoProps> = ({
    children,
    onClosed,
    title,
    visible,
    user
}) => {
    const { colors } = useTheme()

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
                        <S.Paragraph>{user?.name}</S.Paragraph>
                    </S.Infos>
                    <S.Infos>
                        <S.Strong>E-mail:</S.Strong>
                        <S.Paragraph>{user?.email}</S.Paragraph>
                    </S.Infos>
                    <S.Infos>
                        <S.Strong>Telefone:</S.Strong>
                        <S.Paragraph>{user?.phone}</S.Paragraph>
                    </S.Infos>
                    <S.Infos>
                        <S.Strong>Idade:</S.Strong>
                        <S.Paragraph>{user?.age}</S.Paragraph>
                    </S.Infos>
                </S.ContentInfo>
                {children}
            </S.Modal>
        </S.Container>
    )
}