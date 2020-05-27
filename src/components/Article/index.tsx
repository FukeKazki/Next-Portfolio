import React from 'react'
import {Box, Typography} from '@material-ui/core'
import styled from 'styled-components'
import ArticleCard from './ArticleCard'
import {Article} from '../../types'
import {SectionTitleContainer, SectionTitle} from '../Common'

type ArticleProps = {
    qiita_article: Article[],
    gitPress_article: Article[],
    limit?: number,
}

const ArticleComponent: React.FC<ArticleProps> = ({qiita_article, gitPress_article, limit }) => {

    return (
        <div style={{overflow: 'hidden'}}>
            <ArticleContainer>
                <SectionTitleContainer>
                    <SectionTitle>Blogs</SectionTitle>
                </SectionTitleContainer>
                {gitPress_article.map((article , i)=> {
                    if (limit && i > limit-1) return null
                    return <ArticleCard article={article} tag='GitPress'/>
                })}
                {/*{qiita_article.map(article => <ArticleCard article={article} tag='Qiita'/>)}*/}
                <ArticleBackground/>
            </ArticleContainer>
        </div>
    )
}

const ArticleContainer = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 80%;
    margin: 0 auto;
    padding: 4rem 4rem;
    position: relative;
    @media (max-width: 768px) {
      padding: 5rem .8rem;
    }
`

const ArticleBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  background-color: ${props => props.theme.palette.primary.dark};
  //z-index: -;
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
      top: .5rem;
  }
`

const Title = styled(Typography)`
  font-size: 1.5rem;
  color: #ffffff;
  @media (max-width: 768px) {
      font-size: 1.2rem;
  }
`

export default ArticleComponent