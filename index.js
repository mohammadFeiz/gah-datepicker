"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _rDropdownButton = _interopRequireDefault(require("r-dropdown-button"));

var _functions = require("./functions");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

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
    _this.icons = {
      grid: (0, _functions.getGridIcon)(),
      minus: (0, _functions.getMinusIcon)(),
      plus: (0, _functions.getPlusIcon)()
    };
    _this.type = _this.props.jalali ? 'J' : 'G';

    _this.init();

    return _this;
  }

  _createClass(GAH, [{
    key: "init",
    value: function init() {
      var _this$props = this.props,
          value = _this$props.value,
          prevYears = _this$props.prevYears,
          nextYears = _this$props.nextYears,
          range = _this$props.range;
      var today = (0, _functions.getToday)(this.type);
      this.startYear = today[0] - prevYears;
      this.endYear = today[0] + nextYears;
      this.years = [];

      for (var i = this.startYear; i <= this.endYear; i++) {
        this.years.push(i);
      }

      if (range) {
        this.setRangeType(value, today);
      } else {
        this.setSingleType(value, today);
      }
    }
  }, {
    key: "validateValue",
    value: function validateValue(value, today) {
      var Value,
          splitter = this.props.splitter;

      if (Array.isArray(value)) {
        Value = value;
      } else if (typeof value === 'string') {
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

      if (year < this.startYear) {
        year = this.startYear;
      }

      if (year > this.endYear) {
        year = this.endYear;
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

      if (isNaN(day)) {
        day = 1;
      }

      var daysLength = (0, _functions.getMonthDaysLength)(year, month, this.type);

      if (day > daysLength) {
        day = daysLength;
      }

      if (day < 1) {
        day = 1;
      }

      return [year, month, day];
    }
  }, {
    key: "setSingleType",
    value: function setSingleType(value, today) {
      var _this$validateValue = this.validateValue(value, today),
          _this$validateValue2 = _slicedToArray(_this$validateValue, 3),
          year = _this$validateValue2[0],
          month = _this$validateValue2[1],
          day = _this$validateValue2[2];

      this.state = {
        year: year,
        month: month,
        day: day,
        activeRange: 'start',
        listView: false
      };
    }
  }, {
    key: "setRangeType",
    value: function setRangeType(value, today) {
      var _this$props$value = this.props.value,
          value = _this$props$value === void 0 ? {} : _this$props$value;

      if (Array.isArray(value) || _typeof(value) !== 'object') {
        value = {};
      }

      var _value = value,
          start = _value.start,
          end = _value.end;
      var startArray = this.validateValue(start, today);
      var endArray = this.validateValue(end, today);
      var Start = {
        year: startArray[0],
        month: startArray[1],
        day: startArray[2]
      };
      var End = {
        year: endArray[0],
        month: endArray[1],
        day: endArray[2]
      };
      this.state = {
        start: Start,
        end: End,
        activeRange: 'start',
        listView: false
      };
    }
  }, {
    key: "setActiveRange",
    value: function setActiveRange(type) {
      this.setState({
        activeRange: type
      });
    }
  }, {
    key: "SetState",
    value: function SetState(obj, sendChanges) {
      var _this2 = this;

      var _this$props2 = this.props,
          onChange = _this$props2.onChange,
          range = _this$props2.range;
      this.setState(obj, sendChanges && onChange ? function () {
        return onChange(range ? _this2.rangeDetails : _this2.details);
      } : function () {});
    }
  }, {
    key: "getDateDetails",
    value: function getDateDetails() {
      var _this$state = this.state,
          start = _this$state.start,
          end = _this$state.end,
          activeRange = _this$state.activeRange;
      var range = this.props.range;

      if (range) {
        this.rangeDetails = {
          start: this.getDetailsSingle(start.year, start.month, start.day),
          end: this.getDetailsSingle(end.year, end.month, end.day)
        };
        this.details = this.rangeDetails[activeRange];
      } else {
        var _this$state2 = this.state,
            year = _this$state2.year,
            month = _this$state2.month,
            day = _this$state2.day;
        this.details = this.getDetailsSingle(year, month, day);
      }
    }
  }, {
    key: "getDetailsSingle",
    value: function getDetailsSingle(year, month, day) {
      var _this$props3 = this.props,
          _this$props3$splitter = _this$props3.splitter,
          splitter = _this$props3$splitter === void 0 ? '/' : _this$props3$splitter,
          jalali = _this$props3.jalali;

      var _getWeekDay = (0, _functions.getWeekDay)([year, month, day], this.type),
          weekDay = _getWeekDay.weekDay,
          weekDayIndex = _getWeekDay.index;

      var _getWeekDay2 = (0, _functions.getWeekDay)([year, month, 1], this.type),
          monthFirstDayWeekDay = _getWeekDay2.weekDay;

      var today = (0, _functions.getToday)(this.type);
      var extra = {};
      var months = (0, _functions.getMonths)(this.type);

      if (jalali) {
        var georgian = (0, _functions.jalali_to_gregorian)(year, month, day);
        var todayGeorgian = (0, _functions.jalali_to_gregorian)(today[0], today[1], today[2]);
        var weekDayGeorgian = (0, _functions.getWeekDay)(georgian, 'G').weekDay;
        extra = {
          georgian: georgian,
          todayGeorgian: todayGeorgian,
          weekDayGeorgian: weekDayGeorgian
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
        monthString: months[month - 1],
        startYear: this.startYear,
        endYear: this.endYear,
        dateString: year + splitter + month + splitter + day,
        fullDateString: year + splitter + month + splitter + day + ' ' + weekDay,
        today: today,
        ...extra
      };
    }
  }, {
    key: "setNextDay",
    value: function setNextDay() {
      var range = this.props.range;

      if (range) {
        var activeRange = this.state.activeRange;
        var dateObj = this.state[activeRange];
        var dateArray = [dateObj.year, dateObj.month, dateObj.day];
        var newDate = (0, _functions.getNextDay)(dateArray, this.type);
        var newDateObj = {
          year: newDate[0],
          month: newDate[1],
          day: newDate[2]
        };
        this.SetState(_defineProperty({}, activeRange, newDateObj), true);
      } else {
        var _this$state3 = this.state,
            year = _this$state3.year,
            month = _this$state3.month,
            day = _this$state3.day;

        var _newDate = (0, _functions.getNextDay)([year, month, day], this.type);

        var _newDateObj = {
          year: _newDate[0],
          month: _newDate[1],
          day: _newDate[2]
        };
        this.SetState(_newDateObj, true);
      }
    }
  }, {
    key: "setPrevDay",
    value: function setPrevDay() {
      var range = this.props.range;

      if (range) {
        var activeRange = this.state.activeRange;
        var dateObj = this.state[activeRange];
        var dateArray = [dateObj.year, dateObj.month, dateObj.day];
        var newDate = (0, _functions.getPrevDay)(dateArray, this.type);
        var newDateObj = {
          year: newDate[0],
          month: newDate[1],
          day: newDate[2]
        };
        this.SetState(_defineProperty({}, activeRange, newDateObj), true);
      } else {
        var _this$state4 = this.state,
            year = _this$state4.year,
            month = _this$state4.month,
            day = _this$state4.day;

        var _newDate2 = (0, _functions.getPrevDay)([year, month, day], this.type);

        var _newDateObj2 = {
          year: _newDate2[0],
          month: _newDate2[1],
          day: _newDate2[2]
        };
        this.SetState(_newDateObj2, true);
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var _this$props4 = this.props,
          range = _this$props4.range,
          splitter = _this$props4.splitter;

      if (range) {
        var _this$state5 = this.state,
            start = _this$state5.start,
            end = _this$state5.end;
        return start.year + splitter + start.month + splitter + start.day + ' - ' + end.year + splitter + end.month + splitter + end.day;
      } else {
        var _this$state6 = this.state,
            year = _this$state6.year,
            month = _this$state6.month,
            day = _this$state6.day;
        return year + splitter + month + splitter + day;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props5 = this.props,
          jalali = _this$props5.jalali,
          range = _this$props5.range;
      this.getDateDetails();
      var Value = this.getValue();
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "gah-datepicker",
        style: {
          direction: jalali ? 'rtl' : 'ltr'
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "gah-datepicker-icon"
      }, (0, _functions.getGridIcon)()), /*#__PURE__*/_react.default.createElement(_rDropdownButton.default, {
        rtl: jalali,
        animate: true,
        className: "gah-datepicker-button",
        text: Value,
        style: {
          display: 'flex',
          justifyContent: 'flex-start',
          color: 'inherit'
        },
        items: function items() {
          return /*#__PURE__*/_react.default.createElement(GAHDatePickerPopup, _extends({
            icons: _this3.icons
          }, _this3.props, _this3.state, {
            SetState: _this3.SetState.bind(_this3),
            details: _this3.details,
            rangeDetails: _this3.rangeDetails,
            years: _this3.years,
            type: _this3.type,
            setActiveRange: _this3.setActiveRange.bind(_this3)
          }));
        }
      }), !range && /*#__PURE__*/_react.default.createElement("div", {
        className: "gah-step"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "gah-step-up",
        onClick: function onClick() {
          return _this3.setNextDay();
        }
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "gah-step-down",
        onClick: function onClick() {
          return _this3.setPrevDay();
        }
      })));
    }
  }]);

  return GAH;
}(_react.Component);

exports.default = GAH;
GAH.defaultProps = {
  size: 150,
  jalali: true,
  disabled: false,
  splitter: '/',
  prevYears: 10,
  nextYears: 20
};
var rdpContext = /*#__PURE__*/(0, _react.createContext)();

var GAHDatePickerPopup = /*#__PURE__*/function (_Component2) {
  _inherits(GAHDatePickerPopup, _Component2);

  var _super2 = _createSuper(GAHDatePickerPopup);

  function GAHDatePickerPopup() {
    _classCallCheck(this, GAHDatePickerPopup);

    return _super2.apply(this, arguments);
  }

  _createClass(GAHDatePickerPopup, [{
    key: "isDisabled",
    value: function isDisabled(date) {
      var _this$props6 = this.props,
          limits = _this$props6.limits,
          splitter = _this$props6.splitter,
          range = _this$props6.range,
          start = _this$props6.start,
          end = _this$props6.end,
          activeRange = _this$props6.activeRange,
          type = _this$props6.type;

      if (range) {
        if (activeRange === 'end' && (0, _functions.compaireDate)(date, [start.year, start.month, start.day]) === 'less') {
          return true;
        }

        if (activeRange === 'start' && (0, _functions.compaireDate)(date, [end.year, end.month, end.day]) === 'greater') {
          return true;
        }
      }

      if (!limits) {
        return false;
      }

      for (var i = 0; i < limits.length; i++) {
        var limit = limits[i];

        if (limit.type === 'weekDay') {
          var thisMonth = true;

          if (limit.year !== undefined && limit.year !== date[0]) {
            thisMonth = false;
          } else if (limit.month !== undefined && limit.month !== date[1]) {
            thisMonth = false;
          }

          if (thisMonth) {
            var weekDay = (0, _functions.getWeekDay)(date, type).index + 1;

            if (weekDay === limit.weekDay) {
              return true;
            }
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

          dateArray1 = [parseInt(dateArray1[0]), parseInt(dateArray1[1]), parseInt(dateArray1[2])];
          dateArray2 = [parseInt(dateArray2[0]), parseInt(dateArray2[1]), parseInt(dateArray2[2])];

          var _start = void 0,
              _end = void 0;

          if (['less', 'equal'].indexOf((0, _functions.compaireDate)(dateArray1, dateArray2)) !== -1) {
            _start = dateArray1;
            _end = dateArray2;
          } else {
            _start = dateArray2;
            _end = dateArray1;
          }

          if ((0, _functions.compaireDate)(date, _start) === 'greater' && (0, _functions.compaireDate)(date, _end) === 'less') {
            return true;
          }
        } else {
          var dateArray = void 0;

          if (typeof limit.date === 'string') {
            dateArray = limit.date.split(splitter);
          } else if (Array.isArray(limit.date)) {
            dateArray = limit.date;
          } else {
            continue;
          }

          if ((0, _functions.compaireDate)(date, [parseInt(dateArray[0]), parseInt(dateArray[1]), parseInt(dateArray[2])]) === limit.type) {
            return true;
          }
        }
      }

      return false;
    }
  }, {
    key: "getHeader",
    value: function getHeader() {
      var _this$props7 = this.props,
          range = _this$props7.range,
          size = _this$props7.size;
      var style = {
        height: size / 8 + 6,
        fontSize: size / 16,
        padding: "0 3px"
      };

      if (!range) {
        return null;
      } else {
        var _this$props8 = this.props,
            activeRange = _this$props8.activeRange,
            setActiveRange = _this$props8.setActiveRange,
            rangeDetails = _this$props8.rangeDetails;
        var _rangeDetails$start = rangeDetails.start,
            year1 = _rangeDetails$start.year,
            month1 = _rangeDetails$start.month,
            day1 = _rangeDetails$start.day;
        var _rangeDetails$end = rangeDetails.end,
            year2 = _rangeDetails$end.year,
            month2 = _rangeDetails$end.month,
            day2 = _rangeDetails$end.day;
        var rangeStyle = {
          height: size / 8
        };
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "rdp-header",
          style: style
        }, /*#__PURE__*/_react.default.createElement("span", {
          className: 'rdp-range-value rdp-range-start' + (activeRange === 'start' ? ' active' : ''),
          onClick: function onClick() {
            return setActiveRange('start');
          },
          style: rangeStyle
        }, year1 + ' / ' + month1 + ' / ' + day1), /*#__PURE__*/_react.default.createElement("span", {
          className: 'rdp-range-value rdp-range-end' + (activeRange === 'end' ? ' active' : ''),
          onClick: function onClick() {
            return setActiveRange('end');
          },
          style: rangeStyle
        }, year2 + ' / ' + month2 + ' / ' + day2));
      }
    }
  }, {
    key: "getBody",
    value: function getBody() {
      return this.props.listView ? /*#__PURE__*/_react.default.createElement(RDatePickerList, {
        details: this.props.details
      }) : /*#__PURE__*/_react.default.createElement(RDatePickerGrid, {
        key: this.props.activeRange,
        details: this.props.details
      });
    }
  }, {
    key: "getFooter",
    value: function getFooter() {
      var _this4 = this;

      var _this$props9 = this.props,
          onSubmit = _this$props9.onSubmit,
          onClose = _this$props9.onClose,
          type = _this$props9.type,
          disabled = _this$props9.disabled,
          size = _this$props9.size;
      var buttonStyle = {
        padding: "".concat(size / 24, "px ").concat(size / 12, "px")
      };
      var closeText = {
        G: 'Cansel',
        J: 'بستن'
      }[type];
      var submitText = {
        G: 'OK',
        J: 'تایید'
      }[type];
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "rdp-footer",
        style: {
          fontSize: size / 13
        }
      }, typeof onClose === 'function' && /*#__PURE__*/_react.default.createElement("button", {
        style: buttonStyle,
        onClick: function onClick() {
          return onClose(_this4.props.details);
        }
      }, closeText), typeof onSubmit === 'function' && !disabled && /*#__PURE__*/_react.default.createElement("button", {
        style: buttonStyle,
        onClick: function onClick() {
          return onSubmit(_this4.props.details);
        }
      }, submitText));
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var size = this.props.size;
      return {
        width: size,
        fontSize: size / 17
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props10 = this.props,
          _this$props10$theme = _this$props10.theme,
          theme = _this$props10$theme === void 0 ? 'theme1' : _this$props10$theme,
          className = _this$props10.className,
          id = _this$props10.id,
          style = _this$props10.style,
          _this$props10$default = _this$props10.defaultProps,
          defaultProps = _this$props10$default === void 0 ? {} : _this$props10$default;
      var context = { ...this.props,
        isDisabled: this.isDisabled.bind(this)
      };
      var className = "rdp rdp-".concat(theme).concat(className ? ' ' + className : '');
      return /*#__PURE__*/_react.default.createElement(rdpContext.Provider, {
        value: context
      }, /*#__PURE__*/_react.default.createElement("div", _extends({
        className: className,
        id: id
      }, defaultProps, {
        style: { ...this.getStyle(),
          ...style
        }
      }), this.getHeader(), this.getBody(), this.getFooter()));
    }
  }]);

  return GAHDatePickerPopup;
}(_react.Component);

var RDatePickerList = /*#__PURE__*/function (_Component3) {
  _inherits(RDatePickerList, _Component3);

  var _super3 = _createSuper(RDatePickerList);

  function RDatePickerList() {
    _classCallCheck(this, RDatePickerList);

    return _super3.apply(this, arguments);
  }

  _createClass(RDatePickerList, [{
    key: "change",
    value: function change(year, month, day) {
      var _this$context = this.context,
          SetState = _this$context.SetState,
          isDisabled = _this$context.isDisabled,
          range = _this$context.range,
          activeRange = _this$context.activeRange,
          type = _this$context.type;
      var details = this.props.details;
      var startYear = details.startYear,
          endYear = details.endYear;

      if (year > endYear) {
        year = endYear;
      }

      if (year < startYear) {
        year = startYear;
      }

      if (month > 12) {
        month = 12;
      }

      if (month < 1) {
        month = 1;
      }

      var daysLength = (0, _functions.getMonthDaysLength)(year, month, type);

      if (day > daysLength) {
        day = daysLength;
      }

      if (isDisabled([year, month, day])) {
        return;
      }

      if (details.year === year && details.month === month && details.day === day) {
        return;
      }

      if (range) {
        SetState(_defineProperty({}, activeRange, {
          year: year,
          month: month,
          day: day
        }), true);
      } else {
        SetState({
          year: year,
          month: month,
          day: day
        }, true);
      }
    }
  }, {
    key: "getDays",
    value: function getDays() {
      var details = this.props.details;
      var type = this.context.type;
      var year = details.year,
          month = details.month,
          days = [];
      var length = (0, _functions.getMonthDaysLength)(year, month, type);

      for (var i = 1; i <= length; i++) {
        days.push(i);
      }

      return days;
    }
  }, {
    key: "onToday",
    value: function onToday() {
      var _this$context2 = this.context,
          SetState = _this$context2.SetState,
          range = _this$context2.range,
          activeRange = _this$context2.activeRange;
      var details = this.props.details;

      var _details$today = _slicedToArray(details.today, 3),
          year = _details$today[0],
          month = _details$today[1],
          day = _details$today[2];

      if (range) {
        SetState(_defineProperty({}, activeRange, {
          year: year,
          month: month,
          day: day
        }), true);
      } else {
        SetState({
          year: year,
          month: month,
          day: day
        }, true);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$context3 = this.context,
          icons = _this$context3.icons,
          SetState = _this$context3.SetState,
          isDisabled = _this$context3.isDisabled,
          years = _this$context3.years,
          size = _this$context3.size,
          type = _this$context3.type;
      var details = this.props.details;
      var months = (0, _functions.getMonths)(type);
      var year = details.year,
          month = details.month,
          day = details.day,
          g = details.georgian;
      var days = this.getDays();
      var selectStyle = {
        direction: type === 'J' ? 'rtl' : 'ltr'
      };
      var sign = {
        J: -1,
        G: 1
      }[type];
      var todayText = {
        J: 'امروز',
        G: 'Today'
      }[type];
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "rdp-list-header",
        style: {
          height: size / 5.5
        }
      }, type === 'J' && /*#__PURE__*/_react.default.createElement("span", null, "".concat(g[0], "/").concat(g[1], "/").concat(g[2], " ").concat(details.weekDayGeorgian.slice(0, 3))), /*#__PURE__*/_react.default.createElement("div", {
        onClick: function onClick() {
          return SetState({
            listView: false
          });
        }
      }, icons.grid)), /*#__PURE__*/_react.default.createElement("div", {
        className: "rdp-list"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "rdp-today"
      }, /*#__PURE__*/_react.default.createElement("button", {
        onClick: function onClick() {
          return _this5.onToday();
        }
      }, todayText)), /*#__PURE__*/_react.default.createElement("div", {
        className: "rdp-list-item"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "rdp-step",
        onClick: function onClick() {
          return _this5.change(year + -sign, month, day);
        }
      }, icons.minus), /*#__PURE__*/_react.default.createElement("select", {
        value: year,
        onChange: function onChange(e) {
          return _this5.change(parseInt(e.target.value), month, day);
        },
        style: selectStyle
      }, years.map(function (y, i) {
        return /*#__PURE__*/_react.default.createElement("option", {
          key: i,
          value: y
        }, y);
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "rdp-step",
        onClick: function onClick() {
          return _this5.change(year + sign, month, day);
        }
      }, icons.plus)), /*#__PURE__*/_react.default.createElement("div", {
        className: "rdp-list-item"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "rdp-step",
        onClick: function onClick() {
          return _this5.change(year, month + -sign, day);
        }
      }, icons.minus), /*#__PURE__*/_react.default.createElement("select", {
        value: month,
        onChange: function onChange(e) {
          return _this5.change(year, parseInt(e.target.value), day);
        },
        style: selectStyle
      }, months.map(function (m, i) {
        return /*#__PURE__*/_react.default.createElement("option", {
          key: i,
          value: i + 1
        }, m);
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "rdp-step",
        onClick: function onClick() {
          return _this5.change(year, month + sign, day);
        }
      }, icons.plus)), /*#__PURE__*/_react.default.createElement("div", {
        className: "rdp-list-item"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "rdp-step",
        onClick: function onClick() {
          return _this5.change(year, month, day + -sign);
        }
      }, icons.minus), /*#__PURE__*/_react.default.createElement("select", {
        value: day,
        onChange: function onChange(e) {
          return _this5.change(year, month, parseInt(e.target.value));
        },
        style: selectStyle
      }, days.filter(function (d) {
        return !isDisabled([year, month, d]);
      }).map(function (d, i) {
        return /*#__PURE__*/_react.default.createElement("option", {
          key: i,
          value: d
        }, d);
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "rdp-step",
        onClick: function onClick() {
          return _this5.change(year, month, day + sign);
        }
      }, icons.plus))));
    }
  }]);

  return RDatePickerList;
}(_react.Component);

_defineProperty(RDatePickerList, "contextType", rdpContext);

var RDatePickerGrid = /*#__PURE__*/function (_Component4) {
  _inherits(RDatePickerGrid, _Component4);

  var _super4 = _createSuper(RDatePickerGrid);

  function RDatePickerGrid(props) {
    var _this6;

    _classCallCheck(this, RDatePickerGrid);

    _this6 = _super4.call(this, props);
    var details = _this6.props.details;
    _this6.state = {
      activeYear: details.year,
      activeMonth: details.month
    };
    return _this6;
  }

  _createClass(RDatePickerGrid, [{
    key: "getWeekDays",
    value: function getWeekDays() {
      var type = this.context.type;
      var weekDays = type === 'J' ? ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'] : ['SUNDAY', 'MONDAY', 'THUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
      return weekDays.map(function (w, i) {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: 'weekDay' + i,
          className: "rdp-weekday rdp-cell"
        }, /*#__PURE__*/_react.default.createElement("span", null, w.slice(0, type === 'J' ? 1 : 2)));
      });
    }
  }, {
    key: "getSpaces",
    value: function getSpaces() {
      var type = this.context.type;
      var _this$state7 = this.state,
          activeYear = _this$state7.activeYear,
          activeMonth = _this$state7.activeMonth;
      var firstDayWeekDayIndex = (0, _functions.getWeekDay)([activeYear, activeMonth, 1], type).index;
      var Spaces = [];

      for (var i = 0; i < firstDayWeekDayIndex; i++) {
        Spaces.push( /*#__PURE__*/_react.default.createElement("div", {
          key: 'space' + i,
          className: "rdp-space rdp-cell"
        }));
      }

      return Spaces;
    }
  }, {
    key: "change",
    value: function change(year, month, day) {
      var _this$context4 = this.context,
          SetState = _this$context4.SetState,
          range = _this$context4.range,
          activeRange = _this$context4.activeRange;

      if (range) {
        SetState(_defineProperty({}, activeRange, {
          year: year,
          month: month,
          day: day
        }), true);
      } else {
        SetState({
          year: year,
          month: month,
          day: day
        }, true);
      }
    }
  }, {
    key: "getCellClassName",
    value: function getCellClassName(day, disabled) {
      var _this$context5 = this.context,
          range = _this$context5.range,
          type = _this$context5.type,
          end = _this$context5.end,
          start = _this$context5.start;
      var details = this.props.details;
      var _this$state8 = this.state,
          activeYear = _this$state8.activeYear,
          activeMonth = _this$state8.activeMonth;
      var str = 'rdp-cell rdp-cell-first';

      if (disabled) {
        str += ' disabled';
      }

      if (details.year === activeYear && details.month === activeMonth && details.day === day) {
        str += ' active';
      }

      if (details.today[0] === activeYear && details.today[1] === activeMonth && details.today[2] === day) {
        str += ' today';
      }

      if (type === 'J') {
        str += ' is-jalali';
      }

      if (range) {
        var a = (0, _functions.compaireDate)([activeYear, activeMonth, day], [end.year, end.month, end.day]);
        var b = (0, _functions.compaireDate)([activeYear, activeMonth, day], [start.year, start.month, start.day]);

        if (a === 'less' && b === 'greater') {
          str += ' in-range';
        }

        if (b === 'equal') {
          str += ' start';
        }

        if (a === 'equal') {
          str += ' end';
        }
      }

      return str;
    }
  }, {
    key: "getDayCells",
    value: function getDayCells() {
      var _this7 = this;

      var _this$state9 = this.state,
          activeYear = _this$state9.activeYear,
          activeMonth = _this$state9.activeMonth;
      var _this$context6 = this.context,
          isDisabled = _this$context6.isDisabled,
          type = _this$context6.type;
      var daysLength = (0, _functions.getMonthDaysLength)(activeYear, activeMonth, type);
      var days = [];

      var _loop = function _loop(i) {
        var disabled = isDisabled([activeYear, activeMonth, i]);

        var className = _this7.getCellClassName(i, disabled);

        var onClick = disabled || _this7.context.disabled ? undefined : function () {
          return _this7.change(activeYear, activeMonth, i);
        };
        days.push( /*#__PURE__*/_react.default.createElement("div", {
          onClick: onClick,
          key: 'day' + i,
          className: className
        }, i));
      };

      for (var i = 1; i <= daysLength; i++) {
        _loop(i);
      }

      return days;
    }
  }, {
    key: "getEndSpaces",
    value: function getEndSpaces(length) {
      var Spaces = [];

      for (var i = 0; i < length; i++) {
        Spaces.push( /*#__PURE__*/_react.default.createElement("div", {
          key: 'endspace' + i,
          className: "rdp-space rdp-cell"
        }));
      }

      return Spaces;
    }
  }, {
    key: "changeActiveMonth",
    value: function changeActiveMonth(value) {
      var details = this.props.details;
      var _this$state10 = this.state,
          activeYear = _this$state10.activeYear,
          activeMonth = _this$state10.activeMonth;

      if (value === 1) {
        if (activeMonth === 12) {
          if (activeYear === details.endYear) {
            return;
          }

          activeYear++;
          activeMonth = 1;
        } else {
          activeMonth++;
        }
      } else {
        if (activeMonth === 1) {
          if (activeYear === details.startYear) {
            return;
          }

          activeYear--;
          activeMonth = 12;
        } else {
          activeMonth--;
        }
      }

      this.setState({
        activeYear: activeYear,
        activeMonth: activeMonth
      });
    }
  }, {
    key: "getHeader",
    value: function getHeader() {
      var _this8 = this;

      var _this$context7 = this.context,
          icons = _this$context7.icons,
          SetState = _this$context7.SetState,
          listView = _this$context7.listView,
          disabled = _this$context7.disabled,
          size = _this$context7.size,
          type = _this$context7.type;
      var months = (0, _functions.getMonths)(type);
      var _this$state11 = this.state,
          activeYear = _this$state11.activeYear,
          activeMonth = _this$state11.activeMonth;
      var monthString = months[activeMonth - 1];
      var sign = {
        J: -1,
        G: 1
      }[type];
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "rdp-grid-header",
        style: {
          height: size / 5.5,
          padding: "0 ".concat(size / 12.5, "px")
        }
      }, !listView && !disabled && /*#__PURE__*/_react.default.createElement("div", {
        onClick: function onClick() {
          return _this8.changeActiveMonth(-sign);
        }
      }, icons.minus), /*#__PURE__*/_react.default.createElement("div", {
        className: "rdp-month",
        onClick: function onClick() {
          if (!disabled) {
            SetState({
              listView: true
            });
          }
        },
        style: {
          cursor: disabled ? '' : 'pointer',
          fontSize: Math.floor(size / 12)
        }
      }, (type === 'J' ? monthString : monthString.slice(0, 3)) + ' ' + activeYear), !listView && !disabled && /*#__PURE__*/_react.default.createElement("div", {
        onClick: function onClick() {
          return _this8.changeActiveMonth(sign);
        }
      }, icons.plus));
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var _this$context8 = this.context,
          size = _this$context8.size,
          type = _this$context8.type;
      var padding = size / 24,
          fontSize = size / 18,
          a = (size - padding * 2) / 7;
      return {
        gridTemplateColumns: "".concat(a, "px ").concat(a, "px ").concat(a, "px ").concat(a, "px ").concat(a, "px ").concat(a, "px ").concat(a, "px"),
        gridTemplateRows: "".concat(a, "px ").concat(a, "px ").concat(a, "px ").concat(a, "px ").concat(a, "px ").concat(a, "px ").concat(a, "px"),
        direction: type === 'J' ? 'rtl' : 'ltr',
        padding: padding,
        fontSize: fontSize
      };
    }
  }, {
    key: "render",
    value: function render() {
      var Spaces = this.getSpaces(),
          WeekDays = this.getWeekDays(),
          Days = this.getDayCells();
      var EndSpaces = this.getEndSpaces(42 - (Spaces.length + Days.length));
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, this.getHeader(), /*#__PURE__*/_react.default.createElement("div", {
        className: "rdp-grid",
        style: this.getStyle()
      }, WeekDays, Spaces, Days, EndSpaces));
    }
  }]);

  return RDatePickerGrid;
}(_react.Component);

_defineProperty(RDatePickerGrid, "contextType", rdpContext);