import React from 'react'
import {ThemeProvider as StyledThemeProvider} from 'styled-components'
import {ThemeProvider as MaterialThemeProvider, StylesProvider} from '@material-ui/styles'

import {useMode} from './themeContext'
import {ThemeContext} from './themeContext'
import {getTheme} from './theme'

export const ThemeProvider = ({children}) => {
    const [mode, setMode] = useMode()

    return (
        <StylesProvider injectFirst>
            <MaterialThemeProvider theme={getTheme(mode)}>
                <StyledThemeProvider theme={getTheme(mode)}>
                    <ThemeContext.Provider value={[mode, setMode]}>
                        {children}
                    </ThemeContext.Provider>
                </StyledThemeProvider>
            </MaterialThemeProvider>
        </StylesProvider>
    )
}