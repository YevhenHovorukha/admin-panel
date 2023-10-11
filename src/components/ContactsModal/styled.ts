import { Typography, Select, Modal } from "@mui/material";
import Box from "@mui/material/Box";
import styled from "styled-components";

import { THEME } from "../../theme";

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

export const ModalBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 40px 32px;
  width: 380px;
  min-height: 606px;
  background: ${THEME.COLORS.WHITE};
`;

export const MainModalText = styled(Typography)`
  align-self: center;
  font-size: ${THEME.SIZES.FONT.BIG};
  font-weight: ${THEME.FONTS.WEIGHT.W700};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS03};
`;

export const CancelText = styled(Typography)`
  margin-top: ${THEME.SIZES.MARGIN.M32};
  color: ${THEME.COLORS.MAIN_BLUE};
  text-align: center;
  font-size: ${THEME.SIZES.FONT.MEDIUM};
  font-weight: ${THEME.FONTS.WEIGHT.W600};
  line-height: ${THEME.SIZES.LINE_HEIGHT.LH20};
  letter-spacing: ${THEME.SIZES.LETTER_SPACING.LS02};
  cursor: pointer;
`;

export const StyledSelect = styled(Select)`
  color: ${THEME.COLORS.GRAY};
  padding: 0;
  margin-top: 6px;
  height: 42px;
  width: 100%;
`;
