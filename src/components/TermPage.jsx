import { useState } from 'react';
import CourseList from './CourseList';
import Modal from './Modal';
import Schedule from './Schedule';
import AuthButton from './AuthButton';
import { useAuthState } from '../utilities/firebase';

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
        <label className="btn btn-primary mb-1 p-2" htmlFor={term}>
            { term }
        </label>
    </div>
);

const TermSelector = ({selection, setSelection}) => (
    <div className="me-auto btn-group">
        {
            terms.map(term => <TermButton key={term} term={term} selection={selection} setSelection={setSelection} />)
        }
    </div>
);

const TermPage = ({courses}) => {
    const [selection, setSelection] = useState(() => terms[0]);
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(false);
    const [user] = useAuthState();

    const toggleSelected = (item) => setSelected(
        selected.includes(item)
        ? selected.filter(x => x != item)
        : [...selected, item]
    );

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return (
        <div>
            <div className="d-flex">
                <TermSelector selection={selection} setSelection={setSelection}/>
                <button className="btn btn-outline-dark mb-1 p-2" onClick={openModal}>
                    <i className="bi bi-calendar2-week"></i>
                </button>
                <AuthButton user={user}/>
            </div>

            <Modal open={open} close={closeModal}>
                <Schedule selected={selected} />
            </Modal>
            <CourseList courses={courses} term={selection} selected={selected} toggleSelected={toggleSelected} user={user}/>
        </div>
    );
};

export default TermPage;