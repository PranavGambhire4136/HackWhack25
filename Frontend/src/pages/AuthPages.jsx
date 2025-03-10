import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AuthPages = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate(); // Initialize navigation
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        displayName: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Function to get cookie value by name
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    // Store user data in localStorage
    const storeUserData = (data) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify({
            email: data.email,
            displayName: data.displayName,
            id: data.id
        }));
    };

    useEffect(() => {
        // Check for auth cookie on component mount
        const authCookie = getCookie('token');
        if (authCookie) {
            try {
                const userData = JSON.parse(decodeURIComponent(authCookie));
                storeUserData(userData);
            } catch (err) {
                console.error('Error parsing auth cookie:', err);
            }
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const endpoint = isLogin ? "login" : "signup";
            const res = await axios.post(
                `http://localhost:5000/api/v1/${endpoint}`,
                formData,
                { 
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true // Enable sending and receiving cookies
                }
            );
            console.log(`${isLogin ? "Login" : "Signup"} Success:`, res.data);

            if (isLogin) {
                // Store user data from response
                storeUserData(res.data);
                navigate("/"); // Redirect to home after login
                localStorage.setItem("token", res.data.token);
            } else {
                setIsLogin(true); // Switch to login form after signup
                setFormData({ email: "", password: "", displayName: "" });
            }
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");
            console.error("Error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 px-4">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-center text-3xl font-bold text-gray-800">
                    {isLogin ? "Welcome Back!" : "Create an Account"}
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    {isLogin ? "Sign in to continue" : "Sign up to get started"}
                </p>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
                        {error}
                    </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div>
                            <label htmlFor="displayName" className="text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                id="displayName"
                                name="displayName"
                                type="text"
                                required
                                className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Full Name"
                                value={formData.displayName}
                                onChange={handleChange}
                            />
                        </div>
                    )}

                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full text-black py-3 rounded-lg font-semibold green transition-all duration-300 shadow-md text-[15px]"
                    >
                        {loading ? "Processing..." : isLogin ? "Sign In" : "Sign Up"}
                    </button>
                </form>

                <div className="text-center mt-6">
                    <button
                        type="button"
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-indigo-600 hover:underline font-medium"
                    >
                        {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthPages;
