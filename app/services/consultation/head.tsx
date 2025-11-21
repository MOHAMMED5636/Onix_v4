import { OG_IMAGE_URL, SITE_URL } from '@/lib/seoData'

const title = 'Consultation & Advisory | ONIX Group'
const description =
  'Strategic engineering and development advisory services that align feasibility, budgeting, and delivery strategies.'
const url = `${SITE_URL}/services/consultation`

export default function Head() {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={OG_IMAGE_URL} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE_URL} />
    </>
  )
}


