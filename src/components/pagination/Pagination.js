import { useState } from 'react';
//utils
import { createListOfPages, createListOfPagesHuge } from '../../utils/helper';
import { urlBase } from '../../utils/constants';
//styles
import { PaginationStyles } from './PaginationStyles';

const Pagination = ({ data, fetching, setVideos, setData, query, type, page, setPage }) => {  

  const pages = Math.ceil(data?.pageInfo?.totalResults / data?.pageInfo?.resultsPerPage);
  const prevToken = data?.prevPageToken && 'prev token';
  const nextToken = data?.nextPageToken && 'next token';

  const handlePageClick = (e) => {
    const nextPageToken = data?.nextPageToken; 
    const prevPageToken = data?.prevPageToken;
    const clickedPage = Number.isNaN(Number(e.target.id)) ? e.target.id : Number(e.target.id);
    const url = `${urlBase}&type=${type}&q=${query}`;
          
    (clickedPage === "next 5") ? fetching(setData,`${url}&pageToken=${nextPageToken}`)
      : (clickedPage === "prev 5") ? fetching(setData,`${url}&pageToken=${prevPageToken}`)
      : (clickedPage === 1 && !prevPageToken) ? fetching(setData, url) 
      : setVideos(data?.items?.slice(10 * (clickedPage - 1), 10 * clickedPage))
      
    setPage(Number.isNaN(Number(e.target.id)) ? 1 : Number(e.target.id));    
  }
    
  return(
    !pages || pages < 2
    ? <p className="pagination-placeholder"></p>
    : <PaginationStyles>
        { pages > 5
        ? createListOfPagesHuge(pages, page, prevToken, nextToken ).map(p =>
          <span 
            className ={!page? "page" : Number(page) === p ? "page active": "page"} 
            key = { p} 
            id = {p} 
            onClick={handlePageClick}>
              {p}
          </span>)
        : createListOfPages(pages).map(p => 
            <span 
              className ={ Number(page) === p ? "page active": "page"} 
              key = {p} 
              id = {p} 
              onClick={handlePageClick}>
                {p}
          </span>)}
      </PaginationStyles>
  )
}

export default Pagination;