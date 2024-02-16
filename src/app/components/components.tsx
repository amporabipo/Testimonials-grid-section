import styles from '@/app/components/styles.module.css'
import Image from 'next/image'
import clsx from 'clsx'

export default function Content() {
  return (
    <>
      <div className={styles.component}>
        <Card2
          img={data[0].img}
          name={data[0].name}
          second={data[0].second}
          text={data[0].text}
          text2={data[0].text2}
          type='1'
        />
        <Card2
          img={data[1].img}
          name={data[1].name}
          second={data[1].second}
          text={data[1].text}
          text2={data[1].text2}
          type='2'
        />
        <Card2
          img={data[2].img}
          name={data[2].name}
          second={data[2].second}
          text={data[2].text}
          text2={data[2].text2}
          type='3'
        />
        <Card2
          img={data[3].img}
          name={data[3].name}
          second={data[3].second}
          text={data[3].text}
          text2={data[3].text2}
          type='4'
        />
        <Card2
          img={data[4].img}
          name={data[4].name}
          second={data[4].second}
          text={data[4].text}
          text2={data[4].text2}
          type='5'
        />
      </div>
    </>
  )
}

interface PropsCard {
  img: string
  name: string
  second: string
  text: string
  text2: string
  type: '1' | '2' | '3' | '4' | '5'
}
function Card2({ img, name, second, text, text2, type }: PropsCard) {
  return (
    <>
      <div className={clsx(styles.card, {
        [styles.card1]: type === '1',
        [styles.card2]: type === '2',
        [styles.card3]: type === '3',
        [styles.card4]: type === '4',
        [styles.card5]: type === '5'
      })}>
        <div className={styles.content}>
          <div className={styles.profile}>
            <Image
              src={img}
              width={10}
              height={10}
              alt={img}
            />
            <div className={styles.info}>
              <h3>{name}</h3>
              <h4>{second}</h4>
            </div>
          </div>
          <div className={styles.text}>
            <p>{text}</p>
          </div>
          <div className={styles.text2}>
            <p>{text2}</p>
          </div>
        </div>
      </div>
    </>
  )
}

const data = [
  {
    img: '/01/image-daniel.jpg',
    name: "Daniel Clifford",
    second: "Verified Graduate",
    text: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth',
    text2: '“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”'
  },
  {
    img: '/01/image-jonathan.jpg',
    name: 'Jonathan Walters',
    second: 'Verified Graduate',
    text: 'The team was very supportive and kept me motivated',
    text2: ' “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”'
  },
  {
    img: '/01/image-jeanette.jpg',
    name: 'Jeanette Harmon',
    second: 'Verified Graduate',
    text: 'An overall wonderful and rewarding experience',
    text2: '“Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”'
  },
  {
    img: '/01/image-patrick.jpg',
    name: 'Patrick Abrams',
    second: 'Verified Graduate',
    text: 'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
    text2: '“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”'
  },
  {
    img: '/01/image-kira.jpg',
    name: 'Kira Whittle',
    second: 'Verified Graduate',
    text: 'Such a life-changing experience. Highly recommended! ',
    text2: '“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”'
  }

]