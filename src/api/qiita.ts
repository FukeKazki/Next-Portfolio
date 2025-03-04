import fetch from 'isomorphic-unfetch'
import {Article} from '../types'

const QiitaURL = 'https://qiita.com/api/v2/users/fukke0906/items'

const fetchQiitaJson = async (): Promise<object[] | null> => {
    try {
        const response = await fetch(QiitaURL)
        const json = await response.json()

        return json
    } catch (err) {
        console.error('Qiita fetch Error', err)

        return null
    }
}

export const getQiitaArticles = async (): Promise<Article[]> => {
    const json = await fetchQiitaJson()
    const articles = json.map((article: any) => {
        return {
            title: article.title,
            link: article.url,
            updated: article.updated_at,
        }
    })

    return articles
}