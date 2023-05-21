import { styled } from "nativewind";
import React from "react";
import { ImageBackground } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'


import blurBg from '../src/assets/bg-blur.png';
import Stripes from '../src/assets/stripes.svg';
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const StyledStripes = styled(Stripes);


export default function Layout() {

    const [hasLoadedFonts] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
        BaiJamjuree_700Bold
      })
    
      if (!hasLoadedFonts) {
        return <SplashScreen />
      }
    
    return (
        <ImageBackground 
            source={blurBg} 
            className='bg-gray-900 flex-1 relative' 
            imageStyle={{ position: 'absolute', left: '-100%' }}
        >
        <StyledStripes className='absolute left-2' />
        <StatusBar style="light" translucent />

        <Stack screenOptions={{headerShown:false, contentStyle: {backgroundColor: 'transparent'}}} />
      </ImageBackground>
    )
}