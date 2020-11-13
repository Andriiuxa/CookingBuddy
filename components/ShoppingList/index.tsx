import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { uuid } from "uuidv4";
import ListItem from "./ListItem";
import { Item } from "../../types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ShoppingList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: uuid(), name: "Milk" },
    { id: uuid(), name: "Eggs" },
    { id: uuid(), name: "Bread" },
    { id: uuid(), name: "Juice" },
  ]);

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <ListItem item={item} />
      ))}
    </View>
  );
};

export default ShoppingList;
