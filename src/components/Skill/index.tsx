import React from 'react'
import styled from 'styled-components'
import {Chip, Typography} from '@material-ui/core'

const Skill: React.FC = () => {
    return (
        <SkillContainer>
            <TitleContainer>
                <Title>Skill</Title>
            </TitleContainer>
            <SkillChipContainer>
                <SkillChip label='JavaScript ☆☆☆☆☆' variant='outlined'/>
                <SkillChip label='React ☆☆☆☆' variant='outlined'/>
                <SkillChip label='ReactNative ☆☆☆' variant='outlined'/>
                <SkillChip label='Next.js ☆☆☆' variant='outlined'/>
                <SkillChip label='Express ☆☆☆' variant='outlined'/>
                <SkillChip label='jQuery ☆☆' variant='outlined'/>
                <SkillChip label='Vue.js ☆' variant='outlined'/>
                <SkillChip label='Python ☆☆' variant='outlined'/>
                <SkillChip label='C/C++ ☆☆' variant='outlined'/>
                <SkillChip label='PHP ☆' variant='outlined'/>
                <SkillChip label='CSS ☆☆☆' variant='outlined'/>
                <SkillChip label='WordPress ☆☆☆' variant='outlined'/>
                <SkillChip label='Git/GitHub ☆☆☆☆' variant='outlined'/>
                <SkillChip label='MySQL/MariaDB ☆☆' variant='outlined'/>
                <SkillChip label='PostgreSQL ☆☆' variant='outlined'/>
                <SkillChip label='Linux ☆☆☆' variant='outlined'/>
            </SkillChipContainer>
        </SkillContainer>
    )
}

const SkillContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
  text-align: center;
  padding: 5rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const TitleContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: -10rem;
  padding: 2rem 5rem;
  background-color: ${props => props.theme.palette.primary.light};
  @media (max-width: 768px) {
      padding: 1rem 1.5rem;
      left: -2rem;
  }
`

const Title = styled(Typography)`
  font-size: 1.5rem;
  color: #ffffff;
  @media (max-width: 768px) {
      font-size: 1.2rem;
  }
`

const SkillChip = styled(Chip)`
  margin-top: 1rem;
  color: ${props => props.theme.palette.primary.dark};
  border-color: ${props => props.theme.palette.primary.dark};
  margin-left: 1rem;
`

const SkillChipContainer = styled.div`
  width: 90%;
  flex-wrap: wrap;
  justify-content: space-around;
`


export default Skill