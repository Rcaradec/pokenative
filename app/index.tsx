import { Link } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Test.</Text>
      <Link href='/about'>A propos</Link>
      <Link
        href={{
          pathname: "/pokemon/[id]",
          params: { id: 3 },
        }}
      >
        Pokemon 3
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff0000",
  },
});
