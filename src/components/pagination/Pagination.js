//utils
import { createListOfPages, createListOfPagesHuge } from '../../utils/helper';
//styles
import { PaginationStyles } from './PaginationStyles';

const Pagination = ({ data, handlePageClick, nextPage, prevToken = null, nextToken = null}) => {    
    const pages = Math.ceil(data?.pageInfo?.totalResults / data?.pageInfo?.resultsPerPage);
    return(
        !pages || pages < 2
        ? <p className="pagination-placeholder"></p>
        : <PaginationStyles>
            { pages > 5
            ? createListOfPagesHuge(pages, nextPage, prevToken, nextToken ).map(page =>
                <span 
                    className ={!nextPage? "page" : Number(nextPage) === page ? "page active": "page"} 
                    key = { page} 
                    id = {page} 
                    onClick={handlePageClick}>
                        {page}
                </span>)
            : createListOfPages(pages).map(page => 
                 <span 
                    className ={ Number(nextPage) === page ? "page active": "page"} 
                    key = {page} 
                    id = {page} 
                    onClick={handlePageClick}>
                        {page}
                </span>)}
        </PaginationStyles>
    )
}

export default Pagination;