import React from 'react'
import ProjectItem from './ProjectItem';
import monkey from '../public/assets/projects/monkey.png';
import restaurantUI from '../public/assets/projects/restaurantui.png';
import hobbyList from '../public/assets/projects/hobbylist.png';
import sheep from '../public/assets/projects/sheep.png';

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem title='MonKey' backgroundImg={monkey} techStack='React Native & Firebase' projectUrl='/monkey'/>
                <ProjectItem title='Restaurant UI' backgroundImg={restaurantUI} techStack='Angular JS' projectUrl='/restaurantUI'/>
                <ProjectItem title='HobbyList' backgroundImg={hobbyList} techStack='Java & JavaFX' projectUrl='/hobbyList'/>
                <ProjectItem title='Sheep' backgroundImg={sheep} techStack='Java & JavaFX' projectUrl='/sheep'/>
            </div>
        </div>

    </div>
  )
}

export default Projects