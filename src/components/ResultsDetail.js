import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 7
  },
  name: {
    fontWeight: 'bold',
    width: 250
  },
  container: {
    marginLeft: 15
  }
})

export default ResultsDetail
