import React, { useRef } from "react";
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
  itemContainer: {
    flexDirection: "row",
    height: 50,
    padding: 8,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 12,
    borderRadius: 30,
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
  const ref = useRef(null);
  return (
    <View>
      <LinearGradient
        colors={["#297373", "#85FFC7"]}
        style={styles.itemContainer}
        start={[0, 0]}
        end={[1, 1]}
      >
        <TextInput
          ref={ref}
          autoFocus={true}
          style={styles.textInput}
          pointerEvents="none"
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
