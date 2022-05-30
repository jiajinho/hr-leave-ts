import { useEffect } from 'react';

import type { Key } from 'config/localStorage';
import localStorage from 'config/localStorage';
import useLocalStore from 'stores/useLocalStore';

export default () => {
  const value: { [k in Key]: string } = {
    tokenUser: useLocalStore(state => state.tokenUser),
    orgId: useLocalStore(state => state.orgId)
  }

  useEffect(() => {
    window.localStorage.setItem(localStorage.tokenUser, value.tokenUser);
    window.localStorage.setItem(localStorage.orgId, value.orgId);
  }, [value.tokenUser, value.orgId]);

  useEffect(() => {
    return () => { window.localStorage.clear() }
  }, []);
}