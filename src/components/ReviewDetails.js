import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'

const ReviewDetails = ({ reviews }) => {
  return (
    <View>
      <Text
        style={{ fontSize: 24, fontWeight: 'bold', justifyContent: 'center' }}
      >
        {' '}
        Reviews:{' '}
      </Text>
      <FlatList
        keyExtractor={review => review.id}
        data={reviews}
        renderItem={({ item }) => {
          console.log(item.user)
          return (
            <>
              <View
                style={{
                  flex: 1,
                  height: 90,
                  marginTop: 10,
                  marginLeft: 5
                }}
              >
                {item.user.image_url ? (
                  <Image
                    style={styles.image}
                    source={{ uri: item.user.image_url }}
                  />
                ) : (
                  <View style={styles.image}>
                    <Text>Guest User</Text>
                  </View>
                )}

                {item.rating > 1 ? (
                  <Text style={{ padding: 5 }}>{item.rating} Stars</Text>
                ) : (
                  <Text style={{ padding: 5 }}>{item.rating} Star</Text>
                )}
              </View>
              <View>
                <Text style={{ padding: 5 }}>{item.text}</Text>
              </View>
            </>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 60,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 7
  }
})

export default ReviewDetails
