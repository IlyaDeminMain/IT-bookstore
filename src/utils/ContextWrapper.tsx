
import React, { createContext, useContext, ReactNode } from 'react';
import {ROUTES} from "src/utils/routes";

export type RoutesType = typeof ROUTES

interface ContextType {
    ROUTES: RoutesType
}

const Context = createContext<ContextType | undefined>(undefined);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    return (
        <Context.Provider value={{ ROUTES }}>
            {children}
        </Context.Provider>
    );
};

export const useHookContext = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useContext must be used inside ContextProvider');
    }
    return context;
};

export default Context;