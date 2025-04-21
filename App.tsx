import { useEffect } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoryScreen } from './src/screens/CategoryScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { COLORS } from './src/constants/colors';

export type RootStackParamList = {
  HomeScreen: undefined;
  CategoryScreen: { categoryId: string; categoryName: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};


export default App;