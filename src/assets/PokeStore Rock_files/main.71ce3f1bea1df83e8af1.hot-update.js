webpackHotUpdate("main",{

/***/ "./src/components/DetailsModal/index.js":
/*!**********************************************!*\
  !*** ./src/components/DetailsModal/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);



function DetailsModal(props) {
  const [openModal, setOpenModal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });
  console.log(props.openModal);

  if (props.openModal === true) {
    setOpenModal(true);
  }

  if (props.openModal === true) {
    function openModal() {
      if (false) {} else {
        const cashBack = Math.floor(Math.random() * 9 + 1);
        const stringCash = '0.0' + cashBack;
        setState({ ...state,
          right: false
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          title: 'Obrigado!',
          text: 'Você ganhou de volta: ' + Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(Math.round(Number(stringCash) * 2)) + ' (' + +cashBack + '%)',
          icon: 'success',
          showCloseButton: true,
          showConfirmButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false
        }).then(result => {
          if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.close) {
            localStorage.clear();
            window.location.href = window.location.origin;
          }
        });
      }
    }
  } else {
    const cashBack = Math.floor(Math.random() * 9 + 1);
    const stringCash = '0.0' + cashBack;
    setState({ ...state,
      right: false
    });
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
      title: 'Obrigado!',
      text: 'Você ganhou de volta: ' + Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
      }).format(Math.round(Number(stringCash) * 2)) + ' (' + +cashBack + '%)',
      icon: 'success',
      showCloseButton: true,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false
    }).then(result => {
      if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.close) {
        localStorage.clear();
        window.location.href = window.location.origin;
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (DetailsModal);

/***/ })

})
//# sourceMappingURL=main.71ce3f1bea1df83e8af1.hot-update.js.map