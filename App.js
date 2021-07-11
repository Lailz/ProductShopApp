import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";

import { Provider } from "react-redux";

// Components
import Home from "./components/Home";
import ShopList from "./components/ShopList";

// Store
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        {/* <Home /> */}
        <ShopList />
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
