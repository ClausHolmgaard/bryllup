import React, {createContext, useState} from 'react';

export const Context = createContext(null);

export default ({ children }) => {

    const [language, setLanguage] = useState('dansk')

    const store = {
      language: [language, setLanguage]
    }
  
    return <Context.Provider value={store}>{children}</Context.Provider>
  }
