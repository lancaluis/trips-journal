import { notFound } from 'next/navigation'
import { getPageBySlug, getPages } from '@/graphql/client'
import PageTemplate from '@/components/PageTemplate'

export async function generateStaticParams() {
  try {
    const result = await getPages()

    if (!result || !result.pages || !Array.isArray(result.pages)) {
      console.error('Resposta da API inválida:', result)
      return []
    }

    return result.pages.map((page: { slug: string }) => ({
      slug: page.slug
    }))
  } catch (error) {
    console.error('Erro ao obter páginas:', error)
    return []
  }
}

async function getPageData(slug: string) {
  try {
    const result = await getPageBySlug(slug)

    if (!result) {
      notFound()
    }

    return result
  } catch (error) {
    console.error('Erro ao obter dados da página:', error)
    notFound()
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params

  const page = await getPageData(slug)

  if (!page) {
    notFound()
  }

  return <PageTemplate heading={page.heading} body={page.body.html} />
}
