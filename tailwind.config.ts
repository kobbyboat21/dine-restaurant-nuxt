import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  content: [
    'docs/content/**/*.md'
  ],
  theme: {
    fontFamily: {
      librebaskerville: ["LibreBaskverille", "sans-serif"],
}
}
}
