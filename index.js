"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RDATE = RDATE;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _aioButton = _interopRequireDefault(require("aio-button"));

var _jquery = _interopRequireDefault(require("jquery"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var GAH = /*#__PURE__*/function (_Component) {
  _inherits(GAH, _Component);

  var _super = _createSuper(GAH);

  function GAH(props) {
    var _this;

    _classCallCheck(this, GAH);

    _this = _super.call(this, props);

    _this.init();

    return _this;
  }

  _createClass(GAH, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.fn = new RDATE({
        getState: function getState() {
          return _this2.state;
        },
        getProps: function getProps() {
          return _this2.props;
        },
        setState: function setState(obj, send) {
          return _this2.SetState(obj, send);
        }
      });
      var _this$props = this.props,
          prevYears = _this$props.prevYears,
          nextYears = _this$props.nextYears,
          jalali = _this$props.jalali,
          value = _this$props.value;
      this.icons = {
        minus: /*#__PURE__*/_react.default.createElement("svg", {
          style: {
            width: "24px",
            height: "24px"
          },
          width: 24,
          height: 24
        }, /*#__PURE__*/_react.default.createElement("path", {
          fill: "transparent",
          d: "M13 8 L9 12 L13 16",
          strokeLinejoin: "miter-clip",
          strokeLinecap: "square",
          strokeWidth: 2
        })),
        plus: /*#__PURE__*/_react.default.createElement("svg", {
          style: {
            width: "24px",
            height: "24px"
          },
          width: 24,
          height: 24
        }, /*#__PURE__*/_react.default.createElement("path", {
          fill: "transparent",
          d: "M11 8 L15 12 L11 16",
          strokeLinejoin: "miter-clip",
          strokeLinecap: "square",
          strokeWidth: 2
        }))
      };
      var today = this.fn.getToday(jalali ? 'J' : 'G');
      var startYear = today[0] - prevYears;
      var endYear = today[0] + nextYears;
      var years = [];

      for (var i = startYear; i <= endYear; i++) {
        years.push(i);
      }

      this.state = {
        prevValue: JSON.stringify(value),
        startYear: startYear,
        endYear: endYear,
        years: years
      };
      this.updateState();
    }
  }, {
    key: "updateState",
    value: function updateState(setState) {
      var obj = this.fn.validateValue();

      if (setState) {
        this.setState({ ...obj,
          activeYear: obj.year,
          activeMonth: obj.month
        });
      } else {
        this.state = { ...this.state,
          ...obj
        };
      }
    }
  }, {
    key: "SetState",
    value: function SetState(obj, sendChanges) {
      var _this3 = this;

      var onChange = this.props.onChange;
      this.setState(obj, sendChanges && onChange ? function () {
        return onChange(_this3.details);
      } : function () {});
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.update) {
        this.updateState(true);
      }
    }
  }, {
    key: "getPopup",
    value: function getPopup() {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: 'flex'
        }
      }, /*#__PURE__*/_react.default.createElement(GAHDatePickerPopup, _extends({}, this.props, this.state, {
        fn: this.fn,
        icons: this.icons,
        SetState: this.SetState.bind(this),
        details: this.details
      })), this.fn.getTodayContent(this.details, 'react'));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      this.update = false;
      var _this$props2 = this.props,
          _this$props2$editValu = _this$props2.editValue,
          editValue = _this$props2$editValu === void 0 ? function (text) {
        return text;
      } : _this$props2$editValu,
          jalali = _this$props2.jalali,
          className = _this$props2.className,
          icon = _this$props2.icon;

      if (JSON.stringify(this.props.value) !== this.state.prevValue) {
        this.state.prevValue = JSON.stringify(this.props.value);
        this.update = true;
      }

      this.details = this.fn.getDateDetails();
      return /*#__PURE__*/_react.default.createElement(_aioButton.default, _extends({}, this.props, {
        before: icon ? icon : undefined,
        type: "button",
        className: 'gah' + (className ? ' ' + className : ''),
        text: editValue(this.fn.getValue()),
        rtl: jalali,
        popupStyle: {
          border: 'none'
        },
        popupClassName: "gah-popup",
        onToggle: function onToggle() {
          return _this4.SetState(_this4.fn.validateValue());
        },
        popOver: function popOver() {
          return _this4.getPopup();
        }
      }));
    }
  }]);

  return GAH;
}(_react.Component);

exports.default = GAH;
GAH.defaultProps = {
  size: 180,
  jalali: true,
  disabled: false,
  prevYears: 10,
  nextYears: 20,
  type: 'day'
};
var GAHContext = /*#__PURE__*/(0, _react.createContext)();

var GAHDatePickerPopup = /*#__PURE__*/function (_Component2) {
  _inherits(GAHDatePickerPopup, _Component2);

  var _super2 = _createSuper(GAHDatePickerPopup);

  function GAHDatePickerPopup() {
    _classCallCheck(this, GAHDatePickerPopup);

    return _super2.apply(this, arguments);
  }

  _createClass(GAHDatePickerPopup, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          style = _this$props3.style,
          _this$props3$defaultP = _this$props3.defaultProps,
          defaultProps = _this$props3$defaultP === void 0 ? {} : _this$props3$defaultP,
          years = _this$props3.years,
          details = _this$props3.details,
          fn = _this$props3.fn,
          onClear = _this$props3.onClear,
          disabled = _this$props3.disabled,
          size = _this$props3.size,
          jalali = _this$props3.jalali,
          _this$props3$activeYe = _this$props3.activeYear,
          activeYear = _this$props3$activeYe === void 0 ? details.year : _this$props3$activeYe,
          _this$props3$activeMo = _this$props3.activeMonth,
          activeMonth = _this$props3$activeMo === void 0 ? details.month : _this$props3$activeMo;
      var context = { ...this.props,
        years: years
      };
      var buttonStyle = {
        padding: "".concat(size / 20, "px 0")
      };
      return /*#__PURE__*/_react.default.createElement(GAHContext.Provider, {
        value: context
      }, /*#__PURE__*/_react.default.createElement("div", _extends({
        className: "gah-calendar"
      }, defaultProps, {
        style: { ...fn.getPopupStyle('react'),
          ...style
        }
      }), /*#__PURE__*/_react.default.createElement(GAHDatePickerGrid, {
        details: details,
        activeYear: activeYear,
        activeMonth: activeMonth
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "gah-calendar-footer",
        style: {
          fontSize: size / 13
        }
      }, onClear && !disabled && /*#__PURE__*/_react.default.createElement("button", {
        style: buttonStyle,
        onClick: function onClick() {
          return onClear(details);
        }
      }, !jalali ? 'Clear' : 'حذف'), /*#__PURE__*/_react.default.createElement("button", {
        style: buttonStyle,
        onClick: function onClick() {
          return fn.onToday();
        }
      }, fn.getTodayText()))));
    }
  }]);

  return GAHDatePickerPopup;
}(_react.Component);

var GAHDatePickerGrid = /*#__PURE__*/function (_Component3) {
  _inherits(GAHDatePickerGrid, _Component3);

  var _super3 = _createSuper(GAHDatePickerGrid);

  function GAHDatePickerGrid(props) {
    var _this5;

    _classCallCheck(this, GAHDatePickerGrid);

    _this5 = _super3.call(this, props);
    _this5.dom = /*#__PURE__*/(0, _react.createRef)();
    return _this5;
  }

  _createClass(GAHDatePickerGrid, [{
    key: "getCells",
    value: function getCells() {
      var type = this.context.type;
      return this['getCells_' + type]();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _jquery.default)(this.dom.current).find('.active').focus();
    }
  }, {
    key: "getCells_day",
    value: function getCells_day() {
      var _this$props4 = this.props,
          activeYear = _this$props4.activeYear,
          activeMonth = _this$props4.activeMonth;
      var _this$context = this.context,
          jalali = _this$context.jalali,
          SetState = _this$context.SetState,
          fn = _this$context.fn;
      var daysLength = fn.getMonthDaysLength(activeYear, activeMonth, jalali ? 'J' : 'G');
      var Days = [];

      var _loop = function _loop(day) {
        var disabled = fn.isDisabled([activeYear, activeMonth, day]);
        var className = fn.getCellClassName(activeYear, activeMonth, day, disabled);
        var onClick = disabled ? undefined : function () {
          SetState({
            year: activeYear,
            month: activeMonth,
            day: day
          }, true);
        };
        Days.push( /*#__PURE__*/_react.default.createElement("div", {
          tabIndex: 0,
          onClick: onClick,
          key: 'day' + day,
          className: className
        }, day));
      };

      for (var day = 1; day <= daysLength; day++) {
        _loop(day);
      }

      return Days;
    }
  }, {
    key: "getCells_month",
    value: function getCells_month() {
      var _this$context2 = this.context,
          jalali = _this$context2.jalali,
          SetState = _this$context2.SetState,
          fn = _this$context2.fn;
      var activeYear = this.props.activeYear;
      var months = fn.getMonths(jalali ? 'J' : 'G');
      var Months = [];

      var _loop2 = function _loop2(month) {
        var disabled = fn.isDisabled([activeYear, month + 1, 1]);
        var text = jalali ? months[month] : months[month].slice(0, 3);
        var className = fn.getCellClassName(activeYear, month + 1, 1, disabled);
        var onClick = disabled ? undefined : function () {
          return SetState({
            year: activeYear,
            month: month + 1,
            day: 1
          }, true);
        };
        var style = {
          borderRadius: 0
        };
        Months.push( /*#__PURE__*/_react.default.createElement("div", {
          className: className,
          tabIndex: 0,
          key: month,
          style: style,
          onClick: onClick
        }, text));
      };

      for (var month = 0; month < months.length; month++) {
        _loop2(month);
      }

      return Months;
    }
  }, {
    key: "getCells_year",
    value: function getCells_year() {
      var _this$context3 = this.context,
          years = _this$context3.years,
          SetState = _this$context3.SetState,
          fn = _this$context3.fn;
      var Years = [];

      var _loop3 = function _loop3(year) {
        var disabled = fn.isDisabled([years[year], 1, 1]);
        var className = fn.getCellClassName(years[year], 1, 1, disabled);
        Years.push( /*#__PURE__*/_react.default.createElement("div", {
          className: className,
          tabIndex: 0,
          key: year,
          style: {
            borderRadius: 0,
            minHeight: '24px'
          },
          onClick: disabled ? undefined : function () {
            return SetState({
              year: years[year],
              month: 1,
              day: 1
            }, true);
          }
        }, years[year]));
      };

      for (var year = 0; year < years.length; year++) {
        _loop3(year);
      }

      return Years;
    }
  }, {
    key: "getArrow",
    value: function getArrow(sign, icon) {
      var _this$context4 = this.context,
          disabled = _this$context4.disabled,
          fn = _this$context4.fn,
          type = _this$context4.type,
          size = _this$context4.size,
          SetState = _this$context4.SetState;

      if (disabled) {
        return '';
      }

      var _this$props5 = this.props,
          activeYear = _this$props5.activeYear,
          activeMonth = _this$props5.activeMonth;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "gah-calendar-header-icon",
        onClick: function onClick() {
          return SetState(fn.changeActivePage(sign, type, {
            activeYear: activeYear,
            activeMonth: activeMonth
          }));
        },
        style: {
          width: size / 7,
          height: size / 7
        }
      }, icon);
    }
  }, {
    key: "getHeader",
    value: function getHeader() {
      var _this$context5 = this.context,
          icons = _this$context5.icons,
          size = _this$context5.size,
          jalali = _this$context5.jalali,
          fn = _this$context5.fn,
          SetState = _this$context5.SetState;
      var _this$props6 = this.props,
          activeYear = _this$props6.activeYear,
          activeMonth = _this$props6.activeMonth;
      var sign = jalali ? -1 : 1;

      var onChange = function onChange(obj) {
        SetState(obj);
      };

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "gah-calendar-header",
        style: {
          height: size / 4,
          padding: "0 ".concat(size / 12.5, "px")
        }
      }, this.getArrow(-sign, icons.minus), /*#__PURE__*/_react.default.createElement("div", {
        className: "gah-month",
        onClick: function onClick() {},
        style: {
          fontSize: Math.floor(size / 12)
        }
      }, fn.getGridHeaderValue(activeYear, activeMonth, function (obj) {
        return onChange(obj);
      })), this.getArrow(sign, icons.plus));
    }
  }, {
    key: "getContentday",
    value: function getContentday() {
      var fn = this.context.fn;
      var _this$props7 = this.props,
          activeYear = _this$props7.activeYear,
          activeMonth = _this$props7.activeMonth;
      var Spaces = fn.renderSpaces(activeYear, activeMonth, 'react'),
          WeekDays = fn.renderWeekDays('react'),
          Days = this.getCells();
      var EndSpaces = fn.renderEndSpaces(42 - (Spaces.length + Days.length), 'react');
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, WeekDays, Spaces, Days, EndSpaces);
    }
  }, {
    key: "getContentmonth",
    value: function getContentmonth() {
      return this.getCells();
    }
  }, {
    key: "getContentyear",
    value: function getContentyear() {
      return this.getCells();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$context6 = this.context,
          fn = _this$context6.fn,
          type = _this$context6.type;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.getHeader(), /*#__PURE__*/_react.default.createElement("div", {
        ref: this.dom,
        className: "gah-calendar-grid",
        style: fn.getGridStyle('react')
      }, this['getContent' + type]()));
    }
  }]);

  return GAHDatePickerGrid;
}(_react.Component);

_defineProperty(GAHDatePickerGrid, "contextType", GAHContext);

function RDATE(_ref) {
  var _$$;

  var getState = _ref.getState,
      getProps = _ref.getProps,
      setState = _ref.setState;
  var $$ = (_$$ = {
    g2j: function g2j(gy, gm, gd) {
      var g_d_m, jy, jm, jd, gy2, days;
      g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      gy2 = gm > 2 ? gy + 1 : gy;
      days = 355666 + 365 * gy + ~~((gy2 + 3) / 4) - ~~((gy2 + 99) / 100) + ~~((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
      jy = -1595 + 33 * ~~(days / 12053);
      days %= 12053;
      jy += 4 * ~~(days / 1461);
      days %= 1461;

      if (days > 365) {
        jy += ~~((days - 1) / 365);
        days = (days - 1) % 365;
      }

      if (days < 186) {
        jm = 1 + ~~(days / 31);
        jd = 1 + days % 31;
      } else {
        jm = 7 + ~~((days - 186) / 30);
        jd = 1 + (days - 186) % 30;
      }

      return [jy, jm, jd];
    },
    j2g: function j2g(jy, jm, jd) {
      var sal_a, gy, gm, gd, days;
      jy += 1595;
      days = -355668 + 365 * jy + ~~(jy / 33) * 8 + ~~((jy % 33 + 3) / 4) + jd + (jm < 7 ? (jm - 1) * 31 : (jm - 7) * 30 + 186);
      gy = 400 * ~~(days / 146097);
      days %= 146097;

      if (days > 36524) {
        gy += 100 * ~~(--days / 36524);
        days %= 36524;
        if (days >= 365) days++;
      }

      gy += 4 * ~~(days / 1461);
      days %= 1461;

      if (days > 365) {
        gy += ~~((days - 1) / 365);
        days = (days - 1) % 365;
      }

      gd = days + 1;
      sal_a = [0, 31, gy % 4 === 0 && gy % 100 !== 0 || gy % 400 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) {
        gd -= sal_a[gm];
      }

      return [gy, gm, gd];
    },
    GetMonthDaysLength: {
      J: function J(year, month) {
        if (month <= 6) {
          return 31;
        }

        if (month <= 11) {
          return 30;
        }

        if ([1, 5, 9, 13, 17, 22, 26, 30].indexOf(year % 33) === -1) {
          return 29;
        }

        return 30;
      },
      G: function G(year, month) {
        return new Date(year, month, 0).getDate();
      }
    },
    getMonthDaysLength: function getMonthDaysLength(year, month, type) {
      return $$.GetMonthDaysLength[type](year, month);
    },
    getDayIndexInYear: function getDayIndexInYear(_ref2) {
      var _ref3 = _slicedToArray(_ref2, 3),
          year = _ref3[0],
          month = _ref3[1],
          day = _ref3[2];

      var index = 0;

      for (var i = 1; i < month; i++) {
        index += i <= 6 ? 31 : 30;
      }

      return index + day;
    },
    getLeapBetweenYears: function getLeapBetweenYears(start, end) {
      var count = 0;
      start++;

      while (start < end) {
        if ([1, 5, 9, 13, 17, 22, 26, 30].indexOf(start % 33) !== -1) {
          count++;
        }

        start++;
      }

      return count;
    },
    getDaysBetween: function getDaysBetween(start, end) {
      if (end[0] - start[0] === 0) {
        return Math.max($$.getDayIndexInYear(end) - $$.getDayIndexInYear(start) - 1, 0);
      }

      var result = 0;

      if (end[0] - start[0] > 1) {
        var leaps = $$.getLeapBetweenYears(start[0], end[0]);
        var notLeaps = Math.max(end[0] - start[0] - 1 - leaps, 0);
        result = leaps * 366 + notLeaps * 365;
      }

      result += $$.getDayIndexInYear(end) - 1;
      result += ([1, 5, 9, 13, 17, 22, 26, 30].indexOf(start[0] % 33) !== -1 ? 366 : 365) - $$.getDayIndexInYear(start);
      return result;
    },
    compaireDate: function compaireDate(_ref4, _ref5) {
      var _ref6 = _slicedToArray(_ref4, 3),
          year1 = _ref6[0],
          month1 = _ref6[1],
          day1 = _ref6[2];

      var _ref7 = _slicedToArray(_ref5, 3),
          year2 = _ref7[0],
          month2 = _ref7[1],
          day2 = _ref7[2];

      if (year1 < year2) {
        return 'less';
      }

      if (year1 > year2) {
        return 'greater';
      }

      if (month1 < month2) {
        return 'less';
      }

      if (month1 > month2) {
        return 'greater';
      }

      if (day1 < day2) {
        return 'less';
      }

      if (day1 > day2) {
        return 'greater';
      }

      return 'equal';
    },
    getNextDay: function getNextDay(_ref8, type) {
      var _ref9 = _slicedToArray(_ref8, 3),
          year = _ref9[0],
          month = _ref9[1],
          day = _ref9[2];

      if (day < $$.getMonthDaysLength(year, month, type)) {
        return [year, month, day + 1];
      }

      if (month < 12) {
        return [year, month + 1, 1];
      }

      return [year + 1, 1, 1];
    },
    getPrevDay: function getPrevDay(_ref10, type) {
      var _ref11 = _slicedToArray(_ref10, 3),
          year = _ref11[0],
          month = _ref11[1],
          day = _ref11[2];

      if (day > 1) {
        return [year, month, day - 1];
      }

      if (month > 1) {
        month -= 1;
        day = $$.getMonthDaysLength(year, month, type);
        return [year, month, day];
      }

      year -= 1;
      month = 12;
      day = $$.getMonthDaysLength(year, month, type);
      return [year, month, day];
    },
    getNextMonth: function getNextMonth(_ref12) {
      var _ref13 = _slicedToArray(_ref12, 2),
          year = _ref13[0],
          month = _ref13[1];

      return month < 12 ? [year, month + 1, 1] : [year + 1, 1, 1];
    },
    getPrevMonth: function getPrevMonth(_ref14) {
      var _ref15 = _slicedToArray(_ref14, 2),
          year = _ref15[0],
          month = _ref15[1];

      return month > 1 ? [year, month - 1, 1] : [year - 1, 12, 1];
    },
    GetWeekDay: {
      J: function J(_ref16) {
        var _ref17 = _slicedToArray(_ref16, 3),
            year = _ref17[0],
            month = _ref17[1],
            day = _ref17[2];

        var res = $$.compaireDate([year, month, day], [1399, 12, 30]);
        var offset;
        var weekDays = $$.getWeekDays('J');

        if (res === 'equal') {
          offset = 0;
        } else if (res === 'less') {
          offset = (-$$.getDaysBetween([year, month, day], [1399, 12, 30]) - 1) % 7;

          if (offset < 0) {
            offset += 7;
          }
        } else {
          offset = ($$.getDaysBetween([1399, 12, 30], [year, month, day]) + 1) % 7;
        }

        return {
          weekDay: weekDays[offset],
          index: offset
        };
      },
      G: function G(_ref18) {
        var _ref19 = _slicedToArray(_ref18, 3),
            year = _ref19[0],
            month = _ref19[1],
            day = _ref19[2];

        var offset = new Date(year, month - 1, day).getDay();
        var weekDays = $$.getWeekDays('G');
        return {
          weekDay: weekDays[offset],
          index: offset
        };
      }
    },
    getWeekDay: function getWeekDay(date, type) {
      return $$.GetWeekDay[type](date);
    },
    GetToday: {
      J: function J(type) {
        var date = new Date().toLocaleDateString('fa-IR').split('/');
        var dic = {
          '۰': 0,
          '۱': 1,
          '۲': 2,
          '۳': 3,
          '۴': 4,
          '۵': 5,
          '۶': 6,
          '۷': 7,
          '۸': 8,
          '۹': 9
        };

        for (var j = 0; j < date.length; j++) {
          var str = '';

          for (var i = 0; i < date[j].length; i++) {
            str += dic[date[j][i]];
          }

          date[j] = Number(str);
        }

        if (type === 'month') {
          date[2] = 1;
        } else if (type === 'year') {
          date[1] = 1;
          date[2] = 1;
        }

        return date;
      },
      G: function G(type) {
        var date = new Date();
        var result = [date.getFullYear(), date.getMonth() + 1, date.getDate()];

        if (type === 'month') {
          result[2] = 1;
        } else if (type === 'year') {
          result[1] = 1;
          result[2] = 1;
        }

        return result;
      }
    },
    getToday: function getToday(mode) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'day';
      return $$.GetToday[mode](type);
    },
    getMonths: function getMonths(type) {
      return {
        J: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        G: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
      }[type];
    },
    getWeekDays: function getWeekDays(type) {
      return {
        J: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
        G: ['SUNDAY', 'MONDAY', 'THUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
      }[type];
    },
    getSplitter: function getSplitter(value) {
      var splitter = '/';

      for (var i = 0; i < value.length; i++) {
        if (isNaN(parseInt(value[i]))) {
          return value[i];
        }
      }

      return splitter;
    },
    validateValue: function validateValue() {
      var Value,
          _getProps = getProps(),
          value = _getProps.value,
          type = _getProps.type,
          jalali = _getProps.jalali;

      var _getState = getState(),
          startYear = _getState.startYear,
          endYear = _getState.endYear;

      var today = $$.getToday(jalali ? 'J' : 'G');
      var splitter = '/';

      if (Array.isArray(value)) {
        Value = value;
      } else if (typeof value === 'string') {
        splitter = $$.getSplitter(value);
        Value = value.split(splitter);
      } else {
        Value = today;
      }

      var _Value = Value,
          _Value2 = _slicedToArray(_Value, 3),
          year = _Value2[0],
          month = _Value2[1],
          day = _Value2[2];

      year = parseInt(year);
      month = parseInt(month);
      day = parseInt(day);

      if (isNaN(year)) {
        year = today[0];
      }

      if (year < startYear) {
        year = startYear;
      }

      if (year > endYear) {
        year = endYear;
      }

      if (isNaN(month)) {
        month = today[1];
      }

      if (month < 1) {
        month = 1;
      }

      if (month > 12) {
        month = 12;
      }

      if (type === 'day') {
        if (isNaN(day)) {
          day = 1;
        }

        var daysLength = $$.getMonthDaysLength(year, month, jalali ? 'J' : 'G');

        if (day > daysLength) {
          day = daysLength;
        }

        if (day < 1) {
          day = 1;
        }
      } else {
        day = 1;
      }

      return {
        year: year,
        month: month,
        day: day,
        splitter: splitter
      };
    },
    getDateDetails: function getDateDetails() {
      var _getState2 = getState(),
          year = _getState2.year,
          month = _getState2.month,
          day = _getState2.day,
          startYear = _getState2.startYear,
          endYear = _getState2.endYear,
          splitter = _getState2.splitter;

      var _getProps2 = getProps(),
          jalali = _getProps2.jalali,
          type = _getProps2.type;

      var _$$$getWeekDay = $$.getWeekDay([year, month, day], jalali ? 'J' : 'G'),
          weekDay = _$$$getWeekDay.weekDay,
          weekDayIndex = _$$$getWeekDay.index;

      var _$$$getWeekDay2 = $$.getWeekDay([year, month, 1], jalali ? 'J' : 'G'),
          monthFirstDayWeekDay = _$$$getWeekDay2.weekDay;

      var today = $$.getToday(jalali ? 'J' : 'G', type);

      var _$$$getWeekDay3 = $$.getWeekDay(today, jalali ? 'J' : 'G'),
          todayWeekDay = _$$$getWeekDay3.weekDay,
          todayWeekDayIndex = _$$$getWeekDay3.index;

      var extra = {};
      var months = $$.getMonths(jalali ? 'J' : 'G');

      if (jalali) {
        var georgian = $$.j2g(year, month, day);
        var todayGeorgian = $$.j2g(today[0], today[1], today[2]);
        var weekDayGeorgian = $$.getWeekDay(georgian, 'G').weekDay;
        var monthStringGeorgian = $$.getMonths('G')[month - 1];
        extra = {
          georgian: georgian,
          todayGeorgian: todayGeorgian,
          weekDayGeorgian: weekDayGeorgian,
          monthStringGeorgian: monthStringGeorgian
        };
      }

      return {
        year: year,
        month: month,
        day: day,
        weekDay: weekDay,
        weekDayIndex: weekDayIndex,
        monthFirstDayWeekDay: monthFirstDayWeekDay,
        year2Digit: year.toString().slice(2, 4),
        month2Digit: month < 10 ? '0' + month : month.toString(),
        day2Digit: day < 10 ? '0' + day : day.toString(),
        weekDays: $$.getWeekDays(jalali ? 'J' : 'G'),
        monthString: months[month - 1],
        todayMonthString: months[today[1] - 1],
        startYear: startYear,
        endYear: endYear,
        dateString: year + splitter + month + splitter + day,
        fullDateString: year + splitter + month + splitter + day + ' ' + weekDay,
        today: today,
        todayWeekDay: todayWeekDay,
        todayWeekDayIndex: todayWeekDayIndex,
        ...extra
      };
    },
    getValue: function getValue() {
      var _getProps3 = getProps(),
          jalali = _getProps3.jalali,
          type = _getProps3.type,
          value = _getProps3.value,
          placeHolder = _getProps3.placeHolder;

      var _getState3 = getState(),
          splitter = _getState3.splitter,
          year = _getState3.year,
          month = _getState3.month,
          day = _getState3.day;

      if (!value) {
        if (placeHolder) {
          return placeHolder;
        }

        return !jalali ? 'Select Date' : 'انتخاب تاریخ';
      }

      if (type === 'day') {
        return year + splitter + month + splitter + day;
      }

      if (type === 'month') {
        return $$.getMonths(jalali ? 'J' : 'G')[month - 1] + ' ' + year;
      }

      if (type === 'year') {
        return year;
      }
    },
    onToday: function onToday() {
      var _getProps4 = getProps(),
          type = _getProps4.type,
          jalali = _getProps4.jalali;

      var _$$$getToday = $$.getToday(jalali ? 'J' : 'G'),
          _$$$getToday2 = _slicedToArray(_$$$getToday, 3),
          year = _$$$getToday2[0],
          month = _$$$getToday2[1],
          day = _$$$getToday2[2];

      if (type === 'month') {
        day = 1;
      } else if (type === 'year') {
        day = 1;
        month = 1;
      }

      setState({
        year: year,
        month: month,
        day: day,
        activeYear: year,
        activeMonth: month
      }, true);
    },
    getTodayText: function getTodayText() {
      var _getProps5 = getProps(),
          type = _getProps5.type,
          jalali = _getProps5.jalali;

      return {
        dayJ: 'امروز',
        dayG: 'Today',
        monthJ: 'ماه جاری',
        monthG: 'This Month',
        yearJ: 'سال جاری',
        yearG: 'This Year'
      }[type + (jalali ? 'J' : 'G')];
    },
    isDisabled: function isDisabled(date) {
      var _getProps6 = getProps(),
          limits = _getProps6.limits,
          jalali = _getProps6.jalali,
          type = _getProps6.type,
          disabled = _getProps6.disabled;

      var _getState4 = getState(),
          splitter = _getState4.splitter;

      if (disabled === true) {
        return true;
      }

      if (!limits) {
        return false;
      }

      for (var i = 0; i < limits.length; i++) {
        var limit = limits[i];

        if (type === 'day' && limit.type === 'weekDay') {
          var thisMonth = true;

          if (limit.year !== undefined && limit.year !== date[0]) {
            thisMonth = false;
          } else if (limit.month !== undefined && limit.month !== date[1]) {
            thisMonth = false;
          }

          if (thisMonth && $$.getWeekDay(date, jalali ? 'J' : 'G').index + 1 === limit.weekDay) {
            return true;
          }
        } else if (limit.type === 'between') {
          var dateArray1 = void 0,
              dateArray2 = void 0;

          if (typeof limit.date1 === 'string') {
            dateArray1 = limit.date1.split(splitter);
          } else if (Array.isArray(limit.date1)) {
            dateArray1 = limit.date1;
          } else {
            continue;
          }

          if (typeof limit.date2 === 'string') {
            dateArray2 = limit.date2.split(splitter);
          } else if (Array.isArray(limit.date2)) {
            dateArray2 = limit.date2;
          } else {
            continue;
          }

          if (type === 'month') {
            dateArray1[2] = 1;
            dateArray2[2] = 1;
          } else if (type === 'year') {
            dateArray1[1] = 1;
            dateArray1[2] = 1;
            dateArray2[1] = 1;
            dateArray2[2] = 1;
          }

          dateArray1 = [parseInt(dateArray1[0]), parseInt(dateArray1[1]), parseInt(dateArray1[2])];
          dateArray2 = [parseInt(dateArray2[0]), parseInt(dateArray2[1]), parseInt(dateArray2[2])];
          var start = void 0,
              end = void 0;

          if (['less', 'equal'].indexOf($$.compaireDate(dateArray1, dateArray2)) !== -1) {
            start = dateArray1;
            end = dateArray2;
          } else {
            start = dateArray2;
            end = dateArray1;
          }

          if ($$.compaireDate(date, start) === 'greater' && $$.compaireDate(date, end) === 'less') {
            return true;
          }
        } else {
          if (!limit.date) {
            continue;
          }

          var dateArray = void 0;

          if (typeof limit.date === 'string') {
            dateArray = limit.date.split(splitter);
          } else if (Array.isArray(limit.date)) {
            dateArray = limit.date;
          } else {
            continue;
          }

          if (type === 'month') {
            dateArray[2] = 1;
          } else if (type === 'year') {
            dateArray[1] = 1;
            dateArray[2] = 1;
          }

          if ($$.compaireDate(date, [parseInt(dateArray[0]), parseInt(dateArray[1]), parseInt(dateArray[2])]) === limit.type) {
            return true;
          }
        }
      }

      return false;
    },
    getCellClassName: function getCellClassName(Year, Month, Day, disabled) {
      var _getProps7 = getProps(),
          jalali = _getProps7.jalali;

      var _getState5 = getState(),
          year = _getState5.year,
          month = _getState5.month,
          day = _getState5.day;

      var today = $$.getToday(jalali ? 'J' : 'G');
      var str = 'gah-cell gah-cell-first';

      if (disabled) {
        str += ' disabled';
      }

      if (year === Year && month === Month && day === Day) {
        str += ' active';
      }

      if (today[0] === Year && today[1] === Month && today[2] === Day) {
        str += ' today';
      }

      if (jalali) {
        str += ' is-jalali';
      }

      return str;
    },
    changeActivePage: function changeActivePage(value, type, obj) {
      return $$['changeActivePage_' + type](value, obj);
    },
    changeActivePage_month: function changeActivePage_month(value, _ref20) {
      var activeYear = _ref20.activeYear;

      var _getState6 = getState(),
          startYear = _getState6.startYear,
          endYear = _getState6.endYear;

      if (value === 1) {
        if (activeYear === endYear) {
          return;
        }

        activeYear++;
      } else {
        if (activeYear === startYear) {
          return;
        }

        activeYear--;
      }

      return {
        activeYear: activeYear
      };
    },
    changeActivePage_day: function changeActivePage_day(value, _ref21) {
      var activeYear = _ref21.activeYear,
          activeMonth = _ref21.activeMonth;

      var _getState7 = getState(),
          startYear = _getState7.startYear,
          endYear = _getState7.endYear;

      if (value === 1) {
        if (activeMonth === 12) {
          if (activeYear === endYear) {
            return;
          }

          activeYear++;
          activeMonth = 1;
        } else {
          activeMonth++;
        }
      } else {
        if (activeMonth === 1) {
          if (activeYear === startYear) {
            return;
          }

          activeYear--;
          activeMonth = 12;
        } else {
          activeMonth--;
        }
      }

      return {
        activeYear: activeYear,
        activeMonth: activeMonth
      };
    },
    getGridStyle: function getGridStyle() {
      var platform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'react';

      var _getProps8 = getProps(),
          size = _getProps8.size,
          jalali = _getProps8.jalali,
          type = _getProps8.type;

      var columnCount = {
        day: 7,
        month: 3,
        year: 4
      }[type];
      var rowCount = {
        day: 7,
        month: 4,
        year: 0
      }[type];
      var padding = size / 18,
          fontSize = size / 15,
          a = (size - padding * 2) / columnCount;
      var rowHeight = {
        day: a,
        month: size / 6,
        year: size / 7
      }[type];
      var gridTemplateColumns = '',
          gridTemplateRows = '';

      for (var i = 1; i <= columnCount; i++) {
        gridTemplateColumns += a + 'px' + (i !== columnCount ? ' ' : '');
      }

      for (var _i2 = 1; _i2 <= rowCount; _i2++) {
        gridTemplateRows += rowHeight + 'px' + (_i2 !== rowCount ? ' ' : '');
      }

      var direction = jalali ? 'rtl' : 'ltr';

      if (platform === 'react') {
        return {
          gridTemplateColumns: gridTemplateColumns,
          gridTemplateRows: gridTemplateRows,
          direction: direction,
          padding: padding,
          fontSize: fontSize
        };
      } else if (platform === 'jquery') {
        return "grid-template-columns:".concat(gridTemplateColumns, ";grid-template-rows:").concat(gridTemplateRows, ";direction:").concat(direction, ";padding:").concat(padding, "px;font-size:").concat(fontSize, "px;");
      }
    },
    getGridHeaderValue: function getGridHeaderValue(activeYear, activeMonth, onChange) {
      var _getProps9 = getProps(),
          jalali = _getProps9.jalali,
          type = _getProps9.type;

      var _getState8 = getState(),
          years = _getState8.years;

      var result = '';

      if (type === 'day') {
        var months = $$.getMonths(jalali ? 'J' : 'G');

        if (!jalali) {
          months = months.map(function (o) {
            return o.slice(0, 3);
          });
        }

        var monthString = months[activeMonth - 1];
        result += monthString + ' ';
      }

      result += activeYear;
      return result;
    }
  }, _defineProperty(_$$, "getGridHeaderValue", function getGridHeaderValue(activeYear, activeMonth, _onChange) {
    var _getProps10 = getProps(),
        jalali = _getProps10.jalali,
        type = _getProps10.type;

    var _getState9 = getState(),
        years = _getState9.years;

    var M = '';

    if (type === 'day') {
      var months = $$.getMonths(jalali ? 'J' : 'G');

      if (!jalali) {
        months = months.map(function (o) {
          return o.slice(0, 3);
        });
      }

      M = /*#__PURE__*/_react.default.createElement("select", {
        className: "select-active",
        value: activeMonth.toString(),
        onChange: function onChange(e) {
          return _onChange({
            activeMonth: parseInt(e.target.value)
          });
        }
      }, months.map(function (o, i) {
        return /*#__PURE__*/_react.default.createElement("option", {
          key: i,
          value: (i + 1).toString()
        }, o);
      }));
    }

    var Y = /*#__PURE__*/_react.default.createElement("select", {
      className: "select-active",
      value: activeYear.toString(),
      onChange: function onChange(e) {
        return _onChange({
          activeYear: parseInt(e.target.value)
        });
      }
    }, years.map(function (o, i) {
      return /*#__PURE__*/_react.default.createElement("option", {
        key: i,
        value: o.toString()
      }, o);
    }));

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, M, Y);
  }), _defineProperty(_$$, "renderWeekDays", function renderWeekDays() {
    var platform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'react';

    var _getProps11 = getProps(),
        jalali = _getProps11.jalali;

    var weekDays = $$.getWeekDays(jalali ? 'J' : 'G'),
        cls = 'gah-weekday gah-cell';

    if (platform === 'react') {
      return weekDays.map(function (w, i) {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: 'weekDay' + i,
          className: cls
        }, /*#__PURE__*/_react.default.createElement("span", null, w.slice(0, jalali ? 1 : 2)));
      });
    } else if (platform === 'jquery') {
      return weekDays.map(function (w, i) {
        return "<div class='".concat(cls, "'><span>").concat(w.slice(0, jalali ? 1 : 2), "</span></div>");
      }).join(' ');
    }
  }), _defineProperty(_$$, "renderEndSpaces", function renderEndSpaces(length) {
    var platform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'react';

    if (platform === 'react') {
      var Spaces = [];

      for (var i = 0; i < length; i++) {
        Spaces.push( /*#__PURE__*/_react.default.createElement("div", {
          key: 'endspace' + i,
          className: "gah-space gah-cell"
        }));
      }

      return Spaces;
    } else if (platform === 'jquery') {
      var _Spaces = '';

      for (var _i3 = 0; _i3 < length; _i3++) {
        _Spaces += "<div class='gah-space gah-cell'></div>";
      }

      return _Spaces;
    }
  }), _defineProperty(_$$, "renderSpaces", function renderSpaces(activeYear, activeMonth) {
    var platform = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'react';

    var _getProps12 = getProps(),
        jalali = _getProps12.jalali;

    var firstDayWeekDayIndex = $$.getWeekDay([activeYear, activeMonth, 1], jalali ? 'J' : 'G').index;

    if (platform === 'react') {
      var Spaces = [];

      for (var i = 0; i < firstDayWeekDayIndex; i++) {
        Spaces.push( /*#__PURE__*/_react.default.createElement("div", {
          key: 'space' + i,
          className: "gah-space gah-cell"
        }));
      }

      return Spaces;
    } else if (platform === 'jquery') {
      var _Spaces2 = '';

      for (var _i4 = 0; _i4 < firstDayWeekDayIndex; _i4++) {
        _Spaces2 += "<div class='gah-space gah-cell'></div>";
      }

      return _Spaces2;
    }
  }), _defineProperty(_$$, "getTodayContent", function getTodayContent(details) {
    var platform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'react';

    var _getProps13 = getProps(),
        jalali = _getProps13.jalali,
        size = _getProps13.size,
        type = _getProps13.type;

    var month = details.todayMonthString;
    var week = details.todayWeekDay;
    var today = details.today;

    if (platform === 'react') {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "gah-today",
        style: {
          width: size / 2
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          fontSize: size / 13
        }
      }, $$.getTodayText()), type === 'day' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          fontSize: size / 11
        }
      }, jalali ? week : week.slice(0, 3)), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          fontSize: size / 12 * 4,
          height: size / 12 * 4
        }
      }, today[2]), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          fontSize: size / 11
        }
      }, jalali ? month : month.slice(0, 3))), type === 'month' && /*#__PURE__*/_react.default.createElement("div", {
        style: {
          fontSize: size / 8
        }
      }, jalali ? month : month.slice(0, 3)), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          fontSize: size / 11
        }
      }, today[0]));
    } else if (platform === 'jquery') {
      return "\n            <div class='gah-today' style='width:".concat(size / 2, "px;'>\n              <div style='font-size:").concat(size / 13, "px;'>").concat($$.getTodayText(), "</div>\n              ").concat(type === 'day' ? "\n                  <div style='font-size:".concat(size / 11, "px;'>").concat(jalali ? week : week.slice(0, 3), "</div>\n                  <div style='font-size:").concat(size / 12 * 4, "px;height:").concat(size / 12 * 4, "px;'>").concat(today[2], "</div>\n                  <div style='font-size:").concat(size / 11, "px;'>").concat(jalali ? month : month.slice(0, 3), "</div>\n                ") : '', "\n              ").concat(type === 'month' ? "<div style='font-size:".concat(size / 8, "px;'>").concat(jalali ? month : month.slice(0, 3), "</div>") : '', "\n              <div style='font-size:").concat(size / 11, "px;'>").concat(today[0], "</div>\n            </div>\n        ");
    }
  }), _defineProperty(_$$, "getPopupStyle", function getPopupStyle() {
    var platform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'react';

    var _getProps14 = getProps(),
        size = _getProps14.size,
        disabled = _getProps14.disabled;

    if (platform === 'react') {
      return {
        width: size,
        fontSize: size / 17,
        cursor: disabled ? 'not-allowed' : undefined
      };
    }

    if (platform === 'jquery') {
      return "width:".concat(size, "px;font-size:").concat(size / 17, "px;").concat(disabled ? ' cursor:not-allowed;' : '');
    }
  }), _$$);
  return {
    g2j: $$.g2j,
    j2g: $$.j2g,
    getMonthDaysLength: $$.getMonthDaysLength,
    getDayIndexInYear: $$.getDayIndexInYear,
    getDaysBetween: $$.getDaysBetween,
    compaireDate: $$.compaireDate,
    getNextDay: $$.getNextDay,
    getPrevDay: $$.getPrevDay,
    getNextMonth: $$.getNextMonth,
    getPrevMonth: $$.getPrevMonth,
    getWeekDay: $$.getWeekDay,
    getToday: $$.getToday,
    getMonths: $$.getMonths,
    getWeekDays: $$.getWeekDays,
    getSplitter: $$.getSplitter,
    validateValue: $$.validateValue,
    getDateDetails: $$.getDateDetails,
    getValue: $$.getValue,
    onToday: $$.onToday,
    getTodayText: $$.getTodayText,
    isDisabled: $$.isDisabled,
    getCellClassName: $$.getCellClassName,
    changeActivePage: $$.changeActivePage,
    getGridStyle: $$.getGridStyle,
    getGridHeaderValue: $$.getGridHeaderValue,
    renderWeekDays: $$.renderWeekDays,
    renderEndSpaces: $$.renderEndSpaces,
    renderSpaces: $$.renderSpaces,
    getTodayContent: $$.getTodayContent,
    getPopupStyle: $$.getPopupStyle
  };
}