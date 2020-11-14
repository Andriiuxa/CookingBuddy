import React from "react";
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Item } from "../../types";

interface Props {
  item: Item;
  removeItem: (id: string) => void;
  onChange: (id: string, text: string) => void;
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 70,
    backgroundColor:
      "linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(255,0,234,1) 100%)",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
    borderRadius: 20,
  },
});

const ListItem: React.FC<Props> = ({ item, removeItem, onChange }) => (
  <TouchableOpacity>
    <LinearGradient
      colors={["#00d4ff", "#ff00ea"]}
      style={styles.itemContainer}
      start={[0, 0]}
      end={[1, 1]}
    >
      <TextInput
        autoFocus={true}
        style={{
          fontSize: 24,
          fontWeight: "bold",
          paddingRight: 20,
          paddingLeft: 20,
        }}
        value={item.name}
        onChangeText={(text) => {
          onChange(item.id, text);
        }}
      />
      {/* <TouchableWithoutFeedback
          onPressIn={() => {
            removeItem(item.id);
          }}
        >
          <FontAwesome name="remove" size={24} color="firebrick" />
        </TouchableWithoutFeedback> */}
    </LinearGradient>
  </TouchableOpacity>
);

export default ListItem;
