import React, {useState} from "react";
import { FlatList, View, Text } from "react-native";
import { styles } from "./styles";

import {Profile} from '../../components/Profile'
import { CategorySelect } from '../../components/CategorySelect'
import { ButtonAdd } from "../../components/ButtonAdd";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";



export function Home(){
    const [category, setCategory] = useState('');

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20h',
            description: 'do prata ao global'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: false
            },
            category: '1',
            date: '22/06 às 20h',
            description: 'do prata ao global'
        },
        {
            id: '3',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20h',
            description: 'do prata ao global'
        },
        {
            id: '4',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20h',
            description: 'do prata ao global'
        },
        {
            id: '5',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20h',
            description: 'do prata ao global'
        },
        {
            id: '6',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20h',
            description: 'do prata ao global'
        },
        {
            id: '7',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20h',
            description: 'do prata ao global'
        },
        {
            id: '8',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20h',
            description: 'do prata ao global'
        }
    ]

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    return (
        <View>
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd/>
            </View>
            <View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
            </View>
            <View style={styles.content}>
                <ListHeader 
                title="Lucas" 
                subtitle="aaaaaaaaaaaa"
                />

                <FlatList data={appointments}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                   <Appointment data={item}/>
                )}
                ItemSeparatorComponent={() => <ListDivider/>}
                style={styles.matches}
                showsVerticalScrollIndicator={false}

                />
            </View>
        </View>
    );
}