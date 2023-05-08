'use client';

import { redirect, useRouter } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';
import LoadingScreen from '../common/loading-screen';
import { auth } from '../firebase';
import { User } from '../types/auth-public';

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
            if (user) {
                setUser(user as User);
                setLoading(false);
                return;
            }

            if (!user) {
                setUser(null);
                setLoading(false);
            }
        });

        return () => {
            unsubscribed();
        };
    }, [setUser, router]);

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
