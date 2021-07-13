import React from "react";

// Stylings
import styles from "../../styles";
import { List } from "native-base";
import { SHOP_DETAIL } from "../Navigation/types";

const ShopItem = ({ navigation, shop }) => {
  return (
    <List.Item
      onPress={() => navigation.navigate(SHOP_DETAIL, { shop })}
      style={styles.item}
    >
      {shop.name}
    </List.Item>
  );
};

export default ShopItem;
