import "@mui/material/styles";
import "@mui/material/Typography";
import { AlertColor, TypographyPropsVariantOverrides } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import type { OverridableStringUnion } from "@mui/types";
import React from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    title_xxlarge: React.CSSProperties;
    title_xlarge: React.CSSProperties;
    title_large: React.CSSProperties;
    title_medium: React.CSSProperties;
    title_small: React.CSSProperties;
    title_xsmall: React.CSSProperties;
    subtitle: React.CSSProperties;
    subtitle_small: React.CSSProperties;
    body_large: React.CSSProperties;
    body_small: React.CSSProperties;
    button: React.CSSProperties;
    caption: React.CSSProperties;
    caption_2: React.CSSProperties;
    textbox_default: React.CSSProperties;
    textbox_bold: React.CSSProperties;
    navbar_active: React.CSSProperties;
    navbar_inactive: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    title_xxlarge?: React.CSSProperties;
    title_xlarge?: React.CSSProperties;
    title_large?: React.CSSProperties;
    title_medium?: React.CSSProperties;
    title_small?: React.CSSProperties;
    title_xsmall?: React.CSSProperties;
    subtitle?: React.CSSProperties;
    subtitle_small?: React.CSSProperties;
    body_large?: React.CSSProperties;
    body_small?: React.CSSProperties;
    button?: React.CSSProperties;
    caption: React.CSSProperties;
    caption_2?: React.CSSProperties;
    textbox_default?: React.CSSProperties;
    textbox_bold?: React.CSSProperties;
    navbar_active?: React.CSSProperties;
    navbar_inactive?: React.CSSProperties;
  }

  interface Palette {
    omne: PaletteColor;
    mono: {
      white: string;
      black: string;
      grey: { [key: number]: string };
      light: {
        grey: string;
      };
    };
    supportive: {
      plum: string;
      blue: string;
      green: string;
      lime: string;
      light: {
        plum: string;
        blue: string;
      };
    };
  }

  interface PaletteOptions {
    mono: {
      white: string;
      black: string;
      grey: { [key: number]: string };
      light: {
        grey: string;
      };
    };
    supportive: {
      plum: string;
      blue: string;
      green: string;
      lime: string;
      light: {
        plum: string;
        blue: string;
      };
    };
    omne: {
      orange: {
        mid: string;
      };
    };
  }

  interface PaletteColor {
    [key: string]: string;
  }

  interface SimplePaletteColorOptions {
    [key: string]: string;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title_xxlarge: true;
    title_xlarge: true;
    title_large: true;
    title_medium: true;
    title_small: true;
    title_xsmall: true;
    subtitle: true;
    subtitle_small: true;
    body_large: true;
    body_small: true;
    caption_2: true;
    textbox_default: true;
    textbox_bold: true;
    navbar_active: true;
    navbar_inactive: true;
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;
    overline: false;
  }
}

export type TypographyVariantOverrides = OverridableStringUnion<
  Variant,
  TypographyPropsVariantOverrides
>;

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    draft: true;
    pendingApproval: true;
    approved: true;
    rejected: true;
    active: true;
    deactivated: true;
    complete: true;
    deleted: true;
    transferapproved: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    disabled: true;
  }
}

declare module "notistack" {
  interface VariantOverrides {
    customToast: {
      alertType: AlertColor;
    };
  }
}
