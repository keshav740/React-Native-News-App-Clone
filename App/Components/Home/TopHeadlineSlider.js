import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import GlobalApi from '../../Services/GlobalApi'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const TopHeadlineSlider = ({newsList}) => {


  return (
    <View>
      <FlatList 
        data={newsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity onPress={()=>console.log('Click')} 
          style={{width:Dimensions.get('screen').width*0.80,marginRight:15}}>
            <Image source={{uri:item.urlToImage}}
                  style={{height:Dimensions.get('screen').width*0.77, borderRadius:10}}
            />
            <Text numberOfLines={3} style={{marginTop:10, fontSize:23,fontWeight:'800'}}>{item.title}</Text>
            <Text style={{marginTop:5, color:Colors.primary}}>{item?.source?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default TopHeadlineSlider