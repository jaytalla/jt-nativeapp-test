import { Button, Pressable, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import styles from '../_style'

export default function TabOneScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Page</Text>
            {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
            <TextInput
                style={styles.textbox}
                defaultValue="Username"
            />
            <Pressable style={styles.textbox} onPress={() => alert("ey")}>
                <Text style={styles.title}>LOGIN</Text>
            </Pressable>
        </View>
    );
}

