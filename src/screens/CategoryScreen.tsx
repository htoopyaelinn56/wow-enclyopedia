import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { COLORS } from '../constants/colors';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Category'>;

export const CategoryScreen: React.FC<Props> = ({ route }) => {
    const { categoryId, categoryName } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{categoryName} Screen</Text>
            <Text style={styles.subText}>Coming Soon...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryDark,
    },
    text: {
        fontSize: 24,
        color: COLORS.textPrimary,
        marginBottom: 10,
    },
    subText: {
        fontSize: 16,
        color: COLORS.textSecondary,
    },
});