
import React, { useEffect, useState } from 'react'
import { Text, View , StyleSheet, ScrollView, ActivityIndicator, Dimensions} from 'react-native'
import Color from '../Shared/Color';
import { Ionicons } from '@expo/vector-icons';
import HeadlineList from '../Components/Home/HeadlineList';
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
import GlobalApi from '../Services/GlobalApi';
import CategoryTextSlider from '../Components/Home/CategoryTextSlider';

const Home = () => {

  const [newsList , setNewsList] = useState([])
  const [loading , setLoading] = useState(true)
  useEffect(()=>{
      // getTopHeadline();
      
    getNewsByCategory('latest');
  },[])

  const getNewsByCategory=async(category)=>{
    setLoading(true);
    const result = (await GlobalApi.getByCategory(category)).data;
    // console.log(result)
    setNewsList(result.articles)
    setLoading(false)
  }


  // const getTopHeadline = async () =>{
  //     const result = (await GlobalApi.getTopHeadline).data;
  //     setNewsList(result.articles)
  // }                     

  return (
    <ScrollView style={{backgroundColor:Color.white}}>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={styles.appName}>Mine News</Text>
            <Ionicons name="notifications-outline" size={25} color="black" />
        </View>
        <CategoryTextSlider selectCategory={(category)=>getNewsByCategory(category)}/>
        {loading?<ActivityIndicator style={{marginTop:Dimensions.get('screen').height*0.40}} size={'large'} color={Color.primary} />:
        <View>
        <TopHeadlineSlider newsList={newsList} />
        <HeadlineList newsList={newsList} />
        </View>
      }
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