import { View, Text, StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../constants/colors';

export const AppBar: React.FC = () => {
    return (
        <View style={styles.appBar}>
            <Text style={styles.appBarTitle}>WoW Encyclopedia</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    appBar: {
        height: 60,
        backgroundColor: COLORS.primaryDark,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
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
        color: COLORS.textPrimary,
        fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto',
    },
});