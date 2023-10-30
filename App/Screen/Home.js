
import React, { useEffect, useState } from 'react'
import { Text, View , StyleSheet, ScrollView} from 'react-native'
// import CategoryTextSlider from '../Components/Home/TopHeadlineSlider'
// import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
// import GlobalApi from './Services/GlobalApi';
import Color from '../Shared/Color';
import { Ionicons } from '@expo/vector-icons';
import HeadlineList from '../Components/Home/HeadlineList';
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
import GlobalApi from '../Services/GlobalApi';
import CategoryTextSlider from '../Components/Home/CategoryTextSlider';

const Home = () => {

  const [newsList , setNewsList] = useState([])
  useEffect(()=>{
      getTopHeadline();
  },[])

  const getTopHeadline = async () =>{
      const result = (await GlobalApi.getTopHeadline).data;
      setNewsList(result.articles)
  }                     

  return (
    <ScrollView>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={styles.appName}>App News Name</Text>
            <Ionicons name="notifications-outline" size={25} color="black" />
        </View>

        {/* Category Text Slider */}

        <CategoryTextSlider />

        {/* Top TopHeadline Slider */}

        <TopHeadlineSlider newsList={newsList} />
        
        {/* headline list */}

        <HeadlineList newsList={newsList} />

    </ScrollView>
  )
}


const styles = StyleSheet.create({
    appName: {
        fontSize:25,
        fontWeight:'bold', 
        color:Color.primary,
    }
})

export default Home