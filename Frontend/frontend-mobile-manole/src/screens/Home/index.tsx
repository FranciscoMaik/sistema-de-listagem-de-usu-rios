import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useUsers } from "../../modules/home/hooks/useUsers";

import { ModalInfo } from "../../modules/home/components"

import { Feather } from '@expo/vector-icons';

import * as S from "../../modules/home/styles/styles"
import { IUser } from "../../modules/home/types/IUser";

const SIZE_ICON = 18

export const Home: React.FC = () => {
  const { users } = useUsers();

  const [userUnique, setUserUnique] = useState<IUser | null>(null)
  const [showModalInfo, setShowModalInfo] = useState(false)

  const handleModalInfo = (id: string) => {
    const findUser = users.find(user => user.id === id)
    if (findUser) {
      setUserUnique(findUser)
      setShowModalInfo(true)
    }
  }


  return (
    <>
      <S.Container>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <S.Cards>
              <View>
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
              </View>

              <S.Icons>
                <Feather name="trash-2" size={SIZE_ICON} color="red" />
                <Feather name="info" size={SIZE_ICON} color="green" onPress={() => handleModalInfo(item.id)} />
                <Feather name="edit" size={SIZE_ICON} color="blue" />
              </S.Icons>
            </S.Cards>
          )}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <S.Header>
              <S.Title>Lista de Usuários</S.Title>
              <S.Button>
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
        user={userUnique}
      />
    </>
  );
};

