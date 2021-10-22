
export const SearchBox = ({ placeholder, handleChange }) => (
  <form className ='d-flex'>
    <input
      className = 'form-control me-2'
      type = 'search'
      placeholder = {placeholder}
      onChange = {handleChange}
      aria-label = 'Search'
    />
    <button className='btn btn-outline-success' type='submit' onClick = {handleChange}>Search</button>
  </form>
)
