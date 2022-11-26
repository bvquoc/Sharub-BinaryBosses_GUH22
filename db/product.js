import { firestore } from '../firebase/clientApp';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';

const getAllProducts = async () => {
  const postsCollection = collection(firestore, 'products');
  const postsQuery = query(postsCollection);
  const result = [];
  await getDocs(postsQuery).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      result.push({ ...doc.data(), _docId: doc.id });
    });
  });
  console.log('posts:', result);
  return result;
};

export { getAllProducts };
