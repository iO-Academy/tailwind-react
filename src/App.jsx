import { useEffect } from "react"

function App() {
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(data => console.log(data))
  })
  return (
    <>
       <h1 className="bg-orange-400">Testing</h1>
    </>
  )
}

export default App
