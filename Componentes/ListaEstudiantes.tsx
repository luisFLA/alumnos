import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { estudiantesContext } from "../Context/ContextEstudiantes";

export default function ListaEstudiantes() {
  const { estudiantes } = useContext(estudiantesContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Estudiantes:</Text>
      <FlatList
        data={estudiantes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.id}. {item.name}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  item: { fontSize: 18, paddingVertical: 6 },
});
