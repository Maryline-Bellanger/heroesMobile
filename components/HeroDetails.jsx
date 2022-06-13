import { View, Text, StyleSheet, Image, SafeAreaView, Dimensions } from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const {height} = Dimensions.get('window');

const HeroDetails = ({ route }) => {

  const [detail, setDetail] = useState([]);
  const {itemId} = route.params;

  const baseUrl = Platform.OS === 'android' ? `http://10.0.2.2:8000/heroes/${itemId}` : `http://localhost:8000/heroes/${itemId}`;

  useEffect(() => {
      const getData = async () => {
      try {
          const resData = await axios
              .get(baseUrl)
              .then((res) => {setDetail(res.data)})
      } catch (error) {
          console.error(error)
      }}
      getData()
  }, [itemId])

  return (
    <SafeAreaView style={styles.heroContainer}>
    <View style={styles.heroDetails}>
      <View style={styles.cardDetail}>
        {<Image source={{ uri: `${detail.image}`}} resizeMode='cover' style={styles.heroImage} />}
        <View style={styles.cardDetailContent}>
          <Text style={styles.heroTitle}>{detail.name}</Text>
          <Text style={styles.heroCardContent}>Genre : {detail.gender} - Race: {detail.race}</Text>
          <Text style={styles.heroCardContent}>Taille : {detail.height} - Poid: {detail.weight}</Text>
        </View>
        <View style={styles.cardDetailContent}>
          <Text style={styles.heroTitleStats}>Stats</Text>
          <Text style={styles.heroCardContent}>Vitesse : {detail.speed} - Force : {detail.power}</Text>
          <Text style={styles.heroCardContent}>Endurance : {detail.stamina}</Text>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default HeroDetails;

const styles = StyleSheet.create({
  heroContainer: {
    backgroundColor: '#2B2A2C',
    flex: 1,
    justifyContent: 'center',
  },
  heroDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardDetail: {
    display: 'flex',
    flexDirection: 'column',
    borderColor: 'red',
    width: 320,
    borderWidth: 2,
    backgroundColor:'seashell',
  },
  heroImage: {
    width: '100%',
    height: height * 0.50,
    resizeMode: 'cover',
  },
  cardDetailContent:{
    alignItems: 'center',
    marginBottom: 20,
  },
  heroTitle:{
    marginTop: 20,
    fontSize: 30,
    paddingBottom: 5,
    fontFamily: 'AkayaKanadaka_400Regular',
    color: '#2B2A2C',
  },
  heroTitleStats:{
    fontSize: 24,
    paddingBottom: 5,
    fontFamily: 'AkayaKanadaka_400Regular',
    color: '#2B2A2C',
  },
  heroCardContent: {
    color: '#2B2A2C',
    fontSize: 14,
    fontFamily:'RocknRollOne_400Regular',
  }
})