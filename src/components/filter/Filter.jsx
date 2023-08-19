

export const Filter = ({ onFilter }) => {
    return (
    <label>Filter
        <input 
        name="filter" 
        placeholder="Enter name" 
        onChange={ (searchValue) => {onFilter(searchValue)}}/>
    </label>
    )
};