import Course from './Course';
import './CourseList.css';

const CourseList = ({courses, term}) => (
    <div className="course-list">
        { Object.entries(courses).filter(([id, course]) => course.term === term).map(([id, course]) => <Course key={id} course={course}/>) }
    </div>
);

export default CourseList