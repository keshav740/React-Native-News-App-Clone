
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
    getNewsByCategory('latest');
  },[])

  const getNewsByCategory=async(category)=>{
    const result = (await GlobalApi.getNewsByCategory(category)).data;
    console.log(result)
    setNewsList(result.articles)
  }


  const getTopHeadline = async () =>{
      const result = (await GlobalApi.getTopHeadline).data;
      setNewsList(result.articles)
  }                     

  return (
    <ScrollView style={{backgroundColor:Color.white}}>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={styles.appName}>Mine News</Text>
            <Ionicons name="notifications-outline" size={25} color="black" />
        </View>

        {/* Category Text Slider */}

        <CategoryTextSlider selectCategory={(category)=>getNewsByCategory(category)}/>

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