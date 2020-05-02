import fetch from 'isomorphic-unfetch'

const QiitaURL = 'https://qiita.com/api/v2/users/fukke0906/items'

type QiitaArticle = {
    title?: string
    url?: string
    updated_at?: string
}

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

export const getQiitaArticles = async (): Promise<QiitaArticle[]> => {
    const json = await fetchQiitaJson()
    const articles = json.map((article: QiitaArticle) => {
        return {
            title: article.title,
            link: article.url,
            updated: article.updated_at,
        }
    })

    return articles
}