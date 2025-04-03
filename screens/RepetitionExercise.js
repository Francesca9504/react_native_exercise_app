import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export default function RepetitionExercise({ route, navigation }) {
  const { name, suggested } = route.params;
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.counter}>Reps: {count}</Text>

      <Button
        title="Increase"
        onPress={() => setCount(count + 1)}
        buttonStyle={styles.increaseButton}
      />
      <Button
        title="Reset"
        onPress={() => setCount(0)}
        buttonStyle={styles.resetButton}
      />

      <Button
        title={`Suggested: ${suggested}`}
        onPress={() =>
          navigation.navigate("RepetitionExercise", {
            name: suggested,
            suggested: name,
          })
        }
        buttonStyle={styles.suggestedButton}
      />

      <Button
        title="Home"
        onPress={() => navigation.navigate("Home")}
        buttonStyle={styles.homeButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#D8D5DB",
  },
  title: { fontSize: 24, fontWeight: "bold" },
  counter: { fontSize: 20, marginVertical: 10 },
  resetButton: { marginTop: 10, backgroundColor: "#210124" },
  suggestedButton: { marginTop: 10, backgroundColor: "#210124" },
  homeButton: { marginTop: 10, backgroundColor: "#210124" },
  increaseButton: { marginTop: 10, backgroundColor: "#210124" },
});
