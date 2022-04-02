import classes from './Users.module.css'
import * as axios from 'axios'
import userAvatar from '../../assets/images/userAvatar.png'

const Users = props => {

  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then( response => {
        debugger
        props.setUsers(response.data.items)
      } )
    // Lesson 49
    // props.setUsers([
    //   {
    //     id: 1,
    //     followed: false,
    //     avatarUrl: 'https://www.hola.com/imagenes/actualidad/20220110202528/will-smith-gana-globos-de-oro/1-38-499/will-smith-gtres2-t.jpg',
    //     name: 'Will',
    //     surname: 'Smith',
    //     nickname: '@WillSmith',
    //     location: { city: 'Hollywood', country: 'USA' }
    //   },
    //   {
    //     id: 2,
    //     followed: false,
    //     avatarUrl: 'https://www.diariocolatino.com/wp-content/uploads/2017/09/Tom-Hanks.jpg',
    //     name: 'Tom',
    //     surname: 'Hanks',
    //     nickname: '@TomH',
    //     location: { city: 'Hollywood', country: 'USA' }
    //   },
    //   {
    //     id: 3,
    //     followed: true,
    //     avatarUrl: 'https://img.huffingtonpost.com/asset/60eeba4e3b0000155cecbf42.jpg?cache=spKOFqdaLg&ops=scalefit_720_noupscale',
    //     name: 'Leonardo',
    //     surname: 'DiCaprio',
    //     nickname: '@Leo',
    //     location: { city: 'Hollywood', country: 'USA' }
    //   },
    //   {
    //     id: 4,
    //     followed: true,
    //     avatarUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tom-cruise-1625218119.jpg?crop=0.755xw:1.00xh;0.245xw,0&resize=640:*',
    //     name: 'Tom',
    //     surname: 'Cruise',
    //     nickname: '@TomCruise',
    //     location: { city: 'Hollywood', country: 'USA' }
    //   },
    //   {
    //     id: 5,
    //     followed: false,
    //     avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Johnny_Depp-2757_%28cropped%29.jpg',
    //     name: 'Johnny',
    //     surname: 'Depp',
    //     nickname: '@JohnnyDepp',
    //     location: { city: 'Hollywood', country: 'USA' }
    //   },
    //   {
    //     id: 6,
    //     followed: true,
    //     avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Robert_De_Niro_KVIFF_portrait.jpg/1200px-Robert_De_Niro_KVIFF_portrait.jpg',
    //     name: 'Robert',
    //     surname: 'De Niro',
    //     nickname: '@RobertDeNiro',
    //     location: { city: 'Hollywood', country: 'USA' }
    //   },
    //   {
    //     id: 7,
    //     followed: false,
    //     avatarUrl: 'https://www.cheatsheet.com/wp-content/uploads/2020/05/Samuel-L.-Jackson.jpg',
    //     name: 'Samuel',
    //     surname: 'Jackson',
    //     nickname: '@SauelLJackson',
    //     location: { city: 'Hollywood', country: 'USA' }
    //   },
    //   {
    //     id: 8,
    //     followed: true,
    //     avatarUrl: 'https://media.vanityfair.com/photos/55843f32ca2dc24e4d26de7a/master/pass/t-al-pacino-toronto-film-festival.jpg',
    //     name: 'Al',
    //     surname: 'Pacino',
    //     nickname: '@AlPacino',
    //     location: { city: 'Hollywood', country: 'USA' }
    //   },
    //   {
    //     id: 9, followed: false, avatarUrl: 'https://es.web.img3.acsta.net/pictures/19/05/22/10/42/3773139.jpg',
    //     name: 'Brad', surname: 'Pitt', nickname: '@Pitt',
    //     location: { city: 'Hollywood', country: 'USA' }
    //   },
    //   {
    //     id: 10,
    //     followed: false,
    //     avatarUrl: 'https://cnnespanol.cnn.com/wp-content/uploads/2018/05/cnn-morgan-freeman-2.jpg?quality=100&strip=info&w=414&h=311&crop=1',
    //     name: 'Morgan',
    //     surname: 'Freeman',
    //     nickname: '@MrFreeman',
    //     location: { city: 'Hollywood', country: 'USA' }
    //   },
    //   {
    //     id: 11, followed: false, avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Bruce_Lee_1973.jpg',
    //     name: 'Bruce', surname: 'Lee', nickname: '@BruceLee',
    //     location: { city: 'Hollywood', country: 'USA' }
    //   },
    //   {
    //     id: 12,
    //     followed: false,
    //     avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg',
    //     name: 'Chris',
    //     surname: 'Evans',
    //     nickname: '@Evans',
    //     location: { city: 'Hollywood', country: 'USA' }
    //   },
    //   {
    //     id: 13, followed: true, avatarUrl: 'https://i.pinimg.com/736x/3f/bb/b0/3fbbb01666d7c285bb6a2db85b8d6967.jpg',
    //     name: 'Robert', surname: 'Downey Jr.', nickname: '@RobertDowneyJr',
    //     location: { city: 'Hollywood', country: 'USA' }
    //   },
    //   {
    //     id: 14,
    //     followed: true,
    //     avatarUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tom-holland-1570547330.jpg',
    //     name: 'Tom',
    //     surname: 'Holland',
    //     nickname: '@SpiderManHolland',
    //     location: { city: 'Hollywood', country: 'USA' }
    //   },
    //   {
    //     id: 15,
    //     followed: false,
    //     avatarUrl: 'https://media.revistagq.com/photos/5e662a77f7c7d90008fcc899/16:9/w_2560%2Cc_limit/GettyImages-692007776.jpg',
    //     name: 'Chak',
    //     surname: 'Norris',
    //     nickname: '@Norris',
    //     location: { city: 'Hollywood', country: 'USA' }
    //   },
    //   {
    //     id: 16,
    //     followed: false,
    //     avatarUrl: 'http://inspirationfeed.com/wp-content/uploads/2019/04/Charlie_Chaplin_cover-800x574.jpg',
    //     name: 'Charlie',
    //     surname: 'Chaplin',
    //     nickname: '@chaplin',
    //     location: { city: 'Hollywood', country: 'USA' }
    //   }
    // ])
  }

  return (
    <section>
      {
        props.users.map(user => <div key={ user.id }>
          <div className={ classes.user }>
            <div className={ classes.userImage }>
              <div>
                <img src={ user.photos.small != null ? user.photos.small : userAvatar } alt="" className={ classes.avatar } />
              </div>
              <div>
                {
                  user.followed
                    ? <button onClick={ () => props.unfollow(user.id) } className={ classes.unfollow }>Unfollow</button>
                    : <button onClick={ () => props.follow(user.id) } className={ classes.follow }>Follow</button>
                }
              </div>
            </div>
            <div className={ classes.userInfo }>
              <div className={ classes.name }>{ user.name }</div>
              {/*<div>
                <div>{ user.location.country },</div>
                <div>{ user.location.city }</div>
              </div>*/}
            </div>
          </div>
          <div className={ classes.separator } />
        </div>)
      }
    </section>
  )
}

export default Users