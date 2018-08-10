'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp() {
        _classCallCheck(this, IndecisionApp);

        return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
    }

    _createClass(IndecisionApp, [{
        key: 'render',
        value: function render() {

            var title = 'Indecision';
            var subtitle = 'Put your life in the hands of  computer!';
            var options = ['Thing One', 'Thing Two', 'Thing Three'];
            var headerProps = {
                title: title,
                subtitle: subtitle
            };
            return React.createElement(
                'div',
                null,
                React.createElement(Header, headerProps),
                React.createElement(Action, null),
                React.createElement(Options, { options: options }),
                React.createElement(AddOption, null)
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        // component is a class itself, must define render function
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'handlePick',

        // define method
        value: function handlePick() {
            // this is a method for Action component in new and consice syntax, outside render
            alert('handlepick');
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.handlePick },
                    'What should I do?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this4.handleRemoveAll = _this4.handleRemoveAll.bind(_this4);
        return _this4;
    }

    _createClass(Options, [{
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            alert('handle remove all');
            console.log(this.props.options);
            // console.log(this.props.options); lose the context
            // example
            // const func = function () {
            // console.log(this)
            // }.bind(this);  get the context back, reset the context
            // func();   output is undefine, because already lose that context, then hoe to set the binding
            // Uncaught TypeError: Cannot read property 'props' of undefined
        }
        // render() is also a method of Options component, can not be arrow function, or have no access to handleRemoveAll

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.handleRemoveAll },
                    'Remove All'
                ),
                this.props.options.map(function (option) {
                    return React.createElement(Option, { key: option, optionText: option });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    ' ',
                    this.props.optionText,
                    ' '
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: 'handlAddOption',
        value: function handlAddOption(e) {
            e.preventDefault(); // this will stop the full page refreshing
            // console.log(e);
            var option = e.target.elements.option.value.trim();
            // .trim() take off spaces not internal
            // e.target is gonna point to the element the event started on
            if (option) {
                // 
                alert(option);
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.handlAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

// console.log('app.js is running');
// // JSX javascript XML
// // babel compile ES6 to ES5 javascript
// const app = {
//     title: 'Indecision App',
//     subtitle: 'Put your life in the hands of computer',
//     options: [],
// };

// const onFormSubmit = (e) => {   // add the event object
//     e.preventDefault(); // this will stop the full page refreshing
//     console.log(e);
//     const option = e.target.elements.option.value;  // e.target is gonna point to the element the event started on
//     if (option) {
//         app.options.push(option);
//         e.target.elements.option.value = ''; // clear the input
//     }
// };

// const onRemoveAll = () => {
//     app.options = [];
// }

// const onMakeDecision = () => {
//     const randomNum = Math.floor(Math.random() * app.options.length); // 0 - 1.99999, needs to be rounded
//     const option = app.options[randomNum];
//     alert(option);
// }

// const template = (
//     <div>
//         <h1>{app.title}</h1>
//         {app.subtitle && <p> {app.subtitle} </p>}
//         <p>{app.options.length > 0 ? 'Here are your options: ' : 'No options'}</p>

//         <form onSubmit={onFormSubmit}>
//             <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>

//             <button onClick={onRemoveAll}>Remove All</button>
//             <ol>
//                 {
//                     app.options.map((option) => (
//                         <li key={option}>{option}</li>
//                     ))
//                 }
//             </ol>
//             <input type='text' name='option' />

//             <button >Add Option</button>
//         </form>
//     </div >
// );


// const appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
