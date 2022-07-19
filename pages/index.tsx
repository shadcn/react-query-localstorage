import * as React from "react"
import { useQueryClient } from "react-query"
import { colors } from "./data/colors"
import { Favorites } from "./favorites"

export default function IndexPage() {
  const client = useQueryClient()

  const favorite = (id: number) => {
    // Add the favorites to localStorage.
    const data = window.localStorage.getItem("favorites")
    const favorites = new Set(data && JSON.parse(data))
    favorites.add(id)
    window.localStorage.setItem(
      "favorites",
      JSON.stringify(Array.from(favorites))
    )

    // Invalidate queries.
    client.invalidateQueries(["favorites"])
  }

  return (
    <div>
      <Favorites />
      <hr />
      {colors.map((color) => (
        <div key={color.id}>
          <h2>{color.name}</h2>
          <button onClick={() => favorite(color.id)}>❤️ Favorite</button>
        </div>
      ))}
    </div>
  )
}
