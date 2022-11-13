export const createListOfPages = (pages) => Array.from( Array(pages),(e,i)=> i + 1);

export const createListOfPagesHuge = (pages, nextPage, prevToken = null, nextToken = null) => [ prevToken && 'prev 5', ...Array.from( Array(5), (e,i)=> i + 1), nextToken && "next 5"];    

