import './Course.css';
import { detectConflict } from '../utilities/detectConflict';

const Course = ({id, course, selected, toggleSelected}) => (
    <div 
        className={`card m-1 p-2 
                    ${selected.includes(id) ? 'selected' : ''} 
                    ${selected.some((course1) => detectConflict(course, course1)) ? 'has-conflict' : ''}`} 
        onClick={() => toggleSelected(id)}
    >    
        <div className="card-body">
            <h4 className="card-title">{course.term} CS {course.number}</h4>
            <p className="card-text">{course.title}</p>
        </div>
        <div className="card-footer bg-transparent">{course.meets}</div>
    </div>
);

export default Course;