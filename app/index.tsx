import { StatusBar, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemedText from "../components/ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";

export default function Index() {
  const colors = useThemeColors();
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.tint }]}>
      <StatusBar barStyle='light-content' backgroundColor={colors.tint} />
      <ThemedText variant='headline' color='grayWhite'>
        Pokédex
      </ThemedText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
