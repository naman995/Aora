import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
    return (
        <View className="flex-1 items-center justify-center">
            <Text className="text-3xl bg-red-200 font-pblack">Aora</Text>
            <StatusBar style="auto" />
            <Link href="/home">Go To Home</Link>
        </View>
    );
}

 
