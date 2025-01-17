import AuthContext from "../Context/AuthContext";
const AuthProvider = ({ children }) => {
    const authInfo = {};
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
