'use client';

import { User } from '../types/auth-public';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import LoadingScreen from '../common/loading-screen';

type IContextProps = {
    children?: React.ReactNode;
};

export const AuthContext = createContext({
    user: {} as User | null,
    setUser: (_user: User) => {},
    signOut: () => {},
});

export default function AuthProvider({ children }: IContextProps) {
    const [user, setUser] = useState<User | null>({} as User);
    const [loading, setLoading] = useState<boolean>(true);

    const router = useRouter();
    useEffect(() => {
        const unsubscribed = auth.onAuthStateChanged((user) => {
            // console.log('user', { user });

            if (user) {
                setUser(user as User);
                setLoading(false);
                router.push('/messenger');
                return;
            }
            if (!user) {
                setUser(null);
                setLoading(false);
                router.push('/');
            }
        });

        return () => unsubscribed();
    }, [user]);

    const signOut = () => {
        auth.signOut();
        setUser(null);
        router.push('/');
    };

    const value = {
        user,
        setUser,
        signOut,
    };
    return (
        <AuthContext.Provider value={value}>
            {loading ? <LoadingScreen /> : children}
        </AuthContext.Provider>
    );
}
