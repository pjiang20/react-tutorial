import './Course.css';
import { detectConflict } from '../utilities/detectConflict';
import { Link } from 'react-router-dom';

const Course = ({id, course, selected, toggleSelected}) => {
    const isSelected = selected.includes(course)
    const hasConflict = selected.some((course1) => detectConflict(course, course1));
    return <div 
        className={`card m-1 p-2 
                    ${isSelected ? 'selected' : ''} 
                    ${hasConflict ? 'has-conflict' : ''}`} 
        onClick={() => hasConflict ? null : toggleSelected(course)}
    >    
        <div className="card-body">
            <h4 className="card-title">{course.term} CS {course.number}</h4>
            <p className="card-text">{course.title}</p>
            <Link className="position-absolute top-0 end-0" to={`/${id}/edit`}>
                    <button className={`edit-button btn btn-sm ${isSelected ? 'btn-primary' : 'btn-light'}`}>
                        <i className="bi bi-pencil-square"></i>
                    </button>
            </Link>  
        </div>
        <div className="card-footer bg-transparent">{course.meets}</div>
    </div>
};

export default Course;