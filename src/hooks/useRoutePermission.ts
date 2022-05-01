import { useEffect } from "react";

import routes from "config/routes";

import useNavStore from "stores/useNavStore";
import useUserStore from "stores/useUserStore";

export default () => {
  const currentRoute = useNavStore(state => state.currentRoute);
  const navigate = useNavStore(state => state.navigate);

  const userType = useUserStore(state => state.type);

  useEffect(() => {
    if (
      navigate &&
      currentRoute &&
      currentRoute.allowUsers &&
      !currentRoute.allowUsers.includes(userType)
    ) {
      navigate(routes.error);
    }
  }, [currentRoute, navigate, userType]);
}