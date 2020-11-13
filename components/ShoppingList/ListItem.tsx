import React from "react";
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import Text from "../Text";
import { FontAwesome } from "@expo/vector-icons";
import { Item } from "../../types";

interface Props {
  item: Item;
  removeItem: (id: string) => void;
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

const ListItem: React.FC<Props> = ({ item, removeItem }) => {
  return (
    <TouchableOpacity>
      <View style={styles.itemContainer}>
        <Text>{item.name}</Text>
        <TouchableWithoutFeedback
          onPressIn={() => {
            removeItem(item.id);
          }}
        >
          <FontAwesome name="remove" size={24} color="firebrick" />
        </TouchableWithoutFeedback>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
