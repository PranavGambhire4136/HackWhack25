import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const signUp = async ({ email, password }) => {
    const auth = getAuth();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            // Signed up
            const user = userCredential.user;
            console.log('User registered successfully!');

            // ...
     
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    }
};
