import React from 'react'
import {Card, CardContent, Typography, CardMedia, Chip} from '@material-ui/core'
import styled from 'styled-components'
import {Article} from '../../types'

type ArticleCardProps = {
    article: Article,
    tag: string
}

const ArticleCard: React.FC<ArticleCardProps> = ({article, tag}) => {
    const {title, link, updated} = article

    const clickCard = (): void => {
        window.open(link)
    }

    const trimTitle = (title: string): string => {
        const max_length = 30
        if (title.length > max_length) {
            return title.slice(0, max_length) + '...'
        }
        return title
    }

    const trimDate = (date: string): string => {
        return date.slice(0, 10)
    }

    return (
        <ArticleCardContainer key={title} onClick={clickCard}>
            <ArticleCardMedia
                title='Article Image'
                image='https://firebasestorage.googleapis.com/v0/b/actors-d06ab.appspot.com/o/users%2F2dWFg8aViAbJufrEJfJU.jpg?alt=media&token=10e3c851-cb44-4761-878e-539041f19a9c'/>
            <CardContent component='div'>
                <ArticleTagContainer label={tag} variant='outlined' size='small'/>
                <ArticleTitle color='textPrimary' variant='subtitle1'>{trimTitle(title)}</ArticleTitle>
                <Typography color='textSecondary' component='time'
                            variant='caption'>{trimDate(updated)}</Typography>
            </CardContent>
        </ArticleCardContainer>
    )
}

const ArticleCardContainer = styled.section`
    background-color: ${props => props.theme.palette.background.default};
    margin-top: 3rem;
    margin-left: 3rem;
    width: 250px;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 120px; 
      //max-height: 300px;
      margin-left: 0;
      margin-top: 1rem;
      &:nth-child(n+6) {
          display: none;
        }
    }
    z-index: 2;
`

const ArticleCardMedia = styled(CardMedia)`
    height: 140px;
    @media (max-width: 768px) {
      display: none;
    }
`

const ArticleTagContainer = styled(Chip)`
    color: ${props => props.theme.palette.text.primary};
    font-size: .7rem;
    margin-bottom: .5rem;
    @media (max-width: 768px) {
      display: none;
    }
`

const ArticleTitle = styled(Typography)`
  @media (max-width: 768px) {
    font-size: .9rem;    
  }
`

const ArticleDate = styled(Typography)`
`

export default ArticleCard