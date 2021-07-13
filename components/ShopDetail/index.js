import React from "react";
import { useSelector } from "react-redux";

import { View, Text } from "react-native";
import { Center } from "native-base";

// Components
import Loading from "../Loading";
import ProductList from "../ProductList";

const ShopDetail = ({ route }) => {
  const { shop } = route.params;
  return (
    <Center flex={1}>
      <Text>{shop.name}</Text>
      <ProductList products={shop.books} />
    </Center>
  );
};

export default ShopDetail;
