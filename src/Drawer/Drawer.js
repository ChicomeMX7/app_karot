import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = () => {
    const AppDrawer = createDrawerNavigator();
  return(
    <AppDrawer.Navigator>
        <AppDrawer.Screen 
        options={{
            
        }}
        />
    </AppDrawer.Navigator>
  );
}

export default Drawer;