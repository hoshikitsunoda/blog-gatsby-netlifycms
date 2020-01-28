import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

kirkhamTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    html: {
      fontSize: `62.5%`,
    },
  }
}

delete kirkhamTheme.googleFonts

const typography = new Typography(kirkhamTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
