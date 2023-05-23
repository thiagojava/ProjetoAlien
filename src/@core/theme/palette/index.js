const DefaultPalette = (mode, skin, themeColor) => {
  // ** Vars
  const whiteColor = '#FFF'
  const lightColor = '58, 53, 65'
  const darkColor = '231, 227, 252'
  const mainColor = mode === 'light' ? lightColor : darkColor

  const primaryGradient = () => {
    if (themeColor === 'primary') {
      return '#C6A7FE'
    } else if (themeColor === 'secondary') {
      return '#9C9FA4'
    } else if (themeColor === 'success') {
      return '#93DD5C'
    } else if (themeColor === 'error') {
      return '#FF8C90'
    } else if (themeColor === 'warning') {
      return '#FFCF5C'
    } else {
      return '#6ACDFF'
    }
  }

  const defaultBgColor = () => {
    if (skin === 'bordered' && mode === 'light') {
      return whiteColor
    } else if (skin === 'bordered' && mode === 'dark') {
      return '#312D4B'
    } else if (mode === 'light') {
      return '#F4F5FA'
    } else return '#28243D'
  }

  return {
    customColors: {
      dark: darkColor,
      main: mainColor,
      light: lightColor,
      primaryGradient: primaryGradient(),
      bodyBg: mode === 'light' ? '#F4F5FA' : '#28243D',
      trackBg: mode === 'light' ? '#F0F2F8' : '#474360',
      avatarBg: mode === 'light' ? '#F0EFF0' : '#3F3B59',
      darkBg: skin === 'bordered' ? '#312D4B' : '#28243D',
      lightBg: skin === 'bordered' ? whiteColor : '#F4F5FA',
      tableHeaderBg: mode === 'light' ? '#F9FAFC' : '#3D3759'
    },
    mode: mode,
    common: {
      black: '#000',
      white: whiteColor
    },
    primary: {
      light: '#fff',
      main: '#9AC42A',
      dark: 'black',
      contrastText: whiteColor
    },
    secondary: {
      light: '#9AC42A',
      main: '#9AC42A',
      dark: 'black',
      contrastText: whiteColor
    },
    error: {
      light: '#9AC42A',
      main: '#9AC42A',
      dark: 'black',
      contrastText: whiteColor
    },
    warning: {
      light: '#9AC42A',
      main: '#9AC42A',
      dark: 'black',
      contrastText: whiteColor
    },
    info: {
      light: '#9AC42A',
      main: '#9AC42A',
      dark: 'black',
      contrastText: whiteColor
    },
    success: {
      light: '#9AC42A',
      main: '#9AC42A',
      dark: '#9AC42A',
      contrastText: whiteColor
    },
    grey: {
      50: '#9AC42A',
      100: '#9AC42A',
      200: '#9AC42A',
      300: '#9AC42A',
      400: '#9AC42A',
      500: '#9AC42A',
      600: '#9AC42A',
      700: '#9AC42A',
      800: '#9AC42A',
      900: '#9AC42A',
      A100: '#9AC42A',
      A200: '#9AC42A',
      A400: '#9AC42A',
      A700: '#9AC42A'
    },
    text: {
      primary: `rgba(${mainColor}, 0.87)`,
      secondary: `rgba(${mainColor}, 0.6)`,
      disabled: `rgba(${mainColor}, 0.38)`
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === 'light' ? whiteColor : '#312D4B',
      default: defaultBgColor()
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.26)`,
      disabledBackground: `rgba(${mainColor}, 0.12)`,
      focus: `rgba(${mainColor}, 0.12)`
    }
  }
}

export default DefaultPalette
