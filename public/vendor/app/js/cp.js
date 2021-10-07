/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=template&id=9c62d4f6&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=template&id=9c62d4f6& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=template&id=f92990f0&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=template&id=f92990f0& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=template&id=074c6e2a&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=template&id=074c6e2a& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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


/***/ }),

/***/ "./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DynamicFieldGroupFieldtype_vue_vue_type_template_id_9c62d4f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DynamicFieldGroupFieldtype.vue?vue&type=template&id=9c62d4f6& */ "./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=template&id=9c62d4f6&");
/* harmony import */ var _DynamicFieldGroupFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DynamicFieldGroupFieldtype.vue?vue&type=script&lang=js& */ "./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DynamicFieldGroupFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DynamicFieldGroupFieldtype_vue_vue_type_template_id_9c62d4f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DynamicFieldGroupFieldtype_vue_vue_type_template_id_9c62d4f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicFieldGroupFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DynamicFieldGroupFieldtype.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicFieldGroupFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=template&id=9c62d4f6&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=template&id=9c62d4f6& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicFieldGroupFieldtype_vue_vue_type_template_id_9c62d4f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DynamicFieldGroupFieldtype.vue?vue&type=template&id=9c62d4f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue?vue&type=template&id=9c62d4f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicFieldGroupFieldtype_vue_vue_type_template_id_9c62d4f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicFieldGroupFieldtype_vue_vue_type_template_id_9c62d4f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FieldGroupConfigFieldtype_vue_vue_type_template_id_f92990f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FieldGroupConfigFieldtype.vue?vue&type=template&id=f92990f0& */ "./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=template&id=f92990f0&");
/* harmony import */ var _FieldGroupConfigFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldGroupConfigFieldtype.vue?vue&type=script&lang=js& */ "./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FieldGroupConfigFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FieldGroupConfigFieldtype_vue_vue_type_template_id_f92990f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FieldGroupConfigFieldtype_vue_vue_type_template_id_f92990f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldGroupConfigFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FieldGroupConfigFieldtype.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldGroupConfigFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=template&id=f92990f0&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=template&id=f92990f0& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldGroupConfigFieldtype_vue_vue_type_template_id_f92990f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FieldGroupConfigFieldtype.vue?vue&type=template&id=f92990f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue?vue&type=template&id=f92990f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldGroupConfigFieldtype_vue_vue_type_template_id_f92990f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldGroupConfigFieldtype_vue_vue_type_template_id_f92990f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/fieldtypes/FieldGroupFieldtype.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/fieldtypes/FieldGroupFieldtype.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FieldGroupFieldtype_vue_vue_type_template_id_074c6e2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FieldGroupFieldtype.vue?vue&type=template&id=074c6e2a& */ "./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=template&id=074c6e2a&");
/* harmony import */ var _FieldGroupFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldGroupFieldtype.vue?vue&type=script&lang=js& */ "./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FieldGroupFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FieldGroupFieldtype_vue_vue_type_template_id_074c6e2a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FieldGroupFieldtype_vue_vue_type_template_id_074c6e2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/fieldtypes/FieldGroupFieldtype.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldGroupFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FieldGroupFieldtype.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldGroupFieldtype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=template&id=074c6e2a&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=template&id=074c6e2a& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldGroupFieldtype_vue_vue_type_template_id_074c6e2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FieldGroupFieldtype.vue?vue&type=template&id=074c6e2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fieldtypes/FieldGroupFieldtype.vue?vue&type=template&id=074c6e2a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldGroupFieldtype_vue_vue_type_template_id_074c6e2a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FieldGroupFieldtype_vue_vue_type_template_id_074c6e2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/cp.js":
/*!****************************!*\
  !*** ./resources/js/cp.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_fieldtypes_DynamicFieldGroupFieldtype_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/fieldtypes/DynamicFieldGroupFieldtype.vue */ "./resources/js/components/fieldtypes/DynamicFieldGroupFieldtype.vue");
/* harmony import */ var _components_fieldtypes_FieldGroupFieldtype_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/fieldtypes/FieldGroupFieldtype.vue */ "./resources/js/components/fieldtypes/FieldGroupFieldtype.vue");
/* harmony import */ var _components_fieldtypes_FieldGroupConfigFieldtype_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/fieldtypes/FieldGroupConfigFieldtype.vue */ "./resources/js/components/fieldtypes/FieldGroupConfigFieldtype.vue");
/**
 * When extending the control panel, be sure to uncomment the necessary code for your build process:
 * https://statamic.dev/extending/control-panel
 */



Statamic.booting(function () {
  Statamic.$components.register('dynamic_field_group-fieldtype', _components_fieldtypes_DynamicFieldGroupFieldtype_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
  Statamic.$components.register('fieldgroup-fieldtype', _components_fieldtypes_FieldGroupFieldtype_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Statamic.$components.register('fieldgroup_config-fieldtype', _components_fieldtypes_FieldGroupConfigFieldtype_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
});

/***/ }),

/***/ "./vendor/statamic/cms/resources/js/components/field-conditions/Constants.js":
/*!***********************************************************************************!*\
  !*** ./vendor/statamic/cms/resources/js/components/field-conditions/Constants.js ***!
  \***********************************************************************************/
/*! exports provided: KEYS, OPERATORS, ALIASES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYS", function() { return KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATORS", function() { return OPERATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALIASES", function() { return ALIASES; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
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

      return _.map(conditions, function (condition, field) {
        return _this.splitRhs(field, condition);
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
      return {
        'field': field,
        'operator': this.getOperatorFromRhs(condition),
        'value': this.getValueFromRhs(condition)
      };
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
      return _Constants_js__WEBPACK_IMPORTED_MODULE_0__["ALIASES"][operator] ? _Constants_js__WEBPACK_IMPORTED_MODULE_0__["ALIASES"][operator] : operator;
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
      return _Constants_js__WEBPACK_IMPORTED_MODULE_0__["OPERATORS"].concat(Object.keys(_Constants_js__WEBPACK_IMPORTED_MODULE_0__["ALIASES"]));
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./vendor/statamic/cms/resources/js/components/field-conditions/Validator.js":
/*!***********************************************************************************!*\
  !*** ./vendor/statamic/cms/resources/js/components/field-conditions/Validator.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
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

      conditions = this.converter.fromBlueprint(conditions);
      var passes = this.passOnAny ? this.passesAnyConditions(conditions) : this.passesAllConditions(conditions);
      return this.showOnPass ? passes : !passes;
    }
  }, {
    key: "getConditions",
    value: function getConditions() {
      var _this = this;

      var key = _.chain(_Constants_js__WEBPACK_IMPORTED_MODULE_1__["KEYS"]).filter(function (key) {
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
      return condition.replace(new RegExp('^custom .'), '').split(':')[0];
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Validator.js */ "./vendor/statamic/cms/resources/js/components/field-conditions/Validator.js");

/* harmony default export */ __webpack_exports__["default"] = ({
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

/***/ 1:
/*!**********************************!*\
  !*** multi ./resources/js/cp.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\fieldset\resources\js\cp.js */"./resources/js/cp.js");


/***/ })

/******/ });