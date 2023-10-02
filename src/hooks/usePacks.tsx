/** @format */

import { useQuery } from '@tanstack/react-query';
import { PackResponse } from '../interfaces/interfaces';
import { getPacks } from '../service/userService';

const usePacks = () => {
	return useQuery<PackResponse, Error>({
		queryKey: ['packs'],
		queryFn: getPacks,
		retry: 3,
		cacheTime: 100_000,
		staleTime: 100_00,
		refetchOnWindowFocus: false,
		refetchOnReconnect: true,
		refetchOnMount: false,
	});
};

export default usePacks;

