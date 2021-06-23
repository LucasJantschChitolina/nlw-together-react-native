import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image } from 'react-native';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

interface ImageProps {
    imgURL: string;
}

export function Avatar({imgURL}: ImageProps){
  const { secondary50, secondary70 } = theme.colors;
    return (
        <LinearGradient 
        style={styles.container}
        colors={[secondary50, secondary70]}
        >
          <Image
          source={{uri: imgURL}}
          style={styles.avatar}
          />
        </LinearGradient>
    )
}