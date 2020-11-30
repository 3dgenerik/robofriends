import React from 'react';

const SearchBox = ({searchRobots}) => {
    return(
        <div>
            <input
                className = {'pa3 ba b--green bg-lightest-blue br3'}
                type = 'search'
                placeholder = 'type robot name'
                onChange = {searchRobots}
            />
        </div>
    )
}

export default SearchBox;