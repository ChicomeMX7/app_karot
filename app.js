import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import Drawer from "./src/Drawer/Drawer";
import Theme from "./src/Theme/Theme";

export default function App(){
    return(
        <PaperProvider>
            <NavigationContainer>
                <Drawer />
            </NavigationContainer>
        </PaperProvider>
    );
}