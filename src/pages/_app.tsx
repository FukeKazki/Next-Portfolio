import '../styles/global.css'
import {ThemeProvider} from '../lib/themeProvider'

const App = ({Component, pageProps}) => {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default App