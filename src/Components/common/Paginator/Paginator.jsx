import classes from './Paginator.module.css'

let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChange }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className={ classes.pageNumbers }>
      {
        pages.map(pageNumber => {
          return (
            <span className={ `${ currentPage === pageNumber && classes.selectedPage } ${ classes.pageNumber }` }
                  onClick={ () => { onPageChange(pageNumber) } }>
                { pageNumber }
              </span>
          )
        })
      }
    </div>
  )
}

export default Paginator