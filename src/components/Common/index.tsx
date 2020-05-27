import React from 'react'
import styled from 'styled-components'
import {Typography} from '@material-ui/core'

export const SectionTitleContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: -10rem;
  padding: 2rem 5rem;
  background-color: ${props => props.theme.palette.primary.light};
  z-index: 10 !important;
  @media (max-width: 768px) {
      padding: 1rem 1.5rem;
      left: -2rem;
  }
`

export const SectionTitle = styled(Typography)`
  font-size: 1.5rem;
  color: #ffffff;
  z-index: 10;
  @media (max-width: 768px) {
      font-size: 1.2rem;
  }
`