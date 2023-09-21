import { StyleSheet } from "react-native"

export default StyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "rgba(0, 0, 0, 0.1)",
    height: 40,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "black",
    height: 100,
  },
  eyeIcon: {
    marginLeft: 12,
  },
  focusedInput: {
    borderColor: "#1B9FFC",
    borderWidth: 0.5,
    borderStyle: "solid",
  },
})
