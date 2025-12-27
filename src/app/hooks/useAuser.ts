import { useQuery } from '@tanstack/react-query';

const useAuser = ({ id }: { id: string }) => {
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['userProfile'],
    // queryFn: async () => await UserManagementService.userById(id),
    enabled: !!id,
  });
  return { user, isLoading, refetch };
};
export default useAuser;
