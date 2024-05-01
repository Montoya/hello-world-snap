import type { OnHomePageHandler, OnUserInputHandler } from '@metamask/snaps-sdk';
import { panel, text, spinner, button, form, input } from '@metamask/snaps-sdk';

/**
 * Handle incoming JSON-RPC requests, sent through `wallet_invokeSnap`.
 *
 * @param args - The request handler args as object.
 * @param args.origin - The origin of the request, e.g., the website that
 * invoked the snap.
 * @param args.request - A validated JSON-RPC request object.
 * @returns The result of `snap_dialog`.
 * @throws If the request method is not valid for this snap.
 */
export const onHomePage: OnHomePageHandler = async () => {
  // we create an interface 
  const interfaceId = await snap.request({
    method: "snap_createInterface",
    params: {
      ui: panel([
        spinner()
      ])
    },
  });
  snap.request({
    method: "snap_updateInterface",
    params: {
      id: interfaceId,
      ui: panel([
        button({ 
          value: "Say hello",
          name: `btn-${interfaceId}`,
        }),
      ]),
    },
  });
  return { 
    id: interfaceId
  }
};

export const onUserInput: OnUserInputHandler = async ({id, event}) => { 
  const interfaceId = id.replace('btn-',''); 
  await snap.request({
    method: "snap_updateInterface", 
    params: { 
      id: interfaceId,
      ui: panel([
        text("Hello, world!"),
      ]),
    },
  }); 
}; 
