import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Text from "../Text";
import { FontAwesome } from "@expo/vector-icons";
import { Item } from "../../types";

interface Props {
  item: Item;
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "lightgrey",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "darkgrey",
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const ListItem: React.FC<Props> = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={styles.itemContainer}>
        <Text>{item.name}</Text>
        <FontAwesome name="remove" size={24} color="firebrick" />
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
