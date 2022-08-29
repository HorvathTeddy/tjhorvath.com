import React from 'react'
import { 
ProjectsContainer,
ProjectsH1,
ProjectsWrapper,
ProjectsCard,
ProjectsIcon,
ProjectsH2,
ProjectsP } from './ProjectElements'
import Icon1 from '../../images/svg-2.svg'
import Icon2 from '../../images/svg-1.svg'
import Icon3 from '../../images/svg-3.svg'

const projects = () => {
  return (
    <ProjectsContainer id='projects'>
        <ProjectsH1>
            Our Projects
        </ProjectsH1>
        <ProjectsWrapper>
            <ProjectsCard>
                <ProjectsIcon src={Icon1}/>
                <ProjectsH2>
                    Artists
                </ProjectsH2>
                <ProjectsP>
                    We help you find artists.
                </ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
                <ProjectsIcon src={Icon2}/>
                <ProjectsH2>
                    Music
                </ProjectsH2>
                <ProjectsP>
                    Search music uploaded by other artists.
                </ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
                <ProjectsIcon src={Icon3}/>
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
