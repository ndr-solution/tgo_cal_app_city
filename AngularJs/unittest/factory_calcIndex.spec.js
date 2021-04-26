describe('Test factory calcIndex', function () {
    var myService;

    beforeEach(module('ghg_city'));

    beforeEach(inject(function ($injector) {
        myService = $injector.get('calcIndex');
    }));

    it("Test factory calcIndex : ", function () {
        expect(myService.result(10, 30)).toBeCloseTo(0.33);
    });
});