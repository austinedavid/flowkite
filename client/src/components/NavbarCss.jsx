import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import LogoutIcon from '@mui/icons-material/Logout';


export const Totalcontainer = styled.div`
    width: 100%;
    background-color: ${({theme})=>theme.bgNav};
    position: sticky;
    top: 0;
    z-index: 9999;
`
export const Container = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: sticky;
    top: 0;
    padding: 10px;
    margin: 0 auto;
    background-color: ${({theme})=>theme.bgNav};
`
export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Logo = styled.div`
    width: 3rem;
`
export const Buttondiv = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: ${({theme})=>theme.text};
`
export const Button = styled.button`
    padding: 10px;
    background-color: #d7d8db;
    border: 0ch;
    border-radius: 10px;
    cursor: pointer;
`
export const Navicons = styled.div`
    display: flex;
    gap: 1.2rem;

    @media (max-width: 300px){
        gap: 0.6rem;
    }
`
export const Menuselect = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
   
`
export const Img = styled.img`
    width: 100%;
`
export const HomeiconU = styled(HomeIcon )`
    color: ${({theme})=>theme.text};

    @media (max-width:60rem){
        font-size: 1.5rem;
    }
`
export const LiveTvIconU = styled(LiveTvIcon)`
    color: ${({theme})=>theme.text};

   
`
export const GroupsIconU = styled(GroupsIcon)`
    color: ${({theme})=>theme.text};
`
export const MenuIconU = styled(MenuIcon)`
    color: ${({theme})=>theme.text};
`
export const DarkModeIconU = styled(DarkModeIcon)`
    color: #7b7474;
`
export const LightModeIconU = styled(LightModeIcon)`
    color: gold;
`
export const LogoutU = styled(LogoutIcon)`
    color: ${({theme})=>theme.text};
    cursor: pointer;
`
export const LoggedUser = styled.p`
    font-size: 16px;
    color: ${({theme})=>theme.text};
`
export const LogoTag = styled.h4`
    font-family: 'Creepster', cursive;
    color: ${({theme})=>theme.logotext};
    font-size: 25px;
    font-weight: bold;

    @media(max-width: 40rem){
        font-size: 16px;
    }

    @media(max-width: 290px){
        font-size: 12px;
    }

    

`

export const LogoutBigDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 999999999;
`
export const ConfirmLogout = styled.div`
    width: 300px;
    color: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
`
export const LogoutInfo = styled.p`
    font-weight: bold;
    
`
export const BtnlogoutCon = styled.div`
    display: flex;
    gap: 1rem;
    
`
export const ApprovedLogout = styled.button`
    padding: 5px 15px;
    background-color: green;
    cursor: pointer;
    color: white;
    border: 1px solid white;
    border-radius: 10px;
    transition: all 0.4s ease-in-out;

    &:hover{
        background-color: #217121;
        border: 1px solid black;
    }
`
export const DeclineLogout = styled.button`
     padding: 5px 15px;
    background-color: red;
    cursor: pointer;
    color: white;
    border: 1px solid white;
    border-radius: 10px;
    transition: all 0.4s ease-in-out;

    &:hover{
        background-color: #d44646;
        border: 1px solid black;
    }
`
