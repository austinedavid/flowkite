import styled from "styled-components"
import {Alert} from '@mui/material'

  export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  background-color: ${({theme})=>theme.bgCard};
  color: ${({theme})=>theme.text};
`
export const VideoChannel = styled.div`
  width: 100%;
  padding: 5px 10px;
  display: flex;
  gap: 1rem;

`
export const VideoChannelDetials = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-size: 11px;
`
export const IframeContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 0px;
`
export const Time = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
`
export const Videoshow = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  border: 0ch;

 
`
export const Videotitle = styled.div`
  width: 100%;
  padding: 0 10px;
  margin-bottom: 5px;
`
  export const Modification = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  margin-right: 0px;
`
export const BottomPart = styled.div`
  width: 100%;
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`
export const SubBottomPart = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
`
export const AlertError = styled(Alert)`
    position: fixed;
    top: 1rem;
    left: 0rem;
    
    width: 100%;
    
    z-index: 999999;
`
