import axios from 'axios'

export default async (req, res) => {

    if (req.method === 'POST') {
        const postData = req.body

        console.log(postData)

        return res.json({
            status: 'Saving Post to DB',
            ...postData
        })
    }
    else {
        const postResponse = await axios.get('https://jsonplaceholder.typicode.com/posts')

        const posts = postResponse.data

        return res.json(posts.slice(0, 20))
    }

    
}