import {initializeApp} from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyCGX_9_IfqRbugXq1fjazLhvy6OzNdG-L8",
    authDomain: "blog-post-1a3d5.firebaseapp.com",
    databaseURL: "https://blog-post-1a3d5-default-rtdb.firebaseio.com",
    projectId: "blog-post-1a3d5",
    storageBucket: "blog-post-1a3d5.appspot.com",
    messagingSenderId: "301023840048",
    appId: "1:301023840048:web:b9c66b14769d9193a42af5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;