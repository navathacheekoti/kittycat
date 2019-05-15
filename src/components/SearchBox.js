import React from 'react';
const SearchBox = ({searchfield,onSearchChange}) =>{
        return (
                <div>
                         <input className="pa3 ma4 w-50 ba b--green bg-lightest-blue" type='text' placeholder='search' onChange={onSearchChange}/>
                </div>
        )
}
export default SearchBox;
