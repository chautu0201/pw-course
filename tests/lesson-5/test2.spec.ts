import { test } from "@playwright/test";
test("BT2", async ({ page }) => {
    await test.step("Go to the URL", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step("Click on Bài học 2: Product page", async () => {
        await page.locator("//a[@href='02-xpath-product-page.html']").click();
    });
    await test.step("Insert product on the cart", async () => {
        await page
            .locator('//div[@class="products"]/div[1]/div/button')
            .dblclick();
        await page
            .locator('//div[@class="products"]/div[2]/div/button')
            .click({ clickCount: 3 });
        await page
            .locator('//div[@class="products"]/div[3]/div/button')
            .click();
    });
});
