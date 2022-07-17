import { createContext, useState, useEffect } from 'react'
import queryString from 'query-string'
import API from 'Services/API'
import useDebounce from 'Hook/useDebounce'

export const UserContext = createContext()
export const UserConsumer = UserContext.Consumer

const UserContextProvider = ({ children }) => {
   const [users, setUsers] = useState({
      isLoading: false,
      items: [],
   })

   const [gender, setGender] = useState('')
   const [keyword, setKeyword] = useState('')
   const debouncedSearch = useDebounce(keyword, 500)

   const [pagination, setPagination] = useState({
      page: 1,
      pageSize: 5,
      results: 5,
   })

   const fetchUserData = () => {
      let params = Object.fromEntries(
         Object.entries({
            gender,
            keyword,
            ...pagination,
         }).filter(([_, v]) => v)
      )

      setUsers((prevState) => ({ ...prevState, isLoading: true }))
      API.get(`/?${queryString.stringify(params)}`)
         .then((response) => {
            if (response.status === 200) {
               setUsers((prevState) => ({
                  ...prevState,
                  items: response.data.results.map((user, key) => ({
                     key: key + 1,
                     username: user.login.username,
                     name: `${user.name.first} ${user.name.last}`,
                     email: user.email,
                     gender: user.gender,
                     registeredData: user.registered.date,
                  })),
               }))
            }
         })
         .catch(() => console.log('Network error, try letter'))
         .finally(() => setUsers((prevState) => ({ ...prevState, isLoading: false })))
   }

   useEffect(fetchUserData, [gender, pagination, debouncedSearch])

   const paginationChange = (page, pageSize) => {
      setPagination((prevState) => ({
         ...prevState,
         page,
         pageSize,
         results: pageSize,
      }))
   }

   const resetFilter = () => {
      setGender('')
      setKeyword('')
      setPagination({
         page: 1,
         pageSize: 5,
         results: 5,
      })
   }

   return (
      <UserContext.Provider
         value={{
            users,
            gender,
            setGender,
            keyword,
            setKeyword,
            resetFilter,
            pagination,
            paginationChange,
         }}
      >
         {children}
      </UserContext.Provider>
   )
}

export default UserContextProvider
