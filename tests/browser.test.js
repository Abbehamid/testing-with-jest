const { Builder, By } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replaceAll(/ /g, '%20').replaceAll(/\\/g, '/') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver;

jest.setTimeout(1000 * 60 * 5); // 5 minuter

beforeAll(async () => {
    console.log(fileUnderTest);
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

afterAll(async () => {
    await driver.quit();
}, defaultTimeout);

test('The stack should be empty in the beginning', async () => {
    let stack = await driver.findElement(By.id('top_of_stack')).getText();
    expect(stack).toEqual("n/a");
});

describe('Clicking "Pusha till stacken"', () => {
    it('should push to the stack and display it', async () => {
        let input = await driver.findElement(By.id('stack_input'));
        await input.sendKeys("Bananer");

        let push = await driver.findElement(By.id('push'));
        await push.click();

        let display = await driver.findElement(By.id('top_of_stack')).getText();
        expect(display).toEqual("Bananer");
    });
});
test('peek shows "n/a" if stack is empty', async () => {
    let peek = await driver.findElement(By.id('peek'));
    await peek.click();

    let display = await driver.findElement(By.id('top_of_stack')).getText();
    expect(display).toBe("n/a");
});
