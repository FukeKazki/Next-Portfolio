import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import {getGitPressArticles} from '../api/gitPress'
import {getQiitaArticles} from '../api/qiita'

import Header from '../components/Header'
import Profile from '../components/Profile'
import ArticleContainer from '../components/Article'
import Works from '../components/Works'
import Skill from '../components/Skill'
import Footer from '../components/Footer'

import {Article} from '../types'
import {NextPage} from 'next'

type IndexProps = {
    gitPress_article: Article[],
    qiita_article: Article[]
}

const Index: NextPage<IndexProps> = ({gitPress_article, qiita_article}) => {
    return (
        <React.Fragment>
            <Head>
                <title>fukke studio.</title>
            </Head>
            <MainContainer>
                <Header/>
                <Profile/>
                <ArticleContainer qiita_article={qiita_article} gitPress_article={gitPress_article} limit={8}/>
                {/*<Works/>*/}
                <Skill/>
                <Footer/>
            </MainContainer>
        </React.Fragment>
    )
}

const MainContainer = styled.main`
  background-color: ${props => props.theme.palette.background.paper};
`

export  async function getStaticProps() {
    const gitPress_article = await getGitPressArticles()
    const qiita_article = await getQiitaArticles()

    return {
        props: {
            gitPress_article: gitPress_article,
            qiita_article: qiita_article,
        }
    }

}

export default Index
