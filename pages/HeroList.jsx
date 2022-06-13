import { View, Text, StyleSheet, ScrollView, TouchableHighlight, SafeAreaView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import HeroCard from '../components/HeroCard';

const HeroList = ({navigation}) => {
    const [heroes, setHeroes] = useState([]);
    const [heroesFilter, setHeroesFilter] = useState([]);
    const [search, setSearch] = useState('');
    const [isStrong, setIsStrong] = useState(false);

    const baseUrl = Platform.OS === 'android' ? `http://10.0.2.2:8000/heroes` : `http://localhost:8000/heroes`;
    
    useEffect(() => {
        const getData = async () => {
        try {
            await axios
                .get(baseUrl)
                .then((res) => {
                    setHeroes(res.data)
                    setHeroesFilter(res.data)
                })
        } catch (error) {
            console.error(error.res.data)
        }}
        getData()
    }, []);

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = heroes.filter(function(item) {
                const itemData = item.name.toUpperCase()
                    ? item.name.toUpperCase()
                    : '';
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setHeroesFilter(newData);
            setSearch(text);
        } else {
            setHeroesFilter(heroes);
            setSearch(text);
        }
    };

  return (
      <SafeAreaView style={styles.heroContainer}>
        <ScrollView >
            <SearchBar
                round
                onChangeText={(text) => searchFilterFunction(text)}
                onClear={() => searchFilterFunction('')}
                placeholder='Search heroes'
                value={search}
                containerStyle={styles.searchBarContainer}
                inputContainerStyle={styles.searchBarInputContainer}
                searchIcon={{size: 24}}
                clearIcon={{size: 24}}
            />
            <TouchableHighlight activeOpacity={1} underlayColor onPress={() => setIsStrong(!isStrong)} style={styles.filterButton}>
                    <Text style={styles.textButton}>{isStrong ? 'Affiche tous les héros' : 'Affiche les héros endurants'}</Text>
            </TouchableHighlight>
                <View style={styles.hero}>
                    {!isStrong ? heroesFilter.map((hero) => (
                        <View style={styles.heroCard} key={hero.id}>
                            <HeroCard hero={hero} />
                            <TouchableHighlight activeOpacity={0.5} underlayColor onPress={() => navigation.navigate('Details', {itemId: `${hero.id}`})} >
                                <Text style={styles.detailButton}>+</Text>
                            </TouchableHighlight>
                        </View>
                    ))
                    : heroesFilter
                    .filter((hero) => hero.stamina >= 80)
                    .map((hero) => (
                        <View style={styles.heroCard} key={hero.id}>
                            <HeroCard hero={hero} />
                            <TouchableHighlight activeOpacity={0.5} underlayColor onPress={() => navigation.navigate('Details', {itemId: `${hero.id}`})} >
                                <Text style={styles.detailButton}>+</Text>
                            </TouchableHighlight>
                        </View>
                    ))}
                </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default HeroList;

const styles = StyleSheet.create({
    heroContainer: {
        backgroundColor: '#2B2A2C',
    },
    searchBarContainer: {
        backgroundColor:'transparent',
        borderBottomColor:'transparent',
        borderTopColor:'transparent',
        marginHorizontal:10,
        marginTop:20,
    },
    searchBarInputContainer: {
        backgroundColor:'seashell',
    },
    hero: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap:'wrap',
        alignItems: 'center',
      },
      heroCard: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        borderColor: 'red',
        width: 150,
        borderWidth: 2,
        backgroundColor:'seashell',
      },
    filterButton: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
        padding: 10,
        marginHorizontal: 80,
        backgroundColor: 'seashell',
        borderRadius: 20,
    },
    textButton: {
        color: '#2B2A2C',
        fontWeight: 'bold',
        fontFamily:'RocknRollOne_400Regular',
    },
    detailButton:{
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: 'seashell',
        fontFamily:'RocknRollOne_400Regular',
    }
})
