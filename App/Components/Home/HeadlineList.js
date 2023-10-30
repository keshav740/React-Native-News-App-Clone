import React from 'react'
// import { FlatList,  Image, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Color from '../../Shared/Color'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

const HeadlineList = ({newsList}) => {
  return (
    <View>
      <FlatList 
        data={newsList}
        renderItem={({item}) => (
          <View>
            <View style={{height:1, backgroundColor:Color.lightGray, marginTop:10, marginLeft:-20}}></View>
            <TouchableOpacity
            style={{marginTop:10, display:'flex',
            flexDirection:'row'}}>
              <Image source={{uri:item.urlToImage}}
                    style={{width:130, height:130, borderRadius:10}}
              />
              <View style={{marginRight:135, marginLeft:10}}>
                  <Text numberOfLines={4} style={{fontSize:18, fontWeight:'bold'}}>{item.title}</Text>
                  <Text style={{color:Colors.primary, marginTop:6}}>{item?.source?.name}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

export default HeadlineList