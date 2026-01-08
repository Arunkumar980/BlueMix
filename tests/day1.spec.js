import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://letcode.in/alert");

  await page.locator("#confirm").click();
  

  await page.waitForTimeout(3000)
 
   page.on('dialog', dialog => dialog.accept())
   ;

  await page.waitForTimeout(5000)


 
 
  
});
test("method 4",()=>{
console.log("Method 4");

})
test("method 5",()=>{
console.log("Method 5");

})