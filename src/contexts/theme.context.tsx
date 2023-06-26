'use client';

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  // useReducer,
  useState,
} from 'react';

// type StateType = {
//   themeMode: string;
// };

// type ActionType = {
//   type: boolean;
// };

// const initialState: StateType = {
//   themeMode: 'dark',
// };

// const reducer = (state: StateType, action: ActionType) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 };
//     case 'DECREMENT':
//       return { ...state, count: state.count - 1 };
//     case 'RESET':
//       return { ...state, count: 0 };
//     default:
//       return state;
//   }
// };

interface ContextProps {
  themeMode: boolean;
  setThemeMode: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ContextProps>({
  themeMode: false,
  setThemeMode: (): boolean => false,
});

// ********Context Provider**************

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [themeMode, setThemeMode] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// make use of this context provider
export const useThemeContext = () => useContext(ThemeContext);
