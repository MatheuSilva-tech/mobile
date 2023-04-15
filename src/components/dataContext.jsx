import { StyleSheet} from 'react-native'
import React, { createContext, useState } from 'react'

export const DataContext = createContext();

export default function DataProvider({children}) {

    const [dados, setDados] = useState([]);

  return (
    <DataContext.Provider value={{dados, setDados}}>
        {children}
    </DataContext.Provider>
  )
}

const styles = StyleSheet.create({})