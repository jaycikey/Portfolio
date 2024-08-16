import { Box } from "@mui/material";
import backgroundImage from "../shared/assets/background.svg";
import { useSelector } from "react-redux";
import useBreakpoint from "../hooks/useBreakpoint";


const BgImg = () => {
    const brandWidth = useSelector((state) => state.width.brandWidth);
    const isXs = useBreakpoint('md');


    const backgroundStyles = {
        ml: isXs ? 0 : `${brandWidth + 150}px`,
        position: "absolute",
        height: isXs ? "100vw" : "742px",
        width: isXs ? "100vw" : "780px",
        background: `url(${backgroundImage}) no-repeat right center`,
        backgroundSize: "cover",
    };

    return <Box sx={backgroundStyles}></Box>
}

export default BgImg;