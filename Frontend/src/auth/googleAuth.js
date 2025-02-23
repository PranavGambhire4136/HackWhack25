import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "../firebase/config";

export const googleAuth = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
        prompt: "select_account",
    });

    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log("Credential:", credential);
        console.log("User:", user);
    } catch (error) {
        console.error("Error signing in with Google:", error);
        // Handle specific errors
        if (error.code === "auth/popup-closed-by-user") {
            console.log("Popup closed by user");
        } else if (error.code === "auth/popup-blocked") {
            console.log("Popup was blocked. Please allow popups for this site");
        }
    }
};
