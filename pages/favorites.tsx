import { useQuery } from "react-query"

export function Favorites() {
  const { data } = useQuery(["favorites"], async () => {
    const data = window.localStorage.getItem("favorites")
    if (data) {
      return new Set(JSON.parse(data))
    }
  })

  if (!data) {
    return <p>No favorites</p>
  }

  return <div>{JSON.stringify(Array.from(data), null, 2)}</div>
}
