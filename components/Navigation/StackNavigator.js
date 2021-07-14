import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import * as types from "./types";

// Components
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import CartList from "../Cart/CartList";
import CartButton from "../Cart/CartButton";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";

const StackNavigator = () => {
  const { Screen, Navigator } = createStackNavigator();
  return (
    <Navigator
      initialRouteName={types.HOME}
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
        headerTitleStyle: {
          fontStyle: "italic",
          fontWeight: "bold",
        },
      }}
    >
      <Screen
        name={types.HOME}
        component={Home}
        options={{ headerShown: false }}
      />
      <Screen
        name={types.SHOP_LIST}
        component={ShopList}
        options={{ title: "Shops" }}
      />
      <Screen
        name={types.SHOP_DETAIL}
        component={ShopDetail}
        options={({ navigation, route }) => ({
          title: route.params.shop.name,
          headerRight: () => <CartButton navigation={navigation} />,
        })}
      />
      <Screen
        name={types.CART_LIST}
        component={CartList}
        options={{ title: "Cart" }}
      />
      <Screen name={types.SIGNIN} component={Signin} />
      <Screen name={types.SIGNUP} component={Signup} />
    </Navigator>
  );
};

export default StackNavigator;
