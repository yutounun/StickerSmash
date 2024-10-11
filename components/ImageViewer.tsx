import { StyleSheet } from "react-native";
import { Image } from "expo-image";

const PlaceholderImage = require("@/assets/images/background-image.png");

type Props = {
  selectedImageSrc?: string;
};

export default function ImageViewer({ selectedImageSrc }: Props) {
  return (
    <Image source={selectedImageSrc || PlaceholderImage} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
