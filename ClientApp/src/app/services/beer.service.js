"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeerService = void 0;
var app_config_1 = require("../app.config");
var BeerService = /** @class */ (function () {
    function BeerService(http) {
        this.http = http;
    }
    BeerService.prototype.getBeers = function () {
        return this.http.get(app_config_1.urlConfig.beerApiUrl);
    };
    return BeerService;
}());
exports.BeerService = BeerService;
//# sourceMappingURL=beer.service.js.map