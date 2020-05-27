import {createMuiTheme} from '@material-ui/core'

const lightTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#501b1d',
            dark: '#64485c',
            light: '#83677b'
        },
        background: {
            paper: 'rgb(208, 191, 183)',
        },
        text: {
            primary: '#2e1114',
            secondary: '#adadad',
        }
    },
    typography: {
        fontFamily: "'Merriweather', serif",
    }
})

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#240090',
            dark: '#190061',
            light: '#3500d3',
        },
        text: {
            primary: '#ffffff',
            secondary: '#ffffff',
        },
        background: {
            default: '#240090'
        }
    },
    typography: {
        fontFamily: "'Merriweather', serif",
    }
})

export const getTheme = (colorMode) => {
    switch (colorMode) {
        case 'light':
            return lightTheme
        case 'dark':
            return darkTheme
    }
}