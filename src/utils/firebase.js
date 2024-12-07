import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  limit,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDY3DRVzn-6zcur_ILApY0ln0utG3fnIF8",
  authDomain: "email-marketing-blog.firebaseapp.com",
  projectId: "email-marketing-blog",
  storageBucket: "email-marketing-blog.firebasestorage.app",
  messagingSenderId: "816256630628",
  appId: "1:816256630628:web:1e99683fc64e155376c471",
  measurementId: "G-LSN84PHRKX",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Blog Posts
export const addPost = async (postData) => {
  try {
    const docRef = await addDoc(collection(db, "blogPosts"), postData);
    return docRef.id;
  } catch (error) {
    throw new Error("Error adding post: " + error.message);
  }
};

export const updatePost = async (postId, postData) => {
  try {
    const postRef = doc(db, "blogPosts", postId);
    await updateDoc(postRef, postData);
  } catch (error) {
    throw new Error("Error updating post: " + error.message);
  }
};

export const deletePost = async (postId) => {
  try {
    const postRef = doc(db, "blogPosts", postId);
    await deleteDoc(postRef);
  } catch (error) {
    throw new Error("Error deleting post: " + error.message);
  }
};

export const getPosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "blogPosts"));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    throw new Error("Error fetching posts: " + error.message);
  }
};

export const getPost = async (postId) => {
  try {
    const postRef = doc(db, "blogPosts", postId);
    const postSnap = await getDoc(postRef);
    if (postSnap.exists()) {
      return { id: postSnap.id, ...postSnap.data() };
    }
    throw new Error("Post not found");
  } catch (error) {
    throw new Error("Error fetching post: " + error.message);
  }
};

// Featured Post
export const getFeaturedPost = async () => {
  try {
    const q = query(
      collection(db, "blogPosts"),
      where("featured", "==", true),
      limit(1)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return {
        id: querySnapshot.docs[0].id,
        ...querySnapshot.docs[0].data(),
      };
    }
    return null;
  } catch (error) {
    throw new Error("Error fetching featured post: " + error.message);
  }
};

export const setFeaturedPost = async (postId) => {
  try {
    // First, remove featured flag from all posts
    const posts = await getPosts();
    const updatePromises = posts
      .filter((post) => post.featured)
      .map((post) =>
        updateDoc(doc(db, "blogPosts", post.id), { featured: false })
      );

    await Promise.all(updatePromises);

    // Then set the new featured post
    const postRef = doc(db, "blogPosts", postId);
    await updateDoc(postRef, { featured: true });
  } catch (error) {
    throw new Error("Error setting featured post: " + error.message);
  }
};

// Email Subscriptions
export const addSubscriber = async (email) => {
  try {
    const subscribersRef = collection(db, "subscribers");

    // Check if email already exists
    const q = query(subscribersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      throw new Error("Email already subscribed");
    }

    await addDoc(subscribersRef, {
      email,
      subscribeDate: new Date().toISOString(),
      status: "active",
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
