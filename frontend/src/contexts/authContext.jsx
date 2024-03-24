import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/users';
import { setToken, signIn } from '../services/login';

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [success, setSuccess] = useState('');
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const recoveredUser = useMemo(
    () => localStorage.getItem('@pce:user'),
    [user],
  );

  useEffect(() => {
    const token = localStorage.getItem('@pce:token');

    if (recoveredUser && token) {
      setUser(JSON.parse(recoveredUser));
      setToken(token);
    }

    setLoading(false);
  }, [recoveredUser]);

  // COMMENT: para rodar funções de teste
  useEffect(() => {
    (async () => {
      // const users = await getUsers();
      // console.log(users);

      // const response = await signIn({ email: 'leticia@teste.com', password: '123456' });
      // console.log(response);
      // if (response.errors) console.log(response.errors);
    })();
  }, []);

  const login = useCallback(
    async (email, password) => {
      const response = await signIn({ email, password });

      if (response.errors) {
        setLoading(false);
        setErrors(response.errors);
        return;
      }

      const loggedUser = response.user;
      const { token } = response;

      localStorage.setItem('@pce:user', JSON.stringify(loggedUser));
      localStorage.setItem('@pce:token', token);

      setToken(token);

      setLoading(false);
      setErrors([]);

      setUser(loggedUser);
      navigate('/perfil');
    },
    [navigate],
  );

  const logout = useCallback(() => {
    localStorage.removeItem('@pce:user');
    localStorage.removeItem('@pce:token');

    setToken(null);
    setUser(null);

    navigate('/');
  }, [navigate]);

  const registerUser = useCallback(
    async (name, lastName, email, password) => {
      const fullName = `${name} ${lastName}`;
      const response = await createUser({ name: fullName, email, password });

      if (response.errors) {
        setLoading(false);
        setErrors(response.errors);
        return;
      }

      setSuccess('Usuário criado com sucesso!');
      setLoading(false);
      setErrors([]);
    },
    [],
  );

  const values = useMemo(
    () => ({
      authenticated: !!recoveredUser,
      login,
      logout,
      registerUser,
      user,
      errors,
      setErrors,
      success,
      setSuccess,
      loading,
      setLoading,
    }),
    [
      recoveredUser,
      login,
      logout,
      registerUser,
      user,
      errors,
      setErrors,
      success,
      setSuccess,
      loading,
      setLoading,
    ],
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Auth context must not be used outside its provider');
  }

  return context;
}

export { AuthContext, AuthProvider, useAuthContext };
