import React from 'react'
import styled from 'styled-components'
import {SectionTitleContainer, SectionTitle} from '../Common'
import Typography from '@material-ui/core/Typography'

const Profile: React.FC = () => {
    return (
        <ProfileContainer>
            <SectionTitleContainer>
                <SectionTitle>Profile</SectionTitle>
            </SectionTitleContainer>
            <ProfileText>Fuke Kazuki</ProfileText>
            <ProfileText>北九州高専 生産デザイン工学科　情報システムコース4年</ProfileText>
            <ProfileText>Webフロントエンジニア志望</ProfileText>
        </ProfileContainer>
    )
}

const ProfileContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
  text-align: center;
  padding: 5rem 0;
`

const ProfileText = styled(Typography)`
  font-size: 1.2rem;
  line-height: 4;
  letter-spacing: .5rem;
  @media (max-width: 768px) {
      letter-spacing: 0rem;
  }
`

export default Profile