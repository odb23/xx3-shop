import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBntO5atalNu3BORsRChR4MO1ZtY8HHl-s",
  authDomain: "ogshop-23.firebaseapp.com",
  projectId: "ogshop-23",
  storageBucket: "ogshop-23.appspot.com",
  messagingSenderId: "678729472487",
  appId: "1:678729472487:web:4971b7af1d69f247630542"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestoreDb = getFirestore(app)
const googleAuthProvider = new GoogleAuthProvider()

export { auth, firestoreDb, googleAuthProvider }
