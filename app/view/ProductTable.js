Ext.define('PracticeSencha.view.ProductTable', {
	extend : 'Ext.Panel',
	alias : 'widget.productTable',
	id : 'ProductTableContainer',
	config : {
		items : [{
			xtype : 'dataview',
			id : 'productDataView',
			flex : 1,
			scrollable : {
				direction : 'both',

				directionLock : true
			},
			height : '100%',
			fullscreen : true,
			styleHtmlContent : true,
			width : '100%',
			layout : {
				type : 'fit'
			},

			itemCls : 'dataview-item',
			itemTpl : ['<div class="arHeadline">', '    {Headline}', '</div>',
					'<div class="arcontent">', '    {Content}', '</div>'],
			store : 'productTableStoreID'
		}, {
			xtype : 'image',
			id : 'largeImage',
			top : '80%',
			src : '',
				width : '10%',
			height : '30%'

		}, {
			xtype : 'textfield',
			bottom : 0,
			id : 'resultID',
			top : '90%',
			width : '78.33%',
			label : '',
			labelAlign : 'right',
			labelWidth : '0%',
			name : 'type'
		}, {
			xtype : 'button',
			bottom : '12%',
			docked : 'bottom',
			id : 'btn_camera',
			padding : 9,
			right : 0,
			top : '80%',
			ui : 'confirm',
			width : '22%',
			text : 'Click',
			handler : function(button, event) {
				Ext.device.Camera.capture({
					source : 'camera',
					destination : 'data',
					  quality: 100,
            			width: 300,
            			height: 300,
					success : function(imagedata) {
						var img = Ext.getCmp('largeImage');
						img.setSrc('data:image/jpeg;base64,' + imagedata);
					},

					failure : function() {
						Ext.Msg
								.alert('Error',
										'There was an error when acquiring the picture.');
					},
					scope : this
				});
			}
		},{
			xtype : 'button',
			bottom : 0,
			docked : 'bottom',
			id : 'result_btnid',
			padding : 9,
			right : 0,
			top : '90%',
			ui : 'confirm',
			width : '22%',
			text : 'GO'
		}]
	}
});