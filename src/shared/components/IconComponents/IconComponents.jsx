import { styled } from "@mui/material/styles";
import theme from "../../../theme/theme";

import {
  RiTwitterLine,
  RiLinkedinLine,
  RiFacebookLine,
  RiGithubLine,
  RiMailLine,
  RiPhoneLine,
  RiHomeLine,
  RiUserLine,
  RiProjectorLine,
  RiContactsLine,
  RiArrowUpSLine,
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "remixicon-react";

const iconStyle = {
  color: theme.palette.secondary.main,
  fontSize: "24px",
  marginRight: "8px",
};

export const TwitterIcon = styled(RiTwitterLine)(iconStyle);
export const LinkedInIcon = styled(RiLinkedinLine)(iconStyle);
export const FacebookIcon = styled(RiFacebookLine)(iconStyle);
export const GithubIcon = styled(RiGithubLine)(iconStyle);
export const MailIcon = styled(RiMailLine)(iconStyle);
export const PhoneIcon = styled(RiPhoneLine)(iconStyle);
export const HomeIcon = styled(RiHomeLine)(iconStyle);
export const UserIcon = styled(RiUserLine)(iconStyle);
export const ProjectorIcon = styled(RiProjectorLine)(iconStyle);
export const ContactsIcon = styled(RiContactsLine)(iconStyle);
export const UpIcon = styled(RiArrowUpSLine)(iconStyle);
export const DownIcon = styled(RiArrowDownSLine)(iconStyle);
export const LeftIcon = styled(RiArrowLeftSLine)(iconStyle);
export const RightIcon = styled(RiArrowRightSLine)(iconStyle);
