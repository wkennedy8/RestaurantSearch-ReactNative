import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer PLfU69lz8gdXgCi5MCt9iSGvOpYDWLwaL93z3wOivYMiOg0ATHRQ6iKrBmx6NLzXHZ3djfOH6lHSaBaZnxdddPWHSbjlLteHfTBX9Wc4Ulg_2O_NqC3tXlmg3pLeXnYx'
  }
})
