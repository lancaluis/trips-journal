import { X } from 'lucide-react'
import LinkWrapper from '@/components/LinkWrapper'

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen m-w-container m-auto">
      <LinkWrapper href="/">
        <X aria-label="Close" />
      </LinkWrapper>

      <h1 className="text-4xl font-bold">About</h1>
      <div>
        <p className="text-lg">This is the about page</p>
      </div>
    </section>
  )
}

export default About
