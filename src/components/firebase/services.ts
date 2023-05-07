import { addDoc, collection, serverTimestamp } from "firebase/firestore"


type IAddDoc = {
    collectionName: string;
    data: any;

}
import { db } from './index';

const addDocument = ({ collectionName, data }: IAddDoc) => {

    const collectionRef = collection(db, collectionName);
    const docData = {
        ...data,
        createdAt: serverTimestamp(),
    }
    return addDoc(collectionRef, docData);
}


export { addDocument };