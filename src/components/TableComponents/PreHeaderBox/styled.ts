import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const PreHeaderBoxWrapper = styled(Box)`
  padding: 37px 32px;
  display: flex;
  justify-content: space-between;
`;

export const SortAndFilterBox = styled(Box)`
  display: flex;
  gap: 31px;
`;

export const SortAndFilterItem = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const SortAndFilterItemText = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.2px;
`;

export const AddContactText = styled(Typography)`
  color: #3751ff;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.2px;
  cursor: pointer;
`;

export const UserPhoto = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
`;
