import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'

import * as S from './styles'
import { useUserContext } from '../../hooks/useUserContext'
interface ModalInfoProps {
    visible: boolean
    title: string
    onClosed: () => void
    children?: React.ReactNode
}

export const ModalInfo: React.FC<ModalInfoProps> = ({
    children,
    onClosed,
    title,
    visible
}) => {
    const { colors } = useTheme()
    const { userUnique } = useUserContext()

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
                {userUnique && (
                    <S.ContentInfo>
                        <S.Infos>
                            <S.Strong>Nome:</S.Strong>
                            <S.Paragraph>{userUnique?.name}</S.Paragraph>
                        </S.Infos>
                        <S.Infos>
                            <S.Strong>E-mail:</S.Strong>
                            <S.Paragraph>{userUnique?.email}</S.Paragraph>
                        </S.Infos>
                        <S.Infos>
                            <S.Strong>Telefone:</S.Strong>
                            <S.Paragraph>{userUnique?.phone}</S.Paragraph>
                        </S.Infos>
                        <S.Infos>
                            <S.Strong>Idade:</S.Strong>
                            <S.Paragraph>{userUnique?.age}</S.Paragraph>
                        </S.Infos>
                    </S.ContentInfo>
                )}
                {children}
            </S.Modal>
        </S.Container>
    )
}