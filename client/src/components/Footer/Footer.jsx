import './Footer.css'

const Footer = ({ user }) => {
  return (
  <footer>
    <div className='footer-menu'>
      <div>< a href='/'>Home</a></div>
      <div>< a href='/products'>Shop</a></div>
      <div>< a href='/about'>About</a></div>
      <div>< a href='/about'>Meet the Team</a></div>
        <div><a href={user ? '/add-product' : '/sign-up'}>Add a Product</a></div>
    </div>
    
    <div className='footer-byline'>
      <h4>Site Created By:</h4>
      <h5>Anelise Bergin</h5>
      <h5>Andrew Freedman</h5>
      <h5>David Gurule</h5>
      <h5>Ej Soumahoro</h5>
      <h5>Lance Simmons</h5>
    </div>
    </footer>
  )
}

export default Footer