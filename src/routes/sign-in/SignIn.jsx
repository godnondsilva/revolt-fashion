import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebaseUtils";

const SignIn = () => {
    const googleSignIn = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>This is the signin page</h1>
            <button onClick={googleSignIn}>Sign In With Google</button>
        </div>
    );
}

export default SignIn;