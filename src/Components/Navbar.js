import React, { useState } from 'react'
import Logo from '../Assets/Logo2.png'
import {BsCart2} from 'react-icons/bs'
import {HiOutlineBars3} from 'react-icons/hi2'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import ListItem from'@mui/material/ListItem'
import ListItemButton from'@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import  PhoneRoundedIcon  from '@mui/icons-material/PhoneRounded' 
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'

const Navbar = () => {

    const [openMenu,setOpenMenu] = useState (false)
    const menuOptions = [
        {
           text:"home",
           icon:<HomeIcon/>
        
        },
        {
            text:"About",
            icon:<InfoIcon/>
         
        },
        {
            text:"Home",
            icon:<HomeIcon/>
         
         },
         {
            text:"Testimonials",
            icon:<CommentRoundedIcon/>
         
         },
         {
            text:"Contact",
            icon:<PhoneRoundedIcon/>
         
         },
         {
            text:"Cart",
            icon:<ShoppingCartRoundedIcon/>
         
         },


    ];


  return ( 
  <nav>
    <div className='nav-logo-container'>
        <img src={Logo} alt=''/>
    </div>
    <div className='navbar-links-container'>
      <a href=''>Inicio</a>
      <a href=''>Acerca de Nosotros</a>
      <a href=''>Testimonios</a>
      <a href=''>Contacto</a>
      <a href=''>
        <BsCart2 className='navbar-cart-icon' />  
      </a>
      <button className='primarybutton'>Rentar Ahora </button>
    </div>
     <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
     </div>
      <Drawer open={openMenu} onClose= {() =>  setOpenMenu(false)}
       anchor= "right">
        <Box 
          sx={{ width: 250}}
          role="presentation"
          onClik={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu (false)}
          >
            <list>
               {menuOptions.map((item) =>(
                  <ListItem key={item.text} disablePadding>
                     <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                     </ListItemButton>
                  </ListItem>

               ))}

            </list>
        </Box>
      </Drawer>
  </nav>

  )
  
}

export default Navbar