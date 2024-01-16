import { useState } from 'react';
import CourseList from './CourseList';

const terms = ['Fall', 'Winter', 'Spring'];

const TermButton = ({term, selection, setSelection}) => (
    <div>
        <input 
            type="radio" 
            id={term} 
            className="btn-check" 
            checked={term === selection} 
            autoComplete="off" 
            onChange={() => setSelection(term)} 
        />
        <label className="btn btn-success mb-1 p-2" htmlFor={term}>
            { term }
        </label>
    </div>
);

const TermSelector = ({selection, setSelection}) => (
    <div className="btn-group">
        {
            terms.map(term => <TermButton key={term} term={term} selection={selection} setSelection={setSelection} />)
        }
    </div>
);

const TermPage = ({courses}) => {
    const [selection, setSelection] = useState(() => terms[0]);
    const [selected, setSelected] = useState([]);

    const toggleSelected = (item) => setSelected(
        selected.includes(item)
        ? selected.filter(x => x != item)
        : [...selected, item]
    );

    return (
        <div>
            <TermSelector selection={selection} setSelection={setSelection}/>
            <CourseList courses={courses} term={selection} selected={selected} toggleSelected={toggleSelected}/>
        </div>
    );
};

export default TermPage;