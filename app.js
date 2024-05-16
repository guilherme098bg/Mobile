import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { CarProvider } from './components/CarContext'


import CarCountComponent from "./my-app/components/CarCountComponent";
import CarInputComponent from "./my-app/components/CarInputComponent";
import CarListComponent from "./my-app/components/CarListComponent";

export default function App() {
    return (
        <View style={styles.containe}>
         <CarCountComponent />
         <CarInputComponent />
         <CarListComponent />
         <StatusBar style='auto' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})