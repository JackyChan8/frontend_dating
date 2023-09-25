import style from './Team.module.scss';

import Person from './Person/Person';

const Team = () => {
    return (
        <section className={style.team}>
            <Person
                fullName='Новиков Владислав'
                job='FullStack Developer'
                description='Valentin is a talented software developer and entrepreneur. He created ClipShare, a popular video sharing script. His commitment to user-friendly solutions made his in-demand in the tech community.' />
            <Person
                fullName='Новиков Александр'
                job='FullStack Developer'
                description='Valentin is a talented software developer and entrepreneur. He created ClipShare, a popular video sharing script. His commitment to user-friendly solutions made his in-demand in the tech community.' />
        </section>
    )
}

export default Team;