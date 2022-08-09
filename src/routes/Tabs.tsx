import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  // SafeAreaView,
  StyleSheet,
  // Text,
  // TouchableOpacity,
  // useWindowDimensions,
  // View,
} from 'react-native';
import HomeScreen from 'screens/Home';
import Icon from 'common/components/Icon';
import OrdersScreen from 'screens/Orders';
import FavoriteScreen from 'screens/Favorite';
import ProfileScreen from 'screens/Profile';

// const TabBar = ({ state, descriptors, navigation }) => {
//   const { width } = useWindowDimensions();
//   return (
//     <SafeAreaView
//       style={{ alignItems: 'center', width, backgroundColor: 'transparent' }}
//     >
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           padding: 10,
//           borderTopColor: 'gray',
//           borderTopWidth: 0.2,
//           width: '100%',
//           borderRadius: 30,
//           backgroundColor: 'gray',
//         }}
//       >
//         {state.routes.map((route, index) => {
//           const { options } = descriptors[route.key];
//           const label = options.tabBarLabel || options.title || route.name;

//           const isFocused = state.index === index;

//           const onPress = () => {
//             const event = navigation.emit({
//               type: 'tabPress',
//               target: route.key,
//             });

//             if (!isFocused && !event.defaultPrevented)
//               navigation.navigate(route.name);
//           };

//           const onLongPress = () => {
//             navigation.emit({ type: 'tabLongPress', target: route.key });
//           };

//           return (
//             <TouchableOpacity
//               key={index}
//               accessibilityRole="button"
//               accessibilityState={isFocused ? { selected: true } : {}}
//               accessibilityLabel={options.tabBarAccessibilityLabel}
//               testID={options.tabBarTestID}
//               onPress={onPress}
//               onLongPress={onLongPress}
//               style={{ justifyContent: 'center', alignItems: 'center' }}
//             >
//               <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
//                 {label}
//               </Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     </SafeAreaView>
//   );
// };

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarShowLabel: false,
        tabBarIcon: () => null,
        tabBarStyle: styles.tabBarStyle,
      }}
      // tabBar={props => <TabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: () => <Icon name="home" /> }}
      />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabBarStyle: {
    backgroundColor: 'gray',
    position: 'absolute',
    elevation: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 90,
  },
});
