// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, onValue, ref, update } from 'firebase/database';
import { useCallback, useEffect, useState } from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQLHZyQ1xetfSrvl61K3y7SRWdeORFGJw",
  authDomain: "react-tutorial-85633.firebaseapp.com",
  databaseURL: "https://react-tutorial-85633-default-rtdb.firebaseio.com",
  projectId: "react-tutorial-85633",
  storageBucket: "react-tutorial-85633.appspot.com",
  messagingSenderId: "353387393336",
  appId: "1:353387393336:web:ea7a62f1e38996f22e91cd",
  measurementId: "G-0BD43E0ZQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export const useDbData = (path) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);

    useEffect(() => (
        onValue(ref(database, path), (snapshot) => {
            setData( snapshot.val() );
        }, (error) => {
            setError(error);
        })
    ), [ path ]);

    return [ data, error ];
};

const makeResult = (error) => {
    const timestamp = Date.now();
    const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
    return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
    const [result, setResult] = useState();
    const updateData = useCallback((value) => {
        update(ref(database, path), value)
        .then(() => setResult(makeResult()))
        .catch((error) => setResult(makeResult(error)))
    }, [ database, path ]);

    return [updateData, result];
};