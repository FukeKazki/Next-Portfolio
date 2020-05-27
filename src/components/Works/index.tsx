import React from 'react'
import styled from 'styled-components'
import {SectionTitleContainer, SectionTitle} from '../Common'
import Typography from '@material-ui/core/Typography'

const Works: React.FC = () => {
    return (
        <WorksContainer>
            <SectionTitleContainer>
                <SectionTitle>Works</SectionTitle>
            </SectionTitleContainer>
        </WorksContainer>
    )
}

const WorksContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
  text-align: center;
  padding: 5rem 0;
`


export default Works