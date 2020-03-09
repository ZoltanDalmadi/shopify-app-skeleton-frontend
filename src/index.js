import React from "react";
import ReactDOM from "react-dom";
import "@shopify/polaris/styles.css";
// import "./index.css";
// import App from "./App";
import { AppProvider, Card } from "@shopify/polaris";

// If the current window is the 'parent', change the URL by setting location.href
// if (window.top === window.self) {
//   window.location.assign(`https://${shopOrigin}/admin/apps/${permissionUrl}`);

// If the current window is the 'child', change the parent's URL with Shopify App Bridge's Redirect action
// } else {
//   const app = createApp({
//     apiKey,
//     shopOrigin: "tutorial-mark.myshopify.com"
//   });

//   Redirect.create(app).dispatch(
//     Redirect.Action.ADMIN_PATH,
//     permissionUrl
//   );
function MyApp() {
  return (
    <AppProvider>
      <Card title="Online store dashboard" sectioned>
        <p>View a summary of your online store’s performance.</p>
      </Card>
    </AppProvider>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
// }

// ReactDOM.render(<App />, document.getElementById('root'));
