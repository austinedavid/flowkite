import React,{useState, useEffect} from 'react'
import {Avatar, AlertTitle} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import { VideoContainer,VideoChannel, AlertError, VideoChannelDetials,IframeContainer,Time, Videoshow, Videotitle, Modification, BottomPart,SubBottomPart } from './VideocardCss'
import {format} from 'timeago.js'
import axios from 'axios'
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {useSelector} from 'react-redux'
import ReactReadMoreReadLess from "react-read-more-read-less";
import {axiosInstance} from '../config'

const Videocard = ({video, clicked, setclicked}) => {
    const[channel, setchannel] = useState({})
    const[deletesuccessful, setdeletesuccessful] = useState(false)
    const[deleteMessage, setdeleteMessage] = useState()
    const[deleteVideoAction, setdeleteVideoAction] = useState(false)
    const[deleteError, setdeleteError] = useState()
    const {currentUser} = useSelector((state)=>state.user)
    
    useEffect(()=>{
        const getChannel = async()=>{
            const channelGotten = await axiosInstance.get(`/getUser/${video.userId}`).then((res)=>{
                setchannel(res.data)
            })
        }
        getChannel()
    },[])

    // here we handle the like functionality
    const handleLike = async()=>{
      const config = {
        headers:{
          "Content-Type": "application/json",
          token: `Bearer ${currentUser.token}`
        }
      }
        const sendlike = await axiosInstance.put(`/videolike/${video._id}`, config)
            setclicked(!clicked)
        
    }
    //  here we handle dislikes of a particular video here
    const handleDislike = async()=>{
      const config = {
        headers:{
          "Content-Type": "application/json",
          token: `Bearer ${currentUser.token}`
        }
      }
        const senddislike = await axiosInstance.put(`/videodislike/${video._id}`, config)
        setclicked(!clicked)
        
    }

    //  here we handle the delete functionality of our video
    const handleDelete = async()=>{
      const config = {
        headers:{
          "Content-Type": "application/json",
          token: `Bearer ${currentUser.token}`
        }
      }
      try {
        await axiosInstance.delete(`/deleteVideo/${video._id}`, config).then((res)=>{
          window.location.reload(false)
          setdeleteMessage("you have successfully deleted your video")
          setdeletesuccessful(true)
          
          
        })
      } catch (error) {
        setdeleteVideoAction(true)
        setdeleteError('you can only delete your video!!!')
        
      }  
     
       
    }

  
  return (
    <div>
        <VideoContainer key={video.id}>
                    <VideoChannel>
                      <Avatar src={channel.imgUrl} sx={{ width: 35, height: 35 }}/>
                      <VideoChannelDetials>
                        <p>{channel.name}</p>
                        <Time><p>{format(video.createdAt)}</p><PublicIcon sx={{ width: 15, height: 15 }}/></Time>
                      </VideoChannelDetials>
                      <Modification>
                      
                      <DeleteIcon onClick={handleDelete} sx={{ width: 20, height: 20, cursor: 'pointer'  }}/>
                    </Modification>
                    </VideoChannel>
                    <Videotitle>
                    <ReactReadMoreReadLess
                      readMoreClassName="readMoreClassName"
                      readLessClassName="readLessClassName"
                     charLimit={50}
                     readMoreText={"Read more ▼"}
                     readLessText={"Read less ▲"}
                    >
                      {video.desc}
                    </ReactReadMoreReadLess>
                      </Videotitle>
                    <IframeContainer>
                      <Videoshow src={video.videoUrl} controls/>
                    </IframeContainer>
                    <BottomPart>
                    <SubBottomPart><ThumbUpIcon onClick={handleLike} sx={{cursor: 'pointer'}}  className={video.likes.includes(currentUser._id) && "likeds"}/><p>{video.likes.length}</p></SubBottomPart>
                    <SubBottomPart><p>{video.dislikes.length}</p><ThumbDownIcon sx={{cursor: 'pointer'}} onClick={handleDislike}  className={video.dislikes.includes(currentUser._id) && "likeds"}/></SubBottomPart>
                    
                  </BottomPart>
                  </VideoContainer>

                  {
                  deletesuccessful && (<AlertError severity='success' variant='filled' onClose={()=>setdeletesuccessful(false)}><AlertTitle>AUTHORIZED</AlertTitle>{deleteMessage}</AlertError>)
                  }
                {
                  deleteVideoAction && (<AlertError severity='error' variant='filled' onClose={()=>setdeleteVideoAction(false)}><AlertTitle>UNAUTHORIZED</AlertTitle>{deleteError}</AlertError>)
                }
    </div>
  )
}

export default Videocard