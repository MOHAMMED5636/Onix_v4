import { getLeaderSeo, OG_IMAGE_URL, SITE_URL } from '@/lib/seoData'

type HeadProps = {
  params: {
    slug: string
  }
}

export default function Head({ params }: HeadProps) {
  const seo = getLeaderSeo(params.slug)
  const title = seo?.title ?? 'ONIX Leadership Profile'
  const description =
    seo?.description ?? 'Explore ONIX Group leadership bios, responsibilities, and major program highlights.'
  const url = seo ? `${SITE_URL}${seo.path}` : `${SITE_URL}/leaders`
  const image = seo?.image ?? OG_IMAGE_URL

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="profile" />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  )
}


