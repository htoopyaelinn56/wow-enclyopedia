import { useEffect } from 'react';
import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppBar } from './src/components/AppBar/AppBar';
import { CategoryGrid } from './src/components/CategoryGrid/CategoryGrid';
import { CategoryScreen } from './src/screens/CategoryScreen';
import { COLORS } from './src/constants/colors';

export type RootStackParamList = {
  Home: undefined;
  Category: { categoryId: string; categoryName: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeScreen: React.FC = () => {
  return (
    <>
      <AppBar title='WoW Enclyopedia' />
      <CategoryGrid />
    </>
  );
};

const App: React.FC = () => {
  const setNavigationBarColor = async () => {
    try {
      await NavigationBar.setBackgroundColorAsync(COLORS.primaryDark);
    } catch (e) {
      console.log(`Navigation bar color change failed: ${e}`);
    }
  };

  useEffect(() => {
    setNavigationBarColor();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.primaryDark} />
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primaryDark }}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: COLORS.primaryDark },
            animation: 'fade',
            animationDuration: 30,
            presentation: 'card'
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};


export default App;