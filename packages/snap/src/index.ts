import type { OnHomePageHandler } from '@metamask/snaps-sdk';
import { panel, text, button, form, input } from '@metamask/snaps-sdk';

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
  return { 
    content: panel([
      text("Hello, world!"),
      button({ 
        value: "Click Me",
        name: "Interactive Button"
      }),
      input({
        name: "Interactive Input",
        label: "Fill Me"
      }),
      form({
        name: "form-to-fill",
        children: [
          input({
            name: "user-name",
            placeholder: "Your name",
          }),
          button({
            value: "Submit",
            buttonType: "submit",
          }),
        ]
      }),
    ]),
  }; 
};
