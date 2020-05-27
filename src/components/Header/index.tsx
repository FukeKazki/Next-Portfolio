import React, {useContext} from 'react'
import styled from 'styled-components'
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import {ThemeContext} from '../../lib/themeContext'

const Header: React.FC = () => {
    const [mode, setMode] = useContext(ThemeContext)

    const openLink = (link: string): void => {
        window.open(link)
    }

    return (
        <HeaderContainer>
            {/*<MenuContainer position='fixed'>*/}
            {/*    <ToolbarContainer>*/}
            {/*        <IconButtonContainer color="inherit" aria-label="menu">*/}
            {/*            <MenuIcon/>*/}
            {/*        </IconButtonContainer>*/}
            {/*        <Typography variant='caption' component='span'>Menu</Typography>*/}
            {/*    </ToolbarContainer>*/}
            {/*</MenuContainer>*/}
            <ModeContainer position='fixed' onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
                <ToolbarContainer>
                    <IconButtonContainer color="inherit" aria-label="menu">
                        {mode === 'light' ? <Brightness2Icon/> : <Brightness4Icon/>}
                    </IconButtonContainer>
                    <Typography variant='caption' component='span'>{mode === 'light' ? 'dark' : 'light'}</Typography>
                </ToolbarContainer>
            </ModeContainer>
            <SNSContainer>
                <SNSToolbarContainer>
                    <IconButtonContainer color="inherit" aria-label="twitter"
                                         onClick={() => openLink('https://twitter.com/fukke0906')}>
                        <TwitterIcon/>
                    </IconButtonContainer>
                    <IconButtonContainer color="inherit" aria-label="GitHub"
                                         onClick={() => openLink('https://github.com/FukeKazki')}>
                        <GitHubIcon/>
                    </IconButtonContainer>
                    {/*Todo: AtCoder Qiita GitPress */}
                    <IconButtonContainer color="inherit" aria-label="Facebook"
                                         onClick={() => openLink('https://twitter.com/fukke0906')}>
                        <FacebookIcon/>
                    </IconButtonContainer>
                </SNSToolbarContainer>
            </SNSContainer>
            <CatchTextContainer>
                <CatchText variant='subtitle1'>Welcome</CatchText>
                <CatchText variant='subtitle1'>fukke Portofolio</CatchText>
            </CatchTextContainer>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  background-size: cover;
  background-image: url('/tukushi-top-1080.JPG');
  @media (max-width: 768px) {
      background-image: url('/tukushi-top-750.JPG');
      background-position: 50% 0;
  }
`

const CatchTextContainer = styled.div`
  position: absolute;
  bottom: 5rem;
  right: 3rem;
  color: #ffffff;
  @media (max-width: 768px) {
      bottom: 3rem;
      left: 3rem;
  }
`

const CatchText = styled(Typography)`
  font-size: 3rem;
  @media (max-width: 768px) {
      font-size: 2rem;
  }
`
const MenuContainer = styled(AppBar)`
  box-shadow: none;
  top: 0;
  left: 0;
  width: 127px;
  height: 127px;
  background-color: ${props => props.theme.palette.primary.dark};
  color: #ffffff;
  @media (max-width: 768px) {
      width: 101px;
      height: 101px;
  }
`

const ModeContainer = styled(AppBar)`
  box-shadow: none;
  //top: 0;
  //left: 127px;
  //width: 127px;
  //height: 127px;
  background-color: ${props => props.theme.palette.background.default};
  color: ${props => props.theme.palette.text.primary};
  //@media (max-width: 768px) {
  //    left: 101px;
  //    width: 101px;
  //    height: 101px;
  //}
  top: 0;
  left: 0;
  width: 127px;
  height: 127px;
  @media (max-width: 768px) {
      width: 101px;
      height: 101px;
  }
`

const SNSContainer = styled(AppBar)`
  box-shadow: none;
  top: 1rem;
  right: 1rem;
  width: 70px;
  height: 180px;
  border-radius: 3rem;
  background-color: ${props => props.theme.palette.primary.dark};
  color: #ffffff;
  @media (max-width: 768px) {
      display: none;
  }
`

const ToolbarContainer = styled(Toolbar)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`

const SNSToolbarContainer = styled(Toolbar)`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
`

const IconButtonContainer = styled(IconButton)``

export default Header