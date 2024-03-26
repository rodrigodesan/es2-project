import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import { getSavedSearches, saveSearch, getSavedSearch } from '../services/save-search';

const ProfileContext = createContext(null);

function ProfileProvider({ children }) {
  const [searches, setSearches] = useState([]);
  const [currentSearch, setCurrentSearch] = useState({});
  const [success, setSuccess] = useState('');
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const searchesResponse = await getSavedSearches();
      setSearches(searchesResponse);
    })();
  }, []);

  const saveASearch = useCallback(
    async (term, filter1, filter2, filter3) => {
      const response = await saveSearch({
        term, filter1, filter2, filter3,
      });

      if (response.errors) {
        setLoading(false);
        setErrors(response.errors);
        return;
      }

      setSuccess('Busca salva com sucesso!');
      setLoading(false);
      setErrors([]);
    },
    [],
  );

  const getCurrentSearch = useCallback(
    async (id) => {
      const response = await getSavedSearch(id);

      if (response.errors) {
        setLoading(false);
        setErrors(response.errors);
        return;
      }

      setCurrentSearch(response);
      setLoading(false);
      setErrors([]);
    },
    [],
  );

  const values = useMemo(
    () => ({
      searches,
      currentSearch,
      success,
      setSuccess,
      errors,
      loading,
      saveASearch,
      getCurrentSearch,
    }),
    [
      searches,
      currentSearch,
      success,
      setSuccess,
      errors,
      loading,
      saveASearch,
      getCurrentSearch,
    ],
  );

  return <ProfileContext.Provider value={values}>{children}</ProfileContext.Provider>;
}

function useProfileContext() {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error('Profile context must not be used outside its provider');
  }

  return context;
}

export { ProfileContext, ProfileProvider, useProfileContext };
