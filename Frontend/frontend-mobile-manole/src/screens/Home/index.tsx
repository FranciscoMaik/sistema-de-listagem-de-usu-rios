import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useUsers } from "../../modules/home/hooks/useUsers";


import { Feather } from '@expo/vector-icons';

const SIZE_ICON = 18

export const Home: React.FC = () => {
  const { users } = useUsers();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={styles.containerCards}>
            <View style={styles.card}>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
            </View>

            <View style={styles.icons}>
              <Feather name="trash-2" size={SIZE_ICON} color="red" />
              <Feather name="info" size={SIZE_ICON} color="green" />
              <Feather name="edit" size={SIZE_ICON} color="blue" />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.title}>Lista de Usuários</Text>
            <TouchableOpacity style={styles.button}>
              <Text>Criar usuário</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16
  },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  containerCards: {
    marginBottom: 12,
    borderStyle: "solid",
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#00ff00"
  },
  card: {
  },
  icons: {
    flexDirection: "row",
    gap: 6
  }
});
