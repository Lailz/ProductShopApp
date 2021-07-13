import React from "react";

// Stylings
import styles from "../../styles";
import { List } from "native-base";

const ProductItem = ({ product }) => {
  return <List.Item style={styles.item}>{product.name}</List.Item>;
};

export default ProductItem;
