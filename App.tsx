import React from "react";
import { View, StyleSheet } from "react-native";
import ProviderEstudiantes from "./Provider/ProviderEstudiantes";
import ListaEstudiantes from "./Componentes/ListaEstudiantes";

export default function App() {
  return (
    <ProviderEstudiantes>
      <View style={styles.container}>
        <ListaEstudiantes />
      </View>
    </ProviderEstudiantes>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
