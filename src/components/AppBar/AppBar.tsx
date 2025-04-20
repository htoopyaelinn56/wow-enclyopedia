import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface AppBarProps {
    title: string;
    showBackButton?: boolean;
}

export const AppBar: React.FC<AppBarProps> = ({ title, showBackButton = false }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.appBar}>
            <View style={styles.contentContainer}>
                {showBackButton && (
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                        activeOpacity={1}
                    >
                        <Icon name="arrow-left" size={24} color={COLORS.textPrimary} />
                    </TouchableOpacity>
                )}
                <Text style={styles.appBarTitle}>{title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    appBar: {
        height: 60,
        backgroundColor: COLORS.primaryDark,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 4,
        paddingHorizontal: 16,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        marginRight: 16,
    },
    appBarTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto',
    },
});