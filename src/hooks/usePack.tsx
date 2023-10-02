/** @format */

import { useQuery } from '@tanstack/react-query';
import { Pack } from '../interfaces/interfaces';
import { getPack } from '../service/userService';

const usePack = (id: string) => {
	return useQuery<Pack, Error>({
		queryKey: ['pack', id],
		queryFn: () => getPack(id),
		retry: 3,
		cacheTime: 100_000,
		staleTime: 100_00,
		refetchOnWindowFocus: false,
		refetchOnReconnect: true,
		refetchOnMount: false,
	});
};

export default usePack;


