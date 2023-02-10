import React from "react";
import AnimatedLottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

function AppActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <AnimatedLottieView
        source={require("../assets/animations/loader.json")}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    height: "100%",
    opacity: 0.7,
    width: "100%",
    zIndex: 1,
  },
});

export default AppActivityIndicator;
