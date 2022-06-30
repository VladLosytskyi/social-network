import { FC } from 'react'
// @ts-ignore
const preloader = require('../../../assets/images/preloader.svg') as string

const Preloader: FC = () => {
  return (
    <div style={ { display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '1000px' } }>
      <img src={ preloader } alt='Preloader' />
    </div>
  )
}

export default Preloader
