import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'
import ReviewDetails from '../components/ReviewDetails'

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)
  const [reviews, setReviews] = useState([])
  const id = navigation.getParam('id')

  const getResult = async id => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }
  const getReviews = async id => {
    const response = await yelp.get(`/${id}/reviews`)
    setReviews(response.data.reviews)
  }

  useEffect(() => {
    getResult(id)
    getReviews(id)
  }, [])

  if (!result) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{result.name}</Text>
      <Text style={{ fontSize: 18, marginTop: 5 }}>
        {result.location.display_address[0]}{' '}
        {result.location.display_address[1]}
      </Text>
      <Text style={{ fontSize: 16, marginTop: 5 }}>{result.display_phone}</Text>
      <FlatList
        horizontal
        data={result.photos}
        keyExtractor={photo => photo}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}
      />
      <ReviewDetails reviews={reviews} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 200,
    width: 300,
    marginLeft: 15,
    borderRadius: 4,
    marginTop: 20
  }
})

export default ResultsShowScreen
