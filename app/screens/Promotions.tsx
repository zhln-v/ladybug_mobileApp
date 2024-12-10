import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet } from 'react-native'
import Promo from '../components/articles/Promo'

const Promotions = () => {
  return (
    <LinearGradient
            colors={['#FFFFFF', '#2B4D66']}
            style={styles.container}
        >
            <Promo title='Акции' subtitle='самые выгодные предложения' />

            
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default Promotions
