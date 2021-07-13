import React from "react";
import { useSelector } from "react-redux";

// Components
import ShopItem from "./ShopItem";
import Loading from "../Loading";

// Styling
import { Text } from "react-native";
import { Center, List, Box } from "native-base";

const ShopList = ({ navigation }) => {
  const shops = useSelector((state) => state.shopReducer.shops);
  const loading = useSelector((state) => state.shopReducer.loading);
  if (loading) return <Loading />;

  const shopList = shops.map((shop) => (
    <ShopItem key={shop.id} navigation={navigation} shop={shop} />
  ));

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
