Ext.define('PracticeSencha.model.ProductTableModel', {
			extend : 'Ext.data.Model',
			alias : 'model.productModel',

			config : {
				fields : [{
							name : 'Headline'
						}, {
							name : 'Content'
						}, {
							name : 'Author'
						}]
			}
		});