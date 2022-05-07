import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import type { Route } from 'config/routes';

import useNavStore from 'stores/useNavStore';

export default () => {
  const navigate = useNavigate();

  const setNavigate = useNavStore(state => state.setNavigate);
  const setCurrentRoute = useNavStore(state => state.setCurrentRoute);

  useEffect(() => {
    setNavigate((r: Route, overwriteUrl?: string) => {
      if (r.render?.url) {
        setCurrentRoute(r);

        const url = overwriteUrl ? overwriteUrl : r.render.url;
        navigate(url);
      }
    });
  }, [navigate]);
}