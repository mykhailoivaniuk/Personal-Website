import { IconButton,useColorMode,useColorModeValue } from "@chakra-ui/react";
import { SunIcon,MoonIcon } from "@chakra-ui/icons";

const ThemeButton = () => {
  const {toggleColorMode} = useColorMode();
  return (
    <IconButton aria-label="Toggle Theme" 
                colorScheme={useColorModeValue('purple','orange')} 
                onClick={toggleColorMode}
                icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)}>
    </IconButton>
  )

}

export default ThemeButton;
