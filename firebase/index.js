"use server"

const { initializeApp } =require("firebase/app")
// import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore"
const { getDatabase, set, ref, onValue, child, get, update } =require("firebase/database")



const env = process.env

const firebaseConfig = {
  apiKey: "AIzaSyClRUUjQ5BJHQTqQBt0YYGLjeLL8YxJB28",
  authDomain: "parking-ninja-34680.firebaseapp.com",
  databaseURL: "https://parking-ninja-34680-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "parking-ninja-34680",
  storageBucket: "parking-ninja-34680.appspot.com",
  messagingSenderId: "694139742164",
  appId: "1:694139742164:web:a743cf3d8ddbe7c0481841",
  measurementId: "G-JVV5W94Q1Q"
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

async function createEntry(userData) {
  try {
    const doc = await set(ref(db, `entries/${userData.licensePlate}`), userData)
    return doc
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}

async function getEntry(reg) {
  const docRef = ref(db, `entries/${reg}`)
  const docSnap = await get(docRef)

  if (docSnap.exists()) {
    return docSnap.val()
  } else {
    console.log("No such document!")
  }
}


module.exports = { createEntry, getEntry }
