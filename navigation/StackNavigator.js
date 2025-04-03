import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import RepetitionExercise from "../screens/RepetitionExercise";
import DurationExercise from "../screens/DurationExercise";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="RepetitionExercise"
          component={RepetitionExercise}
        />
        <Stack.Screen name="DurationExercise" component={DurationExercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
