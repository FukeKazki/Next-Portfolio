import {createMuiTheme} from '@material-ui/core'

const lightTheme = createMuiTheme({
    palette: {
        // primary: {
        //     main: '#ffffff',
        // },
        // text: {
        //     primary: '#000000',
        //     secondary: 'gray',
        // }
    }
})

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        // primary: {
        //     main: 'rgb(28, 28, 28)'
        // },
        // text: {
        //     primary: '#ffffff',
        //     secondary: 'gray',
        // }
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