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
                        <Text>{title}</Text>
                        <S.ClosedModal onPress={onClosed}>
                            <Feather name="x" size={24} color={colors.black} />
                        </S.ClosedModal>
                    </S.Header>
                </S.Content>
                <Text>{user?.name}</Text>
                {children}
            </S.Modal>
        </S.Container>
    )
}