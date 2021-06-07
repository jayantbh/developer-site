import Typography from 'typography';
import Theme from 'typography-theme-stern-grove';

Theme.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    code: {
      fontSize: '1.1rem',
    },
  };
};

delete Theme.googleFonts;

const typography = new Typography({
  ...Theme,
  headerFontFamily: ['wotfardregular', 'serif'],
  bodyFontFamily: ['wotfardregular', 'serif'],
  bodyWeight: 300,
  headerColor: '#555',
  googleFonts: [
    ...(Theme.googleFonts || []),
    {
      name: 'Courier Prime',
      styles: ['400'],
    },
  ],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
