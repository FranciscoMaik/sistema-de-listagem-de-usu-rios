import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useUserContext } from "../../modules/home/hooks/useUserContext";

import { ModalInfo, ModalCreateUser } from "../../modules/home/components"

import { Feather } from '@expo/vector-icons';

import * as S from "../../modules/home/styles/styles"
import { useTheme } from "styled-components/native";

const SIZE_ICON = 18

export const Home: React.FC = () => {
  const { colors } = useTheme()
  const { users, setIdUser, removeClient } = useUserContext();

  const [showModalInfo, setShowModalInfo] = useState(false)
  const [showModalCreate, setShowModalCreate] = useState(false)

  const handleModalInfo = (id: string) => {
    setIdUser(id)
    setShowModalInfo(true)
  }


  return (
    <>
      <S.Container>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <S.Cards>
              <View>
                <S.Name>{item.name}</S.Name>
                <Text>{item.email}</Text>
              </View>

              <S.Icons>
                <Feather name="trash-2" size={SIZE_ICON} color={colors.red200} onPress={() => removeClient(item.id)} />
                <Feather name="info" size={SIZE_ICON} color={colors.green700} onPress={() => handleModalInfo(item.id)} />
                <Feather name="edit" size={SIZE_ICON} color={colors.blue200} />
              </S.Icons>
            </S.Cards>
          )}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <S.Header>
              <S.Title>Lista de Usuários</S.Title>
              <S.Button onPress={() => setShowModalCreate(prev => !prev)}>
                <Text>Criar usuário</Text>
              </S.Button>
            </S.Header>
          )}
        />
      </S.Container>

      <ModalInfo
        visible={showModalInfo}
        onClosed={() => setShowModalInfo(prev => !prev)}
        title="Usuário"
      />

      <ModalCreateUser
        visible={showModalCreate}
        onClosed={() => setShowModalCreate(prev => !prev)}
        title="Criar Usuário"
      />
    </>
  );
};

