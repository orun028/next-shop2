import { extendTheme, theme as base } from '@chakra-ui/react'

const overrides = extendTheme({
 fonts: {
   heading: `Montserrat, ${base.fonts?.heading}`,
   body: `Montserrat, ${base.fonts?.body}`,
 }
})
export default extendTheme(overrides)