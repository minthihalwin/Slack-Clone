import { app } from "./firebase_config";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const db = getFirestore(app); //Firestore Database
export const auth = getAuth();

export const provider = new GoogleAuthProvider();

//Rooms Collection
export const roomsCollection = collection(db, "rooms");

//ADD New Room
export const addRoom = async (channelData) => {
  const newChannel = await addDoc(roomsCollection, { name: channelData });
  console.log(`The new channel was created at ${newChannel.id}`);
};