import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useNavigation } from '@react-navigation/native'

const TopHeadlineSlider = ({newsList}) => {

  const navigation = useNavigation();


  return (
    <View>
      <FlatList 
        data={newsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity onPress={()=>navigation.navigate('read-news' , {news:item})} 
          style={{width:Dimensions.get('screen').width*0.80,marginRight:15}}>
            <Image source={{uri:item.urlToImage}}
                  style={{height:Dimensions.get('screen').width*0.77, borderRadius:10}}
            />
            <Text numberOfLines={3} style={{marginTop:10, fontSize:23,fontWeight:'800'}}>{item.title}</Text>
            <Text style={{marginTop:5, color:'red'}}>{item?.source?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default TopHeadlineSlider