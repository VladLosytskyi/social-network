import { FC, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// @ts-ignore
import classes from './Paginator.module.css'
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

interface PaginatorProps {
  totalItemsCount: number
  pageSize: number
  currentPage: number
  onPageChange: (pageNumber: number) => void
  portionSize?: number
}

const Paginator: FC<PaginatorProps> =
  ({ totalItemsCount, pageSize, currentPage, onPageChange, portionSize = 10 }) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    const pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div className={ classes.paginator }>
        { portionNumber > 1 && <FontAwesomeIcon icon={ faArrowLeftLong }
                                                className={ classes.arrow }
                                                onClick={ () => setPortionNumber(portionNumber - 1) } />
        }
        <div className={ classes.pageNumbers }>
          {
            pages
              .filter(pageNumber => pageNumber >= leftPortionPageNumber && pageNumber <= rightPortionPageNumber)
              .map(pageNumber => {
                return (
                  <span className={ `${ currentPage === pageNumber && classes.selectedPage } ${ classes.pageNumber }` }
                        onClick={ () => onPageChange(pageNumber) }
                        key={ pageNumber }>{ pageNumber }</span>
                )
              })
          }
        </div>
        { portionCount > portionNumber && <FontAwesomeIcon icon={ faArrowRightLong }
                                                           className={ classes.arrow }
                                                           onClick={ () => setPortionNumber(portionNumber + 1) } />
        }
      </div>
    )
  }

export default Paginator