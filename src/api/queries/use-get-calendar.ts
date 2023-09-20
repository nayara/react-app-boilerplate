import { apiInstance } from '../client';
import { useQuery } from 'react-query';

type TQueryParams = {
  start: string;
  end: string;
};

const getCalendar = async ({ end, start }: TQueryParams) => {
  const path = `some-url?start=${start}&end=${end}`;

  return apiInstance.get(path).then(({ data }) => data);
};

const QUERY_NAME = 'calendar';

export function useCalendar({ start, end }: TQueryParams) {
  return useQuery({
    queryKey: [QUERY_NAME],
    queryFn: () => getCalendar({ start, end }),
    onError: (error: { message: string }) =>
      console.error(`Something whent wrong: ${error.message}`),
  });
}
