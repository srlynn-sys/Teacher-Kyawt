// Firebase Console > Project settings > Your apps > Web app config မှ တန်ဖိုးများကို ထည့်ပါ.
// ဤဖိုင်တွင် Firebase web config သာထည့်ပါ။ Service account private key မထည့်ရပါ။
export const firebaseConfig = {
  apiKey: "PASTE_YOUR_FIREBASE_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_FIREBASE_APP_ID"
};

// Firebase Authentication ထဲတွင် ဖန်တီးမည့် Admin email နှင့် အောက်ပါ Firestore Rules ထဲက email ကို တူညီအောင်ထားပါ။
export const ADMIN_EMAIL = "REPLACE_WITH_ADMIN_EMAIL";
