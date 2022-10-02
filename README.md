# Revolt Fashion

An E-commerce fashion store using React and Firebase.

# Frontend Documentation (React)

- Clone this respository `git clone <SSH/HTTPS URL>`.
- Change directory to the frontend directory `cd revolt-fashion/frontend`.
- Install the dependencies `npm install`.
- Run the application in development mode `npm run start`.
- Deploy the frontend on [Vercel](https://vercel.com).

# Backend Documentation (Firebase)

- Go to your firebase console and create a new project.
- Create a new web project.
- Make sure to copy and paste the configuration into `src/utils/firebase/firebaseUtils.ts`.
- Go to the Authentication page and click on the Sign-in method tab, enable Email/Password login.
- Go to the Firestore Database page and click on the rules tab, enter the following rules:

  ```
    rules_version = '2';
    service cloud.firestore {
        match /databases/{database}/documents {
            match /users/{userId} {
                allow read, get, create;
                allow write: if request.auth != null && request.auth.uid == userId;
            }

            match /categories/{category} {
                allow read;
                allow write: if request.auth != null && request.auth.uid == "xKaNMDDVeIgw50zEGjaXI208Eaf2";
            }

            match /{document=**} {
                allow read;
            }
        }
    }
  ```
