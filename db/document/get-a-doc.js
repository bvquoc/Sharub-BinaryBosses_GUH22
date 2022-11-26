import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../firebase/clientApp';

/**
 * Add a document to collection (req docId)
 * @param {String} collectionName (ex: "products")
 * @param {String} docId (ex: "12345" -> "products/12345")
 */
const getDocument = async (collectionName, docId) => {
  const docRef = doc(firestore, collectionName, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
    return docSnap.data();
  } else {
    console.log('No such document!');
    return null;
  }
};

export { getDocument };
