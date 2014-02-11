Ext.define('PracticeSencha.view.ProductList', {
	name : 'ProductListView',
	extend : 'Ext.Panel',
	alias : 'widget.productList',

	config : {
		layout : {
			type : 'fit'
		},
			items : [{
				xtype : 'list',
				onItemDisclosure : true,
				loadingText : "Searching ...",
				id : 'idSearchNavList',
				store : 'productStoreID',
				itemTpl : '<span style="font-weight:bold;">{name}</span><br/>'
			
		}]
	}
});
