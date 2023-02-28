import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['Zodiac'])

  const onAddCategory = (category) => {
    setCategories(list => [...list, category])
  }

  return (
    <div>
      <h1>GifExpert</h1>

      <AddCategory onAddCategory={onAddCategory}></AddCategory>
      {
        categories.map(
          (category, key) => {
            return <GifGrid category={category} key={key}></GifGrid>
          }
        )
      }
    </div>
  )
}

export default GiftExpertApp;