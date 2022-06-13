import AppLoading from 'expo-app-loading';
import { useFonts, RocknRollOne_400Regular } from '@expo-google-fonts/rocknroll-one';
import { AkayaKanadaka_400Regular } from '@expo-google-fonts/akaya-kanadaka';
import Navigation from './pages/Navigation';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  let [fontsLoaded] = useFonts({RocknRollOne_400Regular, AkayaKanadaka_400Regular,});

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <>
      <StatusBar style='light' />
      <Navigation />
    </>


  );}
};
