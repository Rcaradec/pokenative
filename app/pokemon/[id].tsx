import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Pokemon = () => {
  const params = useLocalSearchParams();
  return (
    <View>
      <Text>Pokemon {params.id}</Text>
    </View>
  );
};

export default Pokemon;

const styles = StyleSheet.create({});
