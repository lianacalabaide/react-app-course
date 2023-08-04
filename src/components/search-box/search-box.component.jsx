

import './search-box.style.css'

const SearchBox = ({className, placeholder, onChangeHandler}) =>
(
    <input className={`search-box ${className}`}  //interpolação
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
);

export default SearchBox;