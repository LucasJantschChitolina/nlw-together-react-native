import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon(){
    const uri = 'https://w7.pngwing.com/pngs/357/859/png-transparent-discord-computer-icons-logo-smiley-decal-smiley-miscellaneous-blue-angle-thumbnail.png'
    return (
        <Image
            source={{uri}}
            style={styles.image}
            resizeMode="cover"
        />
    )
}