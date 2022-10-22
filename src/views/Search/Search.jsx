import React from 'react'
import './Search.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  return (
    <div className="searchbox">
      <input type="text" placeholder="Search your Queries" />
      <div className="searchicons">
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  )
}
export default Search
