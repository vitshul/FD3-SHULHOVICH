﻿var IShopBlock = React.createClass({

    displayName: 'IShopBlock',

    getDefaultProps: function() {
        return { question: "Что-то пошло не так!" }
      },

    render: function() {
  
      var storageGoods=[];


      this.props.goods.forEach(element => {
            
        storageGoods.push(
            React.DOM.div(
                    {key: element.code, className: 'Goods'},
                    React.DOM.div({className:'Foto'},element.urlFoto),
                    React.DOM.div({className:'Name'}, element.nameGoods),
                    React.DOM.div({className:'Cost'},element.cost),
                    React.DOM.div({className:'Balance'},element.balance),
                    
                )
            );

        });
      
      return React.DOM.div( {className:'IShopBlock'}, 
        React.DOM.h1( {className:'NameShop'}, this.props.nameShop ),
        React.DOM.div( {className:'GoodsStorage'}, storageGoods ),
      );
    },
  
  });