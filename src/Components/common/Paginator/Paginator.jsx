import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Paginator.module.css'

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChange, portionSize = 10 }) => {

  const pagesCount = Math.ceil(totalItemsCount / pageSize)
  const portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = portionNumber * portionSize

  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className={ classes.paginator }>
      { portionNumber > 1 && <FontAwesomeIcon icon="fa-solid fa-arrow-left-long"
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
      { portionCount > portionNumber && <FontAwesomeIcon icon="fa-solid fa-arrow-right-long"
                                                         className={ classes.arrow }
                                                         onClick={ () => setPortionNumber(portionNumber + 1) } />
      }
    </div>
  )
}

export default Paginator