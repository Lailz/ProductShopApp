import React from "react";
import { Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { CART_LIST } from "../Navigation/types";

const CartButton = ({ navigation }) => {
  return (
    <Icon
      as={AntDesign}
      color="white"
      name="shoppingcart"
      onPress={() => navigation.navigate(CART_LIST)}
    />
  );
};

export default CartButton;
