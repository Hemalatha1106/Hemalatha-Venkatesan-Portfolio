import Image from 'next/image'
import { AchievementCarousel } from '@/components/achievements/achievement-carousel'
import type { AchievementItem } from '@/components/achievements/types'

const projects = [
  {
    number: '01',
    title: 'Your database, in plain English.',
    type: 'AskDB — Talk to your data. No SQL required.',
    description: 'An AI-powered database assistant that turns natural language questions into SQL queries, visual insights, and charts. Powered by schema-aware RAG for context-aware query generation.',
    tags: ['React', 'FastAPI', 'Python', 'MySQL', 'SQLAlchemy', 'Gemini'],
    domain: 'askdb.studio',
    image: '/Askdb-screenshot.png',
    imageAlt: 'AskDB interface showing natural language SQL assistant hero',
    color: 'peach',
    icon: '*',
    link: 'https://github.com/Hemalatha1106/AskDB-Main',
  },
  {
    number: '02',
    title: 'Your coding journey, all in one place.',
    type: 'Insphere — Code. Compete. Conquer.',
    description: 'A gamified competitive programming platform that brings coding profiles, leaderboards, badges, XP, and social interactions together in one community.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL'],
    domain: 'insphere.studio',
    image: '/insphere-screenshot.png',
    imageAlt: 'Insphere competitive programming command center interface',
    color: 'mint',
    icon: '+',
    link: 'https://github.com/Hemalatha1106/Insphere-Gamified',
  },
  {
    number: '03',
    title: 'Your LeetCode solutions, on autopilot.',
    type: 'LeetVault — Save. Sync. Simplify.',
    description: 'A Chrome extension that automatically saves accepted solutions, generates AI-powered documentation, and syncs them to GitHub with one click.',
    tags: ['Chrome Extension (MV3)', 'Node.js', 'Express', 'Gemini API'],
    domain: 'leetvault.studio',
    image: '/leetvault-screenshot.png',
    imageAlt: 'LeetVault Chrome extension syncing an accepted LeetCode solution to GitHub',
    color: 'butter',
    icon: '♥',
    link: 'https://github.com/Hemalatha1106/LeetVault',
  },
]

const skills = [
  { label: 'Frontend', items: 'React · Next.js · TypeScript · JavaScript · HTML · CSS · Tailwind CSS', color: 'pink' },
  { label: 'Backend', items: 'Python · FastAPI · Node.js · Express · REST APIs · SQLAlchemy', color: 'mint' },
  { label: 'Databases & AI', items: 'MySQL · PostgreSQL · Supabase · FAISS · Gemini API · RAG', color: 'peach' },
  { label: 'Developer tools', items: 'Git · GitHub · Chrome Extensions (MV3) · Postman · VS Code', color: 'butter' },
]

const achievements: AchievementItem[] = [
  {
    id: 'ideas-for-india',
    number: '01',
    category: 'THE NATIONAL SPOTLIGHT',
    title: 'A win worth remembering',
    description: 'Winner at Ideas for India 2026, under the Sustainable and Resilient India category, organized by The Times of India and Optum. Received recognition from the Chief Minister of Delhi.',
    date: 'OCTOBER 2026',
    image: '/achievements/ideasforindia.jpeg',
    imageAlt: 'Ideas for India 2026 winner recognition',
    tone: 'pink',
    icon: '*',
  },
  {
    id: 'math-modeling',
    number: '02',
    category: 'THE MODEL THINKER',
    title: 'Math meets innovation',
    description: 'Secured 1st Place in the Math Modeling Hackathon, turning mathematical thinking and problem-solving into a winning solution.',
    date: '1ST PLACE · HACKATHON',
    image: '/achievements/mathsmodelling.jpeg',
    imageAlt: '1st Place at Math Modeling Hackathon',
    tone: 'yellow',
    icon: '↗',
  },
  {
    id: 'code-arena',
    number: '03',
    category: '1ST PLACE',
    title: 'Code Arena',
    description: 'Secured first place in Code Arena, a competitive programming competition that tested algorithmic thinking, problem-solving, and coding skills.',
    date: 'COMPETITIVE PROGRAMMING · WINNER',
    image: '/achievements/codearena.jpeg',
    imageAlt: '1st Place at Code Arena competitive programming competition',
    tone: 'mint',
    icon: '*',
  },
  {
    id: 'tech-vault',
    number: '04',
    category: '1ST PLACE',
    title: 'Tech Vault',
    description: 'Won first place in Tech Vault, showcasing strong logical reasoning, coding abilities, and problem-solving under competition.',
    date: 'COMPETITIVE PROGRAMMING · WINNER',
    image: '/achievements/techvault.jpeg',
    imageAlt: '1st Place at Tech Vault competition',
    tone: 'pink',
    icon: '↗',
  },
  {
    id: 'orientation-mc',
    number: '05',
    category: 'PASSING THE KNOWLEDGE FORWARD',
    title: 'From solving to sharing',
    description: 'Served as Master of Ceremonies at the Department of IT Orientation Programme, while introducing first-year students to LeetCode, problem-solving, competitive programming, and consistent learning.',
    date: 'MENTORSHIP · LEADERSHIP · EEC',
    image: '/achievements/orientation.jpeg',
    imageAlt: 'Department of IT Orientation Programme Master of Ceremonies',
    tone: 'peach',
    icon: '♥',
  },
]

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Hemalatha Venkatesan, home">Hemalatha<span>*</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">a little about</a>
          <a href="#work">selected work</a>
          <a href="#notes">the good stuff</a>
          <a className="nav-resume" href="/Hemalatha_V_Resume.pdf" download="Hemalatha_V_Resume.pdf">Resume <span aria-hidden="true">↓</span></a>
        </nav>
      </header>

      <section className="hero page-wrap" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> independent developer & curious human</p>
          <h1 id="hero-title">Building things with<br /><span className="pink-word">curiosity</span> &amp; <span className="serif-word">code.</span></h1>
          <p className="hero-intro">Hi, I&apos;m Hemalatha Venkatesan — a Pre-Final year Information Technology student, developer, and problem solver who loves turning curious ideas into meaningful things. I build projects, explore algorithms, and enjoy figuring out how things work (and occasionally, why they don&apos;t).</p>
          <div className="hero-actions">
            <a className="button-primary" href="#work">Come see my work <span aria-hidden="true">↘</span></a>
            <a className="text-link" href="#about">A little about me <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Portrait of Hemalatha">
          <span className="orbit orbit-one" aria-hidden="true">*</span>
          <span className="orbit orbit-two" aria-hidden="true">+</span>
          <div className="portrait-frame"><img src="/headshot.jpeg" alt="Headshot portrait of Hemalatha" /></div>
          <div className="sticker note-sticker"><span>currently</span><strong>making<br />good things</strong><span className="sticker-spark">*</span></div>
          <span className="scribble-arrow" aria-hidden="true">↙</span>
          <p className="photo-caption">a face behind the pixels <span>♥</span></p>
        </div>
        <div className="hero-bottom"><span>SCROLL A LITTLE</span><span className="down-line" aria-hidden="true" /><span>CHENNAI, INDIA · 13°05&apos;N, 80°17&apos;E</span></div>
      </section>

      <div className="ticker" aria-label="A little bit of everything, made with care">
        <div className="ticker-track"><span>FRONTEND WITH FEELING</span><b>*</b><span>PIXELS WITH PURPOSE</span><b>♥</b><span>GOOD IDEAS, MADE REAL</span><b>*</b><span>FRONTEND WITH FEELING</span><b>♥</b><span>PIXELS WITH PURPOSE</span><b>*</b></div>
      </div>

      <section className="about page-wrap section-pad" id="about">
        <div className="section-kicker"><span>01 / THE PERSON</span><span className="hand-note">a little introduction ↘</span></div>
        <div className="about-grid">
          <h2 className="section-title">Part engineer,<br />part <span className="pink-word">curious mind.</span></h2>
          <div className="about-copy">
            <p className="large-copy">I love turning curious ideas into meaningful things, one problem and one line of code at a time.</p>
            <p>I&apos;m Hemalatha Venkatesan, an Information Technology student who found her way from Biology to the world of technology. Somewhere along the way, I fell in love with problem-solving, building things, and understanding how ideas turn into reality.</p>
            <p>I enjoy exploring algorithms, experimenting with new technologies, building projects, and taking on challenges that push me beyond what I already know. I believe there&apos;s always something new to learn, something better to build, and another problem worth solving.</p>
            <a className="underlined-link" href="#contact">A bit more about me <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="about-footnote"><span>*</span> Making space for the interesting bits.</div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="page-wrap">
          <div className="section-kicker"><span>02 / THINGS I&apos;VE MADE</span><span className="hand-note">a few favorites, lately ↙</span></div>
          <div className="work-heading"><h2 className="section-title">Selected<br /><span className="pink-word">little worlds.</span></h2><p>Small teams, big ideas, and a lot of care in the details.</p></div>
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project project-${project.color}`} key={project.number}>
                <div className="project-visual">
                  <div className="project-browser"><div className="browser-top"><span /><span /><span /><i>{project.domain}</i></div><div className={`browser-art art-${project.color}`}><Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 560px) 92vw, 400px" className="browser-shot" /></div></div>
                  <span className="project-index">№ {project.number}</span>
                  <span className="project-doodle" aria-hidden="true">{project.icon}</span>
                </div>
                <div className="project-copy"><p className="eyebrow">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="project-link" href={project.link} target="_blank" rel="noreferrer">See the project <span aria-hidden="true">↗</span></a></div>
              </article>
            ))}
          </div>
          <p className="work-outro">There&apos;s always something new on the desk <span aria-hidden="true">*</span></p>
        </div>
      </section>

      <section className="skills-section section-pad page-wrap" id="skills">
        <div className="section-kicker"><span>03 / THE TOOLBOX</span><span className="hand-note">my favorite ingredients *</span></div>
        <div className="skills-grid"><div><h2 className="section-title">Good tools.<br /><span className="pink-word">Better ideas.</span></h2><p className="skills-intro">The right tool is the one that helps the idea come through. Here are a few I reach for often.</p><span className="hand-note skill-aside">always learning, always curious ↗</span></div><div className="skill-list">{skills.map((skill, index) => <div className={`skill-row skill-${skill.color}`} key={skill.label}><span className="skill-number">0{index + 1}</span><div><h3>{skill.label}</h3><p>{skill.items}</p></div><span className="skill-mark" aria-hidden="true">{['↗', '*', '⌘', '♥'][index]}</span></div>)}</div></div>
      </section>

      <section className="notes-section section-pad" id="notes">
        <div className="page-wrap">
          <div className="section-kicker"><span>04 / GOOD THINGS I KEEP</span><span className="hand-note">little reminders to myself</span></div>
          <h2 className="section-title notes-title">Proof that the <span className="pink-word">little things</span><br />add up.</h2>
        </div>
        <AchievementCarousel items={achievements} />
        <div className="page-wrap">
          <p className="notes-caption">Kept in my imaginary scrapbook, obviously <span>♥</span></p>
        </div>
      </section>

      <section className="experience page-wrap section-pad" id="experience">
        <div className="section-kicker"><span>05 / WHERE I&apos;VE BEEN</span><span className="hand-note">good people, good work</span></div>
        <div className="experience-grid">
          <h2 className="section-title">A few chapters<br />along the <span className="pink-word">way.</span></h2>
          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-date">SEP 2024 — MAY 2028</span>
              <div>
                <h3>B.Tech in Information Technology <span>@ SRM Easwari Engineering College</span></h3>
                <p>Pursuing a Bachelor of Technology in Information Technology, building a strong foundation in computer science, software development, and problem-solving.</p>
                <p className="timeline-meta">CGPA: 8.56 / 10<br /></p>
              </div>
              <span className="timeline-stamp stamp-peach">FOUNDATION</span>
            </article>
            <article className="timeline-item">
              <span className="timeline-date">AUG 2025 — NOW</span>
              <div>
                <h3>Technical Head <span>@ Eventhra</span></h3>
                <p>Leading technical initiatives, mentoring the team, and bringing technology-driven ideas to life through events and collaborative projects.</p>
              </div>
              <span className="timeline-stamp">CURRENT<br />CHAPTER</span>
            </article>
            <article className="timeline-item">
              <span className="timeline-date">SEPT 2026 — NOW</span>
              <div>
                <h3>Student Mentor <span>@ Easwari Engineering College</span></h3>
                <p>Helping first-year students find their footing in coding, explore problem-solving, and take their first steps into competitive programming.</p>
              </div>
              <span className="timeline-stamp stamp-peach">GIVING<br />BACK</span>
            </article>
            <article className="timeline-item">
              <span className="timeline-date">AUG — OCT 2025</span>
              <div>
                <h3>Frontend Developer Intern <span>@ Gingr Informatics</span></h3>
                <p>Explored frontend development through the MERN stack, building user interfaces and strengthening my foundations in web technologies.</p>
              </div>
              <span className="timeline-stamp">FIRST<br />BUILD</span>
            </article>
          </div>
        </div>
      </section>

      <section className="coding-section section-pad" id="coding">
        <div className="page-wrap coding-inner">
          <div>
            <div className="section-kicker"><span>06 / FOR THE LOVE OF PUZZLES</span></div>
            <h2 className="section-title">Sometimes I<br /><span className="pink-word">think in patterns.</span></h2>
            <p>Algorithms are little puzzles waiting to be untangled. A tricky edge case, an unexpected approach, and that satisfying moment when everything finally clicks.</p>
          </div>
          <div className="coding-note">
            <span className="code-doodle" aria-hidden="true">{`{ }`}</span>
            <div className="coding-shot-frame">
              <Image
                src="/Screenshot 2026-11-26 141625.png"
                alt="Hemalatha Venkatesan LeetCode profile stats showing 1,754 contest rating and 1,312 problems solved"
                width={1764}
                height={988}
                className="coding-shot"
              />
            </div>
            <a href="https://leetcode.com/u/Hemalatha_Venkatesan/" target="_blank" rel="noreferrer" className="underlined-link">Find me solving things <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="contact-section page-wrap" id="contact"><span className="contact-star" aria-hidden="true">*</span><div className="section-kicker"><span>07 / YOUR TURN</span><span className="hand-note">the best part is meeting new people</span></div><div className="contact-inner"><div><p className="eyebrow">HAVE A GOOD ONE IN MIND?</p><h2>Let&apos;s make<br />something <span className="pink-word">matter.</span></h2></div><div className="contact-copy"><p>A thoughtful project, an interesting question, or a really excellent book recommendation — my inbox is open.</p><div className="contact-actions"><a className="button-primary contact-button" href="mailto:hemavenkat1124@gmail.com">Write me a little note <span aria-hidden="true">↗</span></a><a className="button-secondary" href="/Hemalatha_V_Resume.pdf" download="Hemalatha_V_Resume.pdf">Download Resume <span aria-hidden="true">↓</span></a></div><div className="social-links"><a href="https://github.com/Hemalatha1106" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/hemalatha-venkatesan1124/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://leetcode.com/u/Hemalatha_Venkatesan/" target="_blank" rel="noreferrer">LeetCode ↗</a></div></div></div><div className="contact-footer"><a className="wordmark" href="#home">Hemalatha<span>*</span></a><span>Made slowly, with care & a very full tea mug.</span><a href="#home">BACK TO TOP ↑</a></div></section>
    </main>
  )
}