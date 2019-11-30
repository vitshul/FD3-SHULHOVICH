var IShopGoods = React.createClass({

    displayName: 'IShopGoods',
  
    propTypes: {
            nameGoods: React.PropTypes.string.isRequired,
            cost: React.PropTypes.number.isRequired,
            urlFoto: React.PropTypes.string.isRequired,
            balance: React.PropTypes.number.isRequired,
            control: React.PropTypes.bool,
            code: React.PropTypes.number.isRequired,
            deletedElement: React.PropTypes.func.isRequired,
            elementSelected: React.PropTypes.func.isRequired,
    },
  

    clickSelectElem: function (e) {
        this.props.elementSelected(this.props.code)
    },

    deleteElem: function (e) {
       e.stopPropagation();
       this.props.deletedElement(this.props.code)
    },

    render: function () {
        return React.DOM.div({
        className: this.props.control ? 'Goods BackgroundPink':'Goods' ,
        onClick: this.clickSelectElem
        },
            React.DOM.div({ className: 'Foto' },
                React.DOM.img({ src: this.props.urlFoto, alt: this.props.nameGoods, className: 'imgFoto' })),
            React.DOM.div({ className: 'Name' }, this.props.nameGoods),
            React.DOM.div({ className: 'Cost' }, 'cost: ' + this.props.cost),
            React.DOM.div({ className: 'Balance' }, 'balance: ' + this.props.balance),
            React.DOM.div({ className: 'btnDiv' },
                React.DOM.input({ type: 'button', className: 'btnDelete', value: 'Удалить', onClick: this.deleteElem })),

        )},
    

});

