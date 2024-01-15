import './Course.css';

const Course = ({course}) => (
    <div className="card m-1 p-2">    
        <div className="card-body">
            <h4 className="card-title">{course.term} CS {course.number}</h4>
            <p className="card-text">{course.title}</p>
        </div>
        <div className="card-footer bg-transparent">{course.meets}</div>
    </div>
);

export default Course;