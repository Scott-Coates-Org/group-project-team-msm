import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// import '@firebase/auth';
// import '@firebase/storage';
// import 'firebase/firestore';

const firebaseKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const firebaseProjectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const firebaseAuthDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const firebaseStorageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;

const firebaseConfig = {
  apiKey: firebaseKey,
  authDomain: firebaseAuthDomain,
  projectId: firebaseProjectId,
  storageBucket: firebaseStorageBucket,
};

// validate config
const keysWithEmptyValues = Object.entries(firebaseConfig)
  .filter(([k, v]) => !v)
  .map(([k]) => k)
  .join(', ');
if(keysWithEmptyValues) throw new Error(`These keys must be filled in ROOT_DIR/env.local before starting the app: ${keysWithEmptyValues}`);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
