import { Dimensions, StyleSheet } from "react-native";

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: screenHeight / 3,
  },
  content: {
    gap: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  description: {
    color: "#888",
    fontSize: 11,
    paddingLeft: 20,
    paddingRight: 20,
  },
  ingredientList: {
    gap: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
  card: {
    fontSize: 12,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 4,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 15,
  },
  ingredientName: {
    fontWeight: "500",
  },
  ingredientUnit: {
    color: "#888",
  },
  instructionContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
});

export default styles;
