import React,{Component} from 'react'
import Close from './svg/times-solid.svg'
import Menu from './svg/bars-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import {Link} from 'react-router-dom'
import './css/Header.css'
import {DataContext} from './Context'
export class Header extends Component{

  static contextType = DataContext;

     state = {
         toggle:false
     }

     menuToggle = ()=>{
         this.setState({toggle :!this.state.toggle})
     }
render(){
    const {toggle} = this.state;
    const {cart} = this.context;
    return(
       <header>
        <div className='menu' onClick={this.menuToggle}>
         <img src={Menu} alt ="" width="20"/>
        </div>
<div className="logo">
<h1><Link to="/"> DOSHOPING</Link></h1>
</div>
<nav>
  <ul className={toggle ? "toggle":""}>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/Product">Product</Link></li>
     <li><Link to="/">Contact</Link></li>
     <li><Link to="/Details">About</Link></li>
     <li><Link to="/">Login/Register</Link></li>
     <li className="close">
     <img src={Close} alt ="" width="20" onClick={this.menuToggle}/>
     </li>
    </ul>
 <div className="nav-cart">
 <span>{cart.Context}
</span>
  <Link to="/cart">
  <img src={CartIcon} alt ="" width="20"/>
  </Link>
   </div>
 </nav>
 </header>
  )
 }

}

export default Header