"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var UserProfileComponent = (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent = __decorate([
        component({
            selector: 'user-profile',
            template: "\t\t\t\n\t\t\t\t<div class=\"jumbotron\" *ngIf=\"activeUser\">\n\t\t\t\t\t<h1 class=\"padding-left-30-px\">{{activeUser.name}}<small> {{activeUser.userName}} </small></h1>\n\t\t\t\t\t<input class=\"form-control padding-left-30-px\" [(ngModel)]=\"activeUser.name\" />\n\t\t\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile-component.js.map