Ext.define('PracticeSencha.store.ProductLocalStorageStore', {
			extend : 'Ext.data.Store',
			requires : ['PracticeSencha.model.ProductLocalStorageModel'],
			config : {
				model : 'PracticeSencha.model.ProductLocalStorageModel',
				storeId: 'ProductLocalStorageModelID',
				autoLoad : true,
				proxy : {
					type : 'localstorage',
					id : 'people'
				}
			}
		});