import { Dimensions } from "react-native";

const {width,height}=Dimensions.get("screen")

export default {
  COLORS: {
    DEFAULT: "#DCDCDC",
    PRIMARY: "#233545",
    LABEL: "#FE2472",
    INFO: "#00BCD4",
    ERROR: "#dd3751",
    SUCCESS: "#4CAF50",
    WARNING: "#FF9800",
    MUTED: "#979797",
    INPUT: "#f6f6f6",
    ACTIVE: "#9C26B0",
    BUTTON_COLOR: "#dd3751",
    PLACEHOLDER: "#9FA5AA",
    SWITCH_ON: "#9C26B0",
    SWITCH_OFF: "#D4D9DD",
    GRADIENT_START: "#6B24AA",
    GRADIENT_END: "#AC2688",
    PRICE_COLOR: "#EAD5FB",
    BORDER_COLOR: "#1c2b39",
    BLOCK: "#E7E7E7",
    ICON: "#4A4A4A",
    HEADING: "#444444",
    PARAGRAPH: "#777777",
    BACKGROUND: "#24313e",
    GRAY: "#f9f9f9",
  },
  SIZES: {
    BLOCK_SHADOW_RADIUS: 2,
    BASE: 16,
  },
  CARD: {
    CARD_BORDER_RADIUS: 16 * 0.4,
    CARD_BORDER_WIDTH: 16 * 0.05,
    CARD_WIDTH: width - 16 * 2,
    CARD_MARGIN_VERTICAL: 16 * 0.875,
    CARD_FOOTER_HORIZONTAL: 16 * 0.75,
    CARD_FOOTER_VERTICAL: 16 * 0.75,
    CARD_AVATAR_WIDTH: 16 * 2.5,
    CARD_AVATAR_HEIGHT: 16 * 2.5,
    CARD_AVATAR_RADIUS: 16 * 1.25,
    CARD_IMAGE_HEIGHT: 16 * 12.5,
    CARD_ROUND: 16 * 0.1875,
    CARD_ROUNDED: 16 * 0.5,
  },
  INPUT: {
    INPUT_BORDER_RADIUS: 16 * 0.5,
    INPUT_BORDER_WIDTH: 16 * 0.05,
    INPUT_HEIGHT: 16 * 2.75,
    INPUT_HORIZONTAL: 16,
    INPUT_TEXT: 16 * 0.875,
    INPUT_LABEL_TEXT: 16 * 0.9,
    INPUT_LABEL_BOTTOM: 16 / 4,
    INPUT_HELP_TEXT: 16 * 0.8,
    INPUT_ROUNDED: 16 * 1.7,
  },
};