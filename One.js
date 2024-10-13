import React, { useState } from "react";
import { Pressable, SafeAreaView, Text } from "react-native";

const One = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <SafeAreaView>
      <Text>Little Lemon menu</Text>

      <Pressable onPress={() => setShowMenu(true)}>
        <Text>view menu</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default One;
