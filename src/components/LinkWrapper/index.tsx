import Link from 'next/link'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => (
  <div className="fixed z-[1100] top-[3rem] right-[3rem] text-white cursor-pointer">
    <Link href={href}>{children}</Link>
  </div>
)

export default LinkWrapper
