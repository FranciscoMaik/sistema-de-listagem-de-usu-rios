import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useUsers } from "../../modules/home/hooks/useUsers";

import { Feather } from '@expo/vector-icons';

import * as S from "../../modules/home/styles/styles"

const SIZE_ICON = 18

export const Home: React.FC = () => {
  const { users } = useUsers();


  return (
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
              <Feather name="info" size={SIZE_ICON} color="green" />
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
  );
};

