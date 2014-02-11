Ext.define('PracticeSencha.view.LoginAuth', {
	name : 'LoginAuth',
	extend : 'Ext.Panel',
	alias : 'widget.loginMain',
	id : 'LoginAuthContainer',
	config : {
		items : [ {
			xtype : 'toolbar',
			docked : 'bottom',
			title : '',
			layout : {
				pack : 'center',
				type : 'hbox'
			},
			items : [ {
				xtype : 'button',
				ui : 'decline',
				width : '40%',
				left : '30%',
				id : 'btn_helpid',
				text : 'ActionSheet'
			}, {
				xtype : 'spacer'
			}, {
				xtype : 'button',
				ui : 'action-round',
				align : 'right',
				id : 'btn_pickerid',
				text : 'Picker'
			} ]
		}, {
			items : [ {
				xtype : 'fieldset',
				title : 'Login Form',
				defaults : {
					labelAlign : 'left',
					labelWidth : '35%',
					labelWrap : true
				},
				items : [ {
					xtype : 'textfield',
					label : 'Name',
					name : 'userName',
					value : 'admin',
					id : 'userName'
				}, {
					xtype : 'passwordfield',
					label : 'Password',
					name : 'userPassword',
					value : 'trendgraph',
					id : 'userPassword'
				}, {
					xtype : 'toolbar',
					docked : 'bottom',
					items : [ {
						xtype : 'button',
						width : '39%',
						height : '2em',
						id : 'loginbtn',
						text : 'Save Changes',
						ui : 'action-round',
						align : 'left'
					}, {
						xtype : 'spacer'
					}, {
						xtype : 'button',
						width : '30%',
						height : '2em',
						text : 'clear',
						align : 'right',
						id : 'clearbtn',
						ui : 'action-round'
					}]
				} ]
			} ]
		} ]
	}
});