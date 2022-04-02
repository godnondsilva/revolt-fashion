import SignUpForm from '../../components/sign-up-form/SignUpForm';

import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebaseUtils";

const Authentication = () => {
    // Function to handle the sign in with google popup
    const googleSignIn = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>This is the signin page</h1>
            <button onClick={googleSignIn}>Sign In With Google</button>
            <SignUpForm />
        </div>
    );
}

export default Authentication;