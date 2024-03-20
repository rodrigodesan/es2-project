import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import {
  getRegions,
  getResources,
  getStates,
  getYears,
  getStatesByTerms,
  getAverageVigency,
  getStatesByVigency,
  getResourcesByTerm,
  getStatesByValue,
} from '../services/search';

const DashContext = createContext(null);

function DashProvider({ children }) {
  const [filterResult, setFilterResult] = useState([]);
  const [regions, setRegions] = useState([]);
  const [states, setStates] = useState([]);
  const [years, setYears] = useState([]);
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentBoxValue, setCurrentBoxValue] = useState({
    category: {
      value: 0,
    },
    filter1: {
      id: '',
      value: '',
    },
    filter2: {
      id: '',
      value: '',
    },
    filter3: {
      id: '',
      value: '',
    },
  });

  const fetchData = useCallback(async (params) => {
    const category = params.category.value;

    switch (category) {
      case 1: {
        const maxStates = params.filter1.value;
        const regionId = params.filter2.value;
        const order = params.filter3.value;

        setLoading(true);
        const response = await getStatesByTerms({ maxStates, regionId, order });
        setFilterResult(response);
        setLoading(false);
        break;
      }

      case 2: {
        const stateId = params.filter1.value;
        const resourceId = params.filter2.value;

        setLoading(true);
        const response = await getAverageVigency({ stateId, resourceId });
        setFilterResult(response);
        setLoading(false);
        break;
      }

      case 3: {
        const yearId = params.filter1.value;
        const maxStates = params.filter2.value;
        const regionId = params.filter3.value;

        setLoading(true);
        const response = await getStatesByVigency({ yearId, maxStates, regionId });
        setFilterResult(response);
        setLoading(false);
        break;
      }

      case 4: {
        const yearId = params.filter1.value;
        const stateId = params.filter2.value;
        const regionId = params.filter3.value;

        setLoading(true);
        const response = await getResourcesByTerm({ yearId, stateId, regionId });
        setFilterResult(response);
        setLoading(false);
        break;
      }

      case 5: {
        const yearId = params.filter1.value;
        const maxStates = params.filter2.value;
        const regionId = params.filter3.value;

        setLoading(true);
        const response = await getStatesByValue({ yearId, maxStates, regionId });
        setFilterResult(response);
        setLoading(false);
        break;
      }

      default:
        break;
    }
  }, []);

  useEffect(() => {
    (async () => {
      const regionsResponse = await getRegions();
      setRegions(regionsResponse);

      const statesResponse = await getStates();
      setStates(statesResponse);

      const yearsResponse = await getYears();
      setYears(yearsResponse);

      const resourcesResponse = await getResources();
      setResources(resourcesResponse);
    })();
  }, []);

  const values = useMemo(
    () => ({
      fetchData,
      filterResult,
      setFilterResult,
      loading,
      currentBoxValue,
      setCurrentBoxValue,
      regions,
      states,
      years,
      resources,
    }),
    [
      fetchData,
      filterResult,
      setFilterResult,
      loading,
      currentBoxValue,
      setCurrentBoxValue,
      regions,
      states,
      years,
      resources,
    ],
  );

  return <DashContext.Provider value={values}>{children}</DashContext.Provider>;
}

function useDashContext() {
  const context = useContext(DashContext);

  if (!context) {
    throw new Error('Dash context must not be used outside its provider');
  }

  return context;
}

export { DashContext, DashProvider, useDashContext };
