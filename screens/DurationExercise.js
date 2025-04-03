import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export default function DurationExercise({ route, navigation }) {
  const { name, suggested } = route.params;
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      setInterval(() => setTime((prev) => prev + 1), 1000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.counter}>Time: {time}s</Text>

      <Button
        title="Start Timer"
        onPress={startTimer}
        buttonStyle={styles.timerButton}
      />
      <Button
        title="Reset Timer"
        onPress={() => setTime(0)}
        buttonStyle={styles.resetButton}
      />

      <Button
        title={`Suggested: ${suggested}`}
        onPress={() =>
          navigation.navigate("DurationExercise", {
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
  timerButton: { marginTop: 10, backgroundColor: "#210124" },
});
