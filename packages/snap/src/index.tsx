import type { OnHomePageHandler, OnUserInputHandler } from '@metamask/snaps-sdk';
import { Box, Text, Button } from '@metamask/snaps-sdk/jsx'; 

export const onHomePage: OnHomePageHandler = async () => {
  // we create an interactive interface 
  const interfaceId = await snap.request({
    method: "snap_createInterface",
    params: {
      ui: (
        <Box>
          <Button name="btn">Say hello</Button>
        </Box>
      )
    },
  }); 
  return { 
    id: interfaceId
  }
};

// there is only one user input handler to respond to, the button from the created interface 
// otherwise we would need a switch to handle multiple cases
export const onUserInput: OnUserInputHandler = async ({id, event}) => { 
  await snap.request({
    method: "snap_updateInterface", 
    params: { 
      id,
      ui: (
        <Box>
          <Text>Hello, world!</Text>
        </Box>
      )
    },
  }); 
}; 
