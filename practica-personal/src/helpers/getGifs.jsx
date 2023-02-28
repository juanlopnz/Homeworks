export const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=Oha2T41GNj9fVA8A6LQmzgExhSdROgs6&q=${category}&limit=25&offset=0&rating=g&lang=en`

  const resp = await fetch(url)

  const { data } = await resp.json()

  const gift = data.map(img => {

    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }

  })

  return gift
}