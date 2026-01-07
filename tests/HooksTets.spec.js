const { test, expect } = require("@playwright/test");

test("Alerts", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.on("dialog", (dialog) => {
   
      if (dialog.type() === "alert") {
        console.log(dialog.message());
        
        dialog.accept();
      }else if (dialog.type() === "confirm") {
        console.log(dialog.message());

        dialog.accept();
      }else{
        console.log(dialog.message());

        dialog.accept();
      }


   
    
  });

  await page.getByText("Click for JS Alert").click();

  await page.getByText("Click for JS Confirm").click();
   await page.getByText("Click for JS Prompt").click();
});
