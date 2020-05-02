export const debug = (content: any): void => {
    console.log('--- DEBUG ---')
    if (Array.isArray(content)) {
        console.table(content)
    } else if (Number.isNaN(content)) {
        console.log(content, ':', 'NaN')
    } else {
        console.log(content, ':', Object.prototype.toString.call(content).slice(8, -1))
    }
}

export const isNullOrUndefined = (content: any): boolean => {
    return content === null || content === undefined
}