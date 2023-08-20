import { Container, FilterItem,} from "./Filter.styled";

export const Filter = ({ onFilter }) => {
    return (
        <Container>
            <FilterItem>
                <h2>Contacts</h2>
            </FilterItem>
            <FilterItem>
                <label htmlFor="filter">Filter</label>
                <input 
                id="filter"
                name="filter" 
                placeholder="Enter name" 
                onChange={ (searchValue) => {onFilter(searchValue)}}/>
            </FilterItem>
        </Container>
    )
};