var IShopBlock = React.createClass({

  displayName: 'IShopBlock',

  propTypes: {
    nameShop: React.PropTypes.string.isRequired,

    shopTitle: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.string.isRequired,
        foto: React.PropTypes.string.isRequired,
        quantity: React.PropTypes.string.isRequired,
        control: React.PropTypes.string,
      })
    ),

    goods: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        nameGoods: React.PropTypes.string.isRequired,
        cost: React.PropTypes.number.isRequired,
        urlFoto: React.PropTypes.string.isRequired,
        balance: React.PropTypes.number.isRequired,
        control: React.PropTypes.bool,
        code: React.PropTypes.number.isRequired,
        deleteElement: React.PropTypes.bool,
      })
    ),

  },

  getDefaultProps: function () {
    return { question: "Что-то пошло не так!" }
  },



  getInitialState: function () {
    return {
      clickedCode: null,
      goodsArray: this.props.goods,    
    };
  },

  selectGood: function (code) {
    this.setState({ clickedCode: code })
  },

  deleteGood: function (code) {

    if (confirm('Удалить товар?')) {
      let redaktArray = this.state.goodsArray.filter(element => element.code !== code);
      this.setState({ goodsArray: redaktArray })
    }
  },

  render: function () {

    var storageGoods = this.state.goodsArray.map(element =>
      React.createElement(IShopGoods, {
        key: element.code,
        code: element.code,
        nameGoods: element.nameGoods,
        cost: element.cost,
        urlFoto: element.urlFoto,
        balance: element.balance,
        elementSelected: this.selectGood,
        control: this.state.clickedCode === element.code ? true : false,
        deletedElement: this.deleteGood
      })
    );


    return React.DOM.div({ className: 'IShopBlock' },
      React.DOM.h1({ className: 'NameShop' }, this.props.nameShop),

      React.DOM.div({ className: 'GoodsStorage' },
        React.DOM.div({ className: 'Goods TitleLine' },
          React.DOM.div({ className: 'Foto FotoTitle' }, this.props.shopTitle[0].name),
          React.DOM.div({ className: 'Name FotoTitle' }, this.props.shopTitle[0].price),
          React.DOM.div({ className: 'Cost FotoTitle' }, this.props.shopTitle[0].foto),
          React.DOM.div({ className: 'Balance FotoTitle' }, this.props.shopTitle[0].quantity),
          React.DOM.div({ className: 'btnDiv FotoTitle' }, this.props.shopTitle[0].control),
        ),
        storageGoods),

    );
  },

});

