import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyA3iRzkqvPr1JdVSBfFpNSGF8eC_XPEWfU",
    authDomain: "crwn-db-cd26d.firebaseapp.com",
    projectId: "crwn-db-cd26d",
    storageBucket: "crwn-db-cd26d.appspot.com",
    messagingSenderId: "517742164696",
    appId: "1:517742164696:web:c95a461164f658728535ad"
};

/* verifica si el usuario existe en la base de datos, si existe no lo crea de nuevo y si 
   no existe lo genera*/

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

  /*
    Para google authentication
  */

// Nos da acceso al auth provider de google
const provider = new firebase.auth.GoogleAuthProvider();
// Hace referencia al google pop up para cuando usemos el auth (autenticación y sign in)
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;