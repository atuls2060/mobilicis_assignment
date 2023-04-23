import { useEffect, useState } from "react";
import UsersTable from "./components/UsersTable";
import TopCityTable from "./components/TopCityTable";
import axios from "axios"

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState(1)

  const getUsers = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/query${query}`)
      setUsers(data)
      setLoading(false)
    } catch (error) {
      console.log("Error getting users", error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    getUsers()
  }, [query])

  return (
    <>
      <label>Filter Query : </label>
      <select value={query} onChange={(e) => setQuery(e.target.value)}>
        <option value={1}>Query 1</option>
        <option value={2} >Query 2</option>
        <option value={3} >Query 3</option>
        <option value={4} >Query 4</option>
        <option value={5} >Query 5</option>
      </select>
      {
        loading ? <h2>Loading...</h2> :
          query != 5 ? <UsersTable users={users} captionIdx={query} /> : <TopCityTable cities={users} />
      }
    </>
  );
}

export default App;
