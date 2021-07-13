import React from "react";

// Stylings
import styles from "../../styles";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SHOP_LIST } from "../Navigation/types";

const Home = ({ navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity
      onPress={() => navigation.navigate(SHOP_LIST)}
    >
      <ImageBackground
        style={styles.background}
        source={{
          uri: "https://fsb.zobj.net/crop.php?r=zCIBlgMZXIDnxrZWapYVGOUEmWWXKsgC2PK7YSLS22IT0NQ1g3Jms16B-ntaMbHz5RovnluCXKpUtm81TEOW8EIPYemGpq0ZNCyTV6SDp-qlBfiDCO2Q3XssUKB3gcJvHLwGl08CVy3erOs7LaMsb0bbH40DplYi9WiZidm_qFYWhXDVZ1b_5UfKnWY",
        }}
      >
        <View style={styles.titleView}>
          <Text style={styles.title}>Chocolate & Beyond</Text>
        </View>
        <Text style={styles.title}>Check out our Shops</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Home;
