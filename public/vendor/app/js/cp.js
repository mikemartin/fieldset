/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [Fieldtype],
  data: function data() {
    var fieldsetSuggestions = Object.entries(this.meta.fieldsets).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          _ = _ref2[0],
          fieldset = _ref2[1];

      return {
        value: fieldset.handle,
        label: fieldset.title
      };
    });
    return {
      fieldsetSuggestions: fieldsetSuggestions
    };
  },
  methods: {
    updateFieldset: function updateFieldset(handle) {
      this.update(handle);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [Fieldtype],
  props: {
    excludeFieldset: String
  },
  computed: {
    fieldset: function fieldset() {
      if (!this.value || !this.value[0]) return null;
      return this.value[0].fieldset;
    }
  },
  data: function data() {
    var _this = this;

    var fieldsets = JSON.parse(JSON.stringify(Object.values(this.$config.get("fieldsets")).filter(function (fieldset) {
      return fieldset.handle != _this.excludeFieldset;
    })));
    return {
      fieldsetSuggestions: fieldsets.map(function (fieldset) {
        return {
          value: fieldset.handle,
          label: fieldset.title
        };
      }),
      fieldsets: fieldsets
    };
  },
  methods: {
    linkFieldset: function linkFieldset(v) {
      this.update([{
        type: 'import',
        fieldset: v,
        prefix: null
      }]);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_statamic_cms_resources_js_components_field_conditions_ValidatorMixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../vendor/statamic/cms/resources/js/components/field-conditions/ValidatorMixin.js */ "./vendor/statamic/cms/resources/js/components/field-conditions/ValidatorMixin.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [Fieldtype, _vendor_statamic_cms_resources_js_components_field_conditions_ValidatorMixin_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  inject: ["storeName"],
  data: function data() {
    return {
      // This is a bit of a hack to effect the partent element but should be safe. 
      css: this.config.show_label ? "" : ".publish-field__".concat(this.config.handle, " > .field-inner { display: none; } .publish-field__").concat(this.config.handle, "{ padding-top: 0; }")
    };
  },
  methods: {
    updated: function updated(handle, value) {
      var group = JSON.parse(JSON.stringify(this.values));
      group[handle] = value;
      this.update(group);
    }
  },
  computed: {
    state: function state() {
      return this.$store.state.publish[this.storeName];
    },
    values: function values() {
      // merge default values with "real" values
      return _objectSpread(_objectSpread({}, this.meta.defaults), this.value);
    },
    errors: function errors() {
      return this.state.errors;
    },
    fields: function fields() {
      return this.config.fields;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldsetDetails.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldsetDetails.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["fieldset"],
  data: function data() {
    return {
      waitingForRefresh: false,
      downloads: null
    };
  },
  computed: {
    description: function description() {
      return this.fieldset.subtitle;
    }
  },
  created: function created() {
    this.getDownloadCount();
  },
  methods: {
    install: function install() {
      console.log("todo");
    },
    fieldsetRefreshed: function fieldsetRefreshed() {
      this.waitingForRefresh = false;
    },
    getDownloadCount: function getDownloadCount() {
      // todo
      this.downloads = 100;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldsetList.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldsetList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    var _ref;

    return _ref = {
      initializing: true,
      loading: true,
      rows: [],
      meta: {},
      searchQuery: "",
      filter: "all",
      page: 1,
      showingFieldset: false,
      error: false,
      unlisted: []
    }, _defineProperty(_ref, "loading", true), _defineProperty(_ref, "options", []), _defineProperty(_ref, "entry", null), _defineProperty(_ref, "icon", null), _ref;
  },
  computed: {
    params: function params() {
      return {
        page: this.page,
        q: this.searchQuery,
        installed: this.filter === "installed" ? 1 : 0
      };
    },
    loaded: function loaded() {
      return !this.loading && !this.error;
    }
  },
  watch: {
    page: function page() {
      this.getFieldsets();
    },
    searchQuery: function searchQuery() {
      this.page = 1;
      this.getFieldsets();
    },
    filter: function filter() {
      this.page = 1;
      this.getFieldsets();
    },
    loading: {
      immediate: true,
      handler: function handler(loading) {
        this.$progress.loading("fieldset-list", loading);
      }
    }
  },
  created: function created() {
    this.rows = this.getFieldsets();
  },
  methods: {
    getFieldsets: function getFieldsets() {
      var _this = this;

      this.loading = true;
      this.$axios.get("/api/fieldsets", {
        params: this.params
      }).then(function (response) {
        _this.loading = false;
        _this.initializing = false;
        _this.rows = response.data.data;
        _this.meta = response.data.meta; // if (this.showingfieldset) {
        //   this.refreshShowingfieldset();
        // }
      })["catch"](function (e) {
        console.log(e);
        _this.loading = false;
        _this.error = true;

        _this.$toast.error(__("Something went wrong"));
      });
    },
    // getOptions() {
    //   fetch("/api/fieldsets").then((resp) => {
    //     resp.json().then((options) => {
    //       this.loading = false;
    //       this.options = options.map((o) => {
    //         const { handle, title, ...rest } = o;
    //         return {
    //         value: handle,
    //         label: title,
    //         ...rest
    //       }});
    //     });
    //   });
    // },
    fetchFieldset: function fetchFieldset(opt) {
      var _this2 = this;

      this.icon = opt.icon;
      fetch("/api/collections/fieldsets/entries/" + opt.id).then(function (resp) {
        resp.json().then(function (_ref2) {
          var data = _ref2.data;
          console.log(data);
          _this2.entry = data;
        });
      }); // fetch("/api/fieldset/" + opt.handle).then((resp) => {
      //   resp.text().then((text) => {
      //     console.log(text)
      //     // this.options = options.map(o => ({ value: o.handle, label: o.title}));
      //   });
      // });
    },
    showFieldset: function showFieldset(fieldset) {
      this.showingFieldset = fieldset;
      window.scrollTo(0, 0);
    }
  }
});

/***/ }),

/***/ "./vendor/statamic/cms/resources/js/components/field-conditions/Constants.js":
/*!***********************************************************************************!*\
  !*** ./vendor/statamic/cms/resources/js/components/field-conditions/Constants.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEYS": () => (/* binding */ KEYS),
/* harmony export */   "OPERATORS": () => (/* binding */ OPERATORS),
/* harmony export */   "ALIASES": () => (/* binding */ ALIASES)
/* harmony export */ });
var KEYS = ['if', 'if_any', 'show_when', 'show_when_any', 'unless', 'unless_any', 'hide_when', 'hide_when_any'];
var OPERATORS = ['equals', 'not', 'contains', 'contains_any', '===', '!==', '>', '>=', '<', '<=', 'custom'];
var ALIASES = {
  'is': 'equals',
  '==': 'equals',
  'isnt': 'not',
  '!=': 'not',
  'includes': 'contains',
  'includes_any': 'contains_any'
};

/***/ }),

/***/ "./vendor/statamic/cms/resources/js/components/field-conditions/Converter.js":
/*!***********************************************************************************!*\
  !*** ./vendor/statamic/cms/resources/js/components/field-conditions/Converter.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants.js */ "./vendor/statamic/cms/resources/js/components/field-conditions/Constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var _default = /*#__PURE__*/function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, [{
    key: "fromBlueprint",
    value: function fromBlueprint(conditions) {
      var _this = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return _.map(conditions, function (condition, field) {
        return _this.splitRhs(field, condition, prefix);
      });
    }
  }, {
    key: "toBlueprint",
    value: function toBlueprint(conditions) {
      var _this2 = this;

      var converted = {};

      _.each(conditions, function (condition) {
        converted[condition.field] = _this2.combineRhs(condition);
      });

      return converted;
    }
  }, {
    key: "splitRhs",
    value: function splitRhs(field, condition) {
      var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return {
        'field': this.getScopedFieldHandle(field, prefix),
        'operator': this.getOperatorFromRhs(condition),
        'value': this.getValueFromRhs(condition)
      };
    }
  }, {
    key: "getScopedFieldHandle",
    value: function getScopedFieldHandle(field, prefix) {
      if (field.startsWith('root.') || !prefix) {
        return field;
      }

      return prefix + field;
    }
  }, {
    key: "getOperatorFromRhs",
    value: function getOperatorFromRhs(condition) {
      var operator = '==';

      _.chain(this.getOperatorsAndAliases()).filter(function (value) {
        return new RegExp("^".concat(value, " [^=]")).test(condition.toString());
      }).each(function (value) {
        return operator = value;
      });

      return this.normalizeOperator(operator);
    }
  }, {
    key: "normalizeOperator",
    value: function normalizeOperator(operator) {
      return _Constants_js__WEBPACK_IMPORTED_MODULE_0__.ALIASES[operator] ? _Constants_js__WEBPACK_IMPORTED_MODULE_0__.ALIASES[operator] : operator;
    }
  }, {
    key: "getValueFromRhs",
    value: function getValueFromRhs(condition) {
      var rhs = condition.toString();

      _.chain(this.getOperatorsAndAliases()).filter(function (value) {
        return new RegExp("^".concat(value, " [^=]")).test(rhs);
      }).each(function (value) {
        return rhs = rhs.replace(new RegExp("^".concat(value, "[ ]*")), '');
      });

      return rhs;
    }
  }, {
    key: "combineRhs",
    value: function combineRhs(condition) {
      var operator = condition.operator ? condition.operator.trim() : '';
      var value = condition.value.trim();
      return "".concat(operator, " ").concat(value).trim();
    }
  }, {
    key: "getOperatorsAndAliases",
    value: function getOperatorsAndAliases() {
      return _Constants_js__WEBPACK_IMPORTED_MODULE_0__.OPERATORS.concat(Object.keys(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.ALIASES));
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./vendor/statamic/cms/resources/js/components/field-conditions/Validator.js":
/*!***********************************************************************************!*\
  !*** ./vendor/statamic/cms/resources/js/components/field-conditions/Validator.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _Converter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Converter.js */ "./vendor/statamic/cms/resources/js/components/field-conditions/Converter.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constants.js */ "./vendor/statamic/cms/resources/js/components/field-conditions/Constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var NUMBER_SPECIFIC_COMPARISONS = ['>', '>=', '<', '<='];

var _default = /*#__PURE__*/function () {
  function _default(field, values, store, storeName) {
    _classCallCheck(this, _default);

    this.field = field;
    this.values = values;
    this.rootValues = store.state.publish[storeName].values;
    this.store = store;
    this.storeName = storeName;
    this.passOnAny = false;
    this.showOnPass = true;
    this.converter = new _Converter_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  _createClass(_default, [{
    key: "passesConditions",
    value: function passesConditions() {
      var conditions = this.getConditions();

      if (conditions === undefined) {
        return true;
      } else if (_.isString(conditions)) {
        return this.passesCustomCondition(this.prepareCondition(conditions));
      }

      conditions = this.converter.fromBlueprint(conditions, this.field.prefix);
      var passes = this.passOnAny ? this.passesAnyConditions(conditions) : this.passesAllConditions(conditions);
      return this.showOnPass ? passes : !passes;
    }
  }, {
    key: "getConditions",
    value: function getConditions() {
      var _this = this;

      var key = _.chain(_Constants_js__WEBPACK_IMPORTED_MODULE_1__.KEYS).filter(function (key) {
        return _this.field[key];
      }).first().value();

      if (!key) {
        return undefined;
      }

      if (key.includes('any')) {
        this.passOnAny = true;
      }

      if (key.includes('unless') || key.includes('hide_when')) {
        this.showOnPass = false;
      }

      return this.field[key];
    }
  }, {
    key: "passesAllConditions",
    value: function passesAllConditions(conditions) {
      var _this2 = this;

      return _.chain(conditions).map(function (condition) {
        return _this2.prepareCondition(condition);
      }).reject(function (condition) {
        return _this2.passesCondition(condition);
      }).isEmpty().value();
    }
  }, {
    key: "passesAnyConditions",
    value: function passesAnyConditions(conditions) {
      var _this3 = this;

      return !_.chain(conditions).map(function (condition) {
        return _this3.prepareCondition(condition);
      }).filter(function (condition) {
        return _this3.passesCondition(condition);
      }).isEmpty().value();
    }
  }, {
    key: "prepareCondition",
    value: function prepareCondition(condition) {
      if (_.isString(condition) || condition.operator === 'custom') {
        return this.prepareCustomCondition(condition);
      }

      var operator = this.prepareOperator(condition.operator);
      var lhs = this.prepareLhs(condition.field, operator);
      var rhs = this.prepareRhs(condition.value, operator);
      return {
        lhs: lhs,
        operator: operator,
        rhs: rhs
      };
    }
  }, {
    key: "prepareOperator",
    value: function prepareOperator(operator) {
      switch (operator) {
        case null:
        case '':
        case 'is':
        case 'equals':
          return '==';

        case 'isnt':
        case 'not':
        case '¯\\_(ツ)_/¯':
          return '!=';

        case 'includes':
        case 'contains':
          return 'includes';

        case 'includes_any':
        case 'contains_any':
          return 'includes_any';
      }

      return operator;
    }
  }, {
    key: "prepareLhs",
    value: function prepareLhs(field, operator) {
      var lhs = this.getFieldValue(field); // When performing a number comparison, cast to number.

      if (NUMBER_SPECIFIC_COMPARISONS.includes(operator)) {
        return Number(lhs);
      } // When performing lhs.includes(), if lhs is not an object or array, cast to string.


      if (operator === 'includes' && !_.isObject(lhs)) {
        return lhs ? lhs.toString() : '';
      } // When lhs is an empty string, cast to null.


      if (_.isString(lhs) && _.isEmpty(lhs)) {
        lhs = null;
      } // Prepare for eval() and return.


      return _.isString(lhs) ? JSON.stringify(lhs.trim()) : lhs;
    }
  }, {
    key: "prepareRhs",
    value: function prepareRhs(rhs, operator) {
      // When comparing against null, true, false, cast to literals.
      switch (rhs) {
        case 'null':
          return null;

        case 'true':
          return true;

        case 'false':
          return false;
      } // When performing a number comparison, cast to number.


      if (NUMBER_SPECIFIC_COMPARISONS.includes(operator)) {
        return Number(rhs);
      } // When performing a comparison that cannot be eval()'d, return rhs as is.


      if (rhs === 'empty' || operator === 'includes' || operator === 'includes_any') {
        return rhs;
      } // Prepare for eval() and return.


      return _.isString(rhs) ? JSON.stringify(rhs.trim()) : rhs;
    }
  }, {
    key: "prepareCustomCondition",
    value: function prepareCustomCondition(condition) {
      var functionName = this.prepareFunctionName(condition.value || condition);
      var params = this.prepareParams(condition.value || condition);
      var target = condition.field ? this.getFieldValue(condition.field) : null;
      return {
        functionName: functionName,
        params: params,
        target: target
      };
    }
  }, {
    key: "prepareFunctionName",
    value: function prepareFunctionName(condition) {
      return condition.replace(new RegExp('^custom '), '').split(':')[0];
    }
  }, {
    key: "prepareParams",
    value: function prepareParams(condition) {
      var params = condition.split(':')[1];
      return params ? params.split(',').map(function (string) {
        return string.trim();
      }) : [];
    }
  }, {
    key: "getFieldValue",
    value: function getFieldValue(field) {
      return field.startsWith('root.') ? data_get(this.rootValues, field.replace(new RegExp('^root.'), '')) : data_get(this.values, field);
    }
  }, {
    key: "passesCondition",
    value: function passesCondition(condition) {
      if (condition.functionName) {
        return this.passesCustomCondition(condition);
      }

      if (condition.operator === 'includes') {
        return this.passesIncludesCondition(condition);
      }

      if (condition.operator === 'includes_any') {
        return this.passesIncludesAnyCondition(condition);
      }

      if (condition.rhs === 'empty') {
        condition.lhs = _.isEmpty(condition.lhs);
        condition.rhs = true;
      }

      if (_.isObject(condition.lhs)) {
        return false;
      }

      return eval("".concat(condition.lhs, " ").concat(condition.operator, " ").concat(condition.rhs));
    }
  }, {
    key: "passesIncludesCondition",
    value: function passesIncludesCondition(condition) {
      return condition.lhs.includes(condition.rhs);
    }
  }, {
    key: "passesIncludesAnyCondition",
    value: function passesIncludesAnyCondition(condition) {
      var values = condition.rhs.split(',').map(function (string) {
        return string.trim();
      });

      if (Array.isArray(condition.lhs)) {
        return _.intersection(condition.lhs, values).length;
      }

      return new RegExp(values.join('|')).test(condition.lhs);
    }
  }, {
    key: "passesCustomCondition",
    value: function passesCustomCondition(condition) {
      var customFunction = data_get(this.store.state.statamic.conditions, condition.functionName);

      if (typeof customFunction !== 'function') {
        console.error("Statamic field condition [".concat(condition.functionName, "] was not properly defined."));
        return false;
      }

      var passes = customFunction({
        params: condition.params,
        target: condition.target,
        values: this.values,
        root: this.rootValues,
        store: this.store,
        storeName: this.storeName
      });
      return this.showOnPass ? passes : !passes;
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./vendor/statamic/cms/resources/js/components/field-conditions/ValidatorMixin.js":
/*!****************************************************************************************!*\
  !*** ./vendor/statamic/cms/resources/js/components/field-conditions/ValidatorMixin.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Validator.js */ "./vendor/statamic/cms/resources/js/components/field-conditions/Validator.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  inject: {
    storeName: {
      "default": 'base'
    }
  },
  methods: {
    showField: function showField(field) {
      var validator = new _Validator_js__WEBPACK_IMPORTED_MODULE_0__["default"](field, this.values, this.$store, this.storeName);
      return validator.passesConditions();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldsetList.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldsetList.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.fieldset-grid {\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-auto-flow: dense;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldsetList.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldsetList.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldsetList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FieldsetList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldsetList.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldsetList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldsetList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DynamicFieldGroupFieldtype_vue_vue_type_template_id_9c62d4f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DynamicFieldGroupFieldtype.vue?vue&type=template&id=9c62d4f6& */ "./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=template&id=9c62d4f6&");
/* harmony import */ var _DynamicFieldGroupFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DynamicFieldGroupFieldtype.vue?vue&type=script&lang=js& */ "./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DynamicFieldGroupFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DynamicFieldGroupFieldtype_vue_vue_type_template_id_9c62d4f6___WEBPACK_IMPORTED_MODULE_0__.render,
  _DynamicFieldGroupFieldtype_vue_vue_type_template_id_9c62d4f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FieldGroupConfigFieldtype_vue_vue_type_template_id_f92990f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FieldGroupConfigFieldtype.vue?vue&type=template&id=f92990f0& */ "./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=template&id=f92990f0&");
/* harmony import */ var _FieldGroupConfigFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldGroupConfigFieldtype.vue?vue&type=script&lang=js& */ "./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FieldGroupConfigFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FieldGroupConfigFieldtype_vue_vue_type_template_id_f92990f0___WEBPACK_IMPORTED_MODULE_0__.render,
  _FieldGroupConfigFieldtype_vue_vue_type_template_id_f92990f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/fieldtypes/FieldGroupFieldtype.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/fieldtypes/FieldGroupFieldtype.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FieldGroupFieldtype_vue_vue_type_template_id_074c6e2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FieldGroupFieldtype.vue?vue&type=template&id=074c6e2a& */ "./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=template&id=074c6e2a&");
/* harmony import */ var _FieldGroupFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldGroupFieldtype.vue?vue&type=script&lang=js& */ "./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FieldGroupFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FieldGroupFieldtype_vue_vue_type_template_id_074c6e2a___WEBPACK_IMPORTED_MODULE_0__.render,
  _FieldGroupFieldtype_vue_vue_type_template_id_074c6e2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/fieldtypes/FieldGroupFieldtype.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/fieldtypes/FieldsetDetails.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/fieldtypes/FieldsetDetails.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FieldsetDetails_vue_vue_type_template_id_bdf269d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FieldsetDetails.vue?vue&type=template&id=bdf269d6& */ "./resources/js/components/fieldtypes/FieldsetDetails.vue?vue&type=template&id=bdf269d6&");
/* harmony import */ var _FieldsetDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldsetDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/fieldtypes/FieldsetDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FieldsetDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FieldsetDetails_vue_vue_type_template_id_bdf269d6___WEBPACK_IMPORTED_MODULE_0__.render,
  _FieldsetDetails_vue_vue_type_template_id_bdf269d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/fieldtypes/FieldsetDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/fieldtypes/FieldsetList.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/fieldtypes/FieldsetList.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FieldsetList_vue_vue_type_template_id_ba0ee24a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FieldsetList.vue?vue&type=template&id=ba0ee24a& */ "./resources/js/components/fieldtypes/FieldsetList.vue?vue&type=template&id=ba0ee24a&");
/* harmony import */ var _FieldsetList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldsetList.vue?vue&type=script&lang=js& */ "./resources/js/components/fieldtypes/FieldsetList.vue?vue&type=script&lang=js&");
/* harmony import */ var _FieldsetList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldsetList.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/fieldtypes/FieldsetList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FieldsetList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FieldsetList_vue_vue_type_template_id_ba0ee24a___WEBPACK_IMPORTED_MODULE_0__.render,
  _FieldsetList_vue_vue_type_template_id_ba0ee24a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/fieldtypes/FieldsetList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicFieldGroupFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DynamicFieldGroupFieldtype.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicFieldGroupFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldGroupConfigFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FieldGroupConfigFieldtype.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldGroupConfigFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldGroupFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FieldGroupFieldtype.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldGroupFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/fieldtypes/FieldsetDetails.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/FieldsetDetails.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldsetDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FieldsetDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldsetDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldsetDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/fieldtypes/FieldsetList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/FieldsetList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldsetList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FieldsetList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldsetList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldsetList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/fieldtypes/FieldsetList.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/FieldsetList.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldsetList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FieldsetList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldsetList.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=template&id=9c62d4f6&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=template&id=9c62d4f6& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicFieldGroupFieldtype_vue_vue_type_template_id_9c62d4f6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicFieldGroupFieldtype_vue_vue_type_template_id_9c62d4f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicFieldGroupFieldtype_vue_vue_type_template_id_9c62d4f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DynamicFieldGroupFieldtype.vue?vue&type=template&id=9c62d4f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=template&id=9c62d4f6&");


/***/ }),

/***/ "./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=template&id=f92990f0&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=template&id=f92990f0& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldGroupConfigFieldtype_vue_vue_type_template_id_f92990f0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldGroupConfigFieldtype_vue_vue_type_template_id_f92990f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldGroupConfigFieldtype_vue_vue_type_template_id_f92990f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FieldGroupConfigFieldtype.vue?vue&type=template&id=f92990f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=template&id=f92990f0&");


/***/ }),

/***/ "./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=template&id=074c6e2a&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=template&id=074c6e2a& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldGroupFieldtype_vue_vue_type_template_id_074c6e2a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldGroupFieldtype_vue_vue_type_template_id_074c6e2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldGroupFieldtype_vue_vue_type_template_id_074c6e2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FieldGroupFieldtype.vue?vue&type=template&id=074c6e2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=template&id=074c6e2a&");


/***/ }),

/***/ "./resources/js/components/fieldtypes/FieldsetDetails.vue?vue&type=template&id=bdf269d6&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/FieldsetDetails.vue?vue&type=template&id=bdf269d6& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldsetDetails_vue_vue_type_template_id_bdf269d6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldsetDetails_vue_vue_type_template_id_bdf269d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldsetDetails_vue_vue_type_template_id_bdf269d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FieldsetDetails.vue?vue&type=template&id=bdf269d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldsetDetails.vue?vue&type=template&id=bdf269d6&");


/***/ }),

/***/ "./resources/js/components/fieldtypes/FieldsetList.vue?vue&type=template&id=ba0ee24a&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/FieldsetList.vue?vue&type=template&id=ba0ee24a& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldsetList_vue_vue_type_template_id_ba0ee24a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldsetList_vue_vue_type_template_id_ba0ee24a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldsetList_vue_vue_type_template_id_ba0ee24a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FieldsetList.vue?vue&type=template&id=ba0ee24a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldsetList.vue?vue&type=template&id=ba0ee24a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=template&id=9c62d4f6&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=template&id=9c62d4f6& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-select", {
        attrs: {
          name: "fieldset",
          placeholder: _vm.__("Fieldsets"),
          options: _vm.fieldsetSuggestions,
          multiple: false,
          searchable: true,
          reduce: function(opt) {
            return opt.value
          }
        },
        on: { change: _vm.updateFieldset, input: _vm.updateFieldset },
        scopedSlots: _vm._u([
          {
            key: "no-options",
            fn: function() {
              return [
                _c("div", {
                  staticClass: "text-sm text-grey-70 text-left py-1 px-2",
                  domProps: {
                    textContent: _vm._s(_vm.__("No options to choose from."))
                  }
                })
              ]
            },
            proxy: true
          }
        ]),
        model: {
          value: _vm.value,
          callback: function($$v) {
            _vm.value = $$v
          },
          expression: "value"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=template&id=f92990f0&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=template&id=f92990f0& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-select", {
        attrs: {
          name: "fieldset",
          placeholder: _vm.__("Fieldsets"),
          options: _vm.fieldsetSuggestions,
          multiple: false,
          searchable: true,
          selected: _vm.fieldset,
          reduce: function(opt) {
            return opt.value
          }
        },
        on: { change: _vm.linkFieldset, input: _vm.linkFieldset },
        scopedSlots: _vm._u([
          {
            key: "no-options",
            fn: function() {
              return [
                _c("div", {
                  staticClass: "text-sm text-grey-70 text-left py-1 px-2",
                  domProps: {
                    textContent: _vm._s(_vm.__("No options to choose from."))
                  }
                })
              ]
            },
            proxy: true
          }
        ]),
        model: {
          value: _vm.fieldset,
          callback: function($$v) {
            _vm.fieldset = $$v
          },
          expression: "fieldset"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=template&id=074c6e2a&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=template&id=074c6e2a& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("style", { tag: "component" }, [_vm._v(_vm._s(_vm.css))]),
      _vm._v(" "),
      _vm._l(_vm.fields, function(field) {
        return _c("publish-field", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showField(field),
              expression: "showField(field)"
            }
          ],
          key: field.handle,
          staticStyle: { paddingLeft: "0", paddingRight: "0" },
          attrs: {
            config: field,
            value: _vm.values[field.handle],
            meta: _vm.meta[field.handle],
            errors: _vm.errors[field.handle],
            "read-only": _vm.readOnly,
            "can-toggle-label": _vm.canToggleLabels,
            "name-prefix": _vm.namePrefix
          },
          on: {
            input: function($event) {
              return _vm.updated(field.handle, $event)
            },
            "meta-updated": function($event) {
              return _vm.$emit("meta-updated", field.handle, $event)
            },
            synced: function($event) {
              return _vm.$emit("synced", field.handle)
            },
            desynced: function($event) {
              return _vm.$emit("desynced", field.handle)
            },
            focus: function($event) {
              return _vm.$emit("focus")
            },
            blur: function($event) {
              return _vm.$emit("blur")
            }
          }
        })
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldsetDetails.vue?vue&type=template&id=bdf269d6&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldsetDetails.vue?vue&type=template&id=bdf269d6& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "flex items-center mb-3" }, [
      _c("h1", {
        staticClass: "flex-1",
        domProps: { textContent: _vm._s(_vm.fieldset.title) }
      }),
      _vm._v(" "),
      _c("a", {
        staticClass: "btn mr-2",
        attrs: { href: _vm.fieldset.url, target: "_blank" },
        domProps: { textContent: _vm._s(_vm.__("Preview on fieldset.dev")) }
      }),
      _vm._v(" "),
      _vm.fieldset.installed
        ? _c("button", {
            staticClass: "btn",
            attrs: { disabled: _vm.processing },
            domProps: { textContent: _vm._s(_vm.__("Installed")) }
          })
        : _c("button", {
            staticClass: "btn btn-primary",
            attrs: { disabled: _vm.processing },
            domProps: { textContent: _vm._s(_vm.__("Import")) },
            on: { click: _vm.install }
          })
    ]),
    _vm._v(" "),
    _c("div", [
      _c("div", { staticClass: "card mb-3 flex items-center" }, [
        _c("div", { staticClass: "flex-1 text-lg" }, [
          _c("div", {
            staticClass: "little-heading p-0 mb-1 text-grey-70",
            domProps: { textContent: _vm._s(_vm.__("Price")) }
          }),
          _vm._v(" "),
          _c("div", {
            staticClass: "font-bold",
            domProps: { textContent: _vm._s("Free") }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex-1 text-lg" }, [
          _c("div", {
            staticClass: "little-heading p-0 mb-1 text-grey-70",
            domProps: { textContent: _vm._s(_vm.__("Author")) }
          }),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "relative flex items-center",
              attrs: { href: _vm.fieldset.author.website }
            },
            [
              _c("img", {
                staticClass: "rounded-full w-6 mr-1",
                attrs: {
                  src: _vm.fieldset.author.avatar,
                  alt: _vm.fieldset.author.name
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "font-bold" }, [
                _vm._v(_vm._s(_vm.fieldset.author.name))
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _vm.downloads
          ? _c("div", { staticClass: "flex-1 text-lg" }, [
              _c("div", {
                staticClass: "little-heading p-0 mb-1 text-grey-70",
                domProps: { textContent: _vm._s(_vm.__("Downloads")) }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "font-bold" }, [
                _vm._v(_vm._s(_vm.downloads))
              ])
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", {
        staticClass: "card content p-4",
        domProps: { innerHTML: _vm._s(_vm.description) }
      })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldsetList.vue?vue&type=template&id=ba0ee24a&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/FieldsetList.vue?vue&type=template&id=ba0ee24a& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.showingFieldset
        ? _c("div", { staticClass: "breadcrumb flex" }, [
            _c(
              "button",
              {
                staticClass:
                  "flex-initial flex p-1 -m-1 items-center text-xs text-grey-70 hover:text-grey-90",
                on: {
                  click: function($event) {
                    _vm.showingFieldset = false
                  }
                }
              },
              [
                _c("svg-icon", {
                  staticClass: "h-6 w-4 rotate-180",
                  attrs: { name: "chevron-right" }
                }),
                _vm._v(" "),
                _c("span", {
                  domProps: {
                    textContent: _vm._s(_vm.__("Community (fieldset.dev)"))
                  }
                })
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.showingFieldset
        ? _c("div", { staticClass: "flex mb-3" }, [
            _c("h1", {
              staticClass: "flex-1",
              domProps: {
                textContent: _vm._s(_vm.__("Community (fieldset.dev)"))
              }
            })
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.error
        ? _c("div", { staticClass: "card text-sm" }, [
            _vm._v(
              "\n    " +
                _vm._s(
                  _vm.__(
                    "Something went wrong while loading community fieldsets. Try again later."
                  )
                ) +
                "\n  "
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.initializing
        ? _c(
            "div",
            { staticClass: "card p-3 text-center" },
            [_c("loading-graphic")],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.initializing && !_vm.showingFieldset
        ? _c("data-list", {
            attrs: { rows: _vm.rows },
            scopedSlots: _vm._u(
              [
                {
                  key: "default",
                  fn: function(ref) {
                    var fieldsets = ref.rows
                    return _c(
                      "div",
                      {},
                      [
                        _c("div", { staticClass: "card p-0" }, [
                          _c("div", { staticClass: "border-b px-2 text-sm" }, [
                            _c("button", {
                              staticClass: "data-list-filter-link",
                              class: { active: _vm.filter === "all" },
                              domProps: { textContent: _vm._s(_vm.__("All")) },
                              on: {
                                click: function($event) {
                                  _vm.filter = "all"
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "data-list-filter-link",
                                class: { active: _vm.filter === "installed" },
                                on: {
                                  click: function($event) {
                                    _vm.filter = "installed"
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n            " +
                                    _vm._s(_vm.__("Installed")) +
                                    "\n            "
                                ),
                                _vm.installCount
                                  ? _c("span", { staticClass: "badge" }, [
                                      _vm._v(_vm._s(_vm.installCount))
                                    ])
                                  : _vm._e()
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "p-1" },
                            [
                              _c("data-list-search", {
                                ref: "search",
                                model: {
                                  value: _vm.searchQuery,
                                  callback: function($$v) {
                                    _vm.searchQuery = $$v
                                  },
                                  expression: "searchQuery"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "fieldset-grid my-4",
                            class: { "opacity-50": _vm.loading }
                          },
                          _vm._l(fieldsets, function(fieldset) {
                            return _c(
                              "div",
                              {
                                key: fieldset.id,
                                staticClass: "fieldset-card",
                                on: {
                                  click: function($event) {
                                    return _vm.showFieldset(fieldset)
                                  }
                                }
                              },
                              [
                                _c("div", { staticClass: "media-object" }, [
                                  _c("div", {
                                    staticClass: "media-object--image",
                                    domProps: { innerHTML: _vm._s(_vm.icon) }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "flex-1" }, [
                                    _c(
                                      "p",
                                      { staticClass: "fieldset-card--title" },
                                      [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(fieldset.title) +
                                            "\n              "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      {
                                        staticClass: "fieldset-card--subtitle"
                                      },
                                      [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(fieldset.subtitle) +
                                            "\n              "
                                        )
                                      ]
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "fieldset-card--footer" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "flex items-center" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "flex-shrink-0" },
                                          [
                                            _c("img", {
                                              staticClass:
                                                "h-6 w-6 rounded-full",
                                              attrs: {
                                                src:
                                                  "https://www.gravatar.com/avatar/" +
                                                  fieldset.author.name,
                                                alt: ""
                                              }
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "ml-2" }, [
                                          _c(
                                            "p",
                                            { staticClass: "author-name" },
                                            [
                                              _vm._v(
                                                "\n                  " +
                                                  _vm._s(fieldset.author.name) +
                                                  "\n                "
                                              )
                                            ]
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "ml-2 flex items-baseline text-sm leading-5"
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass:
                                              "self-center flex-shrink-0 inline-block text-black text-opacity-75 hover:text-opacity-100 hover:text-pop",
                                            attrs: { href: "#" }
                                          },
                                          [
                                            _c(
                                              "svg",
                                              {
                                                staticClass:
                                                  "h-5 w-5 text-current",
                                                attrs: {
                                                  fill: "currentColor",
                                                  viewBox: "0 0 20 20"
                                                }
                                              },
                                              [
                                                _c("path", {
                                                  attrs: {
                                                    d:
                                                      "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
                                                    "clip-rule": "evenodd",
                                                    "fill-rule": "evenodd"
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("span", { staticClass: "sr-only" }, [
                                          _vm._v("Likes")
                                        ]),
                                        _vm._v(" "),
                                        _c("span", { staticClass: "ml-1" }, [
                                          _vm._v("5")
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _c("data-list-pagination", {
                          attrs: { "resource-meta": _vm.meta },
                          on: { "page-selected": _vm.setPage }
                        })
                      ],
                      1
                    )
                  }
                }
              ],
              null,
              false,
              3318180973
            )
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.showingFieldset
        ? _c("fieldset-details", { attrs: { fieldset: _vm.showingFieldset } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./resources/js/cp.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_fieldtypes_DynamicFieldGroupFieldtype_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/fieldtypes/DynamicFieldGroupFieldtype.vue */ "./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue");
/* harmony import */ var _components_fieldtypes_FieldGroupFieldtype_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/fieldtypes/FieldGroupFieldtype.vue */ "./resources/js/components/fieldtypes/FieldGroupFieldtype.vue");
/* harmony import */ var _components_fieldtypes_FieldGroupConfigFieldtype_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/fieldtypes/FieldGroupConfigFieldtype.vue */ "./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue");
/* harmony import */ var _components_fieldtypes_FieldsetList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/fieldtypes/FieldsetList */ "./resources/js/components/fieldtypes/FieldsetList.vue");
/* harmony import */ var _components_fieldtypes_FieldsetDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/fieldtypes/FieldsetDetails */ "./resources/js/components/fieldtypes/FieldsetDetails.vue");
/**
 * When extending the control panel, be sure to uncomment the necessary code for your build process:
 * https://statamic.dev/extending/control-panel
 */





Statamic.booting(function () {
  Statamic.$components.register('dynamic_field_group-fieldtype', _components_fieldtypes_DynamicFieldGroupFieldtype_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
  Statamic.$components.register('fieldgroup-fieldtype', _components_fieldtypes_FieldGroupFieldtype_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Statamic.$components.register('fieldgroup_config-fieldtype', _components_fieldtypes_FieldGroupConfigFieldtype_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
  Statamic.$components.register('fieldset-list', _components_fieldtypes_FieldsetList__WEBPACK_IMPORTED_MODULE_3__["default"]);
  Statamic.$components.register('fieldset-details', _components_fieldtypes_FieldsetDetails__WEBPACK_IMPORTED_MODULE_4__["default"]);
});
})();

/******/ })()
;