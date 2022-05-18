import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import  {goToFeedPage}  from "../routes/coordinator";

export const useUnprotectedPage = () => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToFeedPage(navigate);
    }
  }, [navigate]);
};
