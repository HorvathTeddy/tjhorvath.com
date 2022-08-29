import React from 'react'
import { 
ProjectsContainer,
ProjectsH1,
ProjectsWrapper,
ProjectsCard,
ProjectsIcon,
ProjectsH2,
ProjectsP } from './ProjectElements'
import HoverVideoPlayer from "react-hover-video-player";
import PausedOverlay from "./PausedOverlay";
import LoadingOverlay from "./LoadingOverlay";
import vavid from '../../videos/va.mov'

const projects = () => {
  return (
    <ProjectsContainer id='projects'>
        <ProjectsH1>
            Check out a few of my projects
        </ProjectsH1>
        <ProjectsWrapper>
            <ProjectsCard>
                <HoverVideoPlayer
                    videoSrc={vavid}
                    pausedOverlay={<PausedOverlay />}
                    loadingOverlay={<LoadingOverlay />}
                />
                <ProjectsH2>
                    <a style={{textDecoration: 'none', color: 'red'}} href='https://github.com/HorvathTeddy/virtual-assistant'>AI digital assistant</a>
                </ProjectsH2>
                <ProjectsP>
                    Written in python utilizing pyttsx3, speechRecognition, and requests.
                </ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
                <HoverVideoPlayer
                    videoSrc={vavid}
                    pausedOverlay={<PausedOverlay />}
                    loadingOverlay={<LoadingOverlay />}
                />
                <ProjectsH2>
                    <a style={{textDecoration: 'none', color: 'red'}} href='https://github.com/HorvathTeddy/Sync'>Music Collaboration Application</a>
                </ProjectsH2>
                <ProjectsP>
                    Written in react utilizing react-router, react-scroll, django, and firebase
                </ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
                <HoverVideoPlayer
                videoSrc={vavid}
                pausedOverlay={<PausedOverlay />}
                loadingOverlay={<LoadingOverlay />}
            />
                <ProjectsH2>
                    Messaging
                </ProjectsH2>
                <ProjectsP>
                    Secure private messaging.
                </ProjectsP>
            </ProjectsCard>
        </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default projects
