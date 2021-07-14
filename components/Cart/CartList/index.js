import React from "react";
import { Alert, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Center, List, Box, Button, Text } from "native-base";
import { useDispatch } from "react-redux";
import { checkout } from "../../../store/actions/cartActions";
import { SIGNIN } from "../../Navigation/types";

const CartList = ({ navigation }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartReducer.items);
  const products = useSelector((state) => state.productReducer.products);
  const user = useSelector((state) => state.authReducer.user);

  const cartItems = items
    .map((item) => ({
      ...products.find((product) => product.id === item.itemId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);

  const handleCheckout = () => {
    if (user) dispatch(checkout(items));
    else
      Alert.alert("Sign in ", "You need to be signed in to place an order", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Sign in", onPress: () => navigation.navigate(SIGNIN) },
      ]);
  };
  return (
    <Center flex={1}>
      <Box w="95%">
        <Text>List</Text>
        <List space={2} my={2}>
          {cartItems}
        </List>
        <Button onPress={handleCheckout}>Checkout</Button>
      </Box>
    </Center>
  );
};

export default CartList;

const styles = StyleSheet.create({});
