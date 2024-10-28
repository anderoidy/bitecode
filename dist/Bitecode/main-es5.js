(function () {
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/anderson/Documents/Projetos/bitecode-app/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1LmZ":
    /*!**********************************************!*\
      !*** ./src/app/pages/home/home.component.ts ***!
      \**********************************************/

    /*! exports provided: HomeComponent */

    /***/
    function LmZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        return _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 30,
        vars: 0,
        consts: [[1, "home-container"], [1, "hero"], [1, "hero-title"], [1, "hero-text"], ["mat-raised-button", "", "color", "primary", 1, "hero-button"], [1, "services"], [1, "section-title"], [1, "service-cards"], [1, "service-card"], [1, "footer"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Solu\xE7\xF5es Inteligentes para Web");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Desenvolvemos sistemas web modernos e escal\xE1veis para transformar ideias em realidade. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Saiba Mais");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nossos Servi\xE7os");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Desenvolvimento Web");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Criamos sistemas modernos com Angular e .NET.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Consultoria em TI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Auxiliamos empresas na gest\xE3o e transforma\xE7\xE3o digital.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Integra\xE7\xE3o de APIs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Conectamos sistemas com solu\xE7\xF5es personalizadas.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "footer", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\xA9 2024 Bitecode. Todos os direitos reservados.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"]],
        styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-family: \"Arial\", sans-serif;\n  background-color: #f5f5f5;\n}\n\n.home-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n}\n\n.hero[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 40px 0;\n  padding: 20px;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 10px;\n}\n\n.hero-text[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 20px;\n}\n\n.hero-button[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  padding: 10px 20px;\n}\n\n.services[_ngcontent-%COMP%] {\n  padding: 20px;\n  width: 80%;\n  max-width: 1200px;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.service-cards[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  gap: 15px;\n  flex-wrap: wrap;\n}\n\n.service-card[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: white;\n  text-align: center;\n  padding: 10px 0;\n  margin-top: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFESjs7QUFJRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlFO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFESjs7QUFJRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUFESjs7QUFJRTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREoiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIH1cbiAgXG4gIC5ob21lLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cbiAgXG5cbiAgXG4gIC5oZXJvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA0MHB4IDA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLmhlcm8tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIC5oZXJvLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIC5oZXJvLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgfVxuICBcbiAgLnNlcnZpY2VzIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIH1cbiAgXG4gIC5zZWN0aW9uLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgLnNlcnZpY2UtY2FyZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZ2FwOiAxNXB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICBcbiAgLnNlcnZpY2UtY2FyZCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIFxuICAuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gIH1cbiAgIl19 */"]
      });
      /***/
    },

    /***/
    "320Y":
    /*!***************************************************!*\
      !*** ./src/app/shared/header/header.component.ts ***!
      \***************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HeaderComponent_mat_drawer_container_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_mat_drawer_container_21_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r1.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Fechar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Servi\xE7os");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Portf\xF3lio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sobre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contato");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);

          this.drawerOpened = false;
        }

        return _createClass(HeaderComponent, [{
          key: "toggleDrawer",
          value: function toggleDrawer() {
            this.drawerOpened = !this.drawerOpened;
          }
        }]);
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 22,
        vars: 1,
        consts: [["color", "primary", 1, "header-toolbar"], [1, "header"], [1, "logo"], ["src", "assets/logoredondo.jpeg", "alt", "Bitecode", 1, "logo-image"], [1, "title"], [1, "spacer"], [1, "menu"], ["mat-button", "", "routerLink", "/"], ["mat-button", "", "routerLink", "/services"], ["mat-button", "", "routerLink", "/portfolio"], ["mat-button", "", "routerLink", "/sobre"], ["mat-button", "", "routerLink", "/contato"], ["mat-icon-button", "", 1, "mobile-menu-icon", 3, "click"], ["class", "drawer-container", 4, "ngIf"], [1, "drawer-container"], ["mode", "over", "opened", "true", 1, "drawer"], ["drawer", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "routerLink", "/about"], ["mat-button", "", "routerLink", "/contact"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bitecode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Servi\xE7os");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Portf\xF3lio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sobre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contato");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_18_listener() {
              return ctx.toggleDrawer();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HeaderComponent_mat_drawer_container_21_Template, 15, 0, "mat-drawer-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.drawerOpened);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: ["@charset \"UTF-8\";\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  \n  gap: 15px;\n  \n  padding: 10px;\n  \n}\n.logo-image[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 3px;\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  \n}\n.title[_ngcontent-%COMP%] {\n  margin: 0;\n  \n  font-size: 2rem;\n  \n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6d9fe6;\n  margin: 0 8px;\n}\n.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mobile-menu-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobile-menu-icon[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\n.drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.drawer-container[_ngcontent-%COMP%]   .drawer[_ngcontent-%COMP%] {\n  width: 250px;\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFBcUIsNkJBQUE7RUFDckIsU0FBQTtFQUFXLCtCQUFBO0VBQ1gsYUFBQTtFQUFlLHlCQUFBO0FBS2pCO0FBRkE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFBb0IsbUJBQUE7QUFNdEI7QUFIQTtFQUNFLFNBQUE7RUFBVyxnQ0FBQTtFQUNYLGVBQUE7RUFBaUIsOEJBQUE7QUFRbkI7QUFMRTtFQUNFLE9BQUE7QUFRSjtBQUxFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBUUo7QUFQSTtFQUNFLDBDQUFBO0FBU047QUFMRTtFQUNFLGFBQUE7QUFRSjtBQUxFO0VBQ0U7SUFDRSxhQUFBO0VBUUo7O0VBTkU7SUFDRSxxQkFBQTtFQVNKO0FBQ0Y7QUFQQTtFQUNFLFlBQUE7QUFTRjtBQVJFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FBVUoiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRyYWxpemEgdmVydGljYWxtZW50ZSAqL1xuICBnYXA6IDE1cHg7IC8qIEVzcGHDp28gZW50cmUgbG9nbyBlIHTDrXR1bG8gKi9cbiAgcGFkZGluZzogMTBweDsgLyogRXNwYcOnbyBpbnRlcm5vIGdlcmFsICovXG59XG5cbi5sb2dvLWltYWdlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlOyAvKiBJbWFnZW0gcmVkb25kYSAqL1xufVxuXG4udGl0bGUge1xuICBtYXJnaW46IDA7IC8qIFJlbW92ZSBtYXJnZW5zIHBhZHLDo28gZG8gaDEgKi9cbiAgZm9udC1zaXplOiAycmVtOyAvKiBBanVzdGEgbyB0YW1hbmhvIGRvIHRleHRvICovXG59XG5cbiAgLnNwYWNlciB7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIC5tZW51IGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiByZ2IoMTA5LCAxNTksIDIzMCk7XG4gICAgbWFyZ2luOiAwIDhweDtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICB9XG4gIH1cblxuICAubW9iaWxlLW1lbnUtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5tZW51IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5tb2JpbGUtbWVudS1pY29uIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG59XG4uZHJhd2VyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgLmRyYXdlciB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIH1cbn1cblxuICAiXX0= */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "JdIS":
    /*!****************************************************!*\
      !*** ./src/app/pages/contato/contato.component.ts ***!
      \****************************************************/

    /*! exports provided: ContatoComponent */

    /***/
    function JdIS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContatoComponent", function () {
        return ContatoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ContatoComponent = /*#__PURE__*/function () {
        function ContatoComponent() {
          _classCallCheck(this, ContatoComponent);
        }

        return _createClass(ContatoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      ContatoComponent.ɵfac = function ContatoComponent_Factory(t) {
        return new (t || ContatoComponent)();
      };

      ContatoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContatoComponent,
        selectors: [["app-contato"]],
        decls: 13,
        vars: 0,
        consts: [[1, "contato"], ["href", "mailto:ander.sistemasweb@gmail.com"], ["href", "tel:+5515997508466"]],
        template: function ContatoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Entre em Contato");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " ander.sistemasweb@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Telefone: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 15 99750-8466");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".contato[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 20px;\n}\n.contato[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.contato[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 20px 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n.contato[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n}\n.contato[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbnRhdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0UsbUJBQUE7QUFDTjtBQUVJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQU47QUFJSTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUZOO0FBSU07RUFDRSwwQkFBQTtBQUZSIiwiZmlsZSI6ImNvbnRhdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGF0byB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweDtcblxuICAgIGgyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICBcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbiAgICB9XG4gIFxuICAgIGEge1xuICAgICAgY29sb3I6ICMwMDdiZmY7IC8vIENvciBkbyBsaW5rXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvLyBFZmVpdG8gYW8gcGFzc2FyIG8gbW91c2VcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgIl19 */"]
      });
      /***/
    },

    /***/
    "PkOs":
    /*!******************************************************!*\
      !*** ./src/app/pages/servicos/servicos.component.ts ***!
      \******************************************************/

    /*! exports provided: ServicosComponent */

    /***/
    function PkOs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicosComponent", function () {
        return ServicosComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ServicosComponent = /*#__PURE__*/function () {
        function ServicosComponent() {
          _classCallCheck(this, ServicosComponent);
        }

        return _createClass(ServicosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      ServicosComponent.ɵfac = function ServicosComponent_Factory(t) {
        return new (t || ServicosComponent)();
      };

      ServicosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ServicosComponent,
        selectors: [["app-servicos"]],
        decls: 20,
        vars: 0,
        consts: [[1, "services"], [1, "service-list"], [1, "service-card"], ["src", "assets/imagem-servico1.jpg", "alt", "Servi\xE7o 1"], ["href", "#", 1, "btn"], ["src", "assets/imagem-servico2.jpg", "alt", "Servi\xE7o 2"]],
        template: function ServicosComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nossos Servi\xE7os");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Desenvolvimento Web");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cria\xE7\xE3o de sites responsivos e personalizados para sua empresa.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Saiba Mais");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Consultoria em TI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Assessoria especializada para otimizar a gest\xE3o de tecnologia.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Saiba Mais");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".services[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  background-color: #e9ecef;\n}\n.services[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n  font-family: \"Arial\", sans-serif;\n  color: #333;\n}\n.services[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.services[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 2px solid #007bff;\n  border-radius: 10px;\n  padding: 20px;\n  margin: 15px;\n  width: 280px;\n  text-align: center;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.services[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n}\n.services[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  border-radius: 10px;\n}\n.services[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 20px 0 15px;\n  color: #007bff;\n}\n.services[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #555;\n}\n.services[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 12px 18px;\n  background-color: #007bff;\n  color: white;\n  border-radius: 5px;\n  text-decoration: none;\n  transition: background-color 0.4s, transform 0.3s;\n}\n.services[_ngcontent-%COMP%]   .service-list[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n  transform: scale(1.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZpY29zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBQUNKO0FBQ0k7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FBQ047QUFFSTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFBTjtBQUVNO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDJDQUFBO0FBQVI7QUFFUTtFQUNFLDJCQUFBO0VBQ0EseUNBQUE7QUFBVjtBQUdRO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQURWO0FBSVE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFGVjtBQUtRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFIVjtBQU1RO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpREFBQTtBQUpWO0FBTVU7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0FBSloiLCJmaWxlIjoic2Vydmljb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VydmljZXMge1xuICAgIHBhZGRpbmc6IDQwcHggMjBweDsgLy8gTWFpcyBlc3Bhw6dhbWVudG9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmOyAvLyBGdW5kbyBkaWZlcmVudGUgcGFyYSBkZXN0YWNhclxuICBcbiAgICBoMiB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7IC8vIEZvbnRlIGRpZmVyZW50ZVxuICAgICAgY29sb3I6ICMzMzM7IC8vIENvciBkbyB0w610dWxvXG4gICAgfVxuICBcbiAgICAuc2VydmljZS1saXN0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgXG4gICAgICAuc2VydmljZS1jYXJkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwN2JmZjsgLy8gQm9yZGEgY29sb3JpZGFcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDsgLy8gQm9yZGFzIGFycmVkb25kYWRhc1xuICAgICAgICBwYWRkaW5nOiAyMHB4OyAvLyBNYWlzIGVzcGHDp2FtZW50byBpbnRlcm5vXG4gICAgICAgIG1hcmdpbjogMTVweDsgLy8gTWFpcyBlc3Bhw6dhbWVudG8gZW50cmUgY2FydMO1ZXNcbiAgICAgICAgd2lkdGg6IDI4MHB4OyAvLyBMYXJndXJhIG1haW9yXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBib3gtc2hhZG93IDAuM3M7IC8vIEVmZWl0byBkZSBob3ZlciBtYWlzIHN1YXZlXG4gIFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7IC8vIExldmUgZWxldmHDp8Ojb1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjMpOyAvLyBTb21icmFzIG1haXMgZm9ydGVzXG4gICAgICAgIH1cbiAgXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAvLyBCb3JkYXMgYXJyZWRvbmRhZGFzIHBhcmEgYSBpbWFnZW1cbiAgICAgICAgfVxuICBcbiAgICAgICAgaDMge1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwIDE1cHg7XG4gICAgICAgICAgY29sb3I6ICMwMDdiZmY7IC8vIENvciBkbyB0w610dWxvIGRvcyBzZXJ2acOnb3NcbiAgICAgICAgfVxuICBcbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4OyAvLyBUYW1hbmhvIG1haW9yIHBhcmEgYSBkZXNjcmnDp8Ojb1xuICAgICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICB9XG4gIFxuICAgICAgICAuYnRuIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAxOHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjRzLCB0cmFuc2Zvcm0gMC4zczsgLy8gRWZlaXRvIGRlIGhvdmVyXG4gIFxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IC8vIEF1bWVudGEgbyBib3TDo28gbm8gaG92ZXJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgIl19 */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/header/header.component */
      "320Y");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/footer/footer.component */
      "jQpT");

      var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Bitecode';
      });

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
          }
        },
        directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "WBBN":
    /*!********************************************************!*\
      !*** ./src/app/pages/portfolio/portfolio.component.ts ***!
      \********************************************************/

    /*! exports provided: PortfolioComponent */

    /***/
    function WBBN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
        return PortfolioComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var PortfolioComponent = /*#__PURE__*/function () {
        function PortfolioComponent() {
          _classCallCheck(this, PortfolioComponent);
        }

        return _createClass(PortfolioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
        return new (t || PortfolioComponent)();
      };

      PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PortfolioComponent,
        selectors: [["app-portfolio"]],
        decls: 36,
        vars: 0,
        consts: [[1, "portfolio-container"], [1, "portfolio-title"], [1, "portfolio-intro"], [1, "project-cards"], [1, "project-card"], ["href", "#", "target", "_blank", "mat-button", ""]],
        template: function PortfolioComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Portf\xF3lio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Aqui est\xE3o alguns projetos nos quais trabalhei. Eles mostram meu conhecimento em desenvolvimento web e a capacidade de criar solu\xE7\xF5es funcionais e escal\xE1veis. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Doe+");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Aplicativo Android para doa\xE7\xF5es de produtos. Feito com Java e Firebase.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ver Projeto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sistema de Invent\xE1rio RFID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Projeto desenvolvido como volunt\xE1rio no Parque Tecnol\xF3gico de Sorocaba.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "API REST em .NET");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Desenvolvi uma API completa utilizando ASP.NET Core para integra\xE7\xE3o de sistemas.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Ver C\xF3digo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sistema de Gest\xE3o Web");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Cria\xE7\xE3o de um sistema de gest\xE3o web utilizando Angular e SQL Server.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"]],
        styles: [".portfolio-container[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n}\n\n.portfolio-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 10px;\n}\n\n.portfolio-intro[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 30px;\n}\n\n.project-cards[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  flex-wrap: wrap;\n}\n\n.project-card[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUFDSiIsImZpbGUiOiJwb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9ydGZvbGlvLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5wb3J0Zm9saW8tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIC5wb3J0Zm9saW8taW50cm8ge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbiAgXG4gIC5wcm9qZWN0LWNhcmRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTVweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgXG4gIC5wcm9qZWN0LWNhcmQge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuICAiXX0= */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "1LmZ");
      /* harmony import */


      var _pages_sobre_sobre_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/sobre/sobre.component */
      "fB3g");
      /* harmony import */


      var _pages_servicos_servicos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/servicos/servicos.component */
      "PkOs");
      /* harmony import */


      var _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/portfolio/portfolio.component */
      "WBBN");
      /* harmony import */


      var _pages_contato_contato_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/contato/contato.component */
      "JdIS");
      /* harmony import */


      var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./shared/header/header.component */
      "320Y");
      /* harmony import */


      var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./shared/footer/footer.component */
      "jQpT");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _pages_sobre_sobre_component__WEBPACK_IMPORTED_MODULE_5__["SobreComponent"], _pages_servicos_servicos_component__WEBPACK_IMPORTED_MODULE_6__["ServicosComponent"], _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"], _pages_contato_contato_component__WEBPACK_IMPORTED_MODULE_8__["ContatoComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"]]
        });
      })();
      /***/

    },

    /***/
    "fB3g":
    /*!************************************************!*\
      !*** ./src/app/pages/sobre/sobre.component.ts ***!
      \************************************************/

    /*! exports provided: SobreComponent */

    /***/
    function fB3g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SobreComponent", function () {
        return SobreComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SobreComponent = /*#__PURE__*/function () {
        function SobreComponent() {
          _classCallCheck(this, SobreComponent);
        }

        return _createClass(SobreComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      SobreComponent.ɵfac = function SobreComponent_Factory(t) {
        return new (t || SobreComponent)();
      };

      SobreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SobreComponent,
        selectors: [["app-sobre"]],
        decls: 24,
        vars: 0,
        consts: [[1, "sobre"]],
        template: function SobreComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sobre a Bitecode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " A Bitecode \xE9 uma empresa dedicada ao desenvolvimento de solu\xE7\xF5es em software, focada em criar sistemas web inovadores e escal\xE1veis. Nossa miss\xE3o \xE9 ajudar empresas a alcan\xE7arem seus objetivos atrav\xE9s da tecnologia, oferecendo servi\xE7os de alta qualidade e suporte personalizado. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nossa Hist\xF3ria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Fundada por profissionais com experi\xEAncia em diversas \xE1reas da tecnologia, a Bitecode surgiu com a ideia de transformar desafios em oportunidades. Temos um compromisso com a excel\xEAncia e a satisfa\xE7\xE3o do cliente, buscando sempre a inova\xE7\xE3o e a melhoria cont\xEDnua em nossos servi\xE7os. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Valores");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Inova\xE7\xE3o");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Qualidade");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Compromisso");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Transpar\xEAncia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Equipe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Nossa equipe \xE9 composta por especialistas em diversas \xE1reas, prontos para oferecer solu\xE7\xF5es personalizadas que atendam \xE0s necessidades espec\xEDficas de cada cliente. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".sobre[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 20px auto;\n  padding: 20px;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.sobre[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 15px;\n}\n.sobre[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #555;\n  margin-top: 20px;\n}\n.sobre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.6;\n}\n.sobre[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: disc;\n  padding-left: 20px;\n}\n.sobre[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvYnJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUFDSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBQ047QUFFSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUFOO0FBR0k7RUFDRSxnQkFBQTtBQUROO0FBSUk7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBRk47QUFJTTtFQUNFLGFBQUE7QUFGUiIsImZpbGUiOiJzb2JyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb2JyZSB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBcbiAgICBoMSB7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuICBcbiAgICBoMiB7XG4gICAgICBjb2xvcjogIzU1NTtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuICBcbiAgICBwIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgfVxuICBcbiAgICB1bCB7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIFxuICAgICAgbGkge1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAiXX0= */"]
      });
      /***/
    },

    /***/
    "jQpT":
    /*!***************************************************!*\
      !*** ./src/app/shared/footer/footer.component.ts ***!
      \***************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function jQpT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);

          this.currentYear = new Date().getFullYear();
        }

        return _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 11,
        vars: 1,
        consts: [[1, "footer"], [1, "footer-content"], [1, "social-links"], ["href", "#", "aria-label", "Facebook"], ["href", "#", "aria-label", "Instagram"], ["href", "#", "aria-label", "LinkedIn"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Instagram");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "LinkedIn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA9 ", ctx.currentYear, " Bitecode. Todos os direitos reservados.");
          }
        },
        styles: [".footer[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: white;\n  text-align: center;\n  padding: 20px 0;\n}\n.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  margin: 0 10px;\n}\n.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNOO0FBQ007RUFDRSxTQUFBO0FBQ1I7QUFFTTtFQUNFLGdCQUFBO0FBQVI7QUFFUTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFBVjtBQUVVO0VBQ0UsMEJBQUE7QUFBWiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICBcbiAgICAuZm9vdGVyLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbiAgICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gIFxuICAgICAgLnNvY2lhbC1saW5rcyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIFxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICBcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAiXX0= */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "1LmZ");
      /* harmony import */


      var _pages_servicos_servicos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/servicos/servicos.component */
      "PkOs");
      /* harmony import */


      var _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/portfolio/portfolio.component */
      "WBBN");
      /* harmony import */


      var _pages_sobre_sobre_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/sobre/sobre.component */
      "fB3g");
      /* harmony import */


      var _pages_contato_contato_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/contato/contato.component */
      "JdIS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
      }, {
        path: 'services',
        component: _pages_servicos_servicos_component__WEBPACK_IMPORTED_MODULE_2__["ServicosComponent"]
      }, {
        path: 'portfolio',
        component: _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"]
      }, {
        path: 'sobre',
        component: _pages_sobre_sobre_component__WEBPACK_IMPORTED_MODULE_4__["SobreComponent"]
      }, {
        path: 'contato',
        component: _pages_contato_contato_component__WEBPACK_IMPORTED_MODULE_5__["ContatoComponent"]
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map