import { useState, useEffect } from 'react'
import queryString from 'query-string'
import API from "Services/API";

const useUser = () => {
    const [users, setUsers] = useState({
        isLoading: false,
        items: [],
    })

    const [params, setParams] = useState({
        page: 1,
        pageSize: 10,
        results: 10,
        gender: '',
        keyboard: '',
    })


    const fetchUserData = () => {
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

    useEffect(() => fetchUserData(), [params])

    const setGender = (value) => {
        setParams((prevState) => ({
            ...prevState,
            gender: value
        }))
    }

    const setKeyword = (value) => {
        setParams((prevState) => ({
            ...prevState,
            keyboard: value
        }))
    }

    const paginationChange = (page, pageSize) => {

        setParams((prevState) => ({
            ...prevState,
            page,
            pageSize,
            results: pageSize
        }))
    }

    const resetFilter = () => {
        setParams({
            page: 1,
            pageSize: 10,
            results: 10,
            gender: '',
            keyboard: '',
        })
    }

    return {
        users,
        params,
        setGender,
        setKeyword,
        resetFilter,
        paginationChange
    }

}

export default useUser
