import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    padding: 24,
  },
  title: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 28.8,
    marginTop: 48,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 18
  },
  listEmptyText: {
    fontSize: 16,
    lineHeight: 19.2,
    fontWeight: "normal",
  },
  todayDate: {
    color: "#000",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 28.8,
  },
  form: {
    flexDirection: "row",
    width: "100%",
    marginTop: 18
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 5,
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: "#31C667",
    borderRadius: 5,
    marginLeft: 16,

    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "#FFF",
    fontSize: 24
  },
  listEmpytText: {
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 19.2,
    textAlign: 'center'
  },
  list: {
    flexGrow: 1,
    justifyContent: "center"
  }
})