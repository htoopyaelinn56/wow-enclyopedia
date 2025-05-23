import { FlatList, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import { COLORS } from '../../constants/colors';

interface Category {
    id: string;
    name: string;
    iconName: string;
}

const CATEGORIES: Category[] = [
    { id: 'items', name: 'Items', iconName: 'treasure-chest' },
    { id: 'quests', name: 'Quests', iconName: 'map-marker-question-outline' },
    { id: 'mounts', name: 'Mounts', iconName: 'horse-variant' },
    { id: 'zones', name: 'Zones', iconName: 'map-legend' },
];

const NUM_COLUMNS = 2;
const SCREEN_WIDTH = Dimensions.get('window').width;

export const CategoryGrid: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleCategoryPress = (category: Category) => {
        navigation.navigate('CategoryScreen', {
            categoryId: category.id,
            categoryName: category.name
        });
    };

    const renderGridItem = ({ item }: { item: Category }) => (
        <TouchableOpacity
            style={styles.gridItem}
            onPress={() => handleCategoryPress(item)}
            activeOpacity={0.7}
        >
            <Icon name={item.iconName} size={40} color={COLORS.accent} />
            <Text style={styles.gridItemText}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderGridItem}
            keyExtractor={(item) => item.id}
            numColumns={NUM_COLUMNS}
            contentContainerStyle={styles.gridContainer}
        />
    );
};

const styles = StyleSheet.create({
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
        color: COLORS.textSecondary,
        textAlign: 'center',
    },
});