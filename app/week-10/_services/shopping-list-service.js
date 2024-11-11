import { db } from "../../week-10/_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
 try {
    const items = [];
    const itemsRef = collection(db, `users/${userId}/items`);
    const snapshot = await getDocs(itemsRef);

    snapshot.map((doc) => {
        items.push({ id: doc.id, ...doc.data() });
    });

    return items;
 } catch (error) {
    console.error("Error retrieving items", error);
    return [];
 }
};

export const addItem = async (userId, item) => {
try {
    const itemsRef = collection(db, `users/${userId}/items`);
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
} catch (error) {
    console.error("Error adding item: ", error);
    throw error;
}
};

