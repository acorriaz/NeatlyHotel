// hooks/useFetchUserRole.js
import { useState, useEffect } from "react";
import supabase from "../../../server/utils/db";

const useFetchUserRole = (userId) => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchUserRole = async () => {
      const { data, error } = await supabase
        .from("user_roles")
        .select("role_id, roles(name)")
        .eq("user_id", userId)
        .single(); // Use `.single()` if a user can have only one role

      if (error) {
        console.error("Error fetching user role:", error.message);
      } else {
        setRole(data.roles.name); // Assuming `roles` is a foreign table linked from `user_roles`
      }
    };

    fetchUserRole();
  }, [userId]);

  return role;
};

export default useFetchUserRole;
