import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import CourseEditForm from './CourseEditForm.';
import Banner from './Banner';
import TermPage from './TermPage';
import { useProfile } from '../utilities/profile';

const CourseEditFormForUrl = ({courses}) => {
    const { id } = useParams();
    return <CourseEditForm id={id} courses={courses} />;
};

const Dispatcher = ({data}) => {
    const [profile, profileError] = useProfile();

    if (profileError) return <h1>Error loading profile: {`${profileError}`}</h1>;
    if (profile === undefined) return <h1>Loading user profile...</h1>;
    if (!profile) return <h1>No profile found</h1>;

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <div>
                    <Banner title={data.title} />
                    <TermPage courses={data.courses} profile={profile}/>
                </div>          
            } />
            <Route path="/:id/edit" element={<CourseEditFormForUrl courses={data.courses} />} />
        </Routes>
    </BrowserRouter>
    )
};

export default Dispatcher;