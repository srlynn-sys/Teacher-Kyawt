# Teacher-Kyawt

A mobile-first student exam portal starter with Firebase result lookup and an admin result-reset panel.

## Features
- Two side-by-side home options: **စာမေးပွဲဖြေဆိုရန်** and **ရလဒ်စစ်ဆေးရန်**
- School logo URL configured in `index.html`
- Student IDs restricted in the UI to `10CF01` and `10CF02`
- Firebase Firestore result lookup using documents in `results/{studentId}`
- Firebase Authentication admin sign-in
- Admin-only reset of all documents in the `results` collection
- Exam questions are intentionally not included yet; the exam option clearly says questions must be added before an exam can begin.

## 1. Create Firebase project
1. Create a project at https://console.firebase.google.com/
2. Add a **Web app** and copy its Firebase config into `firebase-config.js`.
3. Replace `REPLACE_WITH_ADMIN_EMAIL` in both `firebase-config.js` and `firestore.rules` with the exact email you will use for the admin account.
4. In Firebase Authentication, enable **Email/Password** and create the admin user with that email.
5. Create a Cloud Firestore database and publish the rules from `firestore.rules`.

> Do not put a Firebase service-account key or other private server credentials in this website. The Firebase web config is intended for client applications; access is controlled by Firestore Rules.

## 2. Add results
Create a Firestore collection named `results`. Create a document whose ID is exactly `10CF01` or `10CF02`. Example fields:
- `studentId`: `10CF01`
- `name`: student's name
- `subject`: subject name
- `score`: number
- `total`: number
- `percentage`: number or string
- `grade`: grade text

The result page displays supported fields when present. Students can read only the two permitted document IDs; only the admin email configured in the rules can list, create, update, or delete result records.

## 3. Run / publish
This is a static website using Firebase's browser modules. It can be hosted on GitHub Pages or any static web host. On GitHub Pages, enable Pages for the branch/folder where these files live.

## Important
- Firebase cannot return real results until the web config is filled in and Firestore is set up.
- Exam-taking is a placeholder until you provide/add the question set and grading rules.
- The reset action permanently deletes every document in the `results` collection. It asks for confirmation first.
