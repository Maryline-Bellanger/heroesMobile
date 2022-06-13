import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const HeroCard = ({hero}) => {
  return (
    
    <View>
      <View>
        {<Image source={{ uri: `${hero.image}`}} resizeMode='cover' style={styles.heroImage}  />}
        <View style={styles.heroCardContent}>
          <Text style={styles.heroTitle}>{hero.name}</Text>
          <Text style={styles.heroText}>Endurance : {hero.stamina}</Text>
        </View>
      </View>
    </View>
  );
};

export default HeroCard;

const styles = StyleSheet.create({
  heroImage: {
    width: '100%',
    height: 140,
  },
  heroCardContent: {
    alignItems: 'center',
    marginTop: 10,
  },
  heroTitle:{
    fontSize: 18,
    fontFamily: 'AkayaKanadaka_400Regular',
    /* color: '#2B2A2C', */
  },
  heroTitleLight:{
    fontSize: 18,
    fontFamily: 'AkayaKanadaka_400Regular',
    /* color: 'seashell', */
  },
  heroText: {
    fontSize: 10,
    fontFamily: 'RocknRollOne_400Regular',
    /* color: '#2B2A2C', */
  },
  heroTextLight: {
    fontSize: 10,
    fontFamily: 'RocknRollOne_400Regular',
    /* color: 'seashell', */
  }
})