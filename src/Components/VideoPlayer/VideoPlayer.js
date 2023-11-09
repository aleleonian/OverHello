import React, { useRef, useEffect } from 'react'

export const VideoPlayer = ({ videoUrl }) => {
    const videoRef = useRef(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.pause()
            videoRef.current.removeAttribute('src')
            videoRef.current.load()
        }
    })
    return (
        <video ref={videoRef} width='320' height='240' controls>
            <source src={videoUrl} type='video/mp4'></source>
            Your browser does not support the video tag.
        </video>
    )
}