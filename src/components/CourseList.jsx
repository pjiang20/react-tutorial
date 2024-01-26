import Course from './Course';
import './CourseList.css';

const CourseList = ({courses, term, selected, toggleSelected, user}) => (
    <div className="course-list">
        { Object.entries(courses)
            .filter(([id, course]) => course.term === term)
            .map(([id, course]) => (
                <Course key={id} id={id} course={course} selected={selected} toggleSelected={toggleSelected} user={user}/>
        )) }
    </div>
);

export default CourseList