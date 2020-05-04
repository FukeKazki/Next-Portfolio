import {createContext, useCallback, useState} from 'react'

type ThemeContext = [string, (mode: string) => void]

const defaultContext: ThemeContext = ['light', () => {}]

export const ThemeContext = createContext<ThemeContext>(defaultContext)

export const useMode = (): ThemeContext => {
    const [mode, _setMode] = useState('light')

    const setMode = useCallback((_mode: string): void => {
        _setMode(_mode)
    }, [])

    return [mode, setMode]
}