Ext.Loader.setPath({
    'Ext': 'touch/src',
    'PracticeSencha': 'app'
});
//</debug>

Ext.application({
    name: 'PracticeSencha',

    requires: [
        'Ext.TitleBar',
        'Ext.Audio',
        'Ext.dataview.List',
        'Ext.MessageBox',
        
        'Ext.ActionSheet',
        'Ext.picker.Picker',
        'Ext.data.proxy.LocalStorage',
        'Ext.field.Search',
        'Ext.form.FieldSet',
        'Ext.navigation.View',
        'Ext.Anim',
        'Ext.device.Camera',
   		'Ext.Img',	
    	'Ext.chart.CartesianChart',
        'Ext.carousel.Carousel',
        'Ext.env.Feature',
        'Ext.chart.PolarChart',
        'Ext.chart.interactions.ItemHighlight',
        'Ext.chart.interactions.PanZoom',
        'Ext.chart.interactions.Rotate',
          'Ext.draw.Component',
          'Ext.slider.Slider',
         'Ext.scroll.View',
        'Ext.Component',
        'Ext.env.Feature',
        'Ext.util.DelayedTask',
        'Ext.Function',
        'Ext.field.Password'
    ],
    controllers: [
        'Login'
    ],
     models: [
        'ProductModel',
        'ProductTableModel',
        'ProductChartModel',
        'ProductLocalStorageModel'
    ],
    stores: [
        'ProductStore',
        'ProductTableStore',
        'ProductChartStore',
        'ProductLocalStorageStore'
    ],

    views: [
        'Main'       
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element

        // Initialize the main view
       Ext.create('PracticeSencha.view.Main', {fullscreen: true});
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});


