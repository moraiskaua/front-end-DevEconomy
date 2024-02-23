import { ReactNode, createContext } from 'react';

interface AuthContextType {
  signedIn: boolean;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthContext.Provider value={{ signedIn: true }}>
      {children}
    </AuthContext.Provider>
  );
};
