import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the cookie to simulate logout
    document.cookie =
      "user_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    console.log("Logging out");
    navigate("/logout");
  }, [navigate]);

  return null;
};

export default Logout;
