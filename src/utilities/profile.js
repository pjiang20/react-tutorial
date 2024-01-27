import { useAuthState, useDbData } from './firebase';

export const useProfile = () => {
    const [user] = useAuthState();
    const [isAdmin, error] = useDbData(`/admins/${user?.uid || 'guest'}`);
    return [{ user, isAdmin }, error];
};