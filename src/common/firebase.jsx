import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXen2lBVMfc9WZpTcDVzSpaHi9buT6S-c",
  authDomain: "anitaposts-d2d2e.firebaseapp.com",
  projectId: "anitaposts-d2d2e",
  storageBucket: "anitaposts-d2d2e.appspot.com",
  messagingSenderId: "587898750555",
  appId: "1:587898750555:web:1d73c79f39fd901ee2617e",
};

const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

const authWithGoogle = async () => {
  let user = null;
  await signInWithPopup(auth, provider)
    .then((result) => {
      user = result.user;
    })
    .catch((error) => {
      console.log(error);
    });
  return user;
};

export { auth, authWithGoogle };
