import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const products = [
  { id: '1', name: 'Produto A', price: 'R$ 50,00', description: 'Descrição do Produto A' },
  { id: '2', name: 'Produto B', price: 'R$ 30,00', description: 'Descrição do Produto B' },
  { id: '3', name: 'Produto C', price: 'R$ 20,00', description: 'Descrição do Produto C' },
];

function ProductListScreen({ navigation }) {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.product}
          onPress={() => navigation.navigate('Details', { product: item })}
        >
          <Text style={styles.productName}>{item.name}</Text>
          <Text>{item.price}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

function ProductDetailsScreen({ route }) {
  const { product } = route.params;
  return (
    <View style={styles.details}>
      <Text style={styles.detailsName}>{product.name}</Text>
      <Text style={styles.detailsPrice}>{product.price}</Text>
      <Text style={styles.detailsDescription}>{product.description}</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Produtos' }} />
        <Stack.Screen name="Details" component={ProductDetailsScreen} options={{ title: 'Detalhes do Produto' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  product: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    padding: 20,
  },
  detailsName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  detailsPrice: {
    fontSize: 20,
    color: 'green',
    marginVertical: 10,
  },
  detailsDescription: {
    fontSize: 16,
  },
});