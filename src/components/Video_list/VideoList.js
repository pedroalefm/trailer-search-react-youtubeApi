import React from 'react'
import VideoListItem from '../Video_list_item/VideoListItem.js'

const VideoList = ({videos ,onVideoSelect })=>{
    const videoItem = videos.map((video)=>{
        return(
            <VideoListItem 
                video = {video}
                key = {video.etag}
                onVideoSelect = {onVideoSelect}
            />
       )
    })

    return (
        <ul className = "col-md-4 video-item ">
            {videoItem}
        </ul>

    )
}
export default VideoList