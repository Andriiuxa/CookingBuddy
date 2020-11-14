import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { uuid } from "../../utils";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Text from "../Text";
import ListItem from "./ListItem";
import { Item } from "../../types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  buttonGradient: {
    width: 100,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

const ShoppingList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("@itemlist");
        if (value !== null) {
          const parsedValue = JSON.parse(value);
          setItems(parsedValue);
        }
      } catch (e) {
        console.error("Getting Items Error: ", e);
      }
    };

    getData();
  }, []);

  const addItem = () => {
    setItems([...items, { id: uuid(), name: "" }]);
    saveData();
  };

  const removeItem = (id: string) => {
    setItems([...items.filter((item) => item.id !== id)]);
    saveData();
  };

  const onChange = (id: string, text: string) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    items[itemIndex] = { id, name: text };
    setItems([...items]);
  };

  const saveData = async () => {
    try {
      const jsonValue = JSON.stringify(items);
      await AsyncStorage.setItem("@itemlist", jsonValue);
    } catch (e) {
      console.error("Saving Items Error: ", e);
    }
  };

  const renderItem = (item: Item) => {};

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <ListItem
              key={item.id}
              item={item}
              removeItem={removeItem}
              onChange={onChange}
            />
          )}
          keyExtractor={(item: Item) => item.id}
        />
      </SafeAreaView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={addItem}>
          <LinearGradient
            style={styles.buttonGradient}
            colors={["#00d4ff", "#ff00ea"]}
            start={[0, 0]}
            end={[1, 1]}
          >
            <Text>Add Item</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ShoppingList;
