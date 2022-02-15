import { useEffect } from "react";
import { navigate } from "@reach/router";

const NotFoundPage = (): null => {
  useEffect(() => {
    navigate("");
  }, []);
  return null;
};

export default NotFoundPage;
