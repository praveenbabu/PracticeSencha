Ext.define('PracticeSencha.store.ProductTableStore', {
			extend : 'Ext.data.Store',
			alias : 'widget.productTableStore',

			config : {
				data : [{
							Content : '1'
						}, {
							Content : '2'
						}, {
							Content : '3 '
						}, {
							Content : '4'
						}, {
							Content : '5'
						}, {
							Content : '6'
						}, {
							Content : '7'
						}, {
							Content : '8'
						}, {
							Content : '9'
						}],
				model : 'PracticeSencha.model.ProductTableModel',
				storeId : 'productTableStoreID'
				
			}
		});
