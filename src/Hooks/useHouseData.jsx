import { useQuery } from "@tanstack/react-query";

import useAxiosPublicV1 from "./useAxiosPublicV1";

export default function useHouseData(page, limit) {
  const Tpage = page || 1;
  const Tlimit = limit || 10;
  const axios = useAxiosPublicV1();
  const fetchHouseData = async () => {
    const res = await axios.get(`/house/all?page=${Tpage}&limit=${Tlimit}`);
    return res;
  };
  const {
    data: HouseData,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["HouseData", page, limit],
    queryFn: () => fetchHouseData(),
  });

  return { HouseData, isLoading, isError, error, isSuccess };
}
