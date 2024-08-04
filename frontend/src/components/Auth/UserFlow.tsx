import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserFlow: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const [userInfoNeeded, setUserInfoNeeded] = useState(false);

  useEffect(() => {
    const checkUserInfo = async () => {
      if (isAuthenticated) {
        try {
          await api.get("/user-info");
          // User info exists, redirect to dashboard
          window.location.href = "/dashboard";
        } catch (error) {
          if (axios.isAxiosError(error) && error.response?.status === 404) {
            setUserInfoNeeded(true);
          } else {
            console.error("Error checking user info:", error);
          }
        }
      }
    };

    checkUserInfo();
  }, [isAuthenticated]);

  // ... rest of the component remains the same
};

export default UserFlow;
