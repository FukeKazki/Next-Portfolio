import React from 'react'
import styled from 'styled-components'
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'

const Footer: React.FC = () => {
    const openLink = (link: string): void => {
        window.open(link)
    }

    return (
        <FooterContainer>
            <SNSContainer>
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
            </SNSContainer>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
  margin-top: 5rem;
  height: 200px;
  background-color: ${props => props.theme.palette.primary.dark};
`

const SNSContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  color: #ffffff;
`

const IconButtonContainer = styled(IconButton)``

export default Footer