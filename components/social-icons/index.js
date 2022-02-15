import Image from 'next/image'
// import Blog from './blog.png'
// import Instagram from './instagram.png'
// import Facebook from './facebook.png'

// const components = {
//   blog: Blog,
//   facebook: Facebook,
//   instagram: Instagram,
// }

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  // const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <Image src={`/static/images/${kind}.png`} width="40px" height="40px" />
      {/* <SocialSvg
        className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
      /> */}
    </a>
  )
}

export default SocialIcon
