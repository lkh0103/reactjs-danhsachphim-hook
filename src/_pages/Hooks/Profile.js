import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Profile() {

    if (!localStorage.getItem('accessToken')) {
        alert('Login để vào trang này!')
        return <Redirect to='/login' />
    }

    return (
        <div>
            Profile (Token)
        </div>
    )
}
