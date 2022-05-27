// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCJ_6gCK9SLC6itYWbWUFfbzaRkGnp-tao',
  authDomain: 'netflix-clone-a9a67.firebaseapp.com',
  projectId: 'netflix-clone-a9a67',
  storageBucket: 'netflix-clone-a9a67.appspot.com',
  messagingSenderId: '47693272273',
  appId: '1:47693272273:web:67f569ae79af62eb5261f0',
  measurementId: 'G-LV6N0K707V',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
