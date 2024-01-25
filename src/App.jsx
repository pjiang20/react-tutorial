import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { useJsonQuery } from './utilities/fetch';
import Dispatcher from './components/Dispatcher';
import { useDbData } from './utilities/firebase';

const Main = () => {
    // const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
    const [data, error] = useDbData('/');
    
    if (error) return <h1>Error loading courses: {`${error}`}</h1>;
    if (data === undefined) return <h1>Loading courses...</h1>;
    if (!data) return <h1>No courses found</h1>;

    return <Dispatcher data={data} />
};

// const queryClient = new QueryClient();

const App = () => {
    return (
        // <QueryClientProvider client={queryClient}>
            <div className="container">
                <Main />
            </div>
        // </QueryClientProvider>
    );
};

export default App;