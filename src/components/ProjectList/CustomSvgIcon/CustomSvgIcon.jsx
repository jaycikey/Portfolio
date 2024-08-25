import { SvgIcon } from '@mui/material';
import TechnologiesLogos from '../Technologies.svg';

const CustomSvgIcon = ({ iconId, ...props }) => {
  return (
    <SvgIcon {...props}>
      <use xlinkHref={`${TechnologiesLogos}#${iconId}`} />
    </SvgIcon>
  );
};

export default CustomSvgIcon;
