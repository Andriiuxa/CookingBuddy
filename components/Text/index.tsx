import React from "react";
import { Platform, Text, StyleSheet, TextStyle } from "react-native";

interface Props {
  style?: TextStyle;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "HelveticaNeue" : "Roboto",
    color: "black",
  },
});

const StyledText: React.FC<Props> = ({ children, style }) => (
  <Text style={StyleSheet.compose(styles.text, style as any)}>{children}</Text>
);

export default StyledText;
