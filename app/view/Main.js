Ext.define('PracticeSencha.view.Main', {
		extend: 'Ext.navigation.View',
   		 alias: 'widget.navigationview',

    requires: [
        'PracticeSencha.view.LoginAuth',
        'PracticeSencha.view.ProductList',
        'PracticeSencha.view.ProductTable',
        'PracticeSencha.view.ProductCarousel'
    ],

    config: {
        items: [
            {
                xtype: 'loginMain',
                title: 'Login'
            }       
         ]
    }

});