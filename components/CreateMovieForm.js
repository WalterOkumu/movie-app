import { useState, useEffect } from 'react'

const CreateMovieForm = (props) => {

    const [isInitialDataLoaded, setInitialDataLoaded] = useState(false)

    const defaultData = {
        title: '',
        description: '',
        rating: '',
        longDesc: '',
        cover: '',
        image: '',
        genre: ''
    }

    const formData = props.initialData ? { ...props.initialData } : defaultData

    const [form, setForm] = useState(formData)
    
    // useEffect(() => {
    //     if (props.initialData) {
    //         setForm(props.initialData)
    //         setInitialDataLoaded(true)
    //     }
    // }, [isInitialDataLoaded, props.intialData])

    const handleChange = (event) => {
        const target = event.target
        const name = target.name

        setForm({
            ...form,
            [name]: target.value
        })
    }

    const handleGenreChange = (event) => {
        const {options} = event.target
        const optionsLength = options.length
        let value = []

        for (let i = 0; i < optionsLength; i++) {
            if (options[i].selected) {
                value.push(options[i].value)
            }
        }

        setForm({
            ...form,
            genre: value.toString()
        })
    }

    const submitForm = () => {
        props.handleCreateMovie({ ...form })
    }

    return (
        <form>
            <div className='form-group'>
                <label>Name</label>
                <input 
                    value = {form.title}
                    onChange = {handleChange}
                    name = 'title'
                    type='text' 
                    className='form-control' 
                    id='name' 
                    aria-describedby='emailHelp' 
                    placeholder='Lord of the Rings' 
                />
            </div>
            <div className='form-group'>
                <label>Description</label>
                <input 
                    value = {form.description}
                    onChange = {handleChange}
                    name = 'description'
                    type='text' 
                    className='form-control' 
                    id='description' 
                    placeholder='Somewhere in Middle-earth...' 
                />
            </div>
            <div className='form-group'>
                <label>Rating</label>
                <input
                    value = {form.rating}
                    onChange = {handleChange}
                    name = 'rating'
                    type='number' 
                    max='5' 
                    min='0' 
                    className='form-control' 
                    id='rating' 
                    placeholder='3' 
                />
                <small id='emailHelp' className='form-text text-muted'>Max: 5, Min: 0 </small>
            </div>
            <div className='form-group'>
                <label>Image</label>
                <input
                    value = {form.image}
                    onChange = {handleChange}
                    name = 'image'
                    type='text' 
                    className='form-control' 
                    id='image' 
                    placeholder='http://.....' 
                />
            </div>
            <div className='form-group'>
                <label>Cover</label>
                <input
                    value = {form.cover}
                    onChange = {handleChange}
                    name = 'cover'
                    type='text' 
                    className='form-control' 
                    id='cover' 
                    placeholder='http://......' 
                />
            </div>
            <div className='form-group'>
                <label>Long Description</label>
                <textarea 
                    value = {form.longDesc}
                    onChange = {handleChange}
                    name = 'longDesc'
                    className='form-control' 
                    id='longDesc' 
                    rows='3'
                >

                </textarea>
            </div>
            <div className='form-group'>
                <label>Genre</label>
                <select 
                    multiple 
                    className='form-control' 
                    id='genre'
                    onChange = {handleGenreChange}
                >

                    <option>Drama</option>
                    <option>Music</option>
                    <option>Adventure</option>
                    <option>Historical</option>
                    <option>Action</option>
                </select>
            </div>
            <button type='button' onClick = {submitForm} className='btn btn-primary'>Create Movie</button>
        </form>
    )
}

export default CreateMovieForm