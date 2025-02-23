import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const login = async ({ email, password }) => {
    const auth = getAuth();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Signed in
        const user = userCredential.user;
        console.log('User logged in successfully!');
        return user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        throw error;
    }
};
