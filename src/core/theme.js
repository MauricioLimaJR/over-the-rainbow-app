import * as colors from '../constants/colors'

const defaultPalette = {
  primary: {
    main: '#7B27FF',
    contrastText: colors.white,
  },
  secondary: {
    main: '#06D9FC',
    contrastText: colors.studioPurple,
  },
  terciary: {
    main: '#00004C',
    contrastText: colors.white,
  },
  quaternary: {
    main: '#FD7A8C',
    contrastText: colors.white,
  },
  background: {
    default: colors.white,
  },
  white: {
    main: colors.white,
  },
  error: {
    main: colors.red,
  },
  warning: {
    main: colors.schoolBusYellow,
  },
  gray: {
    main: '#2B2B2B',
  },
}

export default (palette = defaultPalette) => ({
  palette,
  overrides: {
    MuiButton: {
      root: {
        border: `solid 2px ${palette.primary.main}`,
        borderRadius: 25,
        textTransform: 'none',
        fontSize: '0.937rem', // 15px
        paddingTop: '4px',
        paddingBottom: '4px',
        fontFamily: ['CircularStd', 'Helvetica'],
        fontWeight: 400,
      },
      outlined: {
        paddingTop: '10px',
        paddingBottom: '10px',
        minWidth: '9.375rem', // 150px
      },
      contained: {
        minWidth: '9.375rem', // 150px
        boxShadow: 'none !important',
      },
      text: {
        border: 'none',
        color: palette.primary.main,
        minWidth: '0',
        marginLeft: '-8px',
        marginRight: '-8px',
      },
    },

    MuiInputBase: {
      root: {
        maxHeight: '3rem;',
      },
    },
  },
})
