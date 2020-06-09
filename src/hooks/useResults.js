import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    searchApi('pasta')
  }, [])

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'Miami'
        }
      })
      setResults(response.data.businesses)
    } catch (error) {
      setErrorMessage('Something went wrong')
    }
  }

  return [searchApi, results, errorMessage]
}
