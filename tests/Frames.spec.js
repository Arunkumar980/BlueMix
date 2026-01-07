const {expect,test}=require('@playwright/test')


test("Handling Frames",async({page})=>{

await page.goto('https://ui.vision/demo/webtest/frames/')

const frame1= page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})

await frame1.locator("//input[@name='mytext1']").fill('Hello Arun');

const text=await frame1.getByText("Frame Test Page").textContent();
console.log(text);




})