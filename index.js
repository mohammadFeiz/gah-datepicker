"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RDATE = RDATE;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _aioButton = _interopRequireDefault(require("./aio-button"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

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
    _this.calc = new dateCalculator();
    return _this;
  }

  _createClass(GAH, [{
    key: "getDateStyle",
    value: function getDateStyle(type, obj) {
      var _this$props$getDateSt = this.props.getDateStyle,
          getDateStyle = _this$props$getDateSt === void 0 ? function () {
        return {};
      } : _this$props$getDateSt;
      var _this$props$type$getD = this.props[type].getDateStyle,
          GetDateStyle = _this$props$type$getD === void 0 ? function () {
        return {};
      } : _this$props$type$getD;
      var selfDateStyle = GetDateStyle(obj) || {};
      selfDateStyle = _typeof(selfDateStyle) === 'object' ? selfDateStyle : {};
      var allDateStyle = getDateStyle(obj) || {};
      allDateStyle = _typeof(allDateStyle) === 'object' ? allDateStyle : {};
      return { ...allDateStyle,
        ...selfDateStyle
      };
    }
  }, {
    key: "setDisabled",
    value: function setDisabled(type, obj) {
      var _this$props = this.props,
          start = _this$props.start,
          end = _this$props.end,
          _this$props$setDisabl = _this$props.setDisabled,
          setDisabled = _this$props$setDisabl === void 0 ? function () {
        return false;
      } : _this$props$setDisabl;

      if (type === 'start' && this.calc.isGreater(obj.dateString, end.value)) {
        return true;
      }

      if (type === 'end' && this.calc.isLess(obj.dateString, start.value)) {
        return true;
      }

      if (setDisabled(obj, this.calc) === true) {
        return true;
      }

      var _this$props$type$setD = this.props[type].setDisabled,
          SetDisabled = _this$props$type$setD === void 0 ? function () {
        return false;
      } : _this$props$type$setD;

      if (SetDisabled(obj, this.calc) === true) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var range = this.props.range;

      if (range) {
        var _this$props2 = this.props,
            start = _this$props2.start,
            end = _this$props2.end,
            _this$props2$calendar = _this$props2.calendarType,
            calendarType = _this$props2$calendar === void 0 ? 'gregorian' : _this$props2$calendar,
            _this$props2$unit = _this$props2.unit,
            unit = _this$props2$unit === void 0 ? 'day' : _this$props2$unit;

        if (_typeof(start) !== 'object') {
          console.error('gah datepicker error => in range mode, start props should be an object');
          return null;
        }

        if (_typeof(end) !== 'object') {
          console.error('gah datepicker error => in range mode, end props should be an object');
          return null;
        }

        return /*#__PURE__*/_react.default.createElement("div", {
          className: "gah-rangepicker",
          style: {
            direction: calendarType === 'gregorian' ? 'ltr' : 'rtl'
          }
        }, /*#__PURE__*/_react.default.createElement(GAHBase, _extends({}, this.props, start, {
          value: start.value,
          setDisabled: function setDisabled(obj) {
            return _this2.setDisabled('start', obj);
          },
          getDateStyle: function getDateStyle(obj) {
            return _this2.getDateStyle('start', obj);
          },
          editValue: function editValue(text) {
            if (start.editValue) {
              return start.editValue(text);
            }

            if (calendarType === 'gregorian') {
              return 'From Date' + ' : ' + text;
            }

            if (calendarType === 'jalali') {
              return 'از تاریخ' + ' : ' + text;
            }
          },
          onChange: start.onChange ? function (obj) {
            return start.onChange(obj);
          } : undefined,
          multiselect: false,
          unit: unit,
          calendarType: calendarType
        })), /*#__PURE__*/_react.default.createElement(GAHBase, _extends({}, this.props, end, {
          value: end.value,
          setDisabled: function setDisabled(obj) {
            return _this2.setDisabled('end', obj);
          },
          getDateStyle: function getDateStyle(obj) {
            return _this2.getDateStyle('end', obj);
          },
          editValue: function editValue(text) {
            if (end.editValue) {
              return end.editValue(text);
            }

            if (calendarType === 'gregorian') {
              return 'To Date' + ' : ' + text;
            }

            if (calendarType === 'jalali') {
              return 'تا تاریخ' + ' : ' + text;
            }
          },
          onChange: end.onChange ? function (obj) {
            return end.onChange(obj);
          } : undefined,
          multiselect: false,
          unit: unit,
          calendarType: calendarType
        })));
      } else {
        return /*#__PURE__*/_react.default.createElement(GAHBase, this.props);
      }
    }
  }]);

  return GAH;
}(_react.Component);

exports.default = GAH;

var GAHBase = /*#__PURE__*/function (_Component2) {
  _inherits(GAHBase, _Component2);

  var _super2 = _createSuper(GAHBase);

  function GAHBase(props) {
    var _this3;

    _classCallCheck(this, GAHBase);

    _this3 = _super2.call(this, props);

    _this3.init();

    return _this3;
  }

  _createClass(GAHBase, [{
    key: "init",
    value: function init() {
      var _this4 = this;

      this.fn = new RDATE({
        getState: function getState() {
          return _this4.state;
        },
        getProps: function getProps() {
          return _this4.props;
        },
        setState: function setState(obj, send) {
          return _this4.SetState(obj, send);
        }
      });
      var _this$props3 = this.props,
          prevYears = _this$props3.prevYears,
          nextYears = _this$props3.nextYears,
          calendarType = _this$props3.calendarType,
          value = _this$props3.value,
          _this$props3$theme = _this$props3.theme,
          theme = _this$props3$theme === void 0 ? [] : _this$props3$theme;
      this.icons = {
        minus: /*#__PURE__*/_react.default.createElement("svg", {
          style: {
            width: "24px",
            height: "24px"
          },
          width: 24,
          height: 24,
          stroke: theme[0]
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
          height: 24,
          stroke: theme[0]
        }, /*#__PURE__*/_react.default.createElement("path", {
          fill: "transparent",
          d: "M11 8 L15 12 L11 16",
          strokeLinejoin: "miter-clip",
          strokeLinecap: "square",
          strokeWidth: 2
        }))
      };
      var today = this.fn.calc.getToday(calendarType);
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
    value: function updateState() {
      var setState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.value;
      var obj = this.fn.validateValue(value);

      if (setState) {
        this.setState({ ...obj,
          activeYear: obj.year,
          activeMonth: obj.month,
          activeDay: obj.day
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
      var _this5 = this;

      var _this$props4 = this.props,
          onChange = _this$props4.onChange,
          multiselect = _this$props4.multiselect;

      var callback = function callback() {};

      if (sendChanges && onChange) {
        callback = function callback() {
          return onChange(multiselect ? _this5.fn.updateValues(_this5.values, _this5.details.dateString) : _this5.details);
        };
      }

      this.setState(obj, callback);
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
        className: "gah-popup",
        style: {
          display: 'flex'
        }
      }, /*#__PURE__*/_react.default.createElement(GAHDatePickerPopup, _extends({}, this.props, this.state, {
        fn: this.fn,
        icons: this.icons,
        style: undefined,
        SetState: this.SetState.bind(this),
        details: this.details,
        values: this.values
      })), this.fn.getTodayContent(this.details, 'react'));
    }
  }, {
    key: "renderMultiselect",
    value: function renderMultiselect() {
      var _this6 = this;

      var _this$props5 = this.props,
          calendarType = _this$props5.calendarType,
          className = _this$props5.className,
          icon = _this$props5.icon,
          _onChange = _this$props5.onChange,
          unit = _this$props5.unit;
      this.details = this.fn.getDateDetails();
      this.values = this.fn.getValues();
      return /*#__PURE__*/_react.default.createElement(_aioButton.default, _extends({
        showTag: false
      }, this.props, {
        before: icon ? icon : undefined,
        type: "multiselect",
        editTag: function editTag(text) {
          if (unit === 'hour') {
            var splitter = _this6.state.splitter;

            var _text$split = text.split(splitter),
                _text$split2 = _slicedToArray(_text$split, 4),
                year = _text$split2[0],
                month = _text$split2[1],
                day = _text$split2[2],
                hour = _text$split2[3];

            return "".concat(year).concat(splitter).concat(month).concat(splitter).concat(day, " ").concat(hour, ":00");
          }

          return text;
        },
        values: this.values,
        className: 'gah' + (className ? ' ' + className : ''),
        text: this.fn.getValue() + ' (' + this.values.length + ')',
        options: this.values.map(function (o) {
          return {
            value: o,
            text: o
          };
        }),
        rtl: calendarType === 'jalali',
        onChange: function onChange(values, value, type) {
          _onChange(_this6.values.filter(function (o) {
            return o !== value;
          }));
        },
        popupStyle: {
          border: 'none'
        },
        popupClassName: "gah-popup-container",
        popOver: function popOver() {
          return _this6.getPopup();
        }
      }));
    }
  }, {
    key: "swipe",
    value: function swipe(dy) {
      if (this.lastSwipe !== undefined && dy === this.lastSwipe) {
        return;
      }

      this.lastSwipe = dy;
      var _this$props6 = this.props,
          calendarType = _this$props6.calendarType,
          unit = _this$props6.unit,
          setDisabled = _this$props6.setDisabled;

      if (!this.startSwipe) {
        var _this$state = this.state,
            _year = _this$state.year,
            _month = _this$state.month,
            _day = _this$state.day,
            _hour = _this$state.hour;
        this.startSwipe = [_year, _month, _day, _hour];
      }

      var _this$fn$calc$getByOf = this.fn.calc.getByOffset({
        date: this.startSwipe,
        offset: dy,
        unit: unit,
        calendarType: calendarType
      }),
          _this$fn$calc$getByOf2 = _slicedToArray(_this$fn$calc$getByOf, 4),
          year = _this$fn$calc$getByOf2[0],
          month = _this$fn$calc$getByOf2[1],
          day = _this$fn$calc$getByOf2[2],
          hour = _this$fn$calc$getByOf2[3];

      if (setDisabled(this.fn.validateValue([year, month, day, hour], unit), this.fn.calc)) {
        return;
      }

      this.setState({
        year: year,
        month: month,
        day: day,
        hour: hour
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      this.update = false;
      var _this$props7 = this.props,
          calendarType = _this$props7.calendarType,
          className = _this$props7.className,
          icon = _this$props7.icon,
          multiselect = _this$props7.multiselect,
          _this$props7$onChange = _this$props7.onChange,
          onChange = _this$props7$onChange === void 0 ? function () {} : _this$props7$onChange,
          justCalendar = _this$props7.justCalendar,
          swipe = _this$props7.swipe;

      if (multiselect) {
        return this.renderMultiselect();
      }

      if (JSON.stringify(this.props.value) !== this.state.prevValue) {
        this.state.prevValue = JSON.stringify(this.props.value);
        this.update = true;
      }

      this.details = this.fn.getDateDetails();

      if (justCalendar) {
        return this.getPopup();
      }

      return /*#__PURE__*/_react.default.createElement(_aioButton.default, _extends({}, this.props, {
        onSwipe: swipe ? function (dx, dy) {
          return _this7.swipe(Math.floor(dy / 6));
        } : undefined,
        onSwipeEnd: swipe ? function () {
          _this7.lastSwipe = undefined;
          _this7.startSwipe = undefined;
          onChange(_this7.details);
        } : undefined,
        disabled: false,
        before: icon ? icon : undefined,
        type: "button",
        className: 'gah' + (className ? ' ' + className : ''),
        text: this.fn.getValue(),
        rtl: calendarType === 'jalali',
        popupStyle: {
          border: 'none'
        },
        popupClassName: "gah-popup-container",
        popOver: function popOver() {
          return _this7.getPopup();
        }
      }));
    }
  }]);

  return GAHBase;
}(_react.Component);

GAHBase.defaultProps = {
  size: 180,
  calendarType: 'gregorian',
  disabled: false,
  prevYears: 10,
  nextYears: 20,
  unit: 'day',
  theme: ['dodgerblue', '#fff'],
  setDisabled: function setDisabled() {
    return false;
  },
  getDateStyle: function getDateStyle() {
    return {};
  }
};
var GAHContext = /*#__PURE__*/(0, _react.createContext)();

var GAHDatePickerPopup = /*#__PURE__*/function (_Component3) {
  _inherits(GAHDatePickerPopup, _Component3);

  var _super3 = _createSuper(GAHDatePickerPopup);

  function GAHDatePickerPopup() {
    _classCallCheck(this, GAHDatePickerPopup);

    return _super3.apply(this, arguments);
  }

  _createClass(GAHDatePickerPopup, [{
    key: "render",
    value: function render() {
      var _this$props8 = this.props,
          years = _this$props8.years,
          details = _this$props8.details,
          fn = _this$props8.fn,
          _this$props8$activeYe = _this$props8.activeYear,
          activeYear = _this$props8$activeYe === void 0 ? details.year : _this$props8$activeYe,
          _this$props8$activeMo = _this$props8.activeMonth,
          activeMonth = _this$props8$activeMo === void 0 ? details.month : _this$props8$activeMo,
          _this$props8$activeDa = _this$props8.activeDay,
          activeDay = _this$props8$activeDa === void 0 ? details.day : _this$props8$activeDa,
          details = _this$props8.details;
      var context = { ...this.props,
        years: years
      };
      return /*#__PURE__*/_react.default.createElement(GAHContext.Provider, {
        value: context
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "gah-calendar",
        style: { ...fn.getPopupStyle('react')
        }
      }, /*#__PURE__*/_react.default.createElement(GAHDatePickerGrid, {
        details: details,
        activeYear: activeYear,
        activeMonth: activeMonth,
        activeDay: activeDay
      }), fn.renderFooter(details)));
    }
  }]);

  return GAHDatePickerPopup;
}(_react.Component);

var GAHDatePickerGrid = /*#__PURE__*/function (_Component4) {
  _inherits(GAHDatePickerGrid, _Component4);

  var _super4 = _createSuper(GAHDatePickerGrid);

  function GAHDatePickerGrid() {
    _classCallCheck(this, GAHDatePickerGrid);

    return _super4.apply(this, arguments);
  }

  _createClass(GAHDatePickerGrid, [{
    key: "getCells_hour",
    value: function getCells_hour() {
      var fn = this.context.fn;
      var _this$props9 = this.props,
          activeYear = _this$props9.activeYear,
          activeMonth = _this$props9.activeMonth,
          activeDay = _this$props9.activeDay;
      var Hours = [];

      for (var hour = 0; hour < 24; hour++) {
        Hours.push(fn.getCell([activeYear, activeMonth, activeDay, hour], 'hour'));
      }

      return Hours;
    }
  }, {
    key: "getCells_day",
    value: function getCells_day() {
      var _this$props10 = this.props,
          activeYear = _this$props10.activeYear,
          activeMonth = _this$props10.activeMonth;
      var _this$context = this.context,
          calendarType = _this$context.calendarType,
          fn = _this$context.fn;
      var daysLength = fn.calc.getMonthDaysLength(activeYear, activeMonth, calendarType);
      var Days = [];

      for (var day = 1; day <= daysLength; day++) {
        Days.push(fn.getCell([activeYear, activeMonth, day, 0], 'day'));
      }

      return Days;
    }
  }, {
    key: "getCells_month",
    value: function getCells_month() {
      var fn = this.context.fn;
      var activeYear = this.props.activeYear;
      var Months = [];

      for (var month = 0; month < 12; month++) {
        Months.push(fn.getCell([activeYear, month + 1, 1, 0], 'month'));
      }

      return Months;
    }
  }, {
    key: "getArrow",
    value: function getArrow(sign, icon) {
      var _this$context2 = this.context,
          fn = _this$context2.fn,
          unit = _this$context2.unit,
          size = _this$context2.size,
          SetState = _this$context2.SetState;
      var _this$props11 = this.props,
          activeYear = _this$props11.activeYear,
          activeMonth = _this$props11.activeMonth,
          activeDay = _this$props11.activeDay;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "gah-calendar-header-icon",
        onClick: function onClick() {
          return SetState(fn.changeActivePage(sign, unit, {
            activeYear: activeYear,
            activeMonth: activeMonth,
            activeDay: activeDay
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
      var _this$context3 = this.context,
          icons = _this$context3.icons,
          size = _this$context3.size,
          calendarType = _this$context3.calendarType,
          fn = _this$context3.fn,
          SetState = _this$context3.SetState,
          _this$context3$theme = _this$context3.theme,
          theme = _this$context3$theme === void 0 ? [] : _this$context3$theme;
      var _this$props12 = this.props,
          activeYear = _this$props12.activeYear,
          activeMonth = _this$props12.activeMonth,
          activeDay = _this$props12.activeDay;
      var sign = calendarType === 'gregorian' ? 1 : -1;

      var onChange = function onChange(obj) {
        SetState(obj);
      };

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "gah-calendar-header",
        style: {
          height: size / 4,
          padding: "0 ".concat(size / 12.5, "px"),
          background: theme[1],
          color: theme[0]
        }
      }, this.getArrow(-sign, icons.minus), /*#__PURE__*/_react.default.createElement("div", {
        className: "gah-month",
        onClick: function onClick() {},
        style: {
          fontSize: Math.floor(size / 12)
        }
      }, fn.getGridHeaderValue(activeYear, activeMonth, activeDay, function (obj) {
        return onChange(obj);
      })), this.getArrow(sign, icons.plus));
    }
  }, {
    key: "getContenthour",
    value: function getContenthour() {
      return this.getCells_hour();
    }
  }, {
    key: "getContentday",
    value: function getContentday() {
      var fn = this.context.fn;
      var _this$props13 = this.props,
          activeYear = _this$props13.activeYear,
          activeMonth = _this$props13.activeMonth;
      var Spaces = fn.renderSpaces(activeYear, activeMonth, 'react'),
          WeekDays = fn.renderWeekDays('react'),
          Days = this.getCells_day(),
          EndSpaces = fn.renderEndSpaces(42 - (Spaces.length + Days.length), 'react');
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, WeekDays, Spaces, Days, EndSpaces);
    }
  }, {
    key: "getContentmonth",
    value: function getContentmonth() {
      return this.getCells_month();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$context4 = this.context,
          fn = _this$context4.fn,
          unit = _this$context4.unit;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.getHeader(), /*#__PURE__*/_react.default.createElement("div", {
        className: "gah-calendar-grid",
        style: fn.getGridStyle('react')
      }, this['getContent' + unit]()));
    }
  }]);

  return GAHDatePickerGrid;
}(_react.Component);

_defineProperty(GAHDatePickerGrid, "contextType", GAHContext);

function RDATE(_ref) {
  var getState = _ref.getState,
      getProps = _ref.getProps,
      setState = _ref.setState;
  var $$ = {
    validateValue: function validateValue(value) {
      var Value,
          _getProps = getProps(),
          unit = _getProps.unit,
          calendarType = _getProps.calendarType;

      var _getState = getState(),
          startYear = _getState.startYear,
          endYear = _getState.endYear;

      var today = $$.calc.getToday(calendarType);
      var splitter = '/';

      if (typeof value === 'string') {
        splitter = $$.calc.getSplitter(value);
        Value = value.split(splitter).map(function (o, i) {
          return o ? parseInt(o) : today[i];
        });
      } else {
        Value = today;
      }

      var _Value = Value,
          _Value2 = _slicedToArray(_Value, 4),
          year = _Value2[0],
          month = _Value2[1],
          day = _Value2[2],
          hour = _Value2[3];

      if (year < startYear) {
        year = startYear;
      }

      if (year > endYear) {
        year = endYear;
      }

      if (month < 1) {
        month = 1;
      }

      if (month > 12) {
        month = 12;
      }

      if (unit === 'day' || unit === 'hour') {
        var daysLength = $$.calc.getMonthDaysLength(year, month, calendarType);

        if (day > daysLength) {
          day = daysLength;
        }

        if (day < 1) {
          day = 1;
        }

        if (unit === 'hour') {
          if (hour > 23) {
            hour = 23;
          }

          if (hour < 0) {
            hour = 0;
          }
        }
      } else if (unit === 'month') {
        day = false;
        hour = false;
      }

      return {
        year: year,
        month: month,
        day: day,
        hour: hour,
        splitter: splitter
      };
    },
    getDateDetails: function getDateDetails() {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getProps().unit;
      var state = getState();

      var _o = _slicedToArray(o, 4),
          _o$ = _o[0],
          year = _o$ === void 0 ? state.year : _o$,
          _o$2 = _o[1],
          month = _o$2 === void 0 ? state.month : _o$2,
          _o$3 = _o[2],
          day = _o$3 === void 0 ? state.day : _o$3,
          _o$4 = _o[3],
          hour = _o$4 === void 0 ? state.hour : _o$4;

      return $$['getDateDetails_' + unit]([year, month, day, hour]);
    },
    getDateDetails_hour: function getDateDetails_hour(o) {
      return $$.getDateDetails_day(o, true);
    },
    getDateDetails_day: function getDateDetails_day(_ref2, hourType) {
      var _ref3 = _slicedToArray(_ref2, 4),
          year = _ref3[0],
          month = _ref3[1],
          day = _ref3[2],
          hour = _ref3[3];

      var _getState2 = getState(),
          startYear = _getState2.startYear,
          endYear = _getState2.endYear,
          splitter = _getState2.splitter;

      var _getProps2 = getProps(),
          calendarType = _getProps2.calendarType,
          unit = _getProps2.unit;

      var _$$$calc$getWeekDay = $$.calc.getWeekDay([year, month, day], calendarType),
          weekDay = _$$$calc$getWeekDay.weekDay,
          weekDayIndex = _$$$calc$getWeekDay.index;

      var _$$$calc$getWeekDay2 = $$.calc.getWeekDay([year, month, 1], calendarType),
          monthFirstDayWeekDay = _$$$calc$getWeekDay2.weekDay;

      var today = $$.calc.getToday(calendarType, unit);

      var _$$$calc$getWeekDay3 = $$.calc.getWeekDay(today, calendarType),
          todayWeekDay = _$$$calc$getWeekDay3.weekDay,
          todayWeekDayIndex = _$$$calc$getWeekDay3.index;

      var extra = {};
      var months = $$.calc.getMonths(calendarType);

      if (calendarType === 'jalali') {
        var gregorian = $$.calc.jalaliToGregorian([year, month, day]);
        var todayGregorian = $$.calc.jalaliToGregorian(today);
        var _weekDayGregorian = $$.calc.getWeekDay(gregorian, 'gregorian').weekDay;
        var monthStringGregorian = $$.calc.getMonths('gregorian')[month - 1];
        extra = {
          gregorian: gregorian,
          todayGregorian: todayGregorian,
          weekDayGregorian: _weekDayGregorian,
          monthStringGregorian: monthStringGregorian
        };
      }

      return {
        year: year,
        month: month,
        day: day,
        hour: hour,
        weekDay: weekDay,
        weekDayIndex: weekDayIndex,
        monthFirstDayWeekDay: monthFirstDayWeekDay,
        year2Digit: year.toString().slice(2, 4),
        month2Digit: month < 10 ? '0' + month : month.toString(),
        day2Digit: day < 10 ? '0' + day : day.toString(),
        weekDays: $$.calc.getWeekDays(calendarType),
        monthString: months[month - 1],
        todayMonthString: months[today[1] - 1],
        startYear: startYear,
        endYear: endYear,
        dateString: year + splitter + month + splitter + day + (hourType ? splitter + hour : ''),
        fullDateString: year + splitter + month + splitter + day + ' ' + weekDay,
        today: today,
        todayWeekDay: todayWeekDay,
        todayWeekDayIndex: todayWeekDayIndex,
        ...extra,
        isLess: function isLess(o) {
          return $$.calc.isLess([year, month, day, hour], o);
        },
        isGreater: function isGreater(o) {
          return $$.calc.isGreater([year, month, day, hour], o);
        },
        isEqual: function isEqual(o) {
          return $$.calc.isEqual([year, month, day, hour], o);
        },
        isBetween: function isBetween(a, b) {
          return $$.calc.isBetween([year, month, day, hour], [a, b]);
        }
      };
    },
    getDateDetails_month: function getDateDetails_month(_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          year = _ref5[0],
          month = _ref5[1];

      var _getState3 = getState(),
          startYear = _getState3.startYear,
          endYear = _getState3.endYear,
          splitter = _getState3.splitter;

      var _getProps3 = getProps(),
          calendarType = _getProps3.calendarType,
          unit = _getProps3.unit;

      var today = $$.calc.getToday(calendarType, unit);

      var _$$$calc$getWeekDay4 = $$.calc.getWeekDay(today, calendarType),
          todayWeekDay = _$$$calc$getWeekDay4.weekDay,
          todayWeekDayIndex = _$$$calc$getWeekDay4.index;

      var extra = {};
      var months = $$.calc.getMonths(calendarType);

      if (calendarType === 'jalali') {
        var gregorian = $$.calc.jalaliToGregorian([year, month, 1]);
        var todayGregorian = $$.calc.jalaliToGregorian(today);
        var monthStringGregorian = $$.calc.getMonths('gregorian')[gregorian[1] - 1];
        extra = {
          gregorian: gregorian,
          todayGregorian: todayGregorian,
          weekDayGregorian: weekDayGregorian,
          monthStringGregorian: monthStringGregorian
        };
      }

      return {
        year: year,
        month: month,
        year2Digit: year.toString().slice(2, 4),
        month2Digit: month < 10 ? '0' + month : month.toString(),
        weekDays: $$.calc.getWeekDays(calendarType),
        monthString: months[month - 1],
        todayMonthString: months[today[1] - 1],
        startYear: startYear,
        endYear: endYear,
        dateString: year + splitter + month,
        today: today,
        todayWeekDay: todayWeekDay,
        todayWeekDayIndex: todayWeekDayIndex,
        ...extra,
        isLess: function isLess(o) {
          return $$.calc.isLess([year, month], o);
        },
        isGreater: function isGreater(o) {
          return $$.calc.isGreater([year, month], o);
        },
        isEqual: function isEqual(o) {
          return $$.calc.isEqual([year, month], o);
        },
        isBetween: function isBetween(a, b) {
          return $$.calc.isBetween([year, month], [a, b]);
        }
      };
    },
    getValue: function getValue() {
      var _getProps4 = getProps(),
          calendarType = _getProps4.calendarType,
          unit = _getProps4.unit,
          value = _getProps4.value,
          placeHolder = _getProps4.placeHolder,
          _getProps4$editValue = _getProps4.editValue,
          editValue = _getProps4$editValue === void 0 ? function (text) {
        return text;
      } : _getProps4$editValue;

      var _getState4 = getState(),
          splitter = _getState4.splitter,
          year = _getState4.year,
          month = _getState4.month,
          day = _getState4.day,
          hour = _getState4.hour;

      if (!value) {
        if (placeHolder) {
          return placeHolder;
        }

        return calendarType === 'gregorian' ? 'Select Date' : 'انتخاب تاریخ';
      }

      if (unit === 'hour') {
        return editValue(year + splitter + month + splitter + day + ' ' + hour + ':00');
      }

      if (unit === 'day') {
        return editValue(year + splitter + month + splitter + day);
      }

      if (unit === 'month') {
        return editValue($$.calc.getMonths(calendarType)[month - 1] + ' ' + year);
      }
    },
    onToday: function onToday() {
      var _getProps5 = getProps(),
          unit = _getProps5.unit,
          calendarType = _getProps5.calendarType;

      var _$$$calc$getToday = $$.calc.getToday(calendarType),
          _$$$calc$getToday2 = _slicedToArray(_$$$calc$getToday, 3),
          year = _$$$calc$getToday2[0],
          month = _$$$calc$getToday2[1],
          day = _$$$calc$getToday2[2];

      if (unit === 'month') {
        day = 1;
      }

      setState({
        activeYear: year,
        activeMonth: month,
        activeDay: day
      });
    },
    getTodayText: function getTodayText() {
      var _getProps6 = getProps(),
          unit = _getProps6.unit,
          calendarType = _getProps6.calendarType;

      return {
        hourjalali: 'ساعت کنونی',
        hourgregorian: 'This Hour',
        dayjalali: 'امروز',
        daygregorian: 'Today',
        monthjalali: 'ماه جاری',
        monthgregorian: 'This Month',
        yearjalali: 'سال جاری',
        yeargregorian: 'This Year'
      }[unit + calendarType];
    },
    searchDate: function searchDate(date, selectors) {
      var _getProps7 = getProps(),
          calendarType = _getProps7.calendarType,
          disabled = _getProps7.disabled;

      var _getState5 = getState(),
          splitter = _getState5.splitter;

      if (disabled === true) {
        return true;
      }

      if (!selectors) {
        return false;
      }

      for (var i = 0; i < selectors.length; i++) {
        var selector = selectors[i];
        var weekDay = $$.calc.getWeekDay(date, calendarType).index;
        var selectorWeekDays = !selector.weekDay ? [] : !Array.isArray(selector.weekDay) ? [selector.weekDay] : selector.weekDay;

        if (selectorWeekDays.length && selectorWeekDays.indexOf(weekDay) === -1) {
          continue;
        }

        if (selector.type === 'between') {
          var dateArray1 = void 0,
              dateArray2 = void 0;

          if (typeof selector.date[0] === 'string') {
            dateArray1 = selector.date[0].split(splitter);
          } else {
            continue;
          }

          if (typeof selector.date[1] === 'string') {
            dateArray2 = selector.date[1].split(splitter);
          } else {
            continue;
          }

          for (var _i2 = 0; _i2 < dateArray1.length; _i2++) {
            dateArray1[_i2] = parseInt(dateArray1[_i2]);
          }

          for (var _i3 = 0; _i3 < dateArray2.length; _i3++) {
            dateArray2[_i3] = parseInt(dateArray2[_i3]);
          }

          if ($$.calc.isGreater(date, dateArray1) && $$.calc.isLess(date, dateArray2)) {
            return selector;
          }
        } else {
          if (!selector.date) {
            continue;
          }

          var dateArray = void 0;

          if (typeof selector.date === 'string') {
            dateArray = selector.date.split(splitter);
          } else {
            continue;
          }

          for (var _i4 = 0; _i4 < dateArray.length; _i4++) {
            dateArray[_i4] = parseInt(dateArray[_i4]);
          }

          if ($$.calc['is' + {
            'less': 'Less',
            'greater': 'Greater',
            'equal': 'Equal'
          }[selector.type]](date, dateArray)) {
            return selector;
          }
        }
      }

      return false;
    },
    isCellInRange: function isCellInRange(date) {
      var _getProps8 = getProps(),
          unit = _getProps8.unit,
          start = _getProps8.start,
          end = _getProps8.end;

      if (!start.value && !end.value) {
        return false;
      }

      if (start.value) {
        var _$$$validateValue = $$.validateValue(start.value),
            year = _$$$validateValue.year,
            month = _$$$validateValue.month,
            day = _$$$validateValue.day,
            hour = _$$$validateValue.hour;

        if (unit === 'day') {
          hour = 0;
        }

        if (unit === 'month') {
          day = 1;
          hour = 0;
        }

        if ($$.calc.isLess(date, [year, month, day, hour])) {
          return false;
        }
      }

      if (end.value) {
        var _$$$validateValue2 = $$.validateValue(end.value),
            _year2 = _$$$validateValue2.year,
            _month2 = _$$$validateValue2.month,
            _day2 = _$$$validateValue2.day,
            _hour2 = _$$$validateValue2.hour;

        if (unit === 'day') {
          _hour2 = 0;
        }

        if (unit === 'month') {
          _day2 = 1;
          _hour2 = 0;
        }

        if ($$.calc.isGreater(date, [_year2, _month2, _day2, _hour2])) {
          return false;
        }
      }

      return true;
    },
    getCell: function getCell(date) {
      var _getProps9 = getProps(),
          theme = _getProps9.theme,
          onChange = _getProps9.onChange,
          getDateStyle = _getProps9.getDateStyle,
          setDisabled = _getProps9.setDisabled,
          calendarType = _getProps9.calendarType,
          unit = _getProps9.unit;

      var disabled = setDisabled($$.getDateDetails(date, unit), $$.calc);
      var className = $$.getCellClassName(date, disabled);
      var onClick = disabled || !onChange ? undefined : function () {
        setState({
          year: date[0],
          month: date[1],
          day: date[2],
          hour: date[3]
        }, true);
      };
      var style = {};
      var styleObj = getDateStyle($$.getDateDetails(date, unit), $$.calc) || {};
      style = { ...style,
        ...styleObj
      };

      if (className.indexOf('active') !== -1) {
        style.background = theme[0];
        style.color = theme[1];
      }

      var text;

      if (unit === 'hour') {
        text = date[3] + ':00';
      } else if (unit === 'day') {
        text = date[2];
      } else if (unit === 'month') {
        var months = $$.calc.getMonths(calendarType);
        text = calendarType === 'gregorian' ? months[date[1]].slice(0, 3) : months[date[1]];
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        key: date,
        style: style,
        onClick: onClick,
        className: className
      }, disabled ? /*#__PURE__*/_react.default.createElement("del", null, text) : text);
    },
    convertToString: function convertToString(date) {
      var _getProps10 = getProps(),
          unit = _getProps10.unit;

      var _getState6 = getState(),
          splitter = _getState6.splitter;

      if (unit === 'hour') {
        return "".concat(date[0]).concat(splitter).concat(date[1]).concat(splitter).concat(date[2]).concat(splitter).concat(date[3]);
      }

      if (unit === 'day') {
        return "".concat(date[0]).concat(splitter).concat(date[1]).concat(splitter).concat(date[2]);
      }

      if (unit === 'month') {
        return "".concat(date[0]).concat(splitter).concat(date[1]);
      }
    },
    isActive: function isActive(date) {
      var _getProps11 = getProps(),
          value = _getProps11.value,
          multiselect = _getProps11.multiselect,
          range = _getProps11.range;

      if (range) {
        return $$.isCellInRange(date);
      }

      if (multiselect) {
        return $$.getValues().indexOf($$.convertToString(date)) !== -1;
      }

      if (!value) {
        return false;
      }

      var _getState7 = getState(),
          year = _getState7.year,
          month = _getState7.month,
          day = _getState7.day,
          hour = _getState7.hour;

      return $$.convertToString([year, month, day, hour]) === $$.convertToString(date);
    },
    getCellClassName: function getCellClassName(date, disabled) {
      var _getProps12 = getProps(),
          calendarType = _getProps12.calendarType;

      var str = 'gah-cell';

      if (disabled) {
        str += ' disabled';
      }

      if ($$.isActive(date)) {
        str += ' active';
      }

      if ($$.convertToString($$.calc.getToday(calendarType)) === $$.convertToString(date)) {
        str += ' today';
      }

      return str;
    },
    changeActivePage: function changeActivePage(value, unit, obj) {
      return $$['changeActivePage_' + unit](value, obj);
    },
    changeActivePage_month: function changeActivePage_month(value, _ref6) {
      var activeYear = _ref6.activeYear;

      var _getState8 = getState(),
          startYear = _getState8.startYear,
          endYear = _getState8.endYear;

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
    changeActivePage_day: function changeActivePage_day(value, _ref7) {
      var activeYear = _ref7.activeYear,
          activeMonth = _ref7.activeMonth;

      var _getState9 = getState(),
          startYear = _getState9.startYear,
          endYear = _getState9.endYear;

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
    changeActivePage_hour: function changeActivePage_hour(value, _ref8) {
      var activeYear = _ref8.activeYear,
          activeMonth = _ref8.activeMonth,
          activeDay = _ref8.activeDay;

      var _getState10 = getState(),
          startYear = _getState10.startYear,
          endYear = _getState10.endYear;

      var _getProps13 = getProps(),
          calendarType = _getProps13.calendarType;

      if (value === 1) {
        var daysLength = $$.calc.getMonthDaysLength(activeYear, activeMonth, calendarType);

        if (activeDay === daysLength) {
          if (activeMonth === 12) {
            if (activeYear === endYear) {
              return;
            }

            activeYear++;
            activeMonth = 1;
            activeDay = 1;
          } else {
            activeMonth++;
            activeDay = 1;
          }
        } else {
          activeDay++;
        }
      } else {
        if (activeDay === 1) {
          if (activeMonth === 1) {
            if (activeYear === startYear) {
              return;
            } else {
              activeYear--;
              activeMonth = 12;
              activeDay = $$.calc.getMonthDaysLength(activeYear, activeMonth, calendarType);
            }
          } else {
            activeMonth--;
            activeDay = $$.calc.getMonthDaysLength(activeYear, activeMonth, calendarType);
          }
        } else {
          activeDay--;
        }
      }

      return {
        activeYear: activeYear,
        activeMonth: activeMonth,
        activeDay: activeDay
      };
    },
    getGridStyle: function getGridStyle() {
      var platform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'react';

      var _getProps14 = getProps(),
          size = _getProps14.size,
          calendarType = _getProps14.calendarType,
          unit = _getProps14.unit,
          _getProps14$theme = _getProps14.theme,
          theme = _getProps14$theme === void 0 ? [] : _getProps14$theme;

      var columnCount = {
        hour: 4,
        day: 7,
        month: 3
      }[unit];
      var rowCount = {
        hour: 6,
        day: 7,
        month: 4
      }[unit];
      var padding = size / 18,
          fontSize = size / 15,
          a = (size - padding * 2) / columnCount;
      var rowHeight = {
        hour: size / 7,
        day: a,
        month: size / 6,
        year: size / 7
      }[unit];
      var gridTemplateColumns = '',
          gridTemplateRows = '';

      for (var i = 1; i <= columnCount; i++) {
        gridTemplateColumns += a + 'px' + (i !== columnCount ? ' ' : '');
      }

      for (var _i5 = 1; _i5 <= rowCount; _i5++) {
        gridTemplateRows += rowHeight + 'px' + (_i5 !== rowCount ? ' ' : '');
      }

      var direction = calendarType === 'gregorian' ? 'ltr' : 'rtl';

      if (platform === 'react') {
        return {
          gridTemplateColumns: gridTemplateColumns,
          gridTemplateRows: gridTemplateRows,
          direction: direction,
          padding: padding,
          fontSize: fontSize,
          background: theme[1],
          color: theme[0]
        };
      } else if (platform === 'jquery') {
        return "grid-template-columns:".concat(gridTemplateColumns, ";grid-template-rows:").concat(gridTemplateRows, ";direction:").concat(direction, ";padding:").concat(padding, "px;font-size:").concat(fontSize, "px;");
      }
    },
    getGridHeaderValue: function getGridHeaderValue(activeYear, activeMonth, activeDay, _onChange2) {
      var _getProps15 = getProps(),
          calendarType = _getProps15.calendarType,
          unit = _getProps15.unit,
          _getProps15$theme = _getProps15.theme,
          theme = _getProps15$theme === void 0 ? [] : _getProps15$theme,
          size = _getProps15.size;

      var _getState11 = getState(),
          years = _getState11.years;

      var D = '';
      var M = '';

      if (unit === 'hour') {
        var daysLength = $$.calc.getMonthDaysLength(activeYear, activeMonth, calendarType);
        var options = [];

        for (var i = 0; i < daysLength; i++) {
          options.push({
            text: i + 1,
            value: i + 1,
            style: {
              height: size / 6,
              background: theme[1],
              color: theme[0]
            }
          });
        }

        D = /*#__PURE__*/_react.default.createElement(_aioButton.default, {
          caret: false,
          type: "select",
          value: activeDay,
          style: {
            background: 'none',
            color: 'inherit',
            fontSize: 'inherit',
            padding: '0 3px'
          },
          options: options,
          popupStyle: {
            maxHeight: size * 1.2
          },
          onChange: function onChange(value) {
            _onChange2({
              activeDay: value
            });
          }
        });
      }

      if (unit === 'day' || unit === 'hour') {
        var months = $$.calc.getMonths(calendarType);

        if (calendarType === 'gregorian') {
          months = months.map(function (o) {
            return o.slice(0, 3);
          });
        }

        M = /*#__PURE__*/_react.default.createElement(_aioButton.default, {
          caret: false,
          type: "select",
          value: activeMonth,
          style: {
            background: 'none',
            color: 'inherit',
            fontSize: 'inherit',
            padding: '0 3px'
          },
          options: months.map(function (o, i) {
            return {
              text: o,
              value: i + 1,
              style: {
                height: size / 6,
                background: theme[1],
                color: theme[0]
              }
            };
          }),
          popupStyle: {
            maxHeight: size * 1.2
          },
          onChange: function onChange(value) {
            _onChange2({
              activeMonth: value
            });
          }
        });
      }

      var Y = /*#__PURE__*/_react.default.createElement(_aioButton.default, {
        caret: false,
        type: "select",
        value: activeYear,
        style: {
          background: 'none',
          color: 'inherit',
          fontSize: 'inherit',
          padding: '0 3px'
        },
        options: years.map(function (o, i) {
          return {
            text: o,
            value: o,
            style: {
              height: size / 6,
              background: theme[1],
              color: theme[0]
            }
          };
        }),
        popupStyle: {
          maxHeight: size * 1.2
        },
        onChange: function onChange(value) {
          _onChange2({
            activeYear: value
          });
        }
      });

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Y, M, D);
    },
    renderWeekDays: function renderWeekDays() {
      var platform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'react';

      var _getProps16 = getProps(),
          calendarType = _getProps16.calendarType;

      var weekDays = $$.calc.getWeekDays(calendarType),
          cls = 'gah-weekday gah-cell';

      if (platform === 'react') {
        return weekDays.map(function (w, i) {
          return /*#__PURE__*/_react.default.createElement("div", {
            key: 'weekDay' + i,
            className: cls
          }, /*#__PURE__*/_react.default.createElement("span", null, w.slice(0, calendarType === 'gregorian' ? 2 : 1)));
        });
      } else if (platform === 'jquery') {
        return weekDays.map(function (w, i) {
          return "<div class='".concat(cls, "'><span>").concat(w.slice(0, calendarType === 'gregorian' ? 2 : 1), "</span></div>");
        }).join(' ');
      }
    },
    renderEndSpaces: function renderEndSpaces(length) {
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

        for (var _i6 = 0; _i6 < length; _i6++) {
          _Spaces += "<div class='gah-space gah-cell'></div>";
        }

        return _Spaces;
      }
    },
    renderSpaces: function renderSpaces(activeYear, activeMonth) {
      var platform = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'react';

      var _getProps17 = getProps(),
          calendarType = _getProps17.calendarType;

      var firstDayWeekDayIndex = $$.calc.getWeekDay([activeYear, activeMonth, 1], calendarType).index;

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

        for (var _i7 = 0; _i7 < firstDayWeekDayIndex; _i7++) {
          _Spaces2 += "<div class='gah-space gah-cell'></div>";
        }

        return _Spaces2;
      }
    },
    getTodayContent: function getTodayContent(details) {
      var platform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'react';

      var _getProps18 = getProps(),
          calendarType = _getProps18.calendarType,
          size = _getProps18.size,
          unit = _getProps18.unit,
          _getProps18$theme = _getProps18.theme,
          theme = _getProps18$theme === void 0 ? [] : _getProps18$theme;

      var month = details.todayMonthString;
      var week = details.todayWeekDay;
      var today = details.today;

      if (platform === 'react') {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "gah-today",
          style: {
            width: size / 2,
            color: theme[1],
            background: theme[0]
          }
        }, /*#__PURE__*/_react.default.createElement("div", {
          style: {
            fontSize: size / 13
          }
        }, $$.getTodayText()), (unit === 'day' || unit === 'hour') && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
          style: {
            fontSize: size / 11
          }
        }, calendarType === 'gregorian' ? week.slice(0, 3) : week), /*#__PURE__*/_react.default.createElement("div", {
          style: {
            fontSize: size / 12 * 4,
            height: size / 12 * 4
          }
        }, today[2]), /*#__PURE__*/_react.default.createElement("div", {
          style: {
            fontSize: size / 11
          }
        }, calendarType === 'gregorian' ? month.slice(0, 3) : month)), unit === 'month' && /*#__PURE__*/_react.default.createElement("div", {
          style: {
            fontSize: size / 8
          }
        }, calendarType === 'gregorian' ? month.slice(0, 3) : month), /*#__PURE__*/_react.default.createElement("div", {
          style: {
            fontSize: size / 11
          }
        }, today[0]), unit === 'hour' && /*#__PURE__*/_react.default.createElement("div", {
          style: {
            fontSize: size / 10
          }
        }, today[3] + ':00'));
      } else if (platform === 'jquery') {
        return "\n            <div class='gah-today' style='width:".concat(size / 2, "px;").concat(theme[1] ? "color:".concat(theme[1], ";") : '').concat(theme[2] ? "background:".concat(theme[2], ";") : '', "'>\n              <div style='font-size:").concat(size / 13, "px;'>").concat($$.getTodayText(), "</div>\n              ").concat(unit === 'day' ? "\n                  <div style='font-size:".concat(size / 11, "px;'>").concat(calendarType === 'gregorian' ? week.slice(0, 3) : week, "</div>\n                  <div style='font-size:").concat(size / 12 * 4, "px;height:").concat(size / 12 * 4, "px;'>").concat(today[2], "</div>\n                  <div style='font-size:").concat(size / 11, "px;'>").concat(calendarType === 'gregorian' ? month.slice(0, 3) : month, "</div>\n                ") : '', "\n              ").concat(unit === 'month' ? "<div style='font-size:".concat(size / 8, "px;'>").concat(calendarType === 'gregorian' ? month.slice(0, 3) : month, "</div>") : '', "\n              <div style='font-size:").concat(size / 11, "px;'>").concat(today[0], "</div>\n            </div>\n        ");
      }
    },
    getPopupStyle: function getPopupStyle() {
      var platform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'react';

      var _getProps19 = getProps(),
          size = _getProps19.size,
          disabled = _getProps19.disabled;

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
    },
    getValues: function getValues() {
      var _getProps20 = getProps(),
          unit = _getProps20.unit,
          _getProps20$values = _getProps20.values,
          values = _getProps20$values === void 0 ? [] : _getProps20$values;

      var result = [];

      for (var i = 0; i < values.length; i++) {
        var value = values[i];

        var _$$$validateValue3 = $$.validateValue(value),
            year = _$$$validateValue3.year,
            month = _$$$validateValue3.month,
            day = _$$$validateValue3.day,
            hour = _$$$validateValue3.hour,
            splitter = _$$$validateValue3.splitter;

        if (unit === 'hour') {
          value = year + splitter + month + splitter + day + splitter + hour;
        } else if (unit === 'day') {
          value = year + splitter + month + splitter + day;
        } else if (unit === 'month') {
          value = year + splitter + month;
        }

        if (result.indexOf(value) === -1) {
          result.push(value);
        }
      }

      return result;
    },
    updateValues: function updateValues(obj, date) {
      var values = _toConsumableArray(obj);

      var index = values.indexOf(date);

      if (index !== -1) {
        values.splice(index, 1);
      } else {
        values.push(date);
      }

      return values;
    },
    renderFooter: function renderFooter(details) {
      var _getProps21 = getProps(),
          onClear = _getProps21.onClear,
          disabled = _getProps21.disabled,
          size = _getProps21.size,
          calendarType = _getProps21.calendarType,
          _getProps21$theme = _getProps21.theme,
          theme = _getProps21$theme === void 0 ? [] : _getProps21$theme;

      if (disabled) {
        return '';
      }

      var buttonStyle = {
        padding: "".concat(size / 20, "px 0")
      };
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "gah-calendar-footer",
        style: {
          fontSize: size / 13,
          background: theme[1],
          color: theme[0]
        }
      }, onClear && /*#__PURE__*/_react.default.createElement("button", {
        style: buttonStyle,
        onClick: function onClick() {
          return onClear(details);
        }
      }, {
        'gregorian': 'Clear',
        'jalali': 'حذف'
      }[calendarType]), /*#__PURE__*/_react.default.createElement("button", {
        style: buttonStyle,
        onClick: function onClick() {
          return $$.onToday();
        }
      }, $$.getTodayText()));
    }
  };
  $$.calc = new dateCalculator();
  return {
    validateValue: $$.validateValue,
    getDateDetails: $$.getDateDetails,
    getValue: $$.getValue,
    onToday: $$.onToday,
    getTodayText: $$.getTodayText,
    getCell: $$.getCell,
    changeActivePage: $$.changeActivePage,
    getGridStyle: $$.getGridStyle,
    getGridHeaderValue: $$.getGridHeaderValue,
    renderWeekDays: $$.renderWeekDays,
    renderFooter: $$.renderFooter,
    renderEndSpaces: $$.renderEndSpaces,
    renderSpaces: $$.renderSpaces,
    getTodayContent: $$.getTodayContent,
    getPopupStyle: $$.getPopupStyle,
    getValues: $$.getValues,
    updateValues: $$.updateValues,
    searchDate: $$.searchDate,
    calc: $$.calc
  };
}

function dateCalculator() {
  var $$ = {
    getSplitter: function getSplitter(value) {
      var splitter = '/';

      for (var i = 0; i < value.length; i++) {
        if (isNaN(parseInt(value[i]))) {
          return value[i];
        }
      }

      return splitter;
    },
    convertToArray: function convertToArray(o) {
      var list;

      if (Array.isArray(o)) {
        list = _toConsumableArray(o);
      } else if (typeof o === 'string') {
        list = o.split($$.getSplitter(o));
        list = list.map(function (o) {
          return parseInt(o);
        });
      } else {
        return false;
      }

      var _list = list,
          _list2 = _slicedToArray(_list, 4),
          y = _list2[0],
          _list2$ = _list2[1],
          m = _list2$ === void 0 ? 1 : _list2$,
          _list2$2 = _list2[2],
          d = _list2$2 === void 0 ? 1 : _list2$2,
          _list2$3 = _list2[3],
          h = _list2$3 === void 0 ? 0 : _list2$3;

      return [y, m, d, h];
    },
    gregorianToJalali: function gregorianToJalali(o) {
      var _$$$convertToArray = $$.convertToArray(o),
          _$$$convertToArray2 = _slicedToArray(_$$$convertToArray, 3),
          gy = _$$$convertToArray2[0],
          gm = _$$$convertToArray2[1],
          gd = _$$$convertToArray2[2];

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
    jalaliToGregorian: function jalaliToGregorian(o) {
      var _$$$convertToArray3 = $$.convertToArray(o),
          _$$$convertToArray4 = _slicedToArray(_$$$convertToArray3, 3),
          jy = _$$$convertToArray4[0],
          jm = _$$$convertToArray4[1],
          jd = _$$$convertToArray4[2];

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
    compaireDate: function compaireDate(_ref9, _ref10) {
      var _ref11 = _slicedToArray(_ref9, 4),
          year1 = _ref11[0],
          month1 = _ref11[1],
          day1 = _ref11[2],
          hour1 = _ref11[3];

      var _ref12 = _slicedToArray(_ref10, 4),
          year2 = _ref12[0],
          month2 = _ref12[1],
          day2 = _ref12[2],
          hour2 = _ref12[3];

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

      if (hour1 < hour2) {
        return 'less';
      }

      if (hour1 > hour2) {
        return 'greater';
      }

      return 'equal';
    },
    isLess: function isLess(o1, o2) {
      if (!o1 || !o2) {
        return false;
      }

      o1 = $$.convertToArray(o1);
      o2 = $$.convertToArray(o2);
      return $$.compaireDate(o1, o2) === 'less';
    },
    isEqual: function isEqual(o1, o2) {
      if (!o1 || !o2) {
        return false;
      }

      o1 = $$.convertToArray(o1);
      o2 = $$.convertToArray(o2);
      return $$.compaireDate(o1, o2) === 'equal';
    },
    isGreater: function isGreater(o1, o2) {
      if (!o1 || !o2) {
        return false;
      }

      o1 = $$.convertToArray(o1);
      o2 = $$.convertToArray(o2);
      return $$.compaireDate(o1, o2) === 'greater';
    },
    isBetween: function isBetween(o1, _ref13) {
      var _ref14 = _slicedToArray(_ref13, 2),
          o2 = _ref14[0],
          o3 = _ref14[1];

      if (!o1 || !o2 || !o3) {
        return false;
      }

      o1 = $$.convertToArray(o1);
      o2 = $$.convertToArray(o2);
      o3 = $$.convertToArray(o3);
      return $$.compaireDate(o1, o2) === 'greater' && $$.compaireDate(o1, o3) === 'less';
    },
    getByOffset: function getByOffset(_ref15) {
      var date = _ref15.date,
          offset = _ref15.offset,
          _ref15$unit = _ref15.unit,
          unit = _ref15$unit === void 0 ? 'day' : _ref15$unit,
          _ref15$calendarType = _ref15.calendarType,
          calendarType = _ref15$calendarType === void 0 ? 'gregorian' : _ref15$calendarType;

      if (!offset) {
        return date;
      }

      var fn = $$['get' + (Math.sign(offset) > 0 ? 'Next' : 'Prev') + {
        'hour': 'Hour',
        'day': 'Day',
        'month': 'Month'
      }[unit]];
      var abs = Math.abs(offset);

      for (var i = 0; i < abs; i++) {
        date = fn(date, calendarType);
      }

      return date;
    },
    getNextHour: function getNextHour(_ref16, calendarType) {
      var _ref17 = _slicedToArray(_ref16, 4),
          year = _ref17[0],
          month = _ref17[1],
          day = _ref17[2],
          hour = _ref17[3];

      if (hour < 23) {
        return [year, month, day, hour + 1];
      }

      var a = $$.getNextDay([year, month, day], calendarType);
      return [a[0], a[1], a[2], 0];
    },
    getPrevHour: function getPrevHour(_ref18, calendarType) {
      var _ref19 = _slicedToArray(_ref18, 4),
          year = _ref19[0],
          month = _ref19[1],
          day = _ref19[2],
          hour = _ref19[3];

      if (hour > 0) {
        return [year, month, day, hour - 1];
      }

      var a = $$.getPrevDay([year, month, day], calendarType);
      return [a[0], a[1], a[2], 23];
    },
    getNextDay: function getNextDay(_ref20, calendarType) {
      var _ref21 = _slicedToArray(_ref20, 4),
          year = _ref21[0],
          month = _ref21[1],
          day = _ref21[2],
          hour = _ref21[3];

      if (day < $$.getMonthDaysLength(year, month, calendarType)) {
        return [year, month, day + 1, hour];
      }

      if (month < 12) {
        return [year, month + 1, 1, hour];
      }

      return [year + 1, 1, 1, hour];
    },
    getPrevDay: function getPrevDay(_ref22, calendarType) {
      var _ref23 = _slicedToArray(_ref22, 3),
          year = _ref23[0],
          month = _ref23[1],
          day = _ref23[2];

      if (day > 1) {
        return [year, month, day - 1];
      }

      if (month > 1) {
        month -= 1;
        day = $$.getMonthDaysLength(year, month, calendarType);
        return [year, month, day];
      }

      year -= 1;
      month = 12;
      day = $$.getMonthDaysLength(year, month, calendarType);
      return [year, month, day];
    },
    getNextMonth: function getNextMonth(_ref24) {
      var _ref25 = _slicedToArray(_ref24, 2),
          year = _ref25[0],
          month = _ref25[1];

      return month < 12 ? [year, month + 1, 1] : [year + 1, 1, 1];
    },
    getPrevMonth: function getPrevMonth(_ref26) {
      var _ref27 = _slicedToArray(_ref26, 2),
          year = _ref27[0],
          month = _ref27[1];

      return month > 1 ? [year, month - 1, 1] : [year - 1, 12, 1];
    },
    GetMonthDaysLength: {
      jalali: function jalali(year, month) {
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
      gregorian: function gregorian(year, month) {
        return new Date(year, month, 0).getDate();
      }
    },
    getMonthDaysLength: function getMonthDaysLength(year, month, calendarType) {
      return $$.GetMonthDaysLength[calendarType](year, month);
    },
    GetWeekDay: {
      jalali: function jalali(_ref28) {
        var _ref29 = _slicedToArray(_ref28, 3),
            year = _ref29[0],
            month = _ref29[1],
            day = _ref29[2];

        var offset;
        var weekDays = $$.getWeekDays('jalali');

        if ($$.isEqual([year, month, day], [1399, 12, 30])) {
          offset = 0;
        } else if ($$.isLess([year, month, day], [1399, 12, 30])) {
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
      gregorian: function gregorian(_ref30) {
        var _ref31 = _slicedToArray(_ref30, 3),
            year = _ref31[0],
            month = _ref31[1],
            day = _ref31[2];

        var offset = new Date(year, month - 1, day).getDay();
        var weekDays = $$.getWeekDays('gregorian');
        return {
          weekDay: weekDays[offset],
          index: offset
        };
      }
    },
    getWeekDay: function getWeekDay(date) {
      var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'gregorian';
      return $$.GetWeekDay[calendarType](date);
    },
    getWeekDays: function getWeekDays(calendarType) {
      return {
        jalali: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
        gregorian: ['SUNDAY', 'MONDAY', 'THUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
      }[calendarType];
    },
    getMonths: function getMonths(calendarType) {
      return {
        jalali: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        gregorian: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
      }[calendarType];
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
    getDayIndexInYear: function getDayIndexInYear(_ref32) {
      var _ref33 = _slicedToArray(_ref32, 3),
          year = _ref33[0],
          month = _ref33[1],
          day = _ref33[2];

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
    GetToday: {
      jalali: function jalali(unit) {
        var dateObject = new Date();
        var date = dateObject.toLocaleDateString('fa-IR').split('/');
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

        date.push(dateObject.getHours());

        if (unit === 'day') {
          date[3] = 0;
        }

        if (unit === 'month') {
          date[2] = 1;
          date[3] = 0;
        }

        return date;
      },
      gregorian: function gregorian(unit) {
        var date = new Date();
        var result = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours()];

        if (unit === 'day') {
          date[3] = 0;
        }

        if (unit === 'month') {
          date[2] = 1;
          date[3] = 0;
        }

        return result;
      }
    },
    getToday: function getToday(calendarType) {
      var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'day';
      return $$.GetToday[calendarType](unit);
    }
  };
  return {
    gregorianToJalali: $$.gregorianToJalali,
    jalaliToGregorian: $$.jalaliToGregorian,
    getSplitter: $$.getSplitter,
    convertToArray: $$.convertToArray,
    isEqual: $$.isEqual,
    isGreater: $$.isGreater,
    isLess: $$.isLess,
    isBetween: $$.isBetween,
    getByOffset: $$.getByOffset,
    getMonthDaysLength: $$.getMonthDaysLength,
    getWeekDay: $$.getWeekDay,
    getWeekDays: $$.getWeekDays,
    getMonths: $$.getMonths,
    getToday: $$.getToday
  };
}