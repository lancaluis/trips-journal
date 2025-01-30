import { X } from 'lucide-react'
import LinkWrapper from '@/components/LinkWrapper'

export type PageTemplateProps = {
  heading: string
  body: string
}

export default function PageTemplate({ heading, body }: PageTemplateProps) {
  return (
    <section className="flex flex-col items-center justify-center h-screen m-w-container m-auto">
      <LinkWrapper href="/">
        <X aria-label="Close" />
      </LinkWrapper>

      <h1 className="text-4xl font-bold">{heading}</h1>
      <div>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </section>
  )
}
