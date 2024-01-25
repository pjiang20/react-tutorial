import { useDbUpdate } from '../utilities/firebase';
import { useFormData } from '../utilities/useFormData';
import { useNavigate } from "react-router-dom";

const validateUserData = (key, val) => {
    switch (key) {
        case 'title':
            return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
        case 'meets':
            if (val == '') {
                return '';
            }

            const regex = /^(?:(?:M|Tu|W|Th|F|Sa|Su){1,7} \d{1,2}:\d{2}-\d{1,2}:\d{2}|)$/  
            if (regex.test(val)) {
                const match = val.match(regex)[0];
                const [days, times] = match.split(' ');
                const [startTime, endTime] = times.split('-');
                const [startHour, startMinute] = startTime.split(':').map(Number);
                const [endHour, endMinute] = endTime.split(':').map(Number);

                return (startHour <= 23 && startMinute <= 59
                    && endHour <= 23 && endMinute <= 59
                    && (startHour < endHour || (startHour === endHour && startMinute < endMinute)))
                ? ''
                : 'times must be within 0:00-23:59, and start time must be earlier than end time';
            }

            return 'must contain days and start-end, e.g. MWF 12:00-13:20';
        default: return '';
    };
};

const InputField = ({name, text, state, change}) => (
    <div className="mb-3">
        <label htmlFor={name} className="form-label">{text}</label>
        <input className="form-control" id={name} name={name} 
            defaultValue={state.values?.[name]} onChange={change} />
        <div className="invalid-feedback">{state.errors?.[name]}</div>
    </div>
);  

const ButtonBar = ({message, disabled}) => {
    const navigate = useNavigate();
    return (
        <div className="d-flex">
            <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate(-1)}>Cancel</button>
            <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Submit</button>
            <span className="p-2">{message}</span>
        </div>
    );
};

const CourseEditForm = ({id, courses}) => {
    const [update, result] = useDbUpdate(`/courses/${id}`);
    const [state, change] = useFormData(validateUserData, courses[id]);
    const submit = (evt) => {
        evt.preventDefault();
        if (!state.errors) {
            update(state.values);
        }
    };

    return (
        <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
            <InputField name="title" text="Course Title" state={state} change={change} />
            <InputField name="meets" text="Course Meeting Times" state={state} change={change} />
            <ButtonBar message={result?.message} />
        </form>
    );
};

export default CourseEditForm;