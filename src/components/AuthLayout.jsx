import { useEffect, useState } from "react"
import React from 'react'
import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { useSelector } from "react-redux"


export default function Protected({children , autentication = true}){

    const navigate = useNavigate()
    const [loader , setLoader] = useState()
    const authStatus = useSelector(state => state.auth.status)
    useEffect(() => {
        if (autentication && authStatus !== 'autentication')
        {
           navigate('/login')
        } else if (!autentication && authStatus !== 'autentucation')
        {
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, navigate , autentication])

  return loader ? <h1>Loading... </h1> : <>{children}</>

}