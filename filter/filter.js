var IsFilter = React.createClass({

    displayName: 'Filter',

    getDefaultProps: function () {
        return { question: "Что-то пошло не так!" }
    },

    render: function () {

        var storage = [];

        this.props.goods.forEach(element => {

            storage.push(
                React.DOM.div(
                    { key: element.code, className: 'Goods' },

                    React.DOM.div({ className: 'Goods' }, element.nameGoods),
                )
            );

        });

        return React.DOM.div({ className: 'Filter' },
            React.DOM.div({ className: 'Storage' }, storage),
        );
    },

});

