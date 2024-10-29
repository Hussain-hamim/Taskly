/* eslint-disable no-undef */
import React from "react";
import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require("./assets/hhamim.jpg")} />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        alt="react native"
        blurRadius={0.9}
        crossOrigin="use-credentials"
        defaultSource={null} // A static image to display while downloading the final image off the network.
        fadeDuration={300}
        height={150}
        loadingIndicatorSource={null}
        onError={null}
        onLayout={null}
        onLoad={null}
        resizeMethod="auto"
        resizeMode="cover"
      />
      <Image
        style={styles.logo}
        source={{
          uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
        }}
      />
    </View>
  );
};

export default DisplayAnImage;
