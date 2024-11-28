import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela1" component={'listaProdutos'} />
        <Stack.Screen name="Tela2" component={Tela2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}