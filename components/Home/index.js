import React from "react";
import { StyleSheet, ImageBackground, Text, View } from "react-native";

const Home = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: "https://fsb.zobj.net/crop.php?r=zCIBlgMZXIDnxrZWapYVGOUEmWWXKsgC2PK7YSLS22IT0NQ1g3Jms16B-ntaMbHz5RovnluCXKpUtm81TEOW8EIPYemGpq0ZNCyTV6SDp-qlBfiDCO2Q3XssUKB3gcJvHLwGl08CVy3erOs7LaMsb0bbH40DplYi9WiZidm_qFYWhXDVZ1b_5UfKnWY",
      }}
    >
      <View style={styles.titleView}>
        <Text style={styles.title}>Chocolate & Beyond</Text>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  titleView: {
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { color: "#fff", fontSize: 38, textAlign: "center" },
});
