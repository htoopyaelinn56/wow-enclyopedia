import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { COLORS } from '../constants/colors';
import { RootStackParamList } from '../../App';
import { useState } from 'react';
import { AppBar } from '../components/AppBar/AppBar';

type Props = NativeStackScreenProps<RootStackParamList, 'CategoryScreen'>;

interface ListItem {
    id: string;
    name: string;
    description: string;
}

const MOCK_DATA: ListItem[] = [
    { id: '1', name: 'Item 1', description: 'Description for item 1' },
    { id: '2', name: 'Item 2', description: 'Description for item 2' },
    { id: '3', name: 'Item 3', description: 'Description for item 3' },
];

export const CategoryScreen: React.FC<Props> = ({ route }) => {
    const { categoryId, categoryName } = route.params;
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(MOCK_DATA);

    const handleSearch = (text: string) => {
        setSearchQuery(text);
        const filtered = MOCK_DATA.filter(item =>
            item.name.toLowerCase().includes(text.toLowerCase()) ||
            item.description.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const renderItem = ({ item }: { item: ListItem }) => (
        <View style={styles.listItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <AppBar title={categoryName} showBackButton />
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    placeholderTextColor={COLORS.textSecondary}
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
            </View>
            <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryDark,
    },
    header: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
    },
    searchContainer: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    searchInput: {
        backgroundColor: COLORS.surface,
        padding: 12,
        borderRadius: 8,
        color: COLORS.textPrimary,
        fontSize: 16,
    },
    listContainer: {
        padding: 16,
    },
    listItem: {
        backgroundColor: COLORS.surface,
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
    },
    itemName: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.textPrimary,
        marginBottom: 4,
    },
    itemDescription: {
        fontSize: 14,
        color: COLORS.textSecondary,
    },
});