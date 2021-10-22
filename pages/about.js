import React, { useState } from 'react'
import Head from 'next/head'
import axios from 'axios'

// functional component

const EXTERNAL_API = 'https://api.themoviedb.org/3'

const API_KEY = process.env.API_KEY

const getCategories = async () => {
    const res = await fetch(`${EXTERNAL_API}/genre/movie/list?api_key=${API_KEY}`)
    const data = await res.json()
    const categories = data.genres

    if (!data) {
      return {
        notFound: true,
      }
    }

    return categories
}
const About = (props) => {
    console.log(getCategories().then(res => res))
    return (
        <div>
            <Head>
                <title>About Us</title>
            </Head>
            <h1>About Page</h1>
            <div>
                <ul>
                    {
                        // props.list.map(category => (
                        //     <li key = {category.id}>
                        //         {category.name}
                        //     </li>
                        // ))
                    }
                </ul>
            </div>
        </div>
    )
}



export default About