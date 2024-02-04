import Image from 'next/image';
import Link from 'next/link';

// Asssets
import AkaneDream from '@assets/img/akane-dream.png';
import Me from '@public/me.jpg';
import lost from '@assets/img/sky-bg.jpg';
import FacebookLogo from '@public/facebook-logo.png';
import GitHubLogo from '@public/github-mark-white.png';
import InstagramLogo from '@public/instagram-logo.png';
import TwitterXLogo from '@public/twitter-x-logo.png';

// Components
import StackIcon from '@components/StackIcon';
import Detail from '@components/Detail';
import ScrollForMore from '@components/ScrollForMore';
import Topic from '@components/about/Topic';
import BackToTop from '@components/BackToTop';
import SocMed from '@components/SocMed';
import TopicImage from '@components/about/TopicImage';

// Types
import { TopicType } from '@customs/topic';

const handleTopics = async() => {
  try {
    const response = await fetch(`api/topics`, {
      cache: 'no-store',
    });
    if(!response.ok) throw new Error("Failed to fetch");
    
    return await response.json();
  } catch (error) {
    console.log("Error: ", error);
  }
}

const Home = async () => {
  const { topics } = await handleTopics();
  return (
    <>
      <Image priority src={ AkaneDream } alt="" id="home-bg" width={'3000'} height={'3000'} className="w-full h-[930px] object-cover absolute z-[-100] opacity-[0.5] dark:opacity-[0.3] " />
      <BackToTop id={"#home"} />
      <div className="container relative">
        <section id="home" className="relative h-[930px] flex flex-col justify-between items-center">
          <div className=" w-full px-[30px] lg:px-[50px] xl:px-[100px] 2xl:px-[200px] pt-[200px] lg:pt-[250px] flex flex-col lg:flex-row justify-between items-center gap-y-[50px]  ">
            <div className="description ">
              <h1 className="switch-text-color text-6xl md:text-7xl lg:text-8xl font-bold mb-8">Heya~!</h1>
              <p className="switch-text-color w-[400px] lg:w-[450px] xl:w-[600px] text-sm lg:text-base xl:text-xl ">My name is <strong className="highlight">Moonbami</strong>, and I am currently pursuing a career for being a <strong className="highlight">full-stack web developer</strong>. I am still a novice, but I am making <strong className="highlight">progress and learning</strong> on a daily basis.</p>
            </div>
            <Image className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] border-[3px] border-solid border-black dark:border-white rounded-lg" src={`${process.env.API_AVATAR}`} width={'3000'} height={'3000'} alt="Jam Moonbami" />
          </div>
          <ScrollForMore />
        </section>
        
        <section id="about" className="px-[30px] lg:px-[50px] xl:px-[100px] 2xl:px-[200px] py-[100px] flex flex-col justify-between items-center ">
          <div className="content w-full flex flex-col gap-[100px]">
            <div className="about-me flex flex-col lg:flex-row justify-between items-center lg:items-start 2xl:justify-evenly ">
              <TopicImage src={ Me } />
              <div className="about-me flex flex-col gap-[30px] ">
                <div className="description">
                  <h1 className="switch-text-color capitalize text-6xl font-bold mb-2">{ "about me" }</h1>
                  <p className="switch-text-color w-[400px] lg:w-[450px] xl:w-[600px]">{ "I face the world with the name of Moonbami. Yes, it is not my real name and I consider it as my IGN (In Game Name). It is the combination of the name of my very first “Waifu” and me being a “Selenophile”.  How about let's dive deeper of who am I behind the social media?" }</p>
                </div>
                <div className="labels flex flex-col gap-2">
                  <Detail label={"Name"} detail={ "Jamiraquai Mikhail Alvarez" } />
                  <Detail label={"Nickname"} detail={ "Jam, Jamir, Moon" } />
                  <Detail label={"Age"} detail={ "21" }/>
                  <Detail label={"Birthday"} detail={ "August 15, 2002" }/>
                  <Detail label={"Sex"} detail={ "male" }/>
                  <Detail label={"Nationality"} detail={ "filipino" }/>
                  <Detail label={"Status"} detail={ "single" }/>
                  <Detail label={"Languages"} detail={ "Tagalog, English, Japanese(currently learning)" }/>
                </div>
              </div>
            </div>
            {/* <Topic title={"universe"} desc={"I really, really, really love topics about this! Ever since I was young, I was wondering if are we; us humans are the only living things here in our universe. This is just one of the many questions I have. I wish before I leave planet earth, I want to see the future of it. Like what it would be like if we have floating vehicles, advance tech and many more! I hope Earth will live more than the scientists predictions and the YouTube speculations haha. Every night, I always think if we ever get a chance to colonize a planet. I always wonder what it would look and feels like. Looking to the cosmos at that newly colonized planet is a chef’s kiss for me. Seeing our own Milky Way Galaxy in front of our eyes is truly going to be once in a lifetime experience. Although, we can see it here in Earth but. Due to the light pollution, this prevents us from seeing it. That’s why I am wishing at least once in my life that I’ll be able to see the stars and our galaxy in a much clearer view."} /> */}
            {topics.map((topic: TopicType) => (
            <Topic key={ topic._id } className={"lg:flex-row-reverse"} title={ topic.title } desc={ topic.desc } />))}
          </div>
        </section>

        <section id="stack" className="bg-gray-300 dark:bg-black relative px-[30px] lg:px-[50px] xl:px-[100px] 2xl:px-[200px] py-[100px] flex flex-col justify-between items-center">
          <div className="content w-full flex flex-col items-center gap-[100px]">
            <div className="title  flex flex-col items-center ">
              <h1 className="switch-text-color text-6xl font-bold mb-[15px] " >Stacks</h1>
              <p className="switch-text-color text-center w-[400px]" >All of my current technology stack that I really enjoy using. Looking forward to learn more.</p>
            </div>
            <div className="stacks grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-7 gap-2">
              <StackIcon href={"https://www.javascript.com/"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"} alt={"javascript logo"} />
              <StackIcon href={"https://www.typescriptlang.org/"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"} alt={"typescript logo"} />
              <StackIcon href={"https://www.python.org/"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"} alt={"python logo"} />
              <StackIcon href={"https://react.dev/"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} alt={"react logo"} />
              <StackIcon href={"https://nextjs.org/"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"} alt={"nextjs logo"} className={"bg-white rounded-full"} />
              <StackIcon href={"https://tailwindcss.com/"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"} alt={"tailwindcss logo"} />
              <StackIcon href={"https://sass-lang.com/"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"} alt={"sass logo"} />
              <StackIcon href={"https://web.dev/learn/css"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"} alt={"css3 logo"} />
              <StackIcon href={"https://html.com/"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"} alt={"html5 logo"} />
              <StackIcon href={"https://www.figma.com/"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"} alt={"figma logo"} />
              <StackIcon href={"https://www.adobe.com/ph_en/products/photoshop/landpa.html?gclid=Cj0KCQiAwbitBhDIARIsABfFYIIgrHeJQ4zSBpfJ5gX1rvBrFTQia5yFavi8cw0dkBzfcODhax_wzjoaAijwEALw_wcB&sdid=GVTYXXRQ&mv=search&mv2=paidsearch&ef_id=Cj0KCQiAwbitBhDIARIsABfFYIIgrHeJQ4zSBpfJ5gX1rvBrFTQia5yFavi8cw0dkBzfcODhax_wzjoaAijwEALw_wcB:G:s&s_kwcid=AL!3085!3!444512451750!e!!g!!photoshop!703953000!39399096689&gad_source=1"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"} alt={"photoshop logo"} />
              <StackIcon href={"https://git-scm.com/"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"} alt={"git logo"} />
              <StackIcon href={"https://www.mongodb.com/"} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"} alt={"mongodb logo"} />          
            </div>
          </div>
        </section>

        <section id="project" className="relative px-[30px] lg:px-[50px] xl:px-[100px] 2xl:px-[200px] py-[100px] flex flex-col justify-between items-center">
          <div className="content w-full flex flex-col items-center gap-[150px]">
            <div className="title flex flex-col items-center ">
              <h1 className="switch-text-color text-6xl font-bold mb-[15px] " >Projects</h1>
              <p className="switch-text-color text-center w-[400px]" >These are the projects I made all throughout my coding career. I am happy to present it to you.</p>
            </div>
            <div className="projects flex flex-col gap-[100px]">
              <div className="flex flex-col premium:flex-row-reverse gap-[15px] ">
                <Image src={ `${process.env.API_TSUKIWA}` } alt='tsukiwa' width={'3000'} height={'3000'} className="w-[400px] h-[220px] md:w-[640px] md:h-[480px] lg:w-[800px] lg:h-[400px] object-contain rounded-lg" />
                <div className="description">
                  <li className="switch-text-color text-3xl md:text-4xl lg:text-5xl font-bold mb-2 " >tsukiwa</li>
                  <p className="switch-text-color w-[400px] md:w-[600px]">
                    A place where your “Waifus” matter. This is a website that you can rank, rate, organize and flex your waifus all over the world. This is still currently in designing phase because of my schedule being strict to my academics and gaming. But, I swear that this will be in production once I get free time.
                    <br /><br />
                    You can visit the GitHub repository <Link href="https://github.com/MoonbamiOfficial/tsukiwa-web.git" target='_blank' className="text-blue-400">here</Link>.
                  </p>
                </div>
              </div>
              <div className="flex flex-col premium:flex-row-reverse gap-[15px] ">
                <Image src={ `${process.env.API_REALPOP}` } alt='Realpop' width={'3000'} height={'3000'} className="w-[400px] h-[220px] md:w-[640px] md:h-[480px] lg:w-[800px] lg:h-[400px] object-contain rounded-lg" />
                <div className="description">
                  <li className="switch-text-color text-3xl md:text-4xl lg:text-5xl font-bold mb-2 " >Realpop</li>
                  <p className="switch-text-color w-[400px] md:w-[600px]">
                    An online store of K-Pop photocards. This is an e-commerce website that are dedicated for photocards. This is a school project from my subject called DCIT 26. This is soon going to be in production so if you have any questions, please wait for its release.
                    <br /><br />
                    You can visit the GitHub repository <Link href="https://github.com/MoonbamiOfficial/realpop-web.git" target='_blank' className="text-blue-400">here</Link>.
                  </p>
                </div>
              </div>
              <div className="flex flex-col premium:flex-row-reverse gap-[15px] ">
                <Image src={ `${process.env.API_SPA}` } alt='Student Portal App' width={'3000'} height={'3000'} className="w-[400px] h-[220px] md:w-[640px] md:h-[480px] lg:w-[800px] lg:h-[400px] object-contain rounded-lg" />
                <div className="description">
                  <li className="switch-text-color text-3xl md:text-4xl lg:text-5xl font-bold mb-2 " >Student Portal App</li>
                  <p className="switch-text-color w-[400px] md:w-[600px]">
                    This is another school project from my subject called ITEC 80. It’s a software for students to monitor their academics. This is a team project so I didn’t do all of these by myself, special thanks to my members!
                    <br /><br />
                    You can visit the GitHub repository <Link href="https://github.com/MoonbamiOfficial/student-portal-app.git" target='_blank' className="text-blue-400">here</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className=" relative py-[100px] flex flex-col justify-between items-center">
          <Image src={ lost } alt="" style={{ width: '100%', height: '500px' }} className=" object-cover absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] -z-50 opacity-[0.3] " />
          <div className="content flex flex-col items-center gap-[30px]">
            <div className="title flex flex-col items-center">
              <h1 className="switch-text-color text-6xl font-bold mb-[15px] " >Contact Me</h1>
              <p className="switch-text-color text-center w-[400px]" >If you have any concerns, questions or if you just want to be friends with me. Please, contact me to any of these that you prefer.</p>
            </div>
            <hr className="w-full" />
            <div className=" socmeds grid grid-cols-2 gap-[30px]">
              <SocMed href={"https://www.facebook.com/MoonbamiOffcl"} src={ FacebookLogo } text={"facebook"} />
              <SocMed href={"https://www.instagram.com/moonbamidesu/"} src={ InstagramLogo } text={"instagram"} />
              <SocMed href={"https://twitter.com/Moonbami_"} src={ TwitterXLogo } text={"twitter x"} />
              <SocMed href={"https://github.com/MoonbamiOfficial"} src={ GitHubLogo } text={"GitHub"} />
            </div>
            <hr className="w-full" />
            <p className="switch-text-color last-phrase text-center w-[400px] ">I do have more social media accounts but these are my commonly used ones.</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home