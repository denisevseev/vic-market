import { MarketRead } from "@/api/types/types";
import axios from "axios";
import { useQuery } from "react-query";

export const useMarketData = () => {
  return useQuery<MarketRead[]>({
    queryKey: ["market/read"],
    queryFn: async () => {
      const userRes = await axios.get("/api/market/read");
      return userRes.data;
    },
  });
};
