import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";

// Stylings
import styles from "../../styles";
import { HStack, List } from "native-base";
import { Text } from "react-native";
import { addItemToCart } from "../../store/actions/cartActions";
import { useDispatch } from "react-redux";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    dispatch(
      addItemToCart({
        quantity: newQuantity,
        itemId: product.id,
      })
    );
  };
  return (
    <HStack w="100%" justifyContent="space-between" alignItems="center">
      <List.Item style={styles.item}>
        <Text>{product.name}</Text>
        <NumericInput
          rounded
          value={quantity}
          onChange={handleQuantity}
          totalHeight={30}
          totalWidth={60}
          initValue={quantity}
        />
      </List.Item>
    </HStack>
  );
};

export default ProductItem;
