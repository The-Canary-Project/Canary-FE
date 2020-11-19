import React from 'react'
import styles from './AboutUs.css'
import linkedinIcon from '../../../public/assets/linkedin_icon.png'
import githubIcon from '../../../public/assets/github_icon.png'

export const AboutUs = () => {
  return (
    <section className={styles.aboutUsContainer}>
      <h1>About Us</h1>
      <section className={styles.bioWrapper}>
        <div className={styles.bioContainer}>
          <section>
            <img src="https://avatars3.githubusercontent.com/u/61799774?v=4" alt="photo of Katie" className={styles.bioImg} />

            <h4>Katie Perry</h4>

            <p>I am a full stack software engineer with experience managing teams in a bilingual environment, developing curriculum for an overseas international school, and ESL teaching. Passionate about software creation and UI/UX design. I thrive in creative, fast-paced environments that involve collaboration and constant learning!</p>

            <a href="https://github.com/katiepdx" target="_blank"><img src={githubIcon} alt="github icon" height="30px" width="30px" /></a>
            <a href="https://www.linkedin.com/in/katiepdx/" target="_blank"><img src={linkedinIcon} alt="github icon" height="30px" width="30px" /></a>
          </section>
        </div>

        {/* GREG */}
        <div className={styles.bioContainer}>
          <section>
            <img src="https://avatars1.githubusercontent.com/u/61127092?v=4" alt="photo of greg" className={styles.bioImg} />

            <h4>Greg Mall</h4>

            <p>Full-stack Software Engineer who brings and artist's eye to design. Proficient in React, Vanilla Javascript, Node.js, PostgreSQL, HTML5, CSS3, Express.js</p>

            <a href="https://github.com/gregmall" target="_blank"><img src={githubIcon} alt="github icon" height="30px" width="30px" /></a>
            <a href="https://www.linkedin.com/in/greg-mall-3032771b1/" target="_blank"><img src={linkedinIcon} alt="github icon" height="30px" width="30px" /></a>
          </section>
        </div>

        {/* THOMAS */}
        <div className={styles.bioContainer}>
          <section>
            <img src="https://avatars0.githubusercontent.com/u/63024117?v=4" alt="photo of thomas" className={styles.bioImg} />

            <h4>Thomas Stussi</h4>

            <p>I am a backend focused Fullstack Engineer with a passion for games, logic, and problem-solving. My past experience with management and customer service have imparted on me a set of skills and leadership qualities that allow me to excel in team work, agile workflows, and creatively overcoming obstacles. My families background in civil service and precision machining imprinted upon me the importance of selflessness and systemic solutions. It is my dream to help provide immersive and accessible experiences that the whole world can share in.</p>

            <a href="https://github.com/Thomas-Stussi" target="_blank"><img src={githubIcon} alt="github icon" height="30px" width="30px" /></a>
            <a href="https://www.linkedin.com/in/thomas-stussi/" target="_blank"><img src={linkedinIcon} alt="github icon" height="30px" width="30px" /></a>
          </section>
        </div>

        {/* BEN */}
        <div className={styles.bioContainer}>
          <section>
            <img src="https://avatars1.githubusercontent.com/u/66393111?v=4" alt="photo of ben" className={styles.bioImg} />

            <h4>Ben Waples</h4>

            <p>I am a Full Stack JavaScript developer with experience in team development and leadership. I am driven to deliver high quality work with all things I do! I have 2 years experience with managing client relationships, creating and delivering high quality products, and exceeding goals/ expectations.</p>

            <a href="https://github.com/benwaples" target="_blank"><img src={githubIcon} alt="github icon" height="30px" width="30px" /></a>
            <a href="https://www.linkedin.com/in/benwaples/" target="_blank"><img src={linkedinIcon} alt="github icon" height="30px" width="30px" /></a>
          </section>
        </div>
      </section>
    </section>
  )
}
