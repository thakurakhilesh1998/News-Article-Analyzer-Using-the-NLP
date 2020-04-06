import { checkForName } from '../client/js/formHandler'
describe('Test, the function "checkForName()" should exist' , () => {
    test('It should return true', async () => {
        expect(checkForName).toBeDefined();
    });
});
describe('Test, the function "checkForName()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof checkForName).toBe("function");
    });
});