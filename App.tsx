import { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { AppBar } from './src/components/AppBar/AppBar';
import { CategoryGrid } from './src/components/CategoryGrid/CategoryGrid';
import { COLORS } from './src/constants/colors';

const WoWEncyclopediaScreen: React.FC = () => {
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
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={COLORS.primaryDark} />
      <AppBar />
      <CategoryGrid />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.primaryDark,
  },
});

export default WoWEncyclopediaScreen;