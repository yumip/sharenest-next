import { createTheme } from "@mui/material/styles";

import {
  background,
  error,
  mono,
  omne,
  primary,
  success,
  supportive,
  warning,
} from "./colors";
import NoveraExtraBold from "../fonts/Novera-ModernExtraBold.otf";
import Novera from "../fonts/Novera-ModernRegular.otf";

const theme = createTheme({
  palette: {
    primary: primary,
    supportive: supportive,
    mono: mono,
    omne: omne,
    background: background,
    error: error,
    success: success,
    warning: warning,
  },
  typography: {
    title_xxlarge: {
      fontSize: 40,
      lineHeight: "48px",
      fontWeight: 800,
    },
    title_xlarge: {
      fontSize: 32,
      lineHeight: "40px",
      fontWeight: 800,
    },
    title_large: {
      fontSize: 24,
      lineHeight: "32px",
      fontWeight: 800,
    },
    title_medium: {
      fontSize: 20,
      lineHeight: "28px",
      fontWeight: 800,
    },
    title_small: {
      fontSize: 16,
      lineHeight: "24px",
      fontWeight: 800,
    },
    title_xsmall: {
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: 800,
    },
    subtitle: {
      fontSize: 24,
      lineHeight: "32px",
      fontWeight: 400,
    },
    subtitle_small: {
      fontSize: 12,
      lineHeight: "16px",
      fontWeight: 800,
    },
    body_large: {
      fontSize: 16,
      lineHeight: "24px",
      fontWeight: 400,
    },
    body_small: {
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: 400,
    },
    button: {
      fontSize: 16,
      lineHeight: "32px",
      fontWeight: 800,
    },
    caption: {
      fontSize: 12,
      lineHeight: "16px",
      fontWeight: 400,
    },
    caption_2: {
      fontSize: 8,
      lineHeight: "8px",
      fontWeight: 800,
    },
    textbox_default: {
      fontSize: 16,
      lineHeight: "20px",
      fontWeight: 400,
    },
    textbox_bold: {
      fontSize: 16,
      lineHeight: "20px",
      fontWeight: 800,
    },
    navbar_active: {
      fontSize: 9,
      fontWeight: 800,
    },
    navbar_inactive: {
      fontSize: 9,
      fontWeight: 400,
    },
    h1: undefined,
    h2: undefined,
    h3: undefined,
    h4: undefined,
    h5: undefined,
    h6: undefined,
    subtitle1: undefined,
    subtitle2: undefined,
    body1: undefined,
    body2: undefined,
    overline: undefined,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Novera';
          font-style: normal;
          font-weight: 400;
          src: local('Novera'), local('Novera-ModernRegular'), url(${Novera}) format('woff2');
        }
        
        @font-face {
          font-family: 'Novera';
          font-style: normal;
          font-weight: 800;
          src: local('Novera'), local('Novera-ModernExtraBold'), url(${NoveraExtraBold}) format('woff2');
        }
      `,
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          fontFamily: "Novera,sans-serif",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Novera,sans-serif",
        },
      },
      defaultProps: {
        variantMapping: {
          title_xxlarge: "h1",
          title_xlarge: "h2",
          title_large: "h3",
          title_medium: "h4",
          title_small: "h5",
          title_xsmall: "h6",
          subtitle: "h6",
          subtitle_small: "h6",
          body_large: "p",
          body_small: "p",
          button: "span",
          caption: "span",
          caption_2: "span",
          textbox_default: "p",
          textbox_bold: "p",
          navbar_active: "span",
          navbar_inactive: "span",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#FFF",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: 80,
          "@media (min-width:600px)": {
            padding: "0 30px",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        label: {
          fontFamily: "Novera",
        },
      },
      variants: [
        {
          props: { variant: "draft" },
          style: {
            backgroundColor: omne.orange.mid,
          },
        },
        {
          props: { variant: "pendingApproval" },
          style: {
            backgroundColor: supportive.light.blue,
          },
        },
        {
          props: { variant: "approved" },
          style: {
            backgroundColor: mono.grey[2],
          },
        },
        {
          props: { variant: "rejected" },
          style: {
            backgroundColor: supportive.red,
            color: "white",
          },
        },
        {
          props: { variant: "active" },
          style: {
            backgroundColor: supportive.lime,
          },
        },
        {
          props: { variant: "transferapproved" },
          style: {
            backgroundColor: supportive.lime,
          },
        },
        {
          props: { variant: "deactivated" },
          style: {
            backgroundColor: mono.grey[2],
            color: "white",
          },
        },
        {
          props: { variant: "complete" },
          style: {
            backgroundColor: mono.grey[2],
          },
        },
        {
          props: { variant: "deleted" },
          style: {
            backgroundColor: mono.grey[2],
            color: "white",
          },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "0px 18px",
          borderRadius: 35,
          fontFamily: "Novera",
        },
      },
      variants: [
        {
          props: { variant: "primary" },
          style: {
            backgroundColor: mono.black,
            color: mono.white,
            "&:hover": { backgroundColor: mono.grey[4] },
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            backgroundColor: mono.white,
            color: mono.black,
            "&:hover": { backgroundColor: mono.grey[1] },
            border: `1px solid ${mono.black}`,
          },
        },
        {
          props: { variant: "disabled" },
          style: {
            backgroundColor: mono.grey[1],
            color: mono.grey[3],
          },
        },
        {
          props: { disabled: true },
          style: {
            backgroundColor: mono.grey[1],
            color: mono.grey[3],
          },
        },
        {
          props: { size: "small" },
          style: ({ theme }) => ({
            ...theme.typography.title_xsmall,
            height: 40,
          }),
        },
        {
          props: { size: "large" },
          style: ({ theme }) => ({
            ...theme.typography.button,
            height: 56,
          }),
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "-webkit-fill-available",
          backgroundColor: mono.white,
          fontFamily: "Novera",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root.MuiOutlinedInput-root.Mui-disabled": {
            background: mono.grey[1],
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.body_small,
          display: "flex",
          alignItems: "center",
          transform: "translate(16px, 0) scale(1)",
          minHeight: 40,
          color: theme.palette.mono.grey[3],
          "&.Mui-focused": {
            color: theme.palette.mono.grey[3],
          },
          "&.Mui-error": {
            color: theme.palette.mono.grey[3],
          },
          "&.MuiInputLabel-shrink": {
            paddingTop: 6,
            alignItems: "start",
            transform: `translate(16px, 0) scale(${9 / 12})`,
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.caption,
          minHeight: 40,
          borderRadius: 8,
          position: "relative",
          padding: "4px 16px",
          "& fieldset": {
            position: "absolute",
            top: 0,
            legend: {
              display: "none",
            },
          },
          "&.Mui-error": {
            color: theme.palette.error.main,
          },
        }),
        input: {
          padding: "0",
          alignSelf: "flex-end",
        },
        multiline: {
          padding: "20px 16px",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.caption,
          margin: "6px 0 0",
        }),
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          top: "calc(50% - 1.2em)",
        },
        nativeInput: {
          height: "-webkit-fill-available",
        },
        select: {
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          padding: "0 0 4px 16px",
          display: "flex",
          alignItems: "flex-end",
          width: "-webkit-fill-available",
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          flexWrap: "wrap",
          gap: 16,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderColor: "transparent",
          backgroundColor: theme.palette.background.default,
          height: 40,
          padding: "0 16px",
          textTransform: "initial",

          "&.MuiToggleButtonGroup-grouped:not(:first-of-type)": {
            borderRadius: 8,
            margin: 0,
          },
          "&.MuiToggleButtonGroup-grouped:not(:last-of-type)": {
            borderRadius: 8,
            margin: 0,
          },

          "&.MuiToggleButtonGroup-grouped.Mui-selected": {
            border: `1px solid ${theme.palette.primary.main}`,
            backgroundColor: theme.palette.primary.light,
            fontWeight: 800,
          },

          "&.MuiToggleButtonGroup-grouped.Mui-selected+.MuiToggleButtonGroup-grouped.Mui-selected":
            {
              border: `1px solid ${theme.palette.primary.main}`,
            },
        }),
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.title_small,
          width: 400,
          height: 56,
          borderRadius: 8,
          fontFamily: "Novera",
          color: mono.black,
          boxShadow:
            "0px 8px 16px 0px rgba(0, 0, 0, 0.12), 0px 4px 6px 0px rgba(0, 0, 0, 0.05)",
        }),
      },
      variants: [
        {
          props: { severity: "success" },
          style: {
            backgroundColor: success.alert,
          },
        },
        {
          props: { severity: "error" },
          style: {
            backgroundColor: error.alert,
          },
        },
      ],
    },
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.mono.grey[1],
        }),
      },
    },
  },
});

export default theme;
