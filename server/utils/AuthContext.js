import React, { createContext, useContext, useState, useEffect } from "react";
import supabase from "../../../server/utils/db"; // Adjust this import path to where your Supabase instance is initialized

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function signInWithPassword(email, password) {
    try {
      const { data: authData, error: authError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (authError) throw authError;

      // Fetching user role from the users table
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("role")
        .eq("email", email) // Assuming 'email' is a unique identifier
        .single();

      if (userError) throw userError;

      // Setting the user's role and auth data in the context
      const userWithRole = { ...authData.user, role: userData.role };
      setCurrentUser(userWithRole);

      return userWithRole; // Return the user data including the role for further processing
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    // Optionally, check for an existing session on component mount
    // This will automatically log in users who have valid sessions
    const session = supabase.auth.session();
    if (session) {
      setCurrentUser(session.user);
      // Optionally, fetch user role here as well if it's not included in the session data
    }
    setLoading(false);
  }, []);

  // Sign out function
  async function signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setCurrentUser(null); // Clear the user context on sign out
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  }

  const value = {
    currentUser,
    signInWithPassword,
    signOut, // Provide a sign out function
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
