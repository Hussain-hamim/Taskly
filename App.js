import { useCallback, useRef, useState } from "react";
import {
  Pressable,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function ScrollExample() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const scrollViewRef = useRef(null);

  const handleScroll = ({
    nativeEvent: {
      contentOffset: { x, y },
      contentSize: { height, width },
    },
  }) => {
    setShowScrollToTop(y > 1000); // show button if scroll down 1000 pixels
  };

  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true }); // scrollTo({x: 0, y: 0, animated: true}) method is called to scroll to specific position with smooth animation
  };

  const onRefreshing = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ref={scrollViewRef}
        // scrollTo={{ y: 0, x: 0 }} // we'll change this method by the ref with on onPress

        overScrollMode="auto" // "always", "never"
        pagingEnabled={false}
        persistentScrollbar={true}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefreshing} />
        }
        scrollEnabled={true}
        flashScrollIndicator={null}
      >
        <View
          style={{
            backgroundColor: "lightblue",
            padding: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "orchid",
              fontSize: 40,
              fontWeight: "bold",
            }}
          >
            Hello world
          </Text>

          <Text style={{ fontSize: 30 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus architecto ducimus possimus corporis eveniet quod id
            nulla quia. A laboriosam nostrum quaerat, consequuntur fuga magni
            dignissimos velit, hic sunt pariatur quis voluptates dicta iusto
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
        <Pressable
          android_ripple={{ color: "lightyellow" }}
          style={styles.scrollToTopButton}
          onPress={scrollToTop}
        >
          <Text style={styles.scrollToTopText}>Go To Top</Text>
        </Pressable>
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
