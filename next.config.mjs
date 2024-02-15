import nextMDX from '@next/mdx'

import { recmaPlugins } from './src/mdx/recma.mjs'
import { rehypePlugins } from './src/mdx/rehype.mjs'
import { remarkPlugins } from './src/mdx/remark.mjs'
import withSearch from './src/mdx/search.mjs'

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/docs',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/docs',
  //       permanent: false,
  //       basePath: false,
  //     },
  //   ]
  // },
}

export default withSearch(withMDX(nextConfig))
