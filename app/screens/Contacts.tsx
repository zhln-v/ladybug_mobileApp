import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Promo from '../components/articles/Promo'

const Contacts = () => {
  return (
    <LinearGradient
            colors={['#FFFFFF', '#FFFFFF']}
            style={styles.container}
        >
            <Promo title='Контакты' subtitle='Бронируйте удобным для вас способом' />

            <View style={styles.socialBlock}>
                <Image style={styles.socialIcon} source={require('../../assets/images/tg.png')} />
                <Image style={styles.socialIcon} source={require('../../assets/images/vk.png')} />
                <Image style={styles.socialIcon} source={require('../../assets/images/wa.png')} />
                <Image style={styles.socialIcon} source={require('../../assets/images/ig.png')} />
            </View>

            <View style={styles.content}>
                <Text style={[styles.mainText, {marginTop: 40, textTransform: 'uppercase'}]}>График работы</Text>
                
                <View style={{gap: 10, marginTop: 20}}>
                    <View style={{flexDirection: 'row', gap: 10}}>
                        <Text style={styles.textDays}>ПН/ПТ</Text>
                        <Text>с 9:00 до 21:00</Text>
                    </View>
                    <View style={{flexDirection: 'row', gap: 10}}>
                    <Text style={styles.textDays}>ПН/ПТ</Text>
                    <Text>с 10:00 до 18:00</Text>
                    </View>
                </View>
                
                <Text style={[styles.mainText, {marginTop: 20,fontSize: 20}]}>Расположение</Text>
                <Image style={styles.map} source={require('../../assets/images/3D-map.png')} />
            </View>
            
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    socialBlock: {
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'space-between',
        paddingHorizontal: 60
    },
    socialIcon: {
        width: 50,
        aspectRatio: 1,
        resizeMode: 'contain'
    },
    map: {
        width: 300,
        height: 300,
        resizeMode: 'contain'
    },
    mainText: {
        fontFamily: 'Nunito',
        fontSize: 25,
        fontWeight: 400
    },
    content: {
        alignItems: 'center'
    },

    textDays: {
        backgroundColor: '#2B4D66',
        padding: 2.5,
        paddingHorizontal: 15,
        borderRadius: 10,
        color: '#fff',
        fontSize: 10,
        fontFamily: 'Nunito'
    },
    textHours: {
        fontFamily: 'Nunito',
        fontSize: 15
    }
})

export default Contacts
