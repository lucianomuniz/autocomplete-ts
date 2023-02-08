import { useEffect, useState } from 'react';
import axios from 'axios';

interface dataType {
  city: string;
  state: string;
}

interface fetchType {
  data: dataType[];
  isLoading: boolean;
}

const useFetchData = (url: string) => {
  const [state, setState] = useState<fetchType>({
    data: [],
    isLoading: false,
  });

  const fetchData = () => {
    setState({ data: [], isLoading: true });
    axios
      .get(url)
      .then((res) => res.data)
      .then((res) => {
        setState({ data: res, isLoading: false });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    ...state,
  };
};

export default useFetchData;
