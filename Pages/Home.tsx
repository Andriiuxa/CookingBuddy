import React from "react";
import { StyleSheet, View } from "react-native";
import { Header, ShoppingList } from "../components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6E6",
  },
});

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header text="Shopping list:" />
      <ShoppingList />
    </View>
  );
};

export default Home;
