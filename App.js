import { useRef, useState } from "react";
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function ScrollExample() {
  const [showScrollToTop, setshowScrollToTop] = useState(false);
  const [pos, setpos] = useState(0);
  const scrollViewRef = useRef(null);

  console.log(showScrollToTop);

  const handleScroll = (event) => {
    const { y } = event.nativeEvent.contentOffset;
    setshowScrollToTop(y > 1000); // show button if scroll down 200 pixels
    setpos(y);
  };

  const scrollToTop = (scrollViewRef) => {
    scrollViewRef?.scrollTo({ y: 0, animated: true });
    // scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        onScroll={({
          nativeEvent: {
            contentOffset: { y },
          },
        }) => setshowScrollToTop(y > 200)}
        scrollEventThrottle={16}
        ref={(ref) => (this.scrollViewRef = ref)}
      >
        {/* scrollable content */}
        <View style={{ backgroundColor: "lightblue", padding: 30 }}>
          <Text style={{ fontSize: 50 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus architecto ducimus possimus corporis eveniet quod id
            nulla quia. A laboriosam nostrum quaerat, consequuntur fuga magni
            dignissimos velit, hic sunt pariatur quis voluptates dicta iusto
            <Text style={{ color: "red" }}>{Math.floor(pos)} pxs</Text>
            eaque porro qui veritatis autem rem explicabo non provident saepe
            repellendus. Ullam, maxime! Ea, perspiciatis nemo. Voluptatibus
            architecto ducimus possimus corporis eveniet quod id nulla quia. A
            laboriosam nostrum quaerat, consequuntur fuga magni dignissimos
            velit, hic sunt pariatur quis voluptates dicta iusto eaque porro qui
            veritatis autem rem explicabo non provident saepe repellendus.
            Ullam, maxime! Ea, perspiciatis nemo. Voluptatibus architecto
            ducimus possimus corporis eveniet quod id nulla quia. A laboriosam
            repellendus. Ullam, maxime! Ea, perspiciatis nemo. Voluptatibus
            architecto ducimus possimus corporis eveniet quod id nulla quia. A
            laboriosam nostrum quaerat, consequuntur fuga magni dignissimos
            velit, hic sunt pariatur quis voluptates dicta iusto eaque porro qui
            veritatis autem rem explicabo non provident saepe repellendus.
            Ullam, maxime! Ea, perspiciatis nemo. Voluptatibus architecto
            ducimus possimus corporis eveniet quod id nulla quia. A laboriosam
            nostrum quaerat, consequuntur fuga magni dignissimos velit, hic sunt
            pariatur quis voluptates dicta iusto eaque porro qui veritatis autem
            rem explicabo non provident saepe repellendus. Ullam, maxime! Ea,
            perspiciatis nemo.
          </Text>
        </View>
      </ScrollView>

      {showScrollToTop && (
        <TouchableOpacity
          style={styles.scrollToTopButton}
          onPress={() => scrollToTop(this.scrollViewRef)}
          // onPress={scrollToTop}
        >
          <Text style={styles.scrollToTopText}> Top</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default ScrollExample;

const styles = StyleSheet.create({
  scrollToTopButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 5,
  },
  scrollToTopText: {
    color: "black",
    fontWeight: "bold",
  },
});
