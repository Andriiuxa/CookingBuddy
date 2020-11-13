import React, { useState } from "react";
import { uuid } from "uuidv4";
import { View, StyleSheet, Button } from "react-native";
import Input from "./Input";
import ListItem from "./ListItem";
import { Item } from "../../types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ShoppingList: React.FC = () => {
  const [showInput, setShowInput] = useState(false);
  const [items, setItems] = useState<Item[]>([
    { id: uuid(), name: "Milk" },
    { id: uuid(), name: "Eggs" },
    { id: uuid(), name: "Bread" },
    { id: uuid(), name: "Juice" },
  ]);

  const addItem = (name: string) => {
    setItems([...items, { id: uuid(), name }]);
  };

  const removeItem = (id: string) => {
    setItems([...items.filter((item) => item.id !== id)]);
  };

  return (
    <>
      <View style={styles.container}>
        {items.map((item) => (
          <ListItem item={item} removeItem={removeItem} />
        ))}
      </View>
      {showInput && <Input addItem={addItem} setShowInput={setShowInput} />}
      <Button
        title="add"
        onPress={() => {
          setShowInput(true);
        }}
      />
    </>
  );
};

export default ShoppingList;
