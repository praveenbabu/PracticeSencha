var task = null;
Ext.define('PracticeSencha.controller.Login', {
	name : 'Login',
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			navigationview : 'navigationview',
			loginMain : 'loginMain',
			productList : 'productList',
			productTable : 'productTable',
			LoginAuthContainer : '#LoginAuthContainer',
			productCarousel : 'productCarousel'

		},
		control : {
			'loginMain button[id=loginbtn]' : {
				tap : 'onloginForm'
			},

			'loginMain fieldset button[id=clearbtn]' : {
				tap : 'onclearForm'
			},

			'productList list[id=idSearchNavList]' : {
				itemtap : 'onListItemTap'
			},
			'productTable dataview[id=productDataView]' : {
				itemsingletap : 'onProductItemTap'
			},
			'productTable button[id=bt_camera]' : {
				tap : 'onCameraClick'
			},
			'productTable button[id=result_btnid]' : {
				tap : 'onNavProductCarousel'
			}

		}
	},

	onCameraClick : function(button, e, record, eOpts) {
		Ext.device.Camera.capture({
			source : 'camera',
			destination : 'file',

			success : function(url) {
				//show the newly captured image in a full screen Ext.Img component:
				Ext.create('Ext.Img', {
					src : url,
					fullscreen : true
				});
			}
		});

	},

	onProductItemTap : function(list, idx, target, record, evt) {
		Ext.select('#resultID').elements[0].innerHTML = record.data.Content;

	},

	onNavProductCarousel : function(button, e, record, eOpts) {
		button.up('navigationview').push({
			xtype : 'productCarousel',
			title : 'List Of Products'
		});
		var people = Ext.getStore('ProductLocalStorageModelID');

		people.load();
		people.add({
			firstName : 'Tyson',
			lastName : 'Cadenhead'
		});
		people.sync();
		console.log("Local Storage value : ");

		var str = "theIndiaExpressis no1 newspaper in chennai"
		var txt2 = Ext.String.ellipsis(str, 15);
		var txt1 = Ext.String.capitalize(str);
		var sample = '<p class="{0}">This is a <strong>{1}</strong></p>';
		var txt = Ext.String.format(sample, 'test', 'paragraph');
		console.log(txt);
		task.delay(1500);
		console.log("Capitalize : " + txt1);
		console.log("Ellipsis : " + txt2);
	},

	onloginForm : function(button, e, record, eOpts) {
		
		var map1 = Ext.create('Ext.util.HashMap');
		map1.on('add', function(map, key, value, eOpts) {
			console.log('EVENT; item added; key: "' + key + '",    value: "'
					+ value + '"');
		});
		map1.on('clear', function(map, eOpts) {
			console.log('EVENT; map cleared');
		});
		map1.on('remove', function(map, key, value, eOpts) {
			console.log('EVENT; item removed; key: "' + key + '",    value: "'
					+ value + '"');
		});
		map1.on('replace', function(map, key, value, old, eOpts) {
			console
					.log('EVENT; item replaced; key: "' + key
							+ '", old value: "' + old + '", new value: "'
							+ value + '"');
		});
		map1.add('key1', 'value1');
		map1.add('key2', 1234);
		map1.add('key3', true);
		console.log("Value of Key is "+map1.getKey('value1'));
		
		

		var userPass = Ext.getCmp('userPassword').getValue();
		console.log(userPass);
		task = Ext.create('Ext.util.DelayedTask', function() {
			Ext.Msg.alert("Called");
		});

		Ext.Viewport.setMasked({
			xtype : 'loadmask',
			message : 'Working...'
		});

		var sto = Ext.create('PracticeSencha.store.ProductStore');
		sto.load({
			scope : this,
			callback : function(records, operation, success) {
				Ext.Viewport.setMasked(false);
				console.error('JSON returned:::::::::::::');
				console.error(records);
				console.error(operation);
				var thelist = this.getProductList();
			}
		});
		button.up('navigationview').push({
			xtype : 'productList',
			title : 'Product List',
			autoDestory : true
		});
		/***********************************************************************
		 * var sto = Ext.create('PracticeSencha.store.ProductTableStore');
		 * sto.load({ scope : this, callback : function(records, operation,
		 * success) { Ext.Viewport.setMasked(false); console.error('JSON
		 * returned:::::::::::::'); console.error(records);
		 * console.error(operation); var thelist = this.getProductTable(); }});
		 * Ext.Viewport.on('orientationchange', 'orientationChangeHandler',
		 * this, {buffer: 50 }); button.up('navigationview').push({ xtype :
		 * 'productTable', title : 'Product Summary' });
		 **********************************************************************/
		Ext.Ajax.request({
			url : '192.168.11.173:7077/final/monitor/hello.jsp?uname='
					+ userPass,
			method : 'GET',
			success : function(response) {
				var res = response.responseText.trim();
				console.log("response : " + res);
				switch (res) {
				case 'trendgraph':
					Ext.Msg.alert("Success");
					button.up('navigationview').push({
						xtype : 'resultGrid',
						title : 'Resultant Grid'
					});
					console.log('success');
					break;
				}
			},
			failure : function(response) {
				Ext.Msg.alert(' failure ' + response.responseText);
				console.log(response.responseText);
			}
		});

	},

	onclearForm : function(newuserName, olduserName) {
		return confirm('Are you sure you want to change name to ' + newuserName
				+ '?') ? newuserName : olduserName;
	},

	onListItemTap : function(dataview, index, target, record, e, eOpts) {
		/*
		 * var selectdValue = record.get('name'); console.log('Selceted
		 * Itemindex: ' + index); alert("index" + index); console.log('Selceted
		 * Item value: ' + selectdValue);
		 */
		var sto = Ext.create('PracticeSencha.store.ProductTableStore');
		sto.load({
			scope : this,
			callback : function(records, operation, success) {
				Ext.Viewport.setMasked(false);
				console.error('JSON returned:::::::::::::');
				console.error(records);
				console.error(operation);
				var thelist = this.getProductTable();
			}
		});
		Ext.Viewport.on('orientationchange', 'orientationChangeHandler', this,
				{
					buffer : 50
				});
		dataview.up('navigationview').push({
			xtype : 'productTable',
			title : 'Product Summary',
			autoDestory : true
		});
	},
	/**
	 * simpleNavigate : function(button, e, record, eOpts) {
	 * button.up('navigationview').push({ xtype : 'productTable', title :
	 * 'Product Summary' }); },
	 */

	orientationChangeHandler : function(viewport, orientation, width, height) {
		// var domEl1 = Ext.get('myline');

		// console.log("els " + domEl1);

		if (orientation === "landscape") {
			// domEl1.addCls('ardrawline');
		} else {
			// domEl1.removeCls('ardrawline');
		}
	}
});