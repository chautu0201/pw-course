import { test } from "@playwright/test";
test("BT4", async ({ page }) => {
    await test.step("Go to the URL", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step("Click on Bài học 2: Product page", async () => {
        await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
    });
    await test.step("get item from aliexpress", async () => {
       
    });
});
