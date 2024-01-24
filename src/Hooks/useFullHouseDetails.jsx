import { useQuery } from '@tanstack/react-query';
import useAxiosSecureV1 from './useAxiosSecureV1'


export default function useFullHouseDetails(id) {            
  const axios = useAxiosSecureV1();
    const fetchFullHouseDetails = async () => {
     const res = await axios.get(`/house/singel/${id}`);
      return res;
     };
    const { data: FullHouseDetails, isLoading, isError, error,isSuccess } = useQuery({
       queryKey: [`FullHouseDetails`, id],
       queryFn: () => fetchFullHouseDetails(),
       enabled : id ? true : false
     });    

  return {FullHouseDetails, isLoading, isError, error , isSuccess}
}
