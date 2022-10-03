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
import svmvid from '../../videos/svm.mp4'
import syncvid from '../../videos/sync.mp4'
import { objOne, objTwo } from './ProjectData.js'

const projects = () => {
  return (
    <ProjectsContainer id='projects'>
        <ProjectsH1 style={{color: '#000'}}>
            Check out a few of my projects
        </ProjectsH1>
        <ProjectsWrapper>
            <ProjectsCard>
                <div>AI digital assitant</div>
                <HoverVideoPlayer
                    videoSrc={vavid}
                    pausedOverlay={<PausedOverlay />}
                    loadingOverlay={<LoadingOverlay />}
                />
                <ProjectsH2>
                    <ProjectLink href='https://github.com/HorvathTeddy/virtual-assistant'>View Repository</ProjectLink>
                </ProjectsH2>
                <ProjectsP>
                    Built with Python and Speech Recognition
                </ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
                <div style={{textAlign: 'center'}}>Scotts Valley Magnetics Commercial Website</div>
                <HoverVideoPlayer
                    style={{color: 'gray'}} 
                    videoSrc={svmvid}
                    pausedOverlay={<PausedOverlay {...objOne}/>}
                    loadingOverlay={<LoadingOverlay />}
                />
                <ProjectsH2>
                    <ProjectLink href='https://github.com/HorvathTeddy/Sync'>View Repository</ProjectLink>
                </ProjectsH2>
                <ProjectsP>
                    Built with React
                </ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
                <div>Music Collaboration Web App</div>
                <HoverVideoPlayer
                videoSrc={syncvid}
                pausedOverlay={<PausedOverlay {...objTwo}/>}
                loadingOverlay={<LoadingOverlay />}
            />
                <ProjectsH2>
                    <ProjectLink href='https://github.com/HorvathTeddy/Sync'>View Repository</ProjectLink>
                </ProjectsH2>
                <ProjectsP>
                    Built with React and Firebase
                </ProjectsP>
            </ProjectsCard>
        </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default projects
