import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
  label: string;
  theme: string;
  onPress?: () => void;
};

export default function Button({ label, theme = "primary", onPress }: Props) {
  return (
    <View style={[styles.buttonContainer]}>
      <Pressable
        style={[
          styles.button,
          { backgroundColor: theme === "primary" ? "#fff" : "#25292e" },
        ]}
        onPress={onPress}
      >
        {theme === "primary" && (
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
        )}
        <Text
          style={[
            styles.buttonLabel,
            { color: theme === "primary" ? "#25292e" : "#fff" },
          ]}
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
