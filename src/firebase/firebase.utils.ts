import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { FirebaseError } from "@firebase/util";

const config = {
  apiKey: "AIzaSyB2dnLlNghs8y6oIZh9MViNRToIby1O97M",
  authDomain: "it-shack-db.firebaseapp.com",
  projectId: "it-shack-db",
  storageBucket: "it-shack-db.appspot.com",
  messagingSenderId: "40005749331",
  appId: "1:40005749331:web:711adf1f6d0fcc14b854a6",
  measurementId: "G-MWFCYQVZVH",
};

export const isFirebaseError = (error: unknown): error is FirebaseError => {
  return (error as FirebaseError).code !== undefined;
};

export const createUserProfileDocument = async (
  userAuth?: firebase.User | null,
  additionalData?: any
) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log("error creating user", error.message);
      }
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey: string, objectsToAdd: any[]) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, object);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (
  collections: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    console.log(doc.id);

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((acc: any, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
