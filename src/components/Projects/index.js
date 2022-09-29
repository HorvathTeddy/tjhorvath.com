import React from 'react'
import { 
ProjectsContainer,
ProjectsH1,
ProjectsWrapper,
ProjectsCard,
ProjectLink,
ProjectsH2,
ProjectsP } from './ProjectElements'
import HoverVideoPlayer from "react-hover-video-player";
import PausedOverlay from "./PausedOverlay";
import LoadingOverlay from "./LoadingOverlay";
import vavid from '../../videos/va.mov'

const projects = () => {
  return (
    <ProjectsContainer id='projects'>
        <ProjectsH1 style={{color: '#000'}}>
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
                    <ProjectLink href='https://github.com/HorvathTeddy/virtual-assistant'>AI digital assistant</ProjectLink>
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
                    <ProjectLink href='https://github.com/HorvathTeddy/Sync'>Music Collaboration Application</ProjectLink>
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
                    <ProjectLink href='https://github.com/HorvathTeddy/Sync'>Music Collaboration Application</ProjectLink>
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
