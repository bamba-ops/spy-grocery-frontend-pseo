import { defineSitemapEventHandler } from '#imports'
import type { SitemapUrlInput } from '#sitemap/types'
import { serverSupabaseClient } from '#supabase/server'

export default defineSitemapEventHandler(async event => {
  const supabase = await serverSupabaseClient(event)
  const { data: stores }   = await supabase.from('stores').select('slug')
  const { data: products } = await supabase.from('products').select('slug')

  const urls: SitemapUrlInput[] = []
  stores?.forEach(s => urls.push({ loc: `/store/${s.slug}` }))
  products?.forEach(p => urls.push({ loc: `/product/${p.slug}` }))

  return urls
})
