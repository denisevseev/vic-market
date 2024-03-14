import { MarketRead } from "@/api/types/types";
import axios from "axios";
import { UseQueryResult, useQuery } from "react-query";

interface CountryDataType {
    // Example properties, adjust according to your actual data structure
    id: number;
    name: string;
  }
  export const useCountryData = (): UseQueryResult<CountryDataType[], unknown> => {
    return useQuery<CountryDataType[], unknown>({
      queryKey: ['market/countries'],
      queryFn: async () => {
        const response = await axios.get('/api/market/countries');
        return response.data;
      },
    });
  };
