Ext.define('PracticeSencha.view.ProductCarousel', {
			alias : 'widget.productCarousel',
			extend : 'Ext.Panel',
			config : {
				layout : {
					type : 'fit'
				},
				style : 'background: white',
				items : [{
							xtype : 'chart',
							background : "none",
							store : 'productChartStoreID',
							animate : true,
							interactions : ['panzoom', 'itemhighlight'],
							legend : {
								position : "bottom"
							},
							series : [{
										type : 'line',
										xField : 'name',
										yField : 'value1',
										title : 'Line',
										style : {
											smooth : true,
											stroke : '#115fa6',
											lineWidth : 3,
											shadowColor : 'rgba(0,0,0,1.5)',
											shadowBlur : 10,
											shadowOffsetX : 3,
											shadowOffsetY : 3
										},
										highlightCfg : {
											scale : 2
										},
										marker : {
											type : 'circle',
											stroke : '#0d1f96',
											fill : '#115fa6',
											lineWidth : 2,
											radius : 4,
											shadowColor : 'rgba(0,0,0,0.7)',
											shadowBlur : 10,
											shadowOffsetX : 3,
											shadowOffsetY : 3,
											fx : {
												duration : 50
											}
										}
									}, {
										type : 'bar',
										xField : 'name',
										yField : ['value2'],
										title : ['Bar'],
										style : {
											maxBarWidth : 15,
											lineWidth : 1.5,
											fill : "#a61120",
											stroke : 'black',
											shadowColor : 'rgba(0,0,0,0.7)',
											shadowBlur : 10,
											shadowOffsetX : 3,
											shadowOffsetY : 3
										}
									}],
							axes : [{
										type : 'numeric',
										position : 'left',
										grid : {
											odd : {
												fill : '#fafafa'
											}
										},
										style : {
											axisLine : false,
											estStepSize : 10,
											stroke : '#ddd'
										},
										minimum : 0,
										maximum : 1210
									}, {
										type : 'category',
										position : 'bottom',
										visibleRange : [0, 0.7],
										style : {
											estStepSize : 1,
											stroke : '#999'
										}
									}]
						}, {
							xtype : 'container',
							left : 40,
							top : -10,
							width : 160,
							height : 160,
							layout : 'fit',
							items : [{
								interactions : ['rotate', 'itemhighlight'],
								style : 'z-index: 5',
								xtype : 'polar',
								store : 'productChartStoreID',
								innerPadding : 16,
								series : [{
									type : 'pie',
									xField : 'value2',
									donut : 30,
									highlightCfg : {
										margin : 15
									},
									style : {
										fillOpacity : 0.9,
										stroke : "#444"
									},
									subStyle : {
										fillStyle : ["#115fa6", "#94ae0a",
												"#a61120", "#ff8809",
												"#ffd13e", "#a61187",
												"#24ad9a", "#7c7474", "#a66111"]
									}
								}]
							}]
						}

				]
			}
		});