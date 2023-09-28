import { addDoc, getDocs, collection } from "firebase/firestore";
import { getDb } from "./db";

const collection_name = "users";

export const create = (args) =>
  addDoc(collection(getDb(), collection_name), args);

export const findAll = async () => {
  const doc_refs = await getDocs(collection(getDb(), collection_name));

  const res = [];

  doc_refs.forEach((user) => {
    res.push({
      id: user.id,
      ...user.data(),
    });
  });

  return res;
};
