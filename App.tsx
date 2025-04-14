import { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as NavigationBar from 'expo-navigation-bar';



// --- Define Consistent Colors ---
const COLORS = {
  primaryDark: '#1a1a1a',     // Dark Grey/Off-black for AppBar/StatusBar
  background: '#2c2c2c',      // Dark background for main content area
  surface: '#3a3a3a',        // Slightly lighter background for items/cards
  textPrimary: '#FFFFFF',     // White text for dark backgrounds
  textSecondary: '#E0E0E0',   // Lighter grey text
  accent: '#FFD700',          // Gold color like WoW for icons/highlights
  border: '#444',            // Border color for AppBar
};

// --- Category Definition (No Change) ---
interface Category {
  id: string;
  name: string;
  iconName: string;
}

const CATEGORIES: Category[] = [
  { id: 'items', name: 'Items', iconName: 'treasure-chest' },
  { id: 'weapons', name: 'Weapons', iconName: 'sword-cross' },
  { id: 'recipes', name: 'Recipes', iconName: 'notebook-edit-outline' },
  { id: 'quests', name: 'Quests', iconName: 'map-marker-question-outline' },
  { id: 'mounts', name: 'Mounts', iconName: 'horse-variant' },
  { id: 'zones', name: 'Zones', iconName: 'map-legend' },
];

const NUM_COLUMNS = 2;
const SCREEN_WIDTH = Dimensions.get('window').width;

const WoWEncyclopediaScreen: React.FC = () => {
  let func = async () => {
    try {
      console.log("clicking func");
      await NavigationBar.setBackgroundColorAsync(COLORS.primaryDark);
      console.log(`changeNavigationBarColor success`) // {success: true}
    } catch (e) {
      console.log(`changeNavigationBarColor = ${e}`) // {success: false}
    }
  };

  useEffect(() => {
    func();
  }, []);

  const handleCategoryPress = (category: Category) => {
    console.log(`Navigating to ${category.name}...`);
    // Add navigation logic here
  };

  const renderGridItem = ({ item }: { item: Category }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => handleCategoryPress(item)}
      activeOpacity={0.7}
    >
      {/* Use accent color for icon */}
      <Icon name={item.iconName} size={40} color={COLORS.accent} />
      {/* Use secondary text color */}
      <Text style={styles.gridItemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    // SafeAreaView background can be the main app background
    <SafeAreaView style={styles.safeArea}>

      <StatusBar
        backgroundColor={COLORS.primaryDark}
      />

      {/* App Bar */}
      <View style={styles.appBar}>
        {/* Use primary text color */}
        <Text style={styles.appBarTitle}>WoW Encyclopedia</Text>
      </View>

      <FlatList
        data={CATEGORIES}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id}
        numColumns={NUM_COLUMNS}
        contentContainerStyle={styles.gridContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // Use the main background color here. The status bar area on iOS
    // will show this color unless covered by the AppBar.
    backgroundColor: COLORS.primaryDark,
  },
  appBar: {
    height: 60,
    // Use the primary dark color - SAME as StatusBar background
    backgroundColor: COLORS.primaryDark,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    // Use border color
    borderBottomColor: COLORS.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    // Use primary text color
    color: COLORS.textPrimary,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto',
  },
  gridContainer: {
    padding: 10,
  },
  gridItem: {
    flex: 1,
    margin: 8,
    height: (SCREEN_WIDTH / NUM_COLUMNS) * 0.6,
    minHeight: 120,
    justifyContent: 'center',
    alignItems: 'center',
    // Use surface color for item background
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 1.5,
    elevation: 3,
  },
  gridItemText: {
    marginTop: 10,
    fontSize: 16,
    // Use secondary text color
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
});

export default WoWEncyclopediaScreen;