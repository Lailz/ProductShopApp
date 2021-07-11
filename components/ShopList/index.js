import React from "react";
import { useSelector } from "react-redux";

// Styling
import { StyleSheet, Text, View } from "react-native";
import { Center, Spinner, List, Box } from "native-base";
import ShopItem from "./ShopItem";

const ShopList = () => {
  const shops = useSelector((state) => state.shopReducer.shops);
  const loading = useSelector((state) => state.shopReducer.loading);
  if (loading)
    return (
      <Center flex={1}>
        <Spinner color="blue" />
      </Center>
    );

  const shopList = shops.map((shop) => <ShopItem key={shop.id} shop={shop} />);

  return (
    <Center flex={1}>
      <Box w="95%">
        <Text>List</Text>
        <List space={2} my={2}>
          {shopList}
        </List>
      </Box>
    </Center>
  );
};

export default ShopList;

const styles = StyleSheet.create({});
