"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var brewdogser_service_1 = require("./brewdogser.service");
describe('BrewdogserService', function () {
    var service;
    var http;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(brewdogser_service_1.BrewdogserService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
    it('should fetch beerList ', function () {
        var service = new brewdogser_service_1.BrewdogserService(http);
        ;
        service.getBeerList();
        expect(service.getBeerList).toBeTruthy();
    });
});
//# sourceMappingURL=brewdogser.service.spec.js.map