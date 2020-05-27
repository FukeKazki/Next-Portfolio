import fetch from 'isomorphic-unfetch'
import XMLParser from 'xml2js'
import {Article} from '../types'

const GitPressAtomURL = 'https://gitpress.io/static/6495a013a74997b89b08be0a51c8eb77bf6652eb934985f92035eb8b75b813d7/atom.xml'

const fetchGitPressXML = async (): Promise<string | undefined> => {
    try {
        const response = await fetch(GitPressAtomURL)
        const xml = await response.text()

        return xml
    } catch (err) {
        console.error('GitPress fetch Error', err)

        return undefined
    }
}

export const getGitPressArticles = async (): Promise<Article[]> => {
    const xml = await fetchGitPressXML()
    const parsed_xml = await XMLParser.parseStringPromise(xml).catch(null)
    const articles = parsed_xml.feed.entry.map(article => {
        // article contained {title, summary, id, link, updated}
        return {
            title: article.title.toString(),
            link: article.id.toString(),
            updated: article.updated.toString(),
        }
    })

    return articles
}