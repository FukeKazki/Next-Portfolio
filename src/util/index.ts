export const debug = (content: any): void => {
    console.log('--- DEBUG ---')
    if (Array.isArray(content)) {
        console.log('Array', ':')
        console.table(content)
    } else if (Number.isNaN(content)) {
        console.log('NaN', ':', content)
    } else {
        console.log(Object.prototype.toString.call(content).slice(8, -1), ':', content)
    }
}

export const isNullOrUndefined = (content: any): boolean => {
    return content === null || content === undefined
}