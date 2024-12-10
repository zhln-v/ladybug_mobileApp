import { getTours, TourType } from '@/app/apiController/getTours';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react'
import Promo from '../articles/Promo';
import ShowFiltres from '../Buttons/ShowFiltres';
import { FlatList } from 'react-native';
import Tour from './Tour';
import { StyleSheet } from 'react-native';

const Tours = () => {
    const [tours, setTours] = useState<TourType[] | null>(null);

    useEffect(() => {
        const loadTours = async () => {
          try {
            const result = await getTours();
            setTours(result);
          } catch (error) {
            console.error("Ошибка при загрузке туров:", error);
          }
        };
      
        loadTours();
      }, []);
      

    return (
        <LinearGradient
            colors={['#FFFFFF', '#2B4D66']}
            style={styles.container}
        >
            <Promo title='Горящие туры' subtitle='самые актуальные предложения' />
            <ShowFiltres />

            <FlatList
                data={tours}
                keyExtractor={(item, index) => index.toString()}
                style={{paddingVertical: 30}}
                renderItem={({ item }) => (
                    <Tour
                        {...item}
                    />
                )}
            />
            

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});

export default Tours
