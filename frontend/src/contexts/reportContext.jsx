/* eslint-disable camelcase */
import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
import { createReport } from '../services/reports';

const ReportContext = createContext(null);

function ReportProvider({ children }) {
  const [success, setSuccess] = useState('');
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const createAReport = useCallback(
    async ({
      description, saved_search, term, title = '',
    }) => {
      const response = await createReport({
        description, saved_search, term, title,
      });

      if (response.errors) {
        setLoading(false);
        setErrors(response.errors);
        return;
      }

      setSuccess('Relatório criado com sucesso!');
      setLoading(false);
      setErrors([]);
    },
    [],
  );

  const values = useMemo(
    () => ({
      success,
      setSuccess,
      errors,
      loading,
      createAReport,
    }),
    [
      success,
      setSuccess,
      errors,
      loading,
      createAReport,
    ],
  );

  return <ReportContext.Provider value={values}>{children}</ReportContext.Provider>;
}

function useReportContext() {
  const context = useContext(ReportContext);

  if (!context) {
    throw new Error('Report context must not be used outside its provider');
  }

  return context;
}

export { ReportContext, ReportProvider, useReportContext };
