import { app } from "./firebase_config";
import {
  collection,
  getFirestore,
  addDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
 export const db = getFirestore(app); //Firestore Database

export const auth = getAuth(app); //Initialize Firebase and get a reference to the service

export const provider = new GoogleAuthProvider();

//Data Collection
export const dataCollection = (collectionName) =>
  collection(db, collectionName);

//Data Collection with Sub-Collection
export const SubdataCollection = (
  targetCollectionName,
  targetDocumentID,
  subCollectionName
) =>
  collection(docRef(targetCollectionName, targetDocumentID), subCollectionName);

//Document Ref
export const docRef = (collectionName, targetDocumentID) =>
  doc(db, collectionName, targetDocumentID);

//Query Collection for Messages
export const queryCollection = (
  targetCollectionName,
  targetDocumentID,
  subCollectionName,
  orderbyOption
) =>
  query(
    SubdataCollection(
      targetCollectionName,
      targetDocumentID,
      subCollectionName
    ),
    orderBy("timestamp",orderbyOption)
  );

//ADD New Room
export const addRoom = async (channelData) => {
  const newChannel = await addDoc(dataCollection("rooms"), {
    name: channelData,
  });
  console.log(`The new channel was created at ${newChannel.id}`);
};

//Add New Messages to Channel (Subcollection creation)
export const addMessages = async (channelId, message) => {
  //const docRef = doc(db,"rooms", channelId);
  const colRef = SubdataCollection("rooms", channelId, "messages");
  const newMessage = await addDoc(colRef, { ...message });
  console.log(`The new message was create at ${newMessage.id}`);
};
