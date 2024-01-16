import './Schedule.css'

const Schedule = ({selected}) => (
    <div className="schedule">
        {
            selected.length === 0
            ? <p>No courses have been selected. Click on a course to select it!</p>
            : Object.entries(selected).map(([id, course]) => {
                return <li key={id}>{course.term} CS {course.number}: {course.meets}</li>
            })
        }
    </div>
);

export default Schedule;