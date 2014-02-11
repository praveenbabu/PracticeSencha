Ext.define('PracticeSencha.model.ProductLocalStorageModel', {
    extend: 'Ext.data.Model',
	alias : 'model.productLocalStorageModel',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'firstName', type: 'auto' },
            { name: 'lastName', type: 'auto' }
        ]}

});