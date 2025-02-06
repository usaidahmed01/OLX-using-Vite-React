import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  , updateProfile } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCdZX1I9DX2mTux9GIETwQtbExmQFzxd0Q",
  authDomain: "olx-clone-3acfa.firebaseapp.com",
  projectId: "olx-clone-3acfa",
  storageBucket: "olx-clone-3acfa.appspot.com",
  messagingSenderId: "543494101541",
  appId: "1:543494101541:web:ac9500d4c2ad4c3a9b7dcc"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


async function signup(userInfo) {
  const { email, password, fullName, } = userInfo;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(userCredential.user , {displayName : fullName}) // Update the profile
    const docRef = await addDoc(collection(db, "users"), {
      fullName,
      email,
    });

    // alert('Registered Successfully')



    return true;
  }
  catch (e) {
    alert(e.message)
    throw e;

  }

  // .then((userCredential) => {
  // const user = userCredential.user;


  // })

  // .catch((error) => {
  // const errorCode = error.code;
  // const errorMessage = error.message;

  // });


}

async function login(userInfo) {

  const { email, password } = userInfo;
  await signInWithEmailAndPassword(auth, email, password)


 


}
async function logout() {
  await signOut(auth)


}

async function userAd(ad) {

  const { title, price, images, description } = ad;

  try {

    const storageRef = ref(storage, `adDetails/${images.name}`);                  // here we save the images references in firbase storage
    await uploadBytes(storageRef, images);                                        // here we upload the images in fiebase so we can get the url 

    const imgURL = await getDownloadURL(storageRef);
    
    await addDoc(collection(db, "adDetails"), {
      title,
      price,
      description,
      imageURL: imgURL,

    });

    alert('AD Posted!')

    return true;



  }
  catch (e) {
    alert(e.message)
    throw e;
  }

}

async function getADs() {
  const querySnapshot = await getDocs(collection(db, "adDetails"));
  const adsData = []
  querySnapshot.forEach((doc) => {

    const ad = doc.data()
    ad.id = doc.id

    adsData.push(ad)
    // console.log(adsData , 'id');
  });
  return adsData


}



async function uploadpfp(pfpimage) {
  const { pfpImg  , fullName} = pfpimage

  try {

    const storageRef = ref(storage, `profilepictures/${pfpImg.name}`);
    await uploadBytes(storageRef, pfpImg)
    const pfpURl = await getDownloadURL(storageRef)

    await updateProfile( auth.currentUser , {displayName : fullName , photoURL : pfpURl})

    const docRef = await addDoc(collection(db, "userpfps"), {
      pfpURl,
    });


  } catch (e) {
    alert(e.message)
  }


}



async function getSingleProduct(detailID) {

  const docRef = doc(db, "adDetails", detailID);
  const docSnap = await getDoc(docRef);
  const productData = docSnap.data()

  if (docSnap.exists()) {
    console.log("Document data:", productData);
  } else {
    console.log("No such document!");
  }
  return productData



}


export {
  login,
  signup,
  userAd,
  getADs,
  logout,
  uploadpfp,
  getSingleProduct
}
