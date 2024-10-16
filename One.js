import React from "react";
import { Button, Text, TextInput, View } from "react-native";

//  repetition is key to learning!

export default function HomeScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Create post"
        onPress={() => navigation.navigate("CreatePostScreen")}
      />
      <Text style={{ margin: 10 }}>
        Post: {route.params.name} : {route.params?.post}
      </Text>
    </View>
  );
}

export function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState("");

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: "HomeScreen",
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
}
