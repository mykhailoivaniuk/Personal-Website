import { IconButton,useColorMode,useColorModeValue } from "@chakra-ui/react";
import { SunIcon,MoonIcon } from "@chakra-ui/icons";
import { AnimatePresence,motion } from "framer-motion";

const ThemeButton = () => {
  const {toggleColorMode} = useColorMode();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div style={{display: 'inline-block'}}
                  key={useColorModeValue('light','dark')}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{duration: 0.2 }}>
        <IconButton aria-label="Toggle Theme" 
                    colorScheme={useColorModeValue('purple','orange')} 
                    onClick={toggleColorMode}
                    icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)}>
        </IconButton>
      </motion.div>
    </AnimatePresence>
  )

}

export default ThemeButton;
