import React from "react";
import { View, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Item } from "../../types";

interface Props {
  item: Item;
  removeItem: (id: string) => void;
  onChange: (id: string, text: string) => void;
  onSubmitEditing: (id: string, text: string) => void;
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemContainer: {
    flexDirection: "row",
    height: 50,
    padding: 8,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 12,
    borderRadius: 20,
  },
  textInput: {
    fontSize: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  icon: {
    paddingRight: 14,
  },
});

const ListItem: React.FC<Props> = ({
  item,
  removeItem,
  onChange,
  onSubmitEditing,
}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#297373", "#85FFC7"]}
        style={styles.itemContainer}
        start={[0, 0]}
        end={[1, 1]}
      >
        <TextInput
          autoCorrect={false}
          autoFocus={true}
          style={styles.textInput}
          value={item.name}
          onChangeText={(text) => {
            onChange(item.id, text);
          }}
          onSubmitEditing={({ nativeEvent }) => {
            onSubmitEditing(item.id, nativeEvent.text);
          }}
          placeholder="New Item"
        />
        <TouchableOpacity
          onPressIn={() => {
            removeItem(item.id);
          }}
        >
          <MaterialIcons
            style={styles.icon}
            color="#39393A"
            name="delete"
            size={28}
          />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default ListItem;
