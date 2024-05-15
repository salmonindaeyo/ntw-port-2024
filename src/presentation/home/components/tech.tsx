import React, { useEffect } from 'react'
import { Observer } from 'mobx-react-lite'
import { AnimatedTooltip } from './AnimatedTooltip'

export const Tech = () => {
  const items = [
    {
      id: 1,
      name: 'Next.js',
      designation: 'frontend',
      image: 'https://assets.awwwards.com/awards/element/2022/09/6313eaf4b41bd275260216.png',
    },
    {
      id: 2,
      name: 'React.js',
      designation: 'frontend',
      image: 'https://www.cdnlogo.com/logos/r/85/react.svg',
    },
    {
      id: 3,
      name: 'Vue.js',
      designation: 'frontend',
      image: 'https://res.cloudinary.com/ddxwdqwkr/image/upload/f_auto/v1689120136/patterns.dev/Images/vue/og-images/introduction.png',
    },
    {
      id: 4,
      name: 'Nuxt.js',
      designation: 'frontend',
      image: 'https://pbs.twimg.com/profile_images/1696835964881002498/0YEYRNGF_200x200.png',
    },
    {
      id: 5,
      name: 'node.js',
      designation: 'backend',
      image: 'https://philna.sh/_astro/node.DvAuachI.png',
    },
    {
      id: 6,
      name: 'express.js',
      designation: 'backend',
      image: 'https://curity.io/images/resources/code-examples/code-examples-jwts.jpg',
    },
    {
      id: 7,
      name: 'Go',
      designation: 'backend',
      image: 'https://procoders.tech/wp-content/uploads/2022/10/Guide_To_Hire_The_Best_Go_Developers_to_Create_Valuable_Product.png',
    },
    {
      id: 8,
      name: 'MySQL',
      designation: 'database',
      image: 'https://w7.pngwing.com/pngs/717/111/png-transparent-mysql-round-logo-tech-companies-thumbnail.png',
    },
    {
      id: 9,
      name: 'MongoDB',
      designation: 'database',
      image: 'https://static.stocktitan.net/company-logo/mdb-lg.png',
    },
    {
      id: 10,
      name: 'PostgreSQL',
      designation: 'database',
      image: 'https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png',
    },
    {
      id: 11,
      name: 'Tailwind CSS',
      designation: 'css',
      image: 'https://play-lh.googleusercontent.com/YN4OEsoWsU1QrZFcwWlI8uuGhDKc4RAlP56FFyL03VFegD5tWjZ5cNWHocC_QRE_TvA',
    },
    {
      id: 12,
      name: 'Docker',
      designation: 'containerization',
      image: 'https://www.docker.com/wp-content/uploads/2024/02/docker-default-meta-image.png',
    },
    {
      id: 13,
      name: 'LINE',
      designation: 'messaging api , line oa , line bot',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/LINE_New_App_Icon_%282020-12%29.png',
    },
    {
      id: 14,
      name: 'Wordpress',
      designation: 'cms',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png',
    },
    {
      id: 15,
      name: 'Pinia',
      designation: 'store management in vue',
      image: 'https://miro.medium.com/v2/resize:fit:800/1*TOGHpRhMF0wGXhsrCga94w.png',
    },
    {
      id: 16,
      name: 'Redux',
      designation: 'store management in react',
      image:
        'https://media.licdn.com/dms/image/D5612AQH7_svwKSMIqA/article-cover_image-shrink_720_1280/0/1674827212376?e=2147483647&v=beta&t=yz7gBCl1j2xG2Rwsb59t9iB3ScZNx7MrJs6LMGw8cdk',
    },
    {
      id: 17,
      name: 'Mobx',
      designation: 'store management in react',
      image: 'https://mobx.js.org/img/mobx.png',
    },
    {
      id: 18,
      name: 'React query',
      designation: '',
      image: 'https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png',
    },
    {
      id: 19,
      name: 'Socket.io',
      designation: 'backend',
      image: 'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_c13320392397522bb5c39454d240ebf0/socket-io.png',
    },
    {
      id: 20,
      name: 'gsap (newbie)',
      designation: 'css',
      image: 'https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg',
    },
    {
      id: 21,
      name: 'framer motion (newbie)',
      designation: 'css',
      image:
        'https://media.licdn.com/dms/image/D5612AQFQhBhISklmzQ/article-cover_image-shrink_720_1280/0/1696258510864?e=2147483647&v=beta&t=D6Inw_ievD7cyM8kpqB6i_qx_rH1Ys_WeyxksCF_Odk',
    },
    {
      id: 22,
      name: 'daisy ui ',
      designation: 'css',
      image: 'https://raw.githubusercontent.com/saadeghi/daisyui-images/master/images/daisyui-logo/favicon-192.png',
    },
    {
      id: 23,
      name: 'mui ui ',
      designation: 'css',
      image: 'https://mui.com/static/logo.png',
    },
    {
      id: 24,
      name: 'primereact ui ',
      designation: 'css',
      image:
        'https://camo.githubusercontent.com/f7b1536164c640fbe8eb695ccac71e48c3040a7832023e46496d433c3628d341/68747470733a2f2f7777772e7072696d6566616365732e6f72672f77702d636f6e74656e742f75706c6f6164732f323031372f30392f7072696d6572656163742d7472616e73706172656e742d3235302e706e67',
    },
    {
      id: 25,
      name: 'chart js',
      designation: 'css',
      image: 'https://asset.brandfetch.io/idFdo8ulhr/idzj34qGQm.png',
    },
  ]

  return (
    <Observer>
      {() => (
        <div>
          <div className="bg-gray-200 h-screen w-full flex justify-center items-center">
            <div
              data-aos-duration="1000"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="flex  flex-wrap justify-center max-w-[550px]"
              style={{ zoom: 1.3 }}
            >
              <AnimatedTooltip items={items} />{' '}
            </div>
          </div>
        </div>
      )}
    </Observer>
  )
}
