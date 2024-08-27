// ModelContext.js
import React, { createContext, useState, useContext } from 'react';

const ModelContext = createContext();

export const ModelProvider = ({ children }) => {
    const [modelPath, setModelPath] = useState(null);

    return (
        <ModelContext.Provider value={{ modelPath, setModelPath }}>
            {children}
        </ModelContext.Provider>
    );
};

export const useModel = () => useContext(ModelContext);
