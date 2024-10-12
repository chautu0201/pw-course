import { test } from "@playwright/test";
test("BT3", async ({ page }) => {
    await test.step("Go to the URL", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step("Click on Bài học 3: Todo page", async () => {
        await page.locator("//a[@href='03-xpath-todo-list.html']").click();
    });
    await test.step("Insert 100 todo item have content: Todo<i>", async () => {
        for (let i = 0; i <= 100; i++) {
            await page.locator("input#new-task").fill(`Todo ${i}`);
            await page.locator("button#add-task").click();
            //await page.waitForSelector(`//ul[@id="task-list"]/li/span[contains(text(), "Todo ${i}")]`);
        }
    });
    await test.step("Delete todo with odd number", async () => {
        page.on("dialog", (dialog) => dialog.accept());
        let todoText = [];
        const todoItems = await page.locator("ul#task-list li span").all();
        for (const item of todoItems) {
                todoText.push(item);
        }
        for (let i = 0; i < todoText.length; i++) {
            if (i % 2 === 1) {
                await page.locator(`button#todo-${i}-delete`).click();
            }
        }
    });
});
