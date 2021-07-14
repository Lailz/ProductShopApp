import React from "react";
import { Icon, Text, Badge, Button } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { CART_LIST } from "../Navigation/types";
import { useSelector } from "react-redux";

const CartButton = ({ navigation }) => {
  const items = useSelector((state) => state.cartReducer.items);
  let total = 0;
  items.forEach((item) => (total += item.quantity));

  return (
    <Button
      startIcon={
        <Badge colorScheme="secondary" ml={1} rounded="md">
          <Text>{total}</Text>
        </Badge>
      }
      variant="ghost"
    >
      <Icon
        as={AntDesign}
        color="white"
        name="shoppingcart"
        onPress={() => navigation.navigate(CART_LIST)}
      />
    </Button>
  );
};

export default CartButton;
