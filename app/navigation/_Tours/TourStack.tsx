import Reservation from '@/app/components/_HotTours/Reservation';
import TourInfo from '@/app/components/_HotTours/TourInfo';
import Tours from '@/app/components/_HotTours/Tours';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { TourStackParamList } from './TourStackParams';

const Stack = createStackNavigator<TourStackParamList>();

const TourStack = () => {

    return (
        <Stack.Navigator initialRouteName='Tours' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Tours" component={Tours} />
            <Stack.Screen name="TourInfo" component={TourInfo} />
            <Stack.Screen name="Reservation" component={Reservation} />
        </Stack.Navigator>
    )
}

export default TourStack
