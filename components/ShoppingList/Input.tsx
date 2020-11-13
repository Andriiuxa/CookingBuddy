import React, { useState } from "react";
import { TextInput } from "react-native";

interface Props {
  addItem: (name: string) => void;
  setShowInput: (bool: boolean) => void;
}

const Input: React.FC<Props> = ({ addItem, setShowInput }) => {
  const [value, setValue] = useState("");

  const submit = (text: string) => {
    setValue("");
    addItem(text);
  };

  return (
    <TextInput
      autoFocus={true}
      style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      value={value}
      onChangeText={(text) => {
        setValue(text);
      }}
      onSubmitEditing={(e) => {
        submit(e.nativeEvent.text);
      }}
      blurOnSubmit={false}
      onBlur={() => {
        setShowInput(false);
      }}
    />
  );
};

export default Input;
