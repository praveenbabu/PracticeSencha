Ext.define('PracticeSencha.store.ProductStore', {
    extend: 'Ext.data.Store',
    alias : 'widget.ProductStore',
    requires: [
        'PracticeSencha.model.ProductModel'
    ],

    config: {
        data: [
        {
            name: 'Sencha EXT JS 4.0'
        },
        {
            name: 'Sencha EXT JS 3.5'
        },
        {
            name: 'Sencha Touch 2.2.1'
        },
        {
            name: 'Sencha Touch 2.1.0'
        },
        {
            name: 'Sencha Architect 2.1'
        }
        ],
        model: 'PracticeSencha.model.ProductModel',
        storeId: 'productStoreID'
    }
});