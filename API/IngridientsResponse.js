import { useSelector } from 'react-redux'

const SearchProducts = async () => {
  const ingredients = useSelector((state) => state.textReducer.text)
  try {
    const config = {
      headers: {
        'X-Api-Key': '1d35502d99dd4abe985acb7f733d51c1',
        'Content-Type': 'application/json',
      },
    }
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&ignorePantry=true&ranking=2`,
      config
    )

    const results = response.data.map((result) => {
      return {
        id: result.id,
        title: result.title,
        image: result.image,
        ingridients: result.usedIngredients,
      }
    })

    const idList = results.map((result) => result.id).join(',') // формируем строку id для запроса
    return {
      results: results,
      idList: idList,
    }
  } catch (error) {
    console.error(error)
  }
}

export default SearchProducts
