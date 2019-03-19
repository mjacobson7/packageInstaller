

// test('Test 1', () => {
//     expect(installer(['KittenService: CamelCaser', 'CamelCaser: '])).toBe('CamelCaser, KittenService');
// })

// test('Test 2', () => {
//     expect(installer(['KittenService: ', 'Leetmeme: Cyberportal', 'Cyberportal: Ice', 'CamelCaser: KittenService', 'Fraudstream: Leetmeme', 'Ice: '])).toBe('KittenService, Ice, Cyberportal, Leetmeme, CamelCaser, Fraudstream');
// })


describe("Package Installer Tests", () => {
    beforeEach(() => {
        jest.resetModules();
    });

    it("Test Valid Input", () => {
        const installer = require('./installer');
        expect(installer(['KittenService: CamelCaser', 'CamelCaser: '])).toBe('CamelCaser, KittenService');
    });

    it("Test Valid Input", () => {
        const installer = require('./installer');
        expect(installer(['KittenService: ', 'Leetmeme: Cyberportal', 'Cyberportal: Ice', 'CamelCaser: KittenService', 'Fraudstream: Leetmeme', 'Ice: '])).toBe('KittenService, Ice, Cyberportal, Leetmeme, CamelCaser, Fraudstream');
    });

    it("Test Invalid Input", () => {
        const installer = require('./installer');
        expect(() => { installer(['KittenService: ', 'Leetmeme: Cyberportal', 'Cyberportal: Ice', 'CamelCaser: KittenService', 'Fraudstream: ', 'Ice: Leetmeme']) }).toThrow(Error);
    });

});