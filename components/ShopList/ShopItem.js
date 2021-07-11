import { List } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ShopItem = ({ shop }) => {
  return <List.Item>{shop.name}</List.Item>;
};

export default ShopItem;

const styles = StyleSheet.create({});
