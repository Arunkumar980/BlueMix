const { test, expect } = require("@playwright/test");

test("Handling Tab", async ({ context }) => {
  const page = await context.newPage();

  await page.goto("https://www.flipkart.com/");

  const searchBox = page.locator(".lNPl8b");
  await searchBox.pressSequentially("iphone");
  await searchBox.press("Enter");

    const pagePromise= context.waitForEvent("page")
  await page.getByText("Apple iPhone 16 (Black, 128 GB)").click();


  const newPage=await pagePromise;


  const text=await newPage.locator(".LMizgS").textContent();
  console.log(text);
  
  await newPage.waitForTimeout(5000);
});
