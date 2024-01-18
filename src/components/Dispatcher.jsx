import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import CourseEditForm from './CourseEditForm.';
import Banner from './Banner';
import TermPage from './TermPage';

const CourseEditFormForUrl = ({courses}) => {
    const { id } = useParams();
    return <CourseEditForm course={courses[id]} />;
};

const Dispatcher = ({data}) => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <div>
                    <Banner title={data.title} />
                    <TermPage courses={data.courses} />
                </div>          
            } />
            <Route path="/:id/edit" element={<CourseEditFormForUrl courses={data.courses} />} />
        </Routes>
    </BrowserRouter>
);

export default Dispatcher;