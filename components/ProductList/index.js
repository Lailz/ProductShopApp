import React from "react";
import { useSelector } from "react-redux";

// Components
import ProductItem from "./ProductItem";
import Loading from "../Loading";

// Styling
import { Text } from "react-native";
import { List, Box } from "native-base";

const ProductList = ({ products }) => {
  const productList = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  return (
    <Box w="95%">
      <Text>Products</Text>
      <List space={2} my={2}>
        {productList}
      </List>
    </Box>
  );
};

export default ProductList;
