import './Schedule.css'

const Schedule = ({courses, selected}) => (
    <div className="schedule">
        {
            selected.length === 0
            ? <p>No courses have been selected. Click on a course to select it!</p>
            : selected.map((id) => {
                const course = courses[id];
                return <li key={id}>{course.term} CS {course.number}: {course.meets}</li>
            })
        }
    </div>
);

export default Schedule;