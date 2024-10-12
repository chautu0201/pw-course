import path from "path";
import { test } from "@playwright/test";
test("BT1", async ({ page }) => {
    await test.step("Go to the URL", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step("Click on Bài học 1: Register Page", async () => {
        await page.locator("//a[@href='01-xpath-register-page.html']").click();
    });
    await test.step("Input full information", async () => {
        //input username
        await page.locator('//input[@id="username"]').fill("Chau Tu");
        //input email
        await page.locator('//input[@id="email"]').fill("chautu@gmail.com");
        //check gender
        await page.locator('//input[@id="female"]').check();
        //choose hobbies
        const ischeck = ["#reading", "#traveling", "#cooking"];
        for (const checkbox of ischeck) {
            await page.locator(checkbox).check();
        }
        //select interests
        await page.selectOption("select#interests", "science");
        //select country
        await page.selectOption("select#country", "uk");
        //input date of birth
        const dateInput = "2024-10-20";
        await page.locator('//input[@id="dob"]').click();
        await page.locator('//input[@id="dob"]').fill(dateInput);
        //upload file
        const filePath = path.join("D:/COURSE_PLAYWRIGHT_TEST/PW_COURSE/data/test-upload-image.jpg");
        await page.setInputFiles('//input[@id="profile"]', filePath);
        //input bio
        await page.locator("textarea#bio").fill("Không có tiểu sử");
        //check new letter
        await page.locator("input#newsletter").check();
        //enable feature
        await page.waitForTimeout(3000);
        await page.locator('//label[@class="switch"]/span').click();
    });
    await test.step("Click Register button", async () => {
        await page.locator('//button[contains(text(), "Register")]').click();
    });
    await test.step("Scroll page to check the data register", async () => {
        await page.evaluate(() => {
            window.scrollBy(0, 400);
        });
    });
});
