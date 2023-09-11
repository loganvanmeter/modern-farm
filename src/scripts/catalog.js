export const catalog = (arr) => {
    let htmlString = '';
    arr.forEach((part) => {
        htmlString+= `<section class="plant">${part.type}</section>`
    })
    return htmlString;
}