var IsFilter = React.createClass({

    displayName: 'Filter',

    propTypes: {
          words: React.PropTypes.arrayOf(React.PropTypes.string),

      },


    getDefaultProps: function () {
        return { question: "Что-то пошло не так!" }
    },

    getInitialState: function() {
        return { 
            wordsStorageArray: this.props.words,
            checkboxValue: false,
            textToSort: ''
        };
      },




    searchText: function (e) {
        let filterText = this.props.words;

        if(this.state.checkboxValue){
            filterText = filterText.filter(el => {
                return el.includes(e.target.value)
            }).sort();
        } else {
            filterText = filterText.filter(el => {
                return el.includes(e.target.value)
            });
        }
         this.setState({ wordsStorageArray: filterText, textToSort: e.target.value})
    },



    btnCancelSearch: function (e) {
        this.setState({ checkboxValue: false, textToSort: '', wordsStorageArray: this.props.words })
    },

    checkboxClick:function(e){
        this.setState({ checkboxValue: !this.state.checkboxValue});


        let filterText = this.props.words;

        if(!this.state.checkboxValue){
            filterText = filterText.filter(el => {
                return el.includes(this.state.textToSort)
            }).sort();
        } else {
            filterText = filterText.filter(el => {
                return el.includes(this.state.textToSort)
            });
        }

        this.setState({ wordsStorageArray: filterText})

    },
    

     render: function () {


        return React.DOM.div({ className: 'Filter' },
            React.DOM.input({ type: 'checkbox', className: 'textCheckbox', checked: this.state.checkboxValue, onClick: this.checkboxClick}),
            React.DOM.input({ type: 'text', className: 'textInput' ,  value: this.state.textToSort, onChange: this.searchText }),
            React.DOM.input({ type: 'button', className: 'textButton' , value:'СБРОС', onClick: this.btnCancelSearch}),
            React.DOM.textarea({ className: 'textView' , readOnly: true,
            value: this.state.wordsStorageArray.toString().replace(/[,]/g,'\n'),
               }), 

            );
            
      
    },
 
});

