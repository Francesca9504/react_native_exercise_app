import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { exercises } from "../data/exercises";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() =>
              navigation.navigate(
                item.type === "duration"
                  ? "DurationExercise"
                  : "RepetitionExercise",
                { name: item.name, suggested: item.suggested }
              )
            }
            buttonStyle={styles.button}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#D8D5DB",
  },
  button: {
    marginBottom: 10,
    backgroundColor: "#210124",
  },
});
