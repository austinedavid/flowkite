import React, { useState } from 'react'
import {Button,ConfirmLogout, LogoutInfo,BtnlogoutCon, ApprovedLogout, DeclineLogout,  LogoutU,LogoutBigDiv, LogoTag, LoggedUser, LightModeIconU, Totalcontainer, DarkModeIconU,LiveTvIconU, GroupsIconU, MenuIconU, Buttondiv,HomeiconU,  Container, Img, Logo, Menuselect, Navicons, Wrapper} from './NavbarCss'

import {Link, NavLink} from 'react-router-dom'
import dlogo from '../images/dlogo.jpg'
import Profile from './Profile';
import {setLightmode, setDarkmode} from '../Slice/ThemeSlice'
import {useDispatch, useSelector}from 'react-redux'
import {openProfile, closeProfile} from '../Slice/ProfileSlice'
import {logout} from '../Slice/UserSlice'
import {Avatar} from '@mui/material'


const Navbar = () => {
    
    const {darkmodetheme} = useSelector((state)=> state.settheme)
    const {profileopend} = useSelector((state)=>state.profileshow)
    const {currentUser} = useSelector((state)=>state.user)
    const dispatch = useDispatch()
    const [logOutShow, setlogOutShow] = useState(false)
    const[lightmode, setlightmode ] = useState(false)

    // handling logging out
    const handleLoggingOut = ()=>{
        dispatch(logout())
        setlogOutShow(false)
    }
    
  return (
    <>
    <Totalcontainer>
    <Container>
        <Wrapper>
            <Logo>
                <Link to='/' style={{textDecoration: 'none'}}>
                <LogoTag>FLOWkite</LogoTag>
                </Link>
            </Logo>
            {
                currentUser? (
                    <Buttondiv>
                        <Avatar src={currentUser.imgUrl}  sx={{ width: 27, height: 27}}/>
                        <LoggedUser> {currentUser.name};</LoggedUser>
                        <LogoutU onClick={()=>setlogOutShow(true)}/>
                    </Buttondiv>
                )
                :(
                    <Buttondiv>
                    <Button><Link to='login' style={{textDecoration: 'none', color: 'inherit'}}>LOGIN</Link></Button>
                    <Button><Link to='/register' style={{textDecoration: 'none', color: 'inherit'}}>REGISTER</Link></Button>
                    </Buttondiv>
                )
            }
               
              
            
           
        </Wrapper>
        {
            currentUser && (
                <Wrapper>
                <Navicons>
                    <NavLink to='/' style={{textDecoration: 'none', color: 'inherit'}}><HomeiconU sx={{fontSize: '2rem'}}/></NavLink>
                    <NavLink to='/videos' style={{textDecoration: 'none', color: 'inherit'}}><LiveTvIconU sx={{fontSize: '2rem'}}/></NavLink>
                    <NavLink to='adventure' style={{textDecoration: 'none', color: 'inherit'}}><GroupsIconU sx={{fontSize: '2rem'}}/></NavLink>
                </Navicons>
                <Menuselect>
                    {
                        darkmodetheme? <LightModeIconU onClick={()=>dispatch(setLightmode())} sx={{fontSize: '2rem', cursor: 'pointer'}}/> :
                        <DarkModeIconU onClick={()=>dispatch(setDarkmode())} sx={{fontSize: '2rem', cursor: 'pointer'}}/>
                    }
                   
                    <MenuIconU onClick={()=>dispatch(openProfile())} sx={{fontSize: '2rem', cursor: 'pointer'}}/>
                </Menuselect>
            </Wrapper>
            )
        }
       
    </Container>
    </Totalcontainer>
    {
        profileopend && (<Profile />)
    }
    {
        logOutShow && (<LogoutBigDiv>
                        <ConfirmLogout>
                            <LogoutInfo>Do you want to Logout!!!</LogoutInfo>
                            <BtnlogoutCon>
                                <ApprovedLogout onClick={handleLoggingOut}>YES</ApprovedLogout>
                                <DeclineLogout onClick={()=>setlogOutShow(false)}>NO</DeclineLogout>
                            </BtnlogoutCon>
                        </ConfirmLogout>
                    </LogoutBigDiv>)
    }
    
    </>
  )
}

export default Navbar