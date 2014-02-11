Ext.define('PracticeSencha.store.ProductChartStore', {
    extend: 'Ext.data.Store',
    alias : 'widget.ProductChartStore',
    requires: [
        'PracticeSencha.model.ProductChartModel'
    ],
config: {

    data: [
        { name: 'Jan', value1: 5, value2: 412 },
        { name: 'Feb', value1: 23, value2: 142 },
        { name: 'Mar', value1: 83, value2: 113 },
        { name: 'Apr', value1: 233, value2: 834 },
        { name: 'May', value1: 509, value2: 1024 },
        { name: 'Jun', value1: 864, value2: 1102 },
        { name: 'Jul', value1: 1144, value2: 425 },
        { name: 'Aug', value1: 1179, value2: 324 },
        { name: 'Sep', value1: 946, value2: 39 },
        { name: 'Oct', value1: 591, value2: 1142 },
        { name: 'Nov', value1: 288, value2: 523 },
        { name: 'Dec', value1: 109, value2: 634 }
    ],
     model: 'PracticeSencha.model.ProductChartModel',
        storeId: 'productChartStoreID'
        }
        });