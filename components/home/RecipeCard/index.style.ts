import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 4,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    padding: 10,
    fontWeight: "bold",
  },
  favouriteButton: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 10,
  },
});

export default styles;
