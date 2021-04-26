describe('Test factory ratings', function () {
    var myService;

    beforeEach(module('ghg_city'));

    beforeEach(inject(function ($injector) {
        myService = $injector.get('ratings');
    }));

    it("Test factory ratings : ", function () {
        expect(myService.get(0.00).grade).toBe('A+');
    });
    it("Test factory ratings : ", function () {
        expect(myService.get(0.70).grade).toBe('A+');
    });
    it("Test factory ratings : ", function () {
        expect(myService.get(0.71).grade).toBe('A');
    });
    it("Test factory ratings : ", function () {
        expect(myService.get(0.90).grade).toBe('A');
    });
    it("Test factory ratings : ", function () {
        expect(myService.get(0.91).grade).toBe('B');
    });
    it("Test factory ratings : ", function () {
        expect(myService.get(0.99).grade).toBe('B');
    });
    it("Test factory ratings : ", function () {
        expect(myService.get(1.00).grade).toBe('C');
    });
    it("Test factory ratings : ", function () {
        expect(myService.get(1.20).grade).toBe('C');
    });
    it("Test factory ratings : ", function () {
        expect(myService.get(1.21).grade).toBe('D');
    });
    it("Test factory ratings : ", function () {
        expect(myService.get(1.60).grade).toBe('D');
    });
    it("Test factory ratings : ", function () {
        expect(myService.get(1.61).grade).toBe('E');
    });
    it("Test factory ratings : ", function () {
        expect(myService.get(1.99).grade).toBe('E');
    });
    it("Test factory ratings : ", function () {
        expect(myService.get(2.00).grade).toBe('F');
    });
    it("Test factory ratings : ", function () {
        expect(myService.get(3.00).grade).toBe('F');
    });
});