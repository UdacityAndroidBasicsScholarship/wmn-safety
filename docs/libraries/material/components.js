/********************************************************************************************/
/********************************************************************************************/
/******************************            MATERIAL           *******************************/
/********************************************************************************************/
/********************************************************************************************/


var _library = 'material';
var _path = '/material/';

prx.comps.materialColors = [{value: '#F44336',displayValue: '#F44336'},{value: '#E91E63',displayValue: '#E91E63'},{value: '#9C27B0',displayValue: '#9C27B0'},{value: '#673AB7',displayValue: '#673AB7'},{value: '#3F51B5',displayValue: '#3F51B5'},
	                        {value: '#2196F3',displayValue: '#2196F3'},{value: '#00BCD4',displayValue: '#00BCD4'},{value: '#4CAF50',displayValue: '#4CAF50'},{value: '#8BC34A',displayValue: '#8BC34A'},{value: '#CDDC39',displayValue: '#CDDC39'},
	                        {value: '#FFEB3B',displayValue: '#FFEB3B'},{value: '#FFC107',displayValue: '#FFC107'},{value: '#FF9800',displayValue: '#FF9800'},{value: '#FF5722',displayValue: '#FF5722'},{value: '#795548',displayValue: '#795548'},
	                        {value: '#607D8B',displayValue: '#607D8B'},{value: '#000000',displayValue: '#000000'},{value: '#BDBDBD',displayValue: '#BDBDBD'},                       
	                        {value: '#EF5350',displayValue: '#EF5350'},{value: '#EC407A',displayValue: '#EC407A'},{value: '#AB47BC',displayValue: '#AB47BC'},{value: '#7E57C2',displayValue: '#7E57C2'},{value: '#5C6BC0',displayValue: '#5C6BC0'},
	                        {value: '#42A5F5',displayValue: '#42A5F5'},{value: '#26C6DA',displayValue: '#26C6DA'},{value: '#66BB6A',displayValue: '#66BB6A'},{value: '#9CCC65',displayValue: '#9CCC65'},{value: '#D4E157',displayValue: '#D4E157'},
	                        {value: '#FFEE58',displayValue: '#FFEE58'},{value: '#FFCA28',displayValue: '#FFCA28'},{value: '#FFA726',displayValue: '#FFA726'},{value: '#FF7043',displayValue: '#FF7043'},{value: '#8D6E63',displayValue: '#8D6E63'},
	                        {value: '#78909C',displayValue: '#78909C'},{value: '#616161',displayValue: '#616161'},{value: '#EEEEEE',displayValue: '#EEEEEE'},	                        
	                        {value: '#EF9A9A',displayValue: '#EF9A9A'},{value: '#F48FB1',displayValue: '#F48FB1'},{value: '#CE93D8',displayValue: '#CE93D8'},{value: '#B39DDB',displayValue: '#B39DDB'},{value: '#9FA8DA',displayValue: '#9FA8DA'},
	                        {value: '#90CAF9',displayValue: '#90CAF9'},{value: '#80DEEA',displayValue: '#80DEEA'},{value: '#A5D6A7',displayValue: '#A5D6A7'},{value: '#C5E1A5',displayValue: '#C5E1A5'},{value: '#E6EE9C',displayValue: '#E6EE9C'},
	                        {value: '#FFF59D',displayValue: '#FFF59D'},{value: '#FFE082',displayValue: '#FFE082'},{value: '#FFCC80',displayValue: '#FFCC80'},{value: '#FFAB91',displayValue: '#FFAB91'},{value: '#BCAAA4',displayValue: '#BCAAA4'},
	                        {value: '#B0BEC5',displayValue: '#B0BEC5'},{value: '#9E9E9E',displayValue: '#9E9E9E'},{value: '#FFFFFF',displayValue: '#FFFFFF'}]; 

prx.commonproperties.materialBackgroundColor = { caption: 'Background', name: 'backgroundColor', proptype: 'background-color', type: 'combo-colorpicker', value: function(item,name) { return item.backgroundColor; }, values: prx.comps.materialColors, liveUpdate: 'background-color', changeProperty: {caption: 'Background color', selector: '.changeProperty-backgroundColor', property: 'background-color', transitionable: true } }
prx.commonproperties.materialBackgroundColorActive = { caption: 'Active', name: 'backgroundColor', proptype: 'background-color-2-active', type: 'combo-colorpicker', value: function(item,name) { return item.backgroundColorActive; }, values: prx.comps.materialColors, liveUpdate: 'background-color', changeProperty: {caption: 'Active Background color', selector: '.changeProperty-backgroundColorActive', property: 'background-color', transitionable: true } }
prx.commonproperties.materialTextColor = { caption: false, name: 'textColor', proptype: 'font-color', type: 'combo-colorpicker', value: function(item,name) { return item.textColor; }, values: prx.comps.materialColors, liveUpdate: 'color', changeProperty: { caption: 'Text color', selector: '.changeProperty-textColor', property: 'color', transitionable: true } }
prx.commonproperties.materialTextColorActive = { caption: false, name: 'textColorActive', proptype: 'font-color-2-active', type: 'combo-colorpicker', value: function(item,name) { return item.textColorActive; }, values: prx.comps.materialColors, liveUpdate: 'color', changeProperty: { caption: 'Active Text color', selector: '.changeProperty-textColorActive', property: 'color', transitionable: true } }
prx.commonproperties.materialTextColorSubtitle = { caption: false, name: 'subtitleColor', proptype: 'font-color-3-subtitle', type: 'combo-colorpicker', value: function(item,name) { return item.subtitleColor; }, values: prx.comps.materialColors, liveUpdate: 'color', changeProperty: { caption: 'Subtitle color', selector: '.changeProperty-subtitleColor', property: 'color', transitionable: true } }
prx.commonproperties.materialBorderColor = { caption: false, name: 'borderColor', proptype: 'border-color', type: 'combo-colorpicker', value: function(item,name) { return item.borderColor; }, values: prx.comps.materialColors, liveUpdate: 'border-color', changeProperty: { caption: 'Border Color', selector: '.changeProperty-borderColor', property: 'border-color', transitionable: true } }
prx.commonproperties.materialBorderColorActive = { caption: 'Active', name: 'borderColorActive', proptype: 'border-color-2-active', type: 'combo-colorpicker', value: function(item,name) { return item.borderColorActive; }, values: prx.comps.materialColors, liveUpdate: 'border-color', changeProperty: { caption: 'Active Border Color', selector: '.changeProperty-borderColorActive', property: 'border-color', transitionable: true } }
prx.commonproperties.materialIconActiveMask = { caption: 'Active', name: 'iconColorActive', proptype: 'icon-color-active', type: 'combo-colorpicker', value: function(item,name) { return item.iconColorActive; }, values: prx.comps.materialColors, liveUpdate: 'background-color', changeProperty: { caption: 'Active icon color', rerender: true } }
prx.commonproperties.materialShadowColor = { caption: 'Shadow', name: 'shadowColor', proptype: 'shadow-color', type: 'combo-colorpicker', value: function(item,name) { return item.shadowColor; }, values: prx.comps.materialColors, changeProperty: { caption: 'Shadow', rerender: true, changeable: false} }
prx.commonproperties.materialPlaceholderColor = { caption: 'Placeholder Color', name: 'placeholderColor', proptype: 'placeholder-color', type: 'combo-colorpicker', value: function(item,name) { if(typeof(item.placeholderColor)=='undefined') { return '999999'; } return item.placeholderColor; }, values: prx.comps.materialColors, liveUpdate: 'color', changeProperty: { caption: 'Placeholder color', rerender: true } }
prx.commonproperties.materialTextColorLabel = { caption: false, name: 'labelColor', proptype: 'font-color-4-label', type: 'combo-colorpicker', value: function(item,name) { return item.labelColor; }, values: prx.comps.materialColors, liveUpdate: 'color', changeProperty: { caption: 'Label color', selector: '.changeProperty-labelColor', property: 'color', transitionable: true } }

prx.commonproperties.materialRipple = {
	caption: "Ripple effect",
	properties: [
         [
				{
					caption: false
					,name: 'rippleEffectType'
					,proptype: 'ripple-effect'
					,type: 'select'
					,value: function(item,name,index) {
						if(item.rippleEffectType === undefined) {
							if(item.rippleEffect == false) { return 'none';}
							
							if(item.rippleEffectColor == 'rgba(0,0,0,0.1)') { return 'dark';}
							if(item.rippleEffectColor == 'rgba(255,255,255,0.1)') { return 'light';}
							return 'custom';
						}
						return item.rippleEffectType;
					}
					,values: [
				          {value: 'dark',displayValue: 'Dark'},
				          {value: 'light',displayValue: 'Light'},
				          {value: 'custom',displayValue: 'Custom'},
				          {value: 'none',displayValue: 'None'}
			        ]
					,onChange: function (item, name) {
						if(item.rippleEffectType == 'none') { item.rippleEffect = false;}
						else { item.rippleEffect = true;}
						
						if(item.rippleEffectType == 'custom') { 
							$('#property-rippleEffectColor').show();
						}
						else { $('#property-rippleEffectColor').hide();}
						
						if(item.rippleEffectType == 'dark') { item.rippleEffectColor = 'rgba(0,0,0,0.1)';}
						else if(item.rippleEffectType == 'light') { item.rippleEffectColor = 'rgba(255,255,255,0.1)';}
					}
					,changeProperty: {  
						caption: 'Ripple Effect type',
						rerender: true,
						changeable: false
					}  
				
				},	
				{
					caption: false,
					name: 'rippleEffectColor',
					type: 'colorpicker',
					value: function (item, name) {
						return item.rippleEffectColor;
					},
					hiddenByDefault: function (item, name) {
						return item.rippleEffectType != 'custom';
					},
					changeProperty: {
						caption: 'Ripple effect color',
						rerender: true
					}
				}
	]]
}

/******************************/
/***** TOOLBAR COMPONENTS *****/
/******************************/

//TYPE: FIXED TABBAR
prx.types.material_tabbar_fixed = {
	name: "material_tabbar_fixed"
	,onDisplay: function(item,containerid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		var width = Math.floor(dims.width/item.tabs.length);

		var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';

		var cR = '';
		cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-tabbar-fixed" '+((prx.componentsHelper.getProp(item.overlay,'boolean')) ? 'data-mpoverlay="1"' : '')+'>';
		
		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		if(prx.componentsHelper.getProp(item.shadowEnabled,'boolean')) {
			cR += '#'+_id+' .material-tabbar-fixed-list { box-shadow: 0 '+(1*prx.componentsHelper.getScale(item.lib))+'px '+(3*prx.componentsHelper.getScale(item.lib))+'px '+(1*prx.componentsHelper.getScale(item.lib))+'px '+ prx.componentsHelper.getProp(item.shadowColor,'color-shadow') + '; } ';
		}
		cR += '#'+_id+' .material-tabbar-fixed-list { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; } ';
		cR += '#' + _id + ' .material-tabbar-fixed-list-item { width: '+width+'px; background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; }';
		cR += '#' + _id + ' .material-tabbar-fixed-list-item label { font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; '+prx.componentsHelper.getProp(item.textFont,'font-family')+'}';
		cR += '#' + _id + ' .material-tabbar-fixed-list-item-input:checked + label { color: '+prx.componentsHelper.getProp(item.textColorActive,'color-text')+';}';
		if(!prx.editor) {
		cR += '#' + _id + ' .material-tabbar-fixed-indicator { width: '+width+'px; height: '+prx.componentsHelper.getProp(item.tabIndicatorWidth,'num-other')+'px; left: '+(width * prx.componentsHelper.getProp(item.selected,'num-other'))+'px; background-color: '+prx.componentsHelper.getProp(item.tabIndicatorColor,'color-background')+ '; }';
		}
		else {
			cR += '#' + _id + ' .material-tabbar-fixed-list-item-input + label { border-bottom: '+prx.componentsHelper.getProp(item.tabIndicatorWidth,'num-border-width')+'px solid transparent; }';
			cR += '#' + _id + ' .material-tabbar-fixed-list-item-input:checked + label { border-bottom-color: '+prx.componentsHelper.getProp(item.tabIndicatorColor,'color-border')+'; }';
		}
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);
		
		cR += '<ul class="material-tabbar-fixed-list liveUpdate-shadowColor changeProperty-shadowColor liveUpdate-backgroundColor changeProperty-backgroundColor">';
		
		$.each(item.tabs, function(i,elm){

			if( elm.imgSrc === undefined ) elm.imgSrc = {"fileId":"","assetType":"","name":""};

            cR += '<style>';
            if( /icon/i.test(item.name) ) {
			cR += '#' + _id + ' .material-tabbar-fixed-icon-'+i+' { background-image: url(' + prx.componentsHelper.getProp(elm.imgSrc, 'asset') + '); }';
            }
            cR += '</style>';

			if(typeof(elm.linkedscreen) == "undefined") { elm.linkedscreen = -1; }
			var cChecked = '';
			
			if (i==prx.componentsHelper.getProp(item.selected,'num-other')) {
				cChecked = ' checked="checked"';
			}
			
			cR += '<li class="material-tabbar-fixed-list-item liveUpdate-backgroundColor changeProperty-backgroundColor dynamic-property '+((prx.componentsHelper.getProp(item.rippleEffect,'boolean')) ? 'prx-material-ripple' : '' )+'" data-dynamic-property-index="'+i+'" id="'+_id+'-tabs-'+i+'" '+((prx.componentsHelper.getProp(elm.linkedscreen,'num-other') != -1) ? 'data-linked-screen="'+prx.componentsHelper.getProp(elm.linkedscreen,'num-other')+'"' : '')+'>';
			cR += '<input class="material-tabbar-fixed-list-item-input" type="radio" name="'+_id+'-radio" id="'+_id+'-radio-'+i+'"'+cChecked+' data-role="none" '+((!prx.componentsHelper.getProp(item.changeActive,'boolean')) ? 'disabled' : '')+'/>';

			cR += '<label class="material-tabbar-fixed-list-item-label '+((i==prx.componentsHelper.getProp(item.selected,'num-other') && prx.editor) ? 'liveUpdate-tabIndicatorColor-border-color changeProperty-tabIndicatorColor-border-color changeProperty-tabIndicatorWidth-border-width ' : '')+''+((i==prx.componentsHelper.getProp(item.selected,'num-other')) ? 'liveUpdate-textColorActive changeProperty-textColorActive' : 'liveUpdate-textColor changeProperty-textColor')+' changeProperty-textSize changeProperty-textFont" for="'+_id+'-radio-'+i+'">';

			if( /icon/i.test(item.name) ) {
                cR += '<span class="material-tabbar-fixed-icon material-tabbar-fixed-icon-'+i+' '+ ((item.name == 'material_tabbar_fixed_icon') ? 'material-tabbar-fixed-icon-only' : 'material-tabbar-fixed-icon-text') +'"></span>';
            }

            if( item.name === 'material_tabbar_fixed' || item.name === 'material_tabbar_fixed_icon_text' ) {
                cR += '<span data-editableproperty="caption" data-dynamic-property-index="' + i + '">' + prx.componentsHelper.getProp(elm.caption, 'text-textarea') + '</span>';
            }

			cR += '</label>';

			cR += '</li>';
		});
		
		cR += '</ul>';
		if(!prx.editor) {
			cR += '<div class="material-tabbar-fixed-indicator liveUpdate-tabIndicatorColor-background-color changeProperty-tabIndicatorColor-background-color changeProperty-tabIndicatorWidth-height"></div>';
		}
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,onResize: function(item, containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		var width = Math.floor(dims.width/item.tabs.length);
		
		$('#'+_id).find('.material-tabbar-fixed-list-item').width(width);
	}
	,afterDisplay: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		var tabs_width = Math.floor(dims.width/item.tabs.length);
		
		if(!prx.editor) {
			$('#' + _id + ' [data-linked-screen]').each(function(){
				var screenId = $(this).attr('data-linked-screen');
				
				if(prx.stc.screens.getIndexFromId(screenId) != -1) {
					var guid = prx.utils.getGuid();
					var action = {
						title: 'Go to screen "'+prx.pages[prx.stc.screens.getIndexFromId(screenId)].title+'"',
						type: "tap",
						actionId: "go-to-page",
						pageId: screenId,
						animation: "none",
						delay: "0",
						callback: false,
						guid: guid,
						bindTo: '#' + $(this).attr('id')
						
					};
					
					action = prx.actions.recursivelyAddInfo(action, action.bindTo, containerid, containerid+ '', action.bindTo, '.protoio-actions-afterdisplay')
					prx.actions.build(action);
					prx.actions.disableFlashActionOnItemTap(action.bindTo, '.flashactiontap-afterdisplay');
				}
			});
			
			//indicator animation	
			$('#' + _id + ' .material-tabbar-fixed-list-item-input').on('change.custom-change-event', function(e){

				var $this = $('#' + _id + ' .material-tabbar-fixed-list-item-input:checked + label');

				var offset = $this.offset().left;
				var width = $this.width();
				var containerOffset = $('#' + _id + ' .material-tabbar-fixed-list').offset().left;
				var centerX = (offset + width / 2) - containerOffset - width/2;
				
				var timeline = new TimelineMax();
				var element = $('#' + _id + ' .material-tabbar-fixed-indicator');
				var elementPos = element.position().left;
				var distance = Math.max(elementPos,centerX) - Math.min(elementPos,centerX);

				// coming from a linked screen button, shouldn't transition because the source position of the indicator is unknown
				if($(this).parents('.material-tabbar-fixed-list-item').attr('data-linked-screen') !== undefined) {
					element.css({
						left: centerX + 'px',
						width: tabs_width + 'px',
					});
					return;
				}

				if( centerX != element.position().left ) {
					
					if( centerX > element.position().left ) {
						timeline.add(TweenLite.to(element, 0.3, {left: parseInt(elementPos), width: parseInt(tabs_width)+parseInt(distance)/2, ease:Expo.easeIn}), 0);
						timeline.add(TweenLite.to(element, 0.2, {left: centerX, width: tabs_width, ease:Expo.easeOut}), 0.4);
					}
					if( centerX < element.position().left ) {
						timeline.add(TweenLite.to(element, 0.3, {left: parseInt(elementPos)-parseInt(tabs_width), width: parseInt(tabs_width)+parseInt(distance)/2, ease:Expo.easeIn}), 0);
						timeline.add(TweenLite.to(element, 0.2, {left: centerX, width: parseInt(tabs_width), ease:Expo.easeOut}), 0.4);
					}
				}
			});
				
		}
	}
	,propertyGroups: [
		{
			caption: 'Style',
			properties: [
				[
					prx.commonproperties.materialBackgroundColor
				],
				[
					{	
						caption: 'Tab Indicator',
						name: 'tabIndicatorWidth',
						proptype: 'border-width',
						type: 'combo-select',
						value: function(item,name) { return item.tabIndicatorWidth; },
						values: { min: 1, max: 15, step: 1 }
						,changeProperty: {
	                		caption: 'Tab indicator thickness',
	                		selector: '.changeProperty-tabIndicatorWidth',
	                		property: 'height,border-width',
	                		transitionable: true
	                	}
					},
					{ 	
						caption: false, 
						name: 'tabIndicatorColor',
						proptype: 'divider-color',
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.tabIndicatorColor; 
						}, 
						values: prx.comps.materialColors, 
						liveUpdate: 'border-color,background-color', 
						changeProperty: { 
							caption: 'Tab indicator color', 
							selector: '.changeProperty-tabIndicatorColor', 
							property: 'border-color,background-color', 
							transitionable: true 
						} 
					}
				],
				[
					{
						caption: 'Shadow?'
						,name: 'shadowEnabled'
						,type: 'onoff'
						,value: function(item,name) {
							if(typeof(item.shadowEnabled)=="undefined") {
								return false;
							}
							return item.shadowEnabled;
						}
						,onChange: function(item){
							if(item.shadowEnabled) {
								$('#property-shadowColor').show();
							} else {
								$('#property-shadowColor').hide();
							}	
						}				
						,changeProperty: {
							caption: 'Shadow toggle',
							rerender: true
						}
					},
					{ 
						caption: false, 
						name: 'shadowColor', 
						proptype: 'shadow-color', 
						type: 'combo-colorpicker',
						value: function(item,name) { 
							return item.shadowColor; 
						}, 
						values: prx.comps.materialColors, 
						hiddenByDefault: function(item) {
							return (!item.shadowEnabled);
						},
						changeProperty: { 
							caption: 'Shadow', 
							rerender: true, 
							changeable: false
						} 
					}
	      		]
			]
		},
		{
			caption: 'Text',
			properties: [
				[
					prx.commonproperties.textFontRichText('font-family','tabs.caption')
					,prx.commonproperties.textSizeRichText('font-size','tabs.caption')
					,prx.commonproperties.materialTextColorRichText('color','tabs.caption')
				],
				[
					prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'tabs.caption'),
					{ 
						caption: 'Active', 
						name: 'textColorActive', 
						proptype: 'font-color-2-active', 
						type: 'combo-colorpicker', 
						value: function(item,name) { return item.textColorActive; }, 
						values: prx.comps.materialColors, 
						liveUpdate: 'color', 
						changeProperty: { 
							caption: 'Active Text color', 
							selector: 'input:checked + label', 
							property: 'color', 
							transitionable: true 
						} 
					}						
				]
			]
		},
		{
			caption: 'Advanced',
			properties: [
			    [
			     	{
					  caption: 'Active tab'
					  ,name: 'selected'
					  ,type: 'select'
					  ,value: function(item,name) {
						  return item.selected;
					  }
					  ,values: function(item,name) {
						  var _rA = [{value: '999',displayValue: 'None'}];
						  for (var n = 0; n < item.tabs.length; n++) {
							  _rA.push({value: n,displayValue: prx.utils.escapeHTML(item.tabs[n].caption.replace(/<br>/g, "\n").replace(/(<([^>]+)>|(&nbsp;))/ig, ''))});
						  }	
						  return _rA;
					  } 
					  ,changeProperty: {
	                		caption: 'Active tab',
	                		rerender: true
	                	}
					}
			    ],
			    [
		   			{
		  	  			caption: 'Change active state on click'
		  	  			,name: 'changeActive'
		  	  			,type: 'onoff'
		  	  			,value: function(item,name) {
		  	      			return item.changeActive;
		  	      		}
		      			,changeProperty: {
							caption: 'Change active state on click',
							rerender: true
						}
					}
		   		],
				[
					{
						caption: 'Position fixed on transitions'
						,name: 'overlay'
						,type: 'onoff'
						,value: function(item,name) {
							if(typeof(item.overlay)=="undefined") {
								return false;
							}
							return item.overlay;
						}
						,changeProperty: {
	                		caption: 'Position fixed',
	                		rerender: true
	                	}
					}
				]
			]
		},
		prx.commonproperties.materialRipple
	]	
	,dynamicProperties: {
		data: 'tabs'
		,propertyCaption: 'Tabs'
  		,propertyName: 'Tab'
		,addCaption: 'Add tab'
		,deleteCaption: 'Delete'
		,blankItem: {
			caption: "TAB TITLE"
			,actions: []
		}
		,captionProperty: 'caption'
		,editableProperties: [
          	{
      			caption: 'Title'
      			,name: 'caption'
      			,type: 'input'
      			,value: function(item,name,index) {
          			return item.tabs[index].caption;
          		}
	          	,changeProperty: {
	        		caption: 'Title',
	        		selector: 'label',
	        		property: 'text',
	        		transitionable: false
	        	}
  			}
		]
		,interactions: [ prx.commonproperties.actions_tabs ]
		,propertyGroups: [
	      	{
	      		caption: 'Linked screen (optional)',
	      		properties: [
	      		    [
		      			{
		      				caption: false
		      				,name: 'linkedscreen'
		      				,type: 'select'
		      				,help: 'Will trigger a "Go to screen" action on Tap, and force active state to this tab when the selected screen is active'
		      				,value: function(item,name,index) {
		      					return item.tabs[index].linkedscreen
		      				}
		      				,values: function(item,name,index) {
                                var options = [];
                                for(var i=0; i<prx.pages.length ; i++) {
                                    options.push({ displayValue: prx.utils.escapeHTML(prx.pages[i].title), value: prx.pages[i].id, id: prx.pages[i].id });
                                }
                                options.sort(prx.stc.pane.helper.sortCustomPages);
                                options.unshift({ displayValue: 'None', value: -1, id: -1});
                                return options;
		      				}
		    				,changeProperty: {
		  						caption: 'Linked Screen',
		  						rerender: true
		  					 }
		      			}
		      		]
	      	    ]
	      	},
            {
                caption: 'Icon',
                properties: [
                    [
                        {
                            caption: false,
                            name: 'imgSrc',
                            proptype: 'icon-source',
                            type: 'combo-asset',
                            displayValue: function(item,name,index) {
                                if(item.tabs[index].imgSrc.fileId == '') { return 'No asset selected.'; }
                                return item.tabs[index].imgSrc.name;
                            },
                            value: function(item,name,index) {
                                return JSON.stringify({ allow: 'image', asset: item.tabs[index].imgSrc });
                            },
                            hiddenByDefault: function(item,name,index){
                                return !/icon/i.test(item.name);
                            },
                            changeProperty: {
                                caption: 'Icon',
                                rerender: true
                            }
                        }
                    ]
                ]
            }
	    ]
	}
}

//TYPE: SCROLLABLE TABBAR
prx.types.material_tabbar_scrollable = {
	name: "material_tabbar_scrollable"
	,onDisplay: function(item,containerid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		var _props = prx.componentsHelper.getProp(item.textProperties,'props-text');

		var tabs = prx.componentsHelper.getProp(item.tabs,'text-list').split("<br />");

		var cR = '';		
		cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-tabbar-scrollable" '+((prx.componentsHelper.getProp(item.overlay,'boolean')) ? 'data-mpoverlay="1"' : '')+'>';
		
		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		if(prx.componentsHelper.getProp(item.shadowEnabled,'boolean')) {
			cR += '#'+_id+' .material-tabbar-scrollable-inner { box-shadow: 0 '+(1*prx.componentsHelper.getScale(item.lib))+'px '+(3*prx.componentsHelper.getScale(item.lib))+'px '+(1*prx.componentsHelper.getScale(item.lib))+'px '+ prx.componentsHelper.getProp(item.shadowColor,'color-shadow') + '; } ';
		}
		cR += '#' + _id + ' .material-tabbar-scrollable-inner { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; }';
		cR += '#' + _id + ' .material-tabbar-scrollable-list-item { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; }';
		cR += '#' + _id + ' .material-tabbar-scrollable-list-item label { font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; '+prx.componentsHelper.getProp(item.textFont,'font-family')+' '+_props+' }';
		cR += '#' + _id + ' .material-tabbar-scrollable-list-item-input:checked + label { color: '+prx.componentsHelper.getProp(item.textColorActive,'color-text')+';}';
		if(!prx.editor) {
			cR += '#' + _id + ' .material-tabbar-scrollable-indicator { height: '+prx.componentsHelper.getProp(item.tabIndicatorWidth,'num-other')+'px; background-color: '+prx.componentsHelper.getProp(item.tabIndicatorColor,'color-background')+ '; }';
		} else {
			cR += '#' + _id + ' .material-tabbar-scrollable-list-item-input + label { border-bottom: '+prx.componentsHelper.getProp(item.tabIndicatorWidth,'num-border-width')+'px solid transparent; }';
			cR += '#' + _id + ' .material-tabbar-scrollable-list-item-input:checked + label { border-bottom-color: '+prx.componentsHelper.getProp(item.tabIndicatorColor,'color-border')+ '; }';
		}
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);
			
		cR += '<div class="material-tabbar-scrollable-inner liveUpdate-backgroundColor changeProperty-backgroundColor" id="' + _id + '-inner">';
		cR += '<ul class="material-tabbar-scrollable-list liveUpdate-shadowColor changeProperty-shadowColor">';
		
		$.each(tabs, function(i,elm){
			var cChecked = '';			
			if (i==prx.componentsHelper.getProp(item.selected,'num-other')) {
				cChecked = ' checked="checked"';
			}

			cR += '<li class="material-tabbar-scrollable-list-item liveUpdate-backgroundColor changeProperty-backgroundColor '+((prx.componentsHelper.getProp(item.rippleEffect,'boolean')) ? 'prx-material-ripple' : '' )+'" id="'+_id+'-tabs-'+i+'">';
			cR += '<input class="material-tabbar-scrollable-list-item-input" type="radio" name="'+_id+'-radio" id="'+_id+'-radio-'+i+'"'+cChecked+' data-role="none" value="'+i+'"/>';
			cR += '<label class="material-tabbar-scrollable-list-item-label '+((i==prx.componentsHelper.getProp(item.selected,'num-other')) ? 'liveUpdate-tabIndicatorColor-border-color changeProperty-tabIndicatorColor-border-color changeProperty-tabIndicatorWidth-border-width ' : '')+''+((i==prx.componentsHelper.getProp(item.selected,'num-other')) ? 'liveUpdate-textColorActive changeProperty-textColorActive' : 'liveUpdate-textColor changeProperty-textColor')+' changeProperty-textSize changeProperty-textFont" for="'+_id+'-radio-'+i+'"><span>'+elm+'</span></label>';
			cR += '</li>'; 		
		});
		
		cR += '</ul>';
		if(!prx.editor) {
			cR += '<div class="material-tabbar-scrollable-indicator liveUpdate-tabIndicatorColor-background-color changeProperty-tabIndicatorColor-background-color changeProperty-tabIndicatorWidth-height"></div>';
		}
		cR += '</div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	
	}
	,afterDisplay: function(item,containerid,symbol) {

		if(!prx.editor) {
			prx.scrollable.materialIniTabbar(item, containerid)
		} else {
			var _id = (!containerid) ? item.id : containerid+'-'+item.id;
			var dims = prx.componentsHelper.getRealDims(item, symbol);

			if($('#'+_id+'-tabs-' + item.selected).length === 0) return;

			var pos = $('#'+_id+'-tabs-' + item.selected).position().left / prx.zoom._zoom;
			var width = $('#'+_id+'-tabs-' + item.selected).width();
			var outerwidth = dims.width;
			var targetpos = (outerwidth-width)/2;
			var targetleft = pos - targetpos;
			if(targetleft < 0) {
				return;
			}

			if(targetleft - 60*prx.componentsHelper.getScale(item.lib) > $('#' + _id + ' ul').width() - outerwidth) {
				targetleft = $('#' + _id + ' ul').width() - outerwidth + 60*prx.componentsHelper.getScale(item.lib);
			}

			$('#'+_id+' ul').css({
				'left': '-' +targetleft + 'px',
				'position': 'absolute'
			})
		}
	}
	,propertyGroups: [			
		{
			caption: 'Style',
			properties: [
				[
					prx.commonproperties.materialBackgroundColor
				],
				[
					{	
						caption: 'Tab Indicator',
						name: 'tabIndicatorWidth',
						proptype: 'border-width',
						type: 'combo-select',
						value: function(item,name) { return item.tabIndicatorWidth; },
						values: { min: 1, max: 15, step: 1 }
						,changeProperty: {
							caption: 'Tab indicator thickness',
							selector: '.changeProperty-tabIndicatorWidth',
							property: 'height,border-width',
							transitionable: true
						}
					},
					{ 	
						caption: false, 
						name: 'tabIndicatorColor',
						proptype: 'divider-color',
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.tabIndicatorColor; 
						}, 
						values: prx.comps.materialColors, 
						liveUpdate: 'border-color,background-color', 
						changeProperty: { 
							caption: 'Tab indicator color', 
							selector: '.changeProperty-tabIndicatorColor', 
							property: 'border-color,background-color', 
							transitionable: true 
						} 
					}					
				],
				[
					{
						caption: 'Shadow?'
						,name: 'shadowEnabled'
						,type: 'onoff'
						,value: function(item,name) {
							if(typeof(item.shadowEnabled)=="undefined") {
								return false;
							}
							return item.shadowEnabled;
						}
						,onChange: function(item){
							if(item.shadowEnabled) {
								$('#property-shadowColor').show();
							} else {
								$('#property-shadowColor').hide();
							}	
						}				
						,changeProperty: {
							caption: 'Shadow toggle',
							rerender: true
						}
					},
					{ 
						caption: false, 
						name: 'shadowColor', 
						proptype: 'shadow-color', 
						type: 'combo-colorpicker',
						value: function(item,name) { 
							return item.shadowColor; 
						}, 
						values: prx.comps.materialColors, 
						hiddenByDefault: function(item) {
							return (!item.shadowEnabled);
						},
						changeProperty: { 
							caption: 'Shadow', 
							rerender: true, 
							changeable: false
						} 
					}
	      		]
			]
		}
		,{
			caption: 'Text',
			properties: [
				[
					prx.commonproperties.textFont,
					prx.commonproperties.textSize,
					prx.commonproperties.materialTextColor
				],
				[
					prx.commonproperties.textProperties,
					{ 
						caption: 'Active', 
						name: 'textColorActive', 
						proptype: 'font-color-2-active', 
						type: 'combo-colorpicker', 
						value: function(item,name) { return item.textColorActive; }, 
						values: prx.comps.materialColors, 
						liveUpdate: 'color', 
						changeProperty: { 
							caption: 'Active Text color', 
							selector: 'input:checked + label', 
							property: 'color', 
							transitionable: true 
						} 
					}							
				]
			]
		},{
			caption: 'Data',
			properties: [
				[
					{
						caption: 'Tabs (Separated by line breaks)'
						,name: 'tabs'
						,type: 'textarea'
						,value: function(item,name) {
							return item.tabs;
						}
						,onChange: function(item,name) {
							var _options = item.tabs.split("<br />");

							var cR = '';

							var _values = [{displayValue: 'None', value: -1}];
							for(var i = 0; i < _options.length; i++) {
								cR += '<option value="'+i+'" '+((item.selectedValue == i) ? 'selected' : '')+'>'+prx.utils.escapeHTML(_options[i])+'</option>'
							}

							$('#property-selected select').html(cR);
						}
						,changeProperty: {
							caption: 'Tabs',
							rerender: true
						}
					}
				],[
					{
						caption: 'Linked container'
						,name: 'linkedContainer'
						,type: 'select'
						,value: function(item,name) {
							//debugger;
							return item.linkedContainer;
						}
						,values: function(){
							var _rA = [{value: -1, displayValue: 'Select a container'}];
							for(var i=0; i<prx.data.items.length; i++) {
								if(prx.data.items[i].type == "symbol") {
									_rA.push({value: prx.data.items[i].id,displayValue: prx.utils.escapeHTML(prx.data.items[i].caption)});
								}
							}

							return _rA;
						}
						,changeProperty: {
							caption: 'Linked container',
							rerender: true
						}
					}
				]
			]
		},
		{
			caption: 'Advanced',
			properties: [
			    [
			     	{
					  caption: 'Active tab'
					  ,name: 'selected'
					  ,type: 'select'
					  ,value: function(item,name) {
						  return item.selected;
					  }
					  ,values: function(item,name) {
				        var _values = [];
				        var _options = item.tabs.split("<br />");
				        for(var i = 0; i < _options.length; i++) {
					        _values.push({
						        displayValue: prx.utils.escapeHTML(_options[i].replace(/<br>/g, "\n").replace(/(<([^>]+)>|(&nbsp;))/ig, '')),
						        value: i
					        });
				        }
				        return _values;
					  } 
					  ,changeProperty: {
	                		caption: 'Active tab',
	                		rerender: true
	                	}
					}
			    ],
				[
					{
						caption: 'Position fixed on transitions'
						,name: 'overlay'
						,type: 'onoff'
						,value: function(item,name) {
							if(typeof(item.overlay)=="undefined") {
								return false;
							}
							return item.overlay;
						}
						,changeProperty: {
	                		caption: 'Position fixed',
	                		rerender: true
	                	}
					}
				]
			]
		},
		prx.commonproperties.materialRipple
	]
}


//TYPE: SEGMENTED BUTTON TABBAR
prx.types.material_tabbar_segmented_button = {
	name: "material_tabbar_segmented_button"
	,onDisplay: function(item,containerid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		var width = Math.floor(dims.width/item.tabs.length);
		
		var cR = '';
		cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-tabbar-button" '+((prx.componentsHelper.getProp(item.overlay,'boolean')) ? 'data-mpoverlay="1"' : '')+'>';
		
		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		if(prx.componentsHelper.getProp(item.shadowEnabled,'boolean')) {
			cR += '#'+_id+' .material-tabbar-button-list { box-shadow: 0 '+(1*prx.componentsHelper.getScale(item.lib))+'px '+(3*prx.componentsHelper.getScale(item.lib))+'px '+(1*prx.componentsHelper.getScale(item.lib))+'px '+ prx.componentsHelper.getProp(item.shadowColor,'color-shadow') + '; } ';
		}
		cR += '#' + _id + ' .material-tabbar-button-list-item { width: '+width+'px; height: '+dims.height+'px; background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; }';
		cR += '#' + _id + ' input:checked + label { background-color: '+prx.componentsHelper.getProp(item.backgroundColorActive,'color-background')+'; }';
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);
		
		cR += '<ul class="material-tabbar-button-list liveUpdate-shadowColor changeProperty-shadowColor">';
		
		$.each(item.tabs, function(i,elm){			
			if(typeof(elm.linkedscreen) == "undefined") { elm.linkedscreen = -1; }
			var cChecked = '';
			
			if (i==prx.componentsHelper.getProp(item.selected,'num-other')) {
				cChecked = ' checked="checked"';
			}
			
			cR += '<style>';
			if( elm.imgSrc.fileId != '' ) {
				cR += '#' + _id + '-tabs-'+i+' .material-tabbar-button-list-item-icon { width: '+dims.height+'px; height: '+dims.height+'px; background-image: url('+prx.componentsHelper.getProp(elm.imgSrc,'asset')+'); background-size: '+(prx.componentsHelper.getProp(item.iconSize,'icon-size')*20)+'% auto; -webkit-mask-size: '+(prx.componentsHelper.getProp(item.iconSize,'icon-size')*20)+'% auto; }';
				if( $.browser.webkit ) {
					cR += '#' + _id + '-tabs-'+i+' .material-tabbar-button-list-item-input:checked + label .material-tabbar-button-list-item-icon { background-image: none; -webkit-mask-image: url('+prx.componentsHelper.getProp(elm.imgSrc,'asset')+'); background-color: '+prx.componentsHelper.getProp(item.iconColorActive,'color-background')+'; }';
				}
			}
			cR += '</style>';


			cR += '<li class="material-tabbar-button-list-item liveUpdate-backgroundColor liveUpdate-backgroundColorActive changeProperty-backgroundColor changeProperty-backgroundColorActive dynamic-property '+((prx.componentsHelper.getProp(item.rippleEffect,'boolean')) ? 'prx-material-ripple' : '' )+'" data-dynamic-property-index="'+i+'" id="'+_id+'-tabs-'+i+'" '+((prx.componentsHelper.getProp(elm.linkedscreen,'num-other') != -1) ? 'data-linked-screen="'+prx.componentsHelper.getProp(elm.linkedscreen,'num-other')+'"' : '')+'>';
			cR += '<input class="material-tabbar-button-list-item-input" type="radio" name="'+_id+'-radio" id="'+_id+'-radio-'+i+'"'+cChecked+' data-role="none" '+((!prx.componentsHelper.getProp(item.changeActive,'boolean')) ? 'disabled' : '')+'/>';
			cR += '<label class="material-tabbar-button-list-item-icon-wrapper" for="'+_id+'-radio-'+i+'"><span class="material-tabbar-button-list-item-icon liveUpdate-iconActiveMask"></span></label>';
			cR += '</li>'; 			
		});
		
		cR += '</ul>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,onResize: function(item, containerid, symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		var width = Math.floor(dims.width/item.tabs.length);
		
		$('#'+_id).find('.material-tabbar-button-list-item').width(width);
	}
	,afterDisplay: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		if(!prx.editor) {
			$('#' + _id + ' [data-linked-screen]').each(function(){
				var screenId = $(this).attr('data-linked-screen');
				
				if(prx.stc.screens.getIndexFromId(screenId) != -1) {
					var guid = prx.utils.getGuid();
					var action = {
						title: 'Go to screen "'+prx.pages[prx.stc.screens.getIndexFromId(screenId)].title+'"',
						type: "tap",
						actionId: "go-to-page",
						pageId: screenId,
						animation: "none",
						delay: "0",
						callback: false,
						guid: guid,
						bindTo: '#' + $(this).attr('id')
						
					};
					
					action = prx.actions.recursivelyAddInfo(action, action.bindTo, containerid, containerid+ '', action.bindTo, '.protoio-actions-afterdisplay')
					prx.actions.build(action);
					prx.actions.disableFlashActionOnItemTap(action.bindTo, '.flashactiontap-afterdisplay');
				}
			});
		}
	}
	,propertyGroups: [
		{
			caption: 'Style',
			properties: [
				[
					prx.commonproperties.materialBackgroundColor,
					{ 
						caption: 'Active', 
						name: 'backgroundColorActive', 
						proptype: 'background-color-2-active', 
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.backgroundColorActive; 
						}, 
						values: prx.comps.materialColors, 
						liveUpdate: 'background-color', 
						changeProperty: {
							caption: 'Active Background color', 
							selector: 'input:checked + label', 
							property: 'background-color', 
							transitionable: true 							
						} 
					}
				],
				[
					{
						caption: 'Shadow?'
						,name: 'shadowEnabled'
						,type: 'onoff'
						,value: function(item,name) {
							if(typeof(item.shadowEnabled)=="undefined") {
								return false;
							}
							return item.shadowEnabled;
						}
						,onChange: function(item){
							if(item.shadowEnabled) {
								$('#property-shadowColor').show();
							} else {
								$('#property-shadowColor').hide();
							}	
						}				
						,changeProperty: {
							caption: 'Shadow toggle',
							rerender: true
						}
					},
					{ 
						caption: false, 
						name: 'shadowColor', 
						proptype: 'shadow-color', 
						type: 'combo-colorpicker',
						value: function(item,name) { 
							return item.shadowColor; 
						}, 
						values: prx.comps.materialColors, 
						hiddenByDefault: function(item) {
							return (!item.shadowEnabled);
						},
						changeProperty: { 
							caption: 'Shadow', 
							rerender: true, 
							changeable: false
						} 
					}
	      		]
			]
		},
		{
			caption: 'Advanced',
			properties: [
			    [
			     	{
					  caption: 'Active tab'
					  ,name: 'selected'
					  ,type: 'select'
					  ,value: function(item,name) {
						  return item.selected;
					  }
					  ,values: function(item,name) {
						  var _rA = [{value: '999',displayValue: 'None'}];
						  for (var n = 0; n < item.tabs.length; n++) {
							  _rA.push({value: n,displayValue: item.tabs[n].caption});
						  }	
						  return _rA;
					  } 
					  ,changeProperty: {
	                		caption: 'Active tab',
	                		rerender: true
	                	}
					}
			    ],
			    [
		   			{
		  	  			caption: 'Change active state on click'
		  	  			,name: 'changeActive'
		  	  			,type: 'onoff'
		  	  			,value: function(item,name) {
		  	      			return item.changeActive;
		  	      		}
		      			,changeProperty: {
							caption: 'Change active state on click',
							rerender: true
						}
					}
		   		],
				[
					{
						caption: 'Position fixed on transitions'
						,name: 'overlay'
						,type: 'onoff'
						,value: function(item,name) {
							if(typeof(item.overlay)=="undefined") {
								return false;
							}
							return item.overlay;
						}
						,changeProperty: {
	                		caption: 'Position fixed',
	                		rerender: true
	                	}
					}
				]
			]
		},
		{
   		    caption: 'Icon',
   		    properties: [
   		        [
   		         	prx.commonproperties.iconSize
				],
				[
				 	{ 
				 		caption: 'Active', 
				 		name: 'iconColorActive', 
				 		proptype: 'icon-color-active', 
				 		type: 'combo-colorpicker', 
				 		value: function(item,name) { 
				 			return item.iconColorActive; 
				 		}, 
				 		values: prx.comps.materialColors,
				 		liveUpdate: 'background-color', 
				 		changeProperty: { 
				 			caption: 'Active icon color', 
				 			rerender: true 
				 		}
				 	}
				]
   			]
   		},
		prx.commonproperties.materialRipple
	]	
	,dynamicProperties: {
		data: 'tabs'
		,propertyCaption: 'Tabs'
  		,propertyName: 'Tab'
		,addCaption: 'Add tab'
		,deleteCaption: 'Delete'
		,blankItem: {
			imgSrc: {"fileId":"873054abbe95613746ad1d629c08dd84.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"}
			,actions: []
		}
		,captionProperty: false
		,interactions: [ prx.commonproperties.actions_tabs ]
		,propertyGroups: [
  			{ 
  				caption: 'Icon',
  				properties: [
  				    [
  				         prx.commonproperties.iconSourceTabs
  				    ]
  				]
  			},
	      	{
	      		caption: 'Linked screen (optional)',
	      		properties: [
	      		    [
		      			{
		      				caption: false
		      				,name: 'linkedscreen'
		      				,type: 'select'
		      				,help: 'Will trigger a "Go to screen" action on Tap, and force active state to this tab when the selected screen is active'
		      				,value: function(item,name,index) {
		      					return item.tabs[index].linkedscreen
		      				}
		      				,values: function(item,name,index) {
                                var options = [];
                                for(var i=0; i<prx.pages.length ; i++) {
                                    options.push({ displayValue: prx.utils.escapeHTML(prx.pages[i].title), value: prx.pages[i].id, id: prx.pages[i].id });
                                }
                                options.sort(prx.stc.pane.helper.sortCustomPages);
                                options.unshift({ displayValue: 'None', value: -1, id: -1});
                                return options;
		      				}
		    				,changeProperty: {
		  						caption: 'Linked Screen',
		  						rerender: true
		  					 }
		      			}
		      		]
	      	    ]
	      	}
	    ]
	}
}


/*****************************/
/****** CHIP COMPONENTS ******/
/*****************************/

// TYPE: CHIP
prx.types.material_chip_complex = {
    name: "material_chip_complex"
    ,onDisplay: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var dims = prx.componentsHelper.getRealDims(item, symbol);

        var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';

        if( item.showDelete === undefined ) { item.showDelete = true;}

        var cR = '';
        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-chip">';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#' + _id + ' .material-chip-container { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; border-radius: '+dims.height+'px; }';
        if( item.name !== 'material_chip') {
            cR += '#' + _id + ' .material-chip-icon-wrapper { background-color: ' + prx.componentsHelper.getProp(item.iconBackgroundColor, 'color-background') + '; height: ' + dims.height + 'px; width: ' + dims.height + 'px; }';
        }
        cR += '#' + _id + ' .material-chip-text-wrapper { '+prx.componentsHelper.getProp(item.textFont,'font-family')+' color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; }';
        cR += '#' + _id + ' .material-chip-initials-wrapper { '+prx.componentsHelper.getProp(item.initialsFont,'font-family')+' color: '+prx.componentsHelper.getProp(item.initialsColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.initialsSize,'num-text-size')+'px; }';
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="material-chip-container liveUpdate-backgroundColor changeProperty-backgroundColor">';

        // circle
        if( item.name !== 'material_chip') {

            cR += '<div class="material-chip-icon-wrapper liveUpdate-iconBackgroundColor changeProperty-iconBackgroundColor">';

            if( item.name === 'material_chip_with_initials' ) {

                cR += '<div class="material-chip-initials-wrapper">';
                cR += '<span data-editableproperty="initials" class="changeProperty-initials">' + prx.componentsHelper.getProp(item.initials,'text') + '</span>';
                cR += '</div>';
            }
            else if( item.name === 'material_chip_with_avatar' ) {

                cR += '<div class="material-chip-avatar" '+((typeof(item.imgSrc) != "undefined" && prx.componentsHelper.getProp(item.imgSrc.fileId,'other') != '') ? 'style="background-image: url('+ prx.componentsHelper.getProp(item.imgSrc,'asset')+');"' : '') + '></div>';
            }
            else if( item.name === 'material_chip_with_icon' ) {

                cR += '<div class="material-chip-icon" '+((typeof(item.imgSrc) != "undefined" && prx.componentsHelper.getProp(item.imgSrc.fileId,'other') != '') ? 'style="background-image: url('+ prx.componentsHelper.getProp(item.imgSrc,'asset')+');"' : '') + '></div>';
            }

            cR += '</div>';
        }

        // text
        cR += '<div class="material-chip-text-wrapper liveUpdate-textColor changeProperty-textColor changeProperty-textSize changeProperty-textFont">';
        cR += '<span data-editableproperty="text" class="changeProperty-text">' + prx.componentsHelper.getProp(item.text,'text') + '</span>';
        cR += '</div>';

        // delete button
		if( item.showDelete ) {
            cR += '<div class="material-chip-delete-button actions-actions1">';
            cR += '<svg viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></svg>';
            cR += '</div>';
		}

        cR += '</div>';

        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';

        return cR;
    }
    ,onResize: function(item,containerid,symbol) {

		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item,symbol);

        $('#' + _id + ' .material-chip-container').css('border-radius', dims.height+'px');

        if( item.name !== 'material_chip') {

            $('#' + _id + ' .material-chip-icon-wrapper').css({
                'height': dims.height + 'px',
                'width': dims.height + 'px'
            });
        }
	}
    ,interactions:[
        prx.commonproperties.actions,
        {
            caption: 'Delete Button',
            name: 'actions1',
            type: 'action',
            value: function(item,name) {
                if(typeof(item.actions1) == "undefined") {
                    if (typeof(item.actions) == "undefined") {
                        item.actions1 = [];
                    } else {
                        item.actions1 = item.actions;
                    }
                }
                return item.actions1.length;
            }
            ,hiddenByDefault: function(item) {
                return !item.showDelete;
            }
        }
    ]
    ,editableProperties: [
        prx.commonproperties.text,
        {
            caption: 'Initials'
            ,name: 'initials'
            ,type: 'input'
            ,value: function(item,name) {
                return item.initials;
            }
            ,changeProperty: {
                caption: 'Initials',
                selector: '.changeProperty-initials',
                property: 'text',
                transitionable: false
            }
        }
    ]
    ,propertyGroups: [
        {
            caption: 'Style',
            properties: [
                [
                    prx.commonproperties.materialBackgroundColor,
                    {
                        caption: function(item, name) {
                            if( item.name == 'material_chip_with_initials' )
                                return 'Initials Background';
                            else if( item.name == 'material_chip_with_icon' )
                                return 'Icon Background';

                            return false;
                        },
                        name: 'iconBackgroundColor',
                        proptype: 'background-color',
                        type: 'combo-colorpicker',
                        value: function(item,name) {
                            return item.backgroundColor;
                        },
                        values: prx.comps.materialColors,
                        liveUpdate: 'background-color',
                        hiddenByDefault: function(item,name,index) {
                            return (item.name !== 'material_chip_with_initials' && item.name !== 'material_chip_with_icon');
                        },
                        changeProperty: {
                            caption: function(item, name) {
                                if( item.name == 'material_chip_with_initials' )
                                    return 'Initials Background';
                                else if( item.name == 'material_chip_with_icon' )
                                    return 'Icon Background';
                            },
                            selector: '.changeProperty-iconBackgroundColor',
                            property: 'background-color',
                            transitionable: true
                        }
                    }
                ]
            ]
        },
        {
            caption: 'Text',
            properties: [
                [
                    {
                        caption: false,
                        name: 'textFont',
                        proptype: 'font-family',
                        type: 'select',
                        relatedEditableProperties: 'text',
                        relatedCSSProperties: 'font-family',
                        value: function(item,name) { return item.textFont; },
                        values: function(){ return prx.comps.fonts }
                        ,changeProperty: {
							caption: 'Text Font',
							selector: '.changeProperty-textFont',
							property: 'font-family',
							transitionable: false
						}
                    }
                    ,{
						caption: false,
						name: 'textSize',
						proptype: 'font-size',
						type: 'combo-select',
						relatedEditableProperties: 'text',
						relatedCSSProperties: 'font-size',
						value: function(item,name) { return item.textSize; },
						values: prx.comps.textsize
						,changeProperty: {
							caption: 'Text size',
							selector: '.changeProperty-textSize',
							property: 'font-size',
							transitionable: true
						}
					}
                    ,{
						caption: false,
						name: 'textColor',
						proptype: 'font-color',
						type: 'combo-colorpicker',
						relatedEditableProperties: 'text',
						relatedCSSProperties: 'color',
						value: function(item,name) {
							return item.textColor;
						},
						values: prx.comps.materialColors,
						liveUpdate: 'color',
						changeProperty: {
							caption: 'Text color',
							selector: '.changeProperty-textColor',
							property: 'color',
							transitionable: true
						}
					}
                ]
            ]
        },
        {
            caption: 'Initials',
            properties: [
                [
                    {
                        caption: false,
                        name: 'initialsFont',
                        proptype: 'font-family',
                        type: 'select',
                        relatedEditableProperties: 'initials',
                        relatedCSSProperties: 'font-family',
                        value: function(item,name) { return item.initialsFont; },
                        values: function(){ return prx.comps.fonts }
                        ,hiddenByDefault: function(item,name,index){
                            return item.name !== 'material_chip_with_initials';
                        }
                        ,changeProperty: {
							caption: 'Initials Font',
							selector: '.changeProperty-initialsFont',
							property: 'font-family',
							transitionable: false
						}
                    }
                    ,{
						caption: false,
						name: 'initialsSize',
						proptype: 'font-size',
						type: 'combo-select',
						relatedEditableProperties: 'initials',
						relatedCSSProperties: 'font-size',
						value: function(item,name) { return item.initialsSize; },
						values: prx.comps.textsize
						,hiddenByDefault: function(item,name,index){
							return item.name !== 'material_chip_with_initials';
						}
						,changeProperty: {
							caption: 'Initials size',
							selector: '.changeProperty-initialsSize',
							property: 'font-size',
							transitionable: true
						}
					}
                    ,{
						caption: false,
						name: 'initialsColor',
						proptype: 'font-color',
						type: 'combo-colorpicker',
						relatedEditableProperties: 'initials',
						relatedCSSProperties: 'color',
						value: function(item,name) {
							return item.initialsColor;
						},
						values: prx.comps.materialColors,
						liveUpdate: 'color',
						hiddenByDefault: function(item,name,index){
							return item.name !== 'material_chip_with_initials';
						},
						changeProperty: {
							caption: 'Initials color',
							selector: '.changeProperty-initialsColor',
							property: 'color',
							transitionable: true
						}
					}
                ]
            ]
        },
        {
            caption: 'Show delete icon',
            properties: [
                [
                    {
                        caption: 'Deletable?'
                        ,name: 'showDelete'
                        ,type: 'onoff'
                        ,value: function(item,name,index){
                            return item.showDelete;
                        }
                        ,changeProperty: {
                            caption: 'Show Delete Icon',
                            rerender: true
                        }

                    }
                ]
            ]
        },
        {
            caption: function(item, name) {
                if( item.name == 'material_chip_with_avatar' )
                    return 'Avatar';
                else if( item.name == 'material_chip_with_icon' )
                    return 'Icon';

                return false;
            },
            properties: [
                [
                    {
                        caption: false,
                        name: 'imgSrc',
                        proptype: 'icon-source',
                        type: 'combo-asset',
                        displayValue: function(item,name,index) {
                            if(typeof(item.imgSrc) == 'undefined' || item.imgSrc.fileId == '') {
                                return 'No asset selected';
                            }
                            return item.imgSrc.name;
                        },
                        value: function(item,name,index) {
                            return JSON.stringify({ allow: 'image', asset: item.imgSrc });
                        },
                        hiddenByDefault: function(item,name,index){
                            return (item.name !== 'material_chip_with_avatar' && item.name !== 'material_chip_with_icon');
                        },
                        changeProperty: {
                            caption: function(item, name) {
                                if( item.name == 'material_chip_with_avatar' )
                                    return 'Avatar';
                                else if( item.name == 'material_chip_with_icon' )
                                    return 'Icon';
                            },
                            rerender: true
                        }
                    }
                ]
            ]
        },
    ]

};

// TYPE: TEXT CHIP
prx.types.material_chip = prx.componentsHelper.cloneobject(prx.types.material_chip_complex);
prx.types.material_chip.name = 'material_chip';
prx.componentsHelper.removeProperties(prx.types.material_chip.editableProperties, ['initials']);
prx.componentsHelper.removeProperties(prx.types.material_chip.propertyGroups, ['iconBackgroundColor', 'initialsColor', 'initialsFont', 'initialsSize', 'imgSrc']);

// TYPE: IMAGE AVATAR CHIP
prx.types.material_chip_with_avatar = prx.componentsHelper.cloneobject(prx.types.material_chip_complex);
prx.types.material_chip_with_avatar.name = 'material_chip_with_avatar';
prx.componentsHelper.removeProperties(prx.types.material_chip_with_avatar.editableProperties, ['initials']);
prx.componentsHelper.removeProperties(prx.types.material_chip_with_avatar.propertyGroups, ['iconBackgroundColor', 'initialsColor', 'initialsFont', 'initialsSize']);

// TYPE: ICON AVATAR CHIP
prx.types.material_chip_with_icon = prx.componentsHelper.cloneobject(prx.types.material_chip_complex);
prx.types.material_chip_with_icon.name = 'material_chip_with_icon';
prx.componentsHelper.removeProperties(prx.types.material_chip_with_icon.editableProperties, ['initials']);
prx.componentsHelper.removeProperties(prx.types.material_chip_with_icon.propertyGroups, ['initialsColor', 'initialsFont', 'initialsSize']);

// TYPE: INITIALS CHIP
prx.types.material_chip_with_initials = prx.componentsHelper.cloneobject(prx.types.material_chip_complex);
prx.types.material_chip_with_initials.name = 'material_chip_with_initials';
prx.componentsHelper.removeProperties(prx.types.material_chip_with_initials.propertyGroups, ['imgSrc']);


/*****************************/
/***** BUTTON COMPONENTS *****/
/*****************************/

// TYPE: BUTTON
prx.types.material_button_raised = {
	name: "material_button_raised"
	,onDisplay: function(item,containerid,symbol) {

		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		var isround = (prx.componentsHelper.getProp(item.name,'other') == 'material_button_action') || (prx.componentsHelper.getProp(item.name,'other') == 'material_button_icon');
		var hasshadow = (prx.componentsHelper.getProp(item.name,'other') == 'material_button_action') || (prx.componentsHelper.getProp(item.name,'other') == 'material_button_raised');
		var hastext = (prx.componentsHelper.getProp(item.name,'other') == 'material_button_flat') || (prx.componentsHelper.getProp(item.name,'other') == 'material_button_raised');

		var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';

		var cR = '';		
		cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-button '+((prx.componentsHelper.getProp(isround,'boolean')) ? 'button-round' : '') +'">';
		
		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		cR += '#' + _id + ' .material-button-container { background: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; }';
		if( prx.componentsHelper.getProp(hastext,'boolean') ) {
		cR += '#' + _id + ' .material-button-container { '+prx.componentsHelper.getProp(item.textFont,'font-family')+' color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; }';
		}
		else {
			if(item.imgSrc.fileId != '') {
			cR += '#' + _id + ' .material-button-icon { background-image: url('+prx.componentsHelper.getProp(item.imgSrc,'asset')+'); }';
			}
		}
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

		cR += '<div class="material-button-container '+((prx.componentsHelper.getProp(hasshadow,'boolean'))? 'waves-float ' : '')+'liveUpdate-backgroundColor liveUpdate-textColor changeProperty-backgroundColor changeProperty-textColor changeProperty-textFont changeProperty-textSize">';

		if( prx.componentsHelper.getProp(hastext,'boolean') ) {
			cR += '<span data-editableproperty="text" class="changeProperty-text">' + prx.componentsHelper.getProp(item.text,'text-textarea') + '</span>';
		} else {
			if(item.imgSrc.fileid != '') {
				cR += '<div class="material-button-icon"></div>';
			}
		}
		if(prx.componentsHelper.getProp(item.rippleEffect,'boolean')) {
			cR += '<div class="material-button-ripple-container prx-material-ripple"></div>';
		}
		cR += '</div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,interactions:[ prx.commonproperties.actions ]
	,editableProperties: [
	    prx.commonproperties.text       
	]
	,propertyGroups: [			
		{
			caption: 'Style',
			properties: [
				[
					prx.commonproperties.materialBackgroundColor,
					{ 
				 		caption: 'Shadow', 
				 		name: 'shadowColor', 
				 		proptype: 'shadow-color',
				 		type: 'combo-colorpicker', 
				 		value: function(item,name) { 
				 			return item.shadowColor; 
				 		}, 
				 		values: prx.comps.materialColors,
				 		hiddenByDefault: function(item) {
							return !(item.name == 'material_button_action' && item.name == 'material_button_raised') || (item.name == 'material_button_icon');
						},
				 		changeProperty: { 
	                		caption: 'Shadow',
	                		rerender: true,
	                		changeable: false
				 		} 
				 	}
				]
			]
		},
		{
			caption: 'Text',
			properties: [
				[
					{ 
						caption: false, 
						name: 'textFont', 
						proptype: 'font-family',
						type: 'select',
						relatedEditableProperties: 'text',
						relatedCSSProperties: 'font-family',
						value: function(item,name) { return item.textFont; }, 
						values: function(){ return prx.comps.fonts }
						,hiddenByDefault: function(item) {
							return (item.name == 'material_button_action') || (item.name == 'material_button_icon');
						}
						,changeProperty: {
	                		caption: 'Text Font',
	                		selector: '.changeProperty-textFont',
	                		property: 'font-family',
	                		transitionable: false
	                	}
					}
					,{ 
						caption: false, 
						name: 'textSize', 
						proptype: 'font-size',
						type: 'combo-select',
						relatedEditableProperties: 'text',
						relatedCSSProperties: 'font-size',
						value: function(item,name) { return item.textSize; }, 
						values: prx.comps.textsize
						,hiddenByDefault: function(item) {
							return (item.name == 'material_button_action') || (item.name == 'material_button_icon');
						}
						,changeProperty: {
	                		caption: 'Text size',
	                		selector: '.changeProperty-textSize',
	                		property: 'font-size',
	                		transitionable: true
	                	}
					}
					,{ 
						caption: false, 
						name: 'textColor', 
						proptype: 'font-color',
						type: 'combo-colorpicker',
						relatedEditableProperties: 'text',
						relatedCSSProperties: 'color',
						value: function(item,name) { 
							return item.textColor; 
						}, 
						values: prx.comps.materialColors, 
						hiddenByDefault: function(item) {
							return (item.name == 'material_button_action') || (item.name == 'material_button_icon');
						},
						liveUpdate: 'color', 
						changeProperty: { 
							caption: 'Text color', 
							selector: '.changeProperty-textColor', 
							property: 'color', 
							transitionable: true 
						} 
					}
				],
				[
				   	{ 
				   		caption: false, 
				   		name: 'textProperties', 
						proptype: 'text-properties',
				   		type: 'checkbox',
						relatedEditableProperties: 'text',
						relatedCSSProperties: ['font-weight','font-style','text-decoration'],
				   		value: function(item,name) { if(typeof(item.textProperties) == "undefined") {item.textProperties = [];} return item.textProperties; }, 
				   		values: [
						    { value: 'bold', displayValue: '', icon: 'text-bold'},
						    { value: 'italic', displayValue: '', icon: 'text-italic'},
						    { value: 'underline', displayValue: '', icon: 'text-underline'}
					    ]
				   		,hiddenByDefault: function(item) {
							return (item.name == 'material_button_action') || (item.name == 'material_button_icon');
						}
				   		,changeProperty: {
	                		caption: 'Text properties',
	                		rerender: true
	                	}
				   	}
				]
			]
		},
		{
   		    caption: 'Icon',
   		    properties: [
   		        [
   					{ 
 						caption: false,
 						name: 'imgSrc', 
 						proptype: 'icon-source',
 						type: 'combo-asset', 
 						displayValue: function(item,name) {
 							if(item.imgSrc.fileId == '') {
 	      						return 'No asset selected.';
 	      					}
 	      					return item.imgSrc.name;
 						}
 						,value: function(item,name) {
 							return JSON.stringify({
 								allow: 'image',
 								asset: item.imgSrc
 							});
 						}
 						,hiddenByDefault: function(item) {
							return !(item.name == 'material_button_action' || item.name == 'material_button_icon');
						}
 						,changeProperty: {
 	                		caption: 'Icon',
 	                		rerender: true
 	                	}
 					}
   				]
   			]
   		},
		prx.commonproperties.materialRipple
	]
	
};

//TYPE: ACTION OVERFLOW
prx.types.material_actionoverflow = {
	name: "material_actionoverflow"
	,onDisplay: function(item,containerid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);

		var cR = '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-actionoverflow prx-material-ripple">';

		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		cR += '#'+_id+' .actionOverflow .AO { width: '+Math.round(dims.height * 0.075)+'px; height: '+Math.round(dims.height * 0.075)+'px; background-color: '+prx.componentsHelper.getProp(item.actionOverflowColor,'color-background')+'; }';	
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

		if(prx.componentsHelper.getProp(item.rippleEffect,'boolean')) {
			cR += '<div class="prx-material-ripple-roundoverflow"></div>';
		}

		cR += '<div class="actionOverflow">';
		cR += '<div class="AO AO1 liveUpdate-actionOverflowColor changeProperty-actionOverflowColor"></div>';
		cR += '<div class="AO AO2 liveUpdate-actionOverflowColor changeProperty-actionOverflowColor"></div>';
		cR += '<div class="AO AO3 liveUpdate-actionOverflowColor changeProperty-actionOverflowColor"></div>';
		cR += '</div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);

		$('#'+_id).find('.AO').width(Math.round(dims.height * 0.075)).height(Math.round(dims.height * 0.075));
	}
	,interactions: [ prx.commonproperties.actions ]
	,propertyGroups: [
		{
			caption: 'Style',
			properties: [
				[
					{
						caption: 'Color'
						,name: 'actionOverflowColor'
						,proptype: 'background-color'
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							return item.actionOverflowColor;
						}
						,values: prx.comps.materialColors 
						,liveUpdate: 'background-color'
						,changeProperty: {
							caption: 'Action Overflow color',
							property: 'background-color',
							selector: '.changeProperty-actionOverflowColor',
							transitionable: true
						}
					}
				]
			]
		},
		prx.commonproperties.materialRipple
	]
}

//TYPE: MORPHING ICONS
prx.types.material_morphing_lines = {
	name: "material_morphing_lines"
	,onDisplay: function(item,containerid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);

		var _check = '';
		var _active = "";

		if(typeof(item.initialState) != "undefined" && item.initialState == 'icon') { item.active = true; }
		if(prx.componentsHelper.getProp(item.active,'boolean') === true || prx.componentsHelper.getProp(item.active,'other') == "true") { _active = 'checked="checked"';}

		var morphClass = '';
		if(prx.componentsHelper.getProp(item.itemtype,'other') == "lines-close") morphClass= 'x';
		else if(prx.componentsHelper.getProp(item.itemtype,'other') == "lines-arrow") morphClass= 'arrow-left';
				
		var cR = '';
		cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-morphing-lines">';
				
		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		if(prx.editor) { 
			cR += '#' + _id + ' label, #' + _id + ' .lines {  transition: none; }';
		}
		cR += '#' + _id + ' .lines:not(.lines-before):not(.lines-after) { width: '+Math.round(dims.width*0.33)+'px; height: '+Math.round(dims.height/22)+'px; }';
		cR += '#' + _id + ' .lines  { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; }';
		cR += '#' + _id + ' input:checked + label .lines { background-color: '+prx.componentsHelper.getProp(item.backgroundColorActive,'color-background')+'; }';
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);


		if(prx.componentsHelper.getProp(item.rippleEffect,'boolean')) {
			cR += '<div class="prx-material-ripple-roundoverflow"></div>';
		}

		cR += '<input type="checkbox" id="'+_id+'-checkbox" '+_active+' style="display: none;" data-role="none" />';
		cR += '<label for="'+_id+'-checkbox" class="morph-label lines-button '+morphClass+'">';
		cR += '<span class="lines liveUpdate-backgroundColor'+((prx.componentsHelper.getProp(item.active,'boolean') === true || prx.componentsHelper.getProp(item.active,'other') == "true") ? 'Active' : '') +' changeProperty-backgroundColor">';
		cR += '<span class="lines lines-before liveUpdate-backgroundColor'+((prx.componentsHelper.getProp(item.active,'boolean') === true || prx.componentsHelper.getProp(item.active,'other') == "true") ? 'Active' : '') +' changeProperty-backgroundColor"></span>';
		cR += '<span class="lines lines-after liveUpdate-backgroundColor'+((prx.componentsHelper.getProp(item.active,'boolean') === true || prx.componentsHelper.getProp(item.active,'other') == "true") ? 'Active' : '') +' changeProperty-backgroundColor"></span>';
		cR += '</span>';
		cR += '</label>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
				
		$('#' + _id + ' .lines').not('.lines-before').not('.lines-after').css({
			'width': Math.round(dims.width*0.33)+'px',
			'height': Math.round(dims.height/22)+'px'
		});
	}
	,afterDisplay: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		if(!prx.editor) {
			$('#'+_id+'-checkbox').on('change.custom-change-event', function(e){
				if(typeof(prx.variables._triggerData['input:checked[id='+_id+'-checkbox]']) == "undefined") { prx.variables._triggerData['input:checked[id='+_id+'-checkbox]'] = {}; }        					
		        prx.variables._triggerData['input:checked[id='+_id+'-checkbox]']['checkboxchange'] = { state: $(this).is(':checked') };
		        if(typeof(prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)']) == "undefined") { prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)'] = {}; }        					
		        prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)']['checkboxchange'] = { state: $(this).is(':checked') };
				if(typeof(prx.variables._triggerData['#' + _id]) == "undefined") { prx.variables._triggerData['#' + _id] = {}; }
				prx.variables._triggerData['#' + _id]['checkboxchange'] = { state: $(this).is(':checked') };
				$(this).trigger('checkboxchange');
			})

			if((typeof(item.actions) != "undefined" && item.actions.length > 0) || (typeof(item.checkboxActionsOnDeactive) != "undefined" && item.checkboxActionsOnDeactive.length > 0) || (typeof(item.checkboxActionsOnActive) != "undefined" && item.checkboxActionsOnActive.length > 0)) {
				$('#' + _id).hammer();
				prx.actions.disableFlashActionOnItemTap('#' + _id, '.flashactiontap-afterdisplay');
			}
		}
	}
	,interactions: [
		{
			caption: 'Change',
			name: 'actions',
			type: 'action',
			value: function (item, name) {
				if (typeof(item.actions) == "undefined") {
					item.actions = [];
				}
				return item.actions.length;
			},
			changeProperty: {
				caption: 'Interactions on change',
				selector: '',
				property: 'action',
				transitionable: false,
				changeable: false
			}
		},
		{
			caption: 'Hamburger icon',
			name: 'checkboxActionsOnActive', 
			type: 'action',
			value: function(item,name) {
				if(typeof(item.checkboxActionsOnActive) == "undefined") {
					item.checkboxActionsOnActive = [];
				}
				return item.checkboxActionsOnActive.length; 
			}, 
			changeProperty: { caption: 'Interactions', selector: '', property: 'action', transitionable: false, changeable: false }
		},
		{
			caption: 'Action icon',
			name: 'checkboxActionsOnDeactive',
			type: 'action',
			value: function(item,name) {
				if(typeof(item.checkboxActionsOnDeactive) == "undefined") {
					item.checkboxActionsOnDeactive = [];
				}
				return item.checkboxActionsOnDeactive.length;
			},
			changeProperty: { caption: 'Interactions', selector: '', property: 'action', transitionable: false, changeable: false }
		}
	]
	,mpactions: {
		specialEvents: ['checkboxchange']
	}
	,propertyGroups: [			
		{
			caption: 'Style',
	    	properties: [
				[
				 	{ 
						caption: 'Hamburger Menu', 
						name: 'backgroundColor', 
						proptype: 'background-color', 
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.backgroundColor; 
						}, 
						values: prx.comps.materialColors, 
						liveUpdate: 'background-color', 
						changeProperty: {
							caption: 'Lines color', 
							selector: 'input:not(:checked) + label .changeProperty-backgroundColor',
							property: 'background-color',
							transitionable: true
						} 
					}
				],
				[
				 	{ 
				 		caption: 'Action Icon', 
				 		name: 'backgroundColorActive', 
				 		proptype: 'background-color-2-active', 
				 		type: 'combo-colorpicker', 
				 		value: function(item,name) { 
				 			return item.backgroundColorActive; 
				 		}, 
				 		values: prx.comps.materialColors, 
				 		liveUpdate: 'background-color', 
				 		changeProperty: {
				 			caption: 'Icon color', 
				 			selector: 'input:checked + label .changeProperty-backgroundColor',
				 			property: 'background-color',
				 			transitionable: true
				 		} 
				 	}
				]				
			]
		},
		{
			caption: 'Initial state',
			properties: [
				[
					{
						caption: false
						,name: 'active'
						,type: 'select'
						,value: function(item,name,index) {
							if(typeof(item.initialState) != "undefined") {
								item.active = item.initialState == 'lines' ? false : true;
							}
							if(typeof(item.active) == "undefined") {
								item.active = false
							}
							return item.active;
						}
						,values: [
								  { value: "false", displayValue: 'Hamburger Menu'}
								  ,{ value: "true", displayValue: 'Action Icon'}
						]
						,changeProperty: {
							caption: 'Initial State',
							selector: 'input',
							property: 'checkbox-state',
							transitionable: false
						}
					}
				]
			]
		},
		prx.commonproperties.materialRipple
	]
	
}


/*****************************/
/****** FORM COMPONENTS ******/
/*****************************/

//TYPE: TEXTFIELD
prx.types.material_textfield = {
	name: 'material_textfield'
	,onDisplay: function(item,containerid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		if(typeof(item.hasIcon) == "undefined") { item.hasIcon = false; }
		if(typeof(item.isFull) == "undefined") { item.isFull = false; }
		if(typeof(item.imgSrc) == "undefined") { item.imgSrc = {"fileId":"","name":"","assetType":"icon","bucketsource":"","targetSrc":"","color":""} };

		var _props = prx.componentsHelper.getProp(item.textProperties,'props-text');
		
		var cR = '';
		cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-textfield '+((prx.componentsHelper.getProp(item.isFull,'boolean')) ? 'full ' : '')+'type-material-textfield-'+prx.componentsHelper.getProp(item.inputtype,'other')+' liveUpdate-backgroundColor changeProperty-backgroundColor">';
		
		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		cR += '#'+_id+' { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+';}';
		cR += '#'+_id+' input, #'+_id+' .faux-input { color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+prx.componentsHelper.getProp(item.textFont,'font-family')+' border-bottom: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; text-align: '+prx.componentsHelper.getProp(item.textAlign,'align')+'; '+ _props + ' }';
		if(!prx.componentsHelper.getProp(item.hasIcon,'boolean')) {
		cR += '#'+_id+' input, #'+_id+' .faux-input { width: 100%; }';
		}
		if(prx.componentsHelper.getProp(item.isFull,'boolean')) { 
		cR += '#'+_id+' input, #'+_id+' .faux-input { border-top: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; padding: 0 '+(15*prx.componentsHelper.getScale(item.lib))+'px 0 '+(18*prx.componentsHelper.getScale(item.lib))+'px; }';
		cR += '#'+_id+' input, #'+_id+' .material-textfield-field-wrapper { padding-bottom: 0;}';
		}
		else {
		cR += '#'+_id+' input:focus, #'+_id+' .faux-input:focus { border-bottom: '+(prx.componentsHelper.getProp(item.borderWidth,'num-border-width')*2)+'px solid '+prx.componentsHelper.getProp(item.borderColorActive,'color-border')+'; }';
		}
		cR += '#'+_id+' .faux-input.placeholder-input { color: '+prx.componentsHelper.getProp(item.placeholderColor,'color-text')+'!important; }';
		cR += '#'+_id+' .faux-input { '+prx.css.flexJustifyContent(prx.componentsHelper.getProp(item.textAlign,'align'))+'; }';
		cR += '#'+_id+' input:-moz-placeholder { color: '+prx.componentsHelper.getProp(item.placeholderColor,'color-text')+'!important; }';
		cR += '#'+_id+' input::-moz-placeholder { color: '+prx.componentsHelper.getProp(item.placeholderColor,'color-text')+'!important; }';
		cR += '#'+_id+' input::-webkit-input-placeholder { color: '+prx.componentsHelper.getProp(item.placeholderColor,'color-text')+'!important; }';
		if(prx.componentsHelper.getProp(item.hasIcon,'boolean') && item.imgSrc.fileid != '') {
			cR += '#' + _id + ' .material-textfield-icon-wrapper { width: '+dims.height+'px; height: '+dims.height+'px;}';
			cR += '#' + _id + ' .material-textfield-icon { background-image: url('+prx.componentsHelper.getProp(item.imgSrc,'asset')+'); }';
			if( $.browser.webkit ) {
				cR += '#' + _id + ' .material-textfield-icon.checked { background-image: none; -webkit-mask-image: url('+prx.componentsHelper.getProp(item.imgSrc,'asset')+'); background-color: '+prx.componentsHelper.getProp(item.borderColorActive,'color-background')+'; }';
			}
		}
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

		if(prx.editor) {
			if(prx.componentsHelper.getProp(item.hasIcon,'boolean') && item.imgSrc.fileid != '') {
			cR += '<div class="material-textfield-icon-wrapper">';
			cR += '<div class="material-textfield-icon"></div>';
			cR += '</div>';
			}
			cR += '<div class="material-textfield-field-wrapper">';
			cR += '<div class="faux-input liveUpdate-textColor liveUpdate-borderColor changeProperty-textColor changeProperty-borderColor" data-editableproperty="value">'+prx.componentsHelper.getProp(item.value,'text')+'</div>';
			cR += '<div class="faux-input placeholder-input changeProperty-textColor changeProperty-borderColor">'+prx.componentsHelper.getProp(item.placeholder,'other')+'</div>';
			cR += '</div>';
		}
		else {
			if(prx.componentsHelper.getProp(item.hasIcon,'boolean') && item.imgSrc.fileid != '') {
			cR += '<div class="material-textfield-icon-wrapper">';
			cR += '<div class="material-textfield-icon"></div>';
			cR += '</div>';
			}
			cR += '<div class="material-textfield-field-wrapper">';
			cR += '<input type="'+prx.componentsHelper.getProp(item.inputtype,'other')+'" value="'+prx.componentsHelper.getProp(item.value,'text')+'" placeholder="'+prx.componentsHelper.getProp(item.placeholder,'other')+'" data-role="none" class="real-input liveUpdate-backgroundColor liveUpdate-textColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-textColor changeProperty-textSize changeProperty-textFont changeProperty-borderColor changeProperty-borderWidth changeProperty-borderRadius changeProperty-textAlign" />'
			cR += '</div>';
		}
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		if(item.hasIcon && item.imgSrc.fileId != '') {
			$('#' + _id).find('.material-textfield-icon-wrapper').css({ 
				'width': dims.height+'px',
				'height': dims.height+'px'	
			});
		}		
	}
	,afterDisplay: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		if(!prx.editor) {
			$('#'+_id)
				.hammer()
				.find('.real-input')
				.focus(function(e){
					if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
					prx.variables._triggerData['#'+_id]['inputfocus'] = { value: $(this).val() }
					$('#'+_id).trigger('inputfocus');

					$(this).parent().siblings().find('.material-textfield-icon').addClass('checked');

					e.stopPropagation();
				})
				.blur(function(){
					if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
			        prx.variables._triggerData['#'+_id]['inputblur'] = { value: $(this).val() };
			        $('#'+_id).trigger('inputblur');

					$(this).parent().siblings().find('.material-textfield-icon').removeClass('checked');
				})
				.keyup(function(e){
					if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
			        prx.variables._triggerData['#'+_id]['inputkeyup'] = { value: $(this).val() };
					var event = jQuery.Event("inputkeyup");
					event.which = e.which;
					$('#'+_id).trigger(event);
				});

			prx.actions.disableFlashActionOnItemTap('#' + _id, '.flashactiontap-afterdisplay');
		}
	}
	,interactions: [ prx.commonproperties.actions ]
	,mpactions: {
		specialEvents: ['inputfocus','inputblur','inputkeyup']
	}
	,editableProperties: [
		{
			caption: 'Value'
			,name: 'value'
			,type: 'input'
			,value: function(item,name) {
				return item.value;
			}
			,changeProperty: {  
				caption: 'Value',
				property: 'input-value',
				selector: 'input.real-input',
				transitionable: false
			} 
		}
	                      ]
	,propertyGroups: [			
		{
			caption: 'Style',
			properties: [
				[
				 	prx.commonproperties.materialBackgroundColor,
					prx.commonproperties.borderWidth,
					prx.commonproperties.materialBorderColor,
					prx.commonproperties.materialBorderColorActive
				]
			]
		},{
			caption: 'Text',
			properties: [				
				[
					prx.commonproperties.textFont,
					prx.commonproperties.textSize,
					prx.commonproperties.materialTextColor
				],	
				[
					prx.commonproperties.textProperties,
					prx.commonproperties.textAlign
				]
			]
		},
		{
			caption: 'Placeholder (If field is empty)',
	    	properties: [
				[
				 	prx.commonproperties.placeholderInput
				],
				[
				 	prx.commonproperties.materialPlaceholderColor
				]
			]
		},
		{
   		    caption: 'Icon',
   		    properties: [
   		        [
   					{ 
 						caption: false,
 						name: 'imgSrc', 
 						proptype: 'icon-source',
 						type: 'combo-asset', 
 						displayValue: function(item,name) {
 							if(item.imgSrc.fileId == '') {
 	      						return 'No asset selected.';
 	      					}
 	      					return item.imgSrc.name;
 						}
 						,value: function(item,name) {
 							return JSON.stringify({
 								allow: 'image',
 								asset: item.imgSrc
 							});
 						}
 						,hiddenByDefault: function(item) {
							return !item.hasIcon;
						}
 						,changeProperty: {
 	                		caption: 'Icon',
 	                		rerender: true
 	                	}
 					}
   				],[
					{
						caption: 'Size'
						,name: 'iconSize'							
						,proptype: 'icon-size'
						,type: 'select'
						,value: function(item,name) {
							return item.iconSize;
						}
						,values: [{ value: '3', displayValue: 'Small'}, { value: '4', displayValue: 'Medium'}, { value: '5', displayValue: 'Large'}]
						,hiddenByDefault: function(item) {
							return !item.hasIcon;
						}
						,changeProperty: {
	                		caption: 'Icon size',
	                		rerender: true,
	                		changeable: false
						}
					}
				]
   			]
   		},
		{	
			caption: 'Input type',
			properties: [				
				[
					{
						caption: false,
						name: 'inputtype',
						type: 'select',
						value: function(item,name) {
							return item.inputtype;
						}
						,values: [{ value: 'text', displayValue: 'Text' }, { value: 'number', displayValue: 'Numeric' }, { value: 'email', displayValue: 'Email' }, { value: 'password', displayValue: 'Password' }, { value: 'tel', displayValue: 'Telephone' }] 
						,changeProperty: {  
							caption: 'Input type',
							rerender: true
						} 
						,hiddenByDefault: function(item) {
							return (item.name=="material_passwordfield")
						}
					}
				]
			]
		}
	]	
}

//TYPE: TEXTAREA
prx.types.material_textarea = {
	name: 'material_textarea'
	,onDisplay: function(item,containerid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item,symbol);

		if(typeof(item.isFull) == "undefined") { item.isFull = false; }
		if(typeof(item.backgroundColor) =="undefined") { item.backgroundColor = 'none' }
		if(typeof(item.textAlign) == "undefined") { item.textAlign = 'left'; }
		
		var _props = prx.componentsHelper.getProp(item.textProperties,'props-text');

		var _labelprops = prx.componentsHelper.getProp(item.labelProperties,'props-text');
		
		var cR = '';		
		cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-textarea'+((prx.componentsHelper.getProp(item.isFull,'boolean')) ? ' full' : '')+' liveUpdate-backgroundColor changeProperty-backgroundColor">';
		
		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		cR += '#'+_id+' { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-bakground')+';}';
		cR += '#'+_id+' > textarea, #'+_id+' .faux-input { padding-top: '+(16*prx.componentsHelper.getScale(item.lib))+'px; background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+prx.componentsHelper.getProp(item.textFont,'font-family')+' border-bottom: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; text-align: '+prx.componentsHelper.getProp(item.textAlign,'align')+'; border-radius: '+prx.componentsHelper.getProp(item.borderRadius,'border-radius')+' '+ _props + '}';
		if(prx.componentsHelper.getProp(item.isFull,'boolean')) { 
		cR += '#'+_id+' > textarea, #'+_id+' .faux-input { border-top: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; padding: '+(17*prx.componentsHelper.getScale(item.lib))+'px '+(15*prx.componentsHelper.getScale(item.lib))+'px '+(17*prx.componentsHelper.getScale(item.lib))+'px '+(18*prx.componentsHelper.getScale(item.lib))+'px; }';
		cR += '#'+_id+' { padding-bottom: 0;}';
		}
		if(!prx.componentsHelper.getProp(item.isFull,'boolean')) { 
		cR += '#'+_id+' > textarea:focus { border-bottom: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')*2+'px solid '+prx.componentsHelper.getProp(item.borderColorActive,'color-border')+'; }'
		}
		cR += '#'+_id+' .faux-input { '+prx.css.flexJustifyContent(prx.componentsHelper.getProp(item.textAlign,'align'))+'; }'
		cR += '#'+_id+' .faux-input.placeholder-input { color: '+prx.componentsHelper.getProp(item.placeholderColor,'color-text')+'; }'
		cR += '#'+_id+' textarea:-moz-placeholder { color: '+prx.componentsHelper.getProp(item.placeholderColor,'color-text')+'!important; }'
		cR += '#'+_id+' textarea::-webkit-input-placeholder { color: '+prx.componentsHelper.getProp(item.placeholderColor,'color-text')+'!important; }'
		cR += '#'+_id+' textarea::-moz-placeholder { color: '+prx.componentsHelper.getProp(item.placeholderColor,'color-text')+'!important; }'
		if(prx.componentsHelper.getProp(item.hasLabel,'boolean')) {
		cR += '#'+_id+' .label { color: '+prx.componentsHelper.getProp(item.labelColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.labelSize,'num-text-size')+'px; '+prx.componentsHelper.getProp(item.textFont,'font-family')+'; text-align: '+prx.componentsHelper.getProp(item.labelAlign,'align')+';  '+ _labelprops +' }';
		cR += '#'+_id+' > textarea, #'+_id+' .faux-input { padding-top: '+(8*prx.componentsHelper.getScale(item.lib))+'px; }';		
		}
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);
			
		if(prx.editor) {
			if(prx.componentsHelper.getProp(item.hasLabel,'boolean')) {
			cR += '<div class="label liveUpdate-labelColor changeProperty-labelColor changeProperty-labelSize changeProperty-labelAlign" data-editableproperty="label">'+prx.componentsHelper.getProp(item.label,'text-textarea')+'</div>';
			}
			cR += '<div class="faux-input liveUpdate-textColor liveUpdate-borderColor" data-editableproperty="value">'+prx.componentsHelper.getProp(item.value,'text-textarea')+'</div>';
			cR += '<div class="faux-input placeholder-input liveUpdate-placeholderColor liveUpdate-borderColor">'+prx.componentsHelper.getProp(item.placeholder,'other')+'</div>'
		} else {
			if(prx.componentsHelper.getProp(item.hasLabel,'boolean')) {
			cR += '<div class="label liveUpdate-labelColor changeProperty-labelColor changeProperty-labelSize changeProperty-labelAlign" data-editableproperty="label">'+prx.componentsHelper.getProp(item.label,'text-textarea')+'</div>';
			}
			cR += '<textarea class="real-input liveUpdate-placeholderColor liveUpdate-textColor liveUpdate-borderColor changeProperty-borderColor changeProperty-borderWidth changeProperty-borderRadius changeProperty-textSize changeProperty-textFont changeProperty-textColor changeProperty-textAlign" placeholder="'+prx.componentsHelper.getProp(item.placeholder,'other')+'" data-role="none">'+prx.componentsHelper.getProp(item.value,'text-textarea').replace(/<br \/>/g, "\n")+'</textarea>'
		}

		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,afterDisplay: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item,symbol);
		
		if(!prx.editor) {
			$('#'+_id)
				.hammer()
				.find('.real-input')
				.focus(function(){
					if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
			        prx.variables._triggerData['#'+_id]['inputfocus'] = { value: $(this).val() }
					$('#'+_id).trigger('inputfocus');
				})
				.blur(function(){
					if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
			        prx.variables._triggerData['#'+_id]['inputblur'] = { value: $(this).val() };
			        $('#'+_id).trigger('inputblur');
				})
				.keyup(function(e){
					if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
			        prx.variables._triggerData['#'+_id]['inputkeyup'] = { value: $(this).val() };
					var event = jQuery.Event("inputkeyup");
					event.which = e.which;
					$('#'+_id).trigger(event);
				});

			prx.actions.disableFlashActionOnItemTap('#' + _id, '.flashactiontap-afterdisplay');
		}
	}
	,interactions: [ prx.commonproperties.actions ]
	,mpactions: {
    	specialEvents: ['inputfocus','inputblur','inputkeyup']
    }
	,editableProperties: [
		{
			caption: 'Value'
			,name: 'value'
			,type: 'textarea'
			,value: function(item,name) {
				return item.value;
			}
			,changeProperty: {  
				caption: 'Value',
				property: 'textarea-value',
				selector: 'textarea.real-input',
				transitionable: false
			} 
		},
		{
			caption: 'Label'
			,name: 'label'
			,type: 'textarea'
			,value: function(item,name) {
				return item.label;
			}
			,changeProperty: {  
				caption: 'Label',
				property: 'textarea-label',
				selector: '.label',
				transitionable: false
			} 
		}
	                      ]
	,propertyGroups: [			
		{
			caption: 'Style',
			properties: [
				[
				 	prx.commonproperties.materialBackgroundColor,
					prx.commonproperties.borderWidth,
					prx.commonproperties.materialBorderColor,
					prx.commonproperties.materialBorderColorActive
				]
			]
		},{
			caption: 'Text',
			properties: [				
				[
					prx.commonproperties.textFont,
					prx.commonproperties.textSize,
					prx.commonproperties.materialTextColor
				],	
				[
					prx.commonproperties.textProperties,
					prx.commonproperties.textAlign
				]
			]
		},
		{
			caption: 'Label',
			properties: [
			    [
					{
						caption: 'Show label?',
						name: 'hasLabel',
						proptype: 'field-label-visibility',
						type: 'onoff',
						value: function(item,name) {
							return item.hasLabel
						}
						,onChange: function(item) {
							if(item.hasLabel) {
								$('#property-labelSize, #property-labelColor, #property-labelProperties, #property-labelAlign').show();
							} else {
								$('#property-labelSize, #property-labelColor, #property-labelProperties, #property-labelAlign').hide();
							}
						},
						hiddenByDefault: function(item) {
							return item.isFull;
						}
						,changeProperty: {  
							caption: 'Label',
							rerender: true
						} 
					}
			    ],
				[
				 	{ 
				 		caption: false, 
				 		name: 'labelSize', 
				 		proptype: 'font-size-4-label', 
				 		type: 'combo-select', 
				 		value: function(item,name) { 
				 			return item.labelSize; 
				 		}, 
				 		values: prx.comps.textsize,
				 		hiddenByDefault: function(item) {
							return (!item.hasLabel || item.isFull);
						},
				 		changeProperty: { 
				 			caption: 'Label size', 
				 			selector: '.changeProperty-labelSize', 
				 			property: 'font-size', 
				 			transitionable: true 
				 		} 
				 	},
					{ 
						caption: false, 
						name: 'labelColor',
						proptype: 'font-color-4-label',
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.labelColor; 
						}, 
						values: prx.comps.materialColors,
						hiddenByDefault: function(item) {
							return (!item.hasLabel || item.isFull);
						},
						liveUpdate: 'color', 
						changeProperty: { 
							caption: 'Label color', 
							selector: '.changeProperty-labelColor', 
							property: 'color', 
							transitionable: true 
						} 
					},
					{ 
						caption: false, 
						name: 'labelProperties', 
						proptype: 'text-properties-3-label', 
						type: 'checkbox', 
						value: function(item,name) { 
							if(typeof(item.textProperties) == "undefined") {
								item.textProperties = [];
							}
							return item.labelProperties; 
						},
						values: [
							{ value: 'bold', displayValue: '', icon: 'text-bold'},
							{ value: 'italic', displayValue: '', icon: 'text-italic'},
							{ value: 'underline', displayValue: '', icon: 'text-underline'}
						],
						hiddenByDefault: function(item) {
							return (!item.hasLabel || item.isFull);
						},
						changeProperty: { 
							caption: 'Label properties', 
							rerender: true 
						} 
					},
					{ 
						caption: false, 
						name: 'labelAlign', 
						proptype: 'text-properties-3-label',
						type: 'radio', 
						value: function(item,name) { 
							return item.labelAlign; 
						},
						values: [
							{ value: 'left', displayValue: '', icon: 'align-left'},
							{ value: 'center', displayValue: '', icon: 'align-center'},
							{ value: 'right', displayValue: '', icon: 'align-right'}
						],
						hiddenByDefault: function(item) {
							return (!item.hasLabel || item.isFull);
						},
						changeProperty: { 
							caption: 'Label text align', 
							selector: '.changeProperty-labelAlign', 
							property: 'text-align', 
							transitionable: false 
						} 
					}
				]
			]
		},
		{
			caption: 'Placeholder (If field is empty)',
	    	properties: [
				[
				 	prx.commonproperties.placeholderInput
				],
				[
				 	prx.commonproperties.placeholderColor
				]
			]
		}
	]	
}

//TYPE: FLOATING LABEL FIELD
prx.types.material_textfield_floating_label = {
    name: 'material_textfield_floating_label'
    ,onDisplay: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var dims = prx.componentsHelper.getRealDims(item, symbol);

        var _props = prx.componentsHelper.getProp(item.textProperties,'props-text');

        if( typeof(item.labelFont) == 'undefined' ) item.labelFont = 'Roboto Medium, sans-serif';

        var cR = '';
        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-floating-label type-material-textfield-'+prx.componentsHelper.getProp(item.inputtype,'other')+' liveUpdate-backgroundColor changeProperty-backgroundColor">';

        cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);

        cR += '#'+_id+' { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+';}';
        cR += '#'+_id+' input, #'+_id+' textarea, #'+_id+' .faux-input { color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+prx.componentsHelper.getProp(item.textFont,'font-family')+' border-bottom: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; text-align: '+prx.componentsHelper.getProp(item.textAlign,'align')+'; '+ _props + ' }';
        cR += '#'+_id+' .label { '+prx.componentsHelper.getProp(item.labelFont,'font-family')+' font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; color: '+prx.componentsHelper.getProp(item.labelColor,'color-text')+'; text-align: '+prx.componentsHelper.getProp(item.labelAlign,'align')+'; '+ _props + ' }';
        cR += '#'+_id+' .faux-input { '+prx.css.flexJustifyContent(prx.componentsHelper.getProp(item.textAlign,'align'))+'; }';

        if(!prx.editor) {
            cR += '#'+_id+' input:focus, #'+_id+' textarea:focus { border-bottom: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')*2+'px solid '+prx.componentsHelper.getProp(item.borderColorActive,'color-border')+'; }';
            cR += '#'+_id+' input:focus + .label, #'+_id+' textarea:focus + .label { color: '+prx.componentsHelper.getProp(item.borderColorActive,'color-border')+'; }';
        }
        cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        if(prx.editor) {
            cR += '<div class="material-floating-label-field-wrapper">';
            cR += '<div class="faux-input '+((prx.componentsHelper.getProp(item.fieldtype,'other')== 'textarea') ? 'textarea ' : '')+'liveUpdate-textColor liveUpdate-borderColor liveUpdate-backgroundColor" data-editableproperty="value">'+((prx.componentsHelper.getProp(item.fieldtype,'other') != 'textarea')  ? prx.componentsHelper.getProp(item.value,'text') : prx.componentsHelper.getProp(item.value,'text-textarea')) +'</div>';
            cR += '<div class="label '+((prx.componentsHelper.getProp(item.fieldtype,'other') == 'textarea') ? 'textarea ' : '')+'liveUpdate-labelColor changeProperty-labelAlign changeProperty-labelFont">'+prx.componentsHelper.getProp(item.label,'other')+'</div>'
            cR += '</div>';
        }
        else {
            cR += '<div class="material-floating-label-field-wrapper">';
            if(prx.componentsHelper.getProp(item.fieldtype,'other') == 'input') {
                cR += '<input type="'+prx.componentsHelper.getProp(item.inputtype,'other')+'" value="'+prx.componentsHelper.getProp(item.value,'other')+'" data-role="none" class="real-input changeProperty-textColor changeProperty-textSize changeProperty-textFont changeProperty-borderColor changeProperty-borderColorActive changeProperty-borderWidth changeProperty-borderRadius changeProperty-textAlign" />'
            }
            else if(prx.componentsHelper.getProp(item.fieldtype,'other') == 'textarea') {
                cR += '<textarea data-role="none" class="real-input liveUpdate-textColor liveUpdate-borderColor changeProperty-borderColor changeProperty-borderColorActive changeProperty-borderWidth changeProperty-borderRadius changeProperty-textSize changeProperty-textFont changeProperty-textColor changeProperty-textAlign">'+prx.componentsHelper.getProp(item.value,'text-textarea').replace(/<br \/>/g, "\n")+'</textarea>'
            }
            cR += '<div class="label '+((prx.componentsHelper.getProp(item.fieldtype,'other') == 'textarea') ? 'textarea ' : '')+'liveUpdate-labelColor changeProperty-labelAlign changeProperty-labelFont changeProperty-labelColor">'+prx.componentsHelper.getProp(item.label,'other')+'</div>'
            cR += '</div>';
        }
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';
        return cR;
    }
    ,afterDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;

        if(!prx.editor) {

            if($.trim($('#'+_id+' .real-input').val()) == "") {
                if(prx.componentsHelper.getProp(item.fieldtype,'other') == 'input') {
                    $('#'+_id+' input + .label').addClass('empty');
                }
                else if(prx.componentsHelper.getProp(item.fieldtype,'other') == 'textarea') {
                    $('#'+_id+' textarea + .label').addClass('empty');
                }
            }
            else {
                if(prx.componentsHelper.getProp(item.fieldtype,'other') == 'input') {
                    $('#'+_id+' input + .label').removeClass('empty');
                }
                else if(prx.componentsHelper.getProp(item.fieldtype,'other') == 'textarea') {
                    $('#'+_id+' textarea + .label').removeClass('empty');
                }
            }

            $('#'+_id)
                .hammer()
                .find('.real-input')
                .focus(function(){
                    if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
                    prx.variables._triggerData['#'+_id]['inputfocus'] = { value: $(this).val() }
                    $('#'+_id).trigger('inputfocus');

                    if($.trim($(this).val()) == "") {
                        if(item.fieldtype == 'input') {
                            $('#'+_id+' input + .label').removeClass('empty');
                        }
                        else if(item.fieldtype == 'textarea') {
                            $('#'+_id+' textarea + .label').removeClass('empty');
                        }
                    }
                })
                .blur(function(){
                    if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
                    prx.variables._triggerData['#'+_id]['inputblur'] = { value: $(this).val() };
                    $('#'+_id).trigger('inputblur');

                    if($.trim($(this).val()) == "") {
                        if(item.fieldtype == 'input') {
                            $('#'+_id+' input + .label').addClass('empty');
                        }
                        else if(item.fieldtype == 'textarea') {
                            $('#'+_id+' textarea + .label').addClass('empty');
                        }
                    } else {
	                    if(item.fieldtype == 'input') {
		                    $('#'+_id+' input + .label').removeClass('empty');
	                    }
	                    else if(item.fieldtype == 'textarea') {
		                    $('#'+_id+' textarea + .label').removeClass('empty');
	                    }
                    }
                })
                .keyup(function(e){
                    if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
                    prx.variables._triggerData['#'+_id]['inputkeyup'] = { value: $(this).val() };
                    var event = jQuery.Event("inputkeyup");
                    event.which = e.which;
                    $('#'+_id).trigger(event);
                });

            prx.actions.disableFlashActionOnItemTap('#' + _id, '.flashactiontap-afterdisplay');

        }
    }
    ,interactions: [ prx.commonproperties.actions ]
    ,mpactions: {
        specialEvents: ['inputfocus','inputblur','inputkeyup']
    }
    ,editableProperties: [
        {
            caption: 'Value'
            ,name: 'value'
            ,type: 'input'
            ,value: function(item,name) {
                return item.value;
            }
            ,changeProperty: {
                caption: 'Value',
                transitionable: false,
				property: 'input-value',
			    selector: 'input.real-input',
                changeFunction: function(item, containerid) {
                    var _id = (!containerid) ? item.id : containerid+'-'+item.id;

                    var oldVal = $('#'+_id+' .real-input').val();

                    if($.trim(item.value) == "") {
                        $('#'+_id+' input + .label, #'+_id+' textarea + .label').addClass('empty');
                    }
                    else {
                        $('#'+_id+' input + .label, #'+_id+' textarea + .label').removeClass('empty');
                    }

                    if( $.trim(oldVal) == "" && $.trim(item.value) != "" ) {
                        setTimeout(function () {
                            $('#' + _id + ' .real-input').val(item.value);
                        }, 750);
                    }
                    else {
                        $('#'+_id+' .real-input').val(item.value);
                    }
                }
            }
        }
    ]
    ,propertyGroups: [
        {
            caption: 'Style',
            properties: [
                [
                    prx.commonproperties.materialBackgroundColor,
                    prx.commonproperties.borderWidth,
                    prx.commonproperties.materialBorderColor,
                    prx.commonproperties.materialBorderColorActive
                ]
            ]
        },{
            caption: 'Text',
            properties: [
                [
                    prx.commonproperties.textFont,
                    prx.commonproperties.textSize,
                    prx.commonproperties.materialTextColor
                ],
                [
                    prx.commonproperties.textProperties,
                    prx.commonproperties.textAlign
                ]
            ]
        },{
            caption: 'Label',
            properties: [
                [
                    prx.commonproperties.labelInput
                ],
                [
                    prx.commonproperties.textFontLabel,
                    prx.commonproperties.textColorLabel,
                    prx.commonproperties.textAlignLabel
                ]
            ]
        },
        {
            caption: 'Input type',
            properties: [
                [
                    {
                        caption: false,
                        name: 'inputtype',
                        type: 'select',
                        value: function(item,name) {
                            return item.inputtype;
                        }
                        ,values: [{ value: 'text', displayValue: 'Text' }, { value: 'number', displayValue: 'Numeric' }, { value: 'email', displayValue: 'Email' }, { value: 'password', displayValue: 'Password' }, { value: 'tel', displayValue: 'Telephone' }]
                        ,changeProperty: {
                        caption: 'Input type',
                        rerender: true
                    }
                        ,hiddenByDefault: function(item) {
                        return (item.name=="material_textarea_floating_label")
                    }
                    }
                ]
            ]
        }
    ]
}

//TYPE: FLOATING LABEL TEXTAREA
prx.types.material_textarea_floating_label = {
    name: 'material_textarea_floating_label'
    ,onDisplay: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var dims = prx.componentsHelper.getRealDims(item, symbol);

        var _props = prx.componentsHelper.getProp(item.textProperties,'props-text');

        if( typeof(item.labelFont) == 'undefined' ) item.labelFont = 'Roboto Medium, sans-serif';

        var cR = '';
        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-floating-label type-material-textfield-textarea liveUpdate-backgroundColor changeProperty-backgroundColor">';

        cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);

        cR += '#'+_id+' { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+';}';
        cR += '#'+_id+' textarea, #'+_id+' .faux-input { color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+prx.componentsHelper.getProp(item.textFont,'font-family')+' border-bottom: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; text-align: '+prx.componentsHelper.getProp(item.textAlign,'align')+'; '+ _props + ' }';
        cR += '#'+_id+' .label { '+prx.componentsHelper.getProp(item.labelFont,'font-family')+' font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; color: '+prx.componentsHelper.getProp(item.labelColor,'color-text')+'; text-align: '+prx.componentsHelper.getProp(item.labelAlign,'align')+'; '+ _props + ' }';
        cR += '#'+_id+' .faux-input { '+prx.css.flexJustifyContent(prx.componentsHelper.getProp(item.textAlign,'align'))+'; }';

        if(!prx.editor) {
            cR += '#'+_id+' textarea:focus { border-bottom: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')*2+'px solid '+prx.componentsHelper.getProp(item.borderColorActive,'color-border')+'; }';
            cR += '#'+_id+' textarea:focus + .label { color: '+prx.componentsHelper.getProp(item.borderColorActive,'color-border')+'; }';
        }
        cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        if(prx.editor) {
            cR += '<div class="material-floating-label-field-wrapper">';
            cR += '<div class="faux-input textarea liveUpdate-textColor liveUpdate-borderColor liveUpdate-backgroundColor" data-editableproperty="value">'+prx.componentsHelper.getProp(item.value,'text-textarea')+'</div>';
            cR += '<div class="label textarea liveUpdate-labelColor changeProperty-labelAlign changeProperty-labelFont">'+prx.componentsHelper.getProp(item.label,'other')+'</div>'
            cR += '</div>';
        }
        else {
            cR += '<div class="material-floating-label-field-wrapper">';
            cR += '<textarea data-role="none" class="real-input liveUpdate-textColor liveUpdate-borderColor changeProperty-borderColor changeProperty-borderWidth changeProperty-borderRadius changeProperty-textSize changeProperty-textFont changeProperty-textColor changeProperty-textAlign">'+prx.componentsHelper.getProp(item.value,'text-textarea').replace(/<br \/>/g, "\n")+'</textarea>'
            cR += '<div class="label textarea liveUpdate-labelColor changeProperty-labelAlign changeProperty-labelFont">'+prx.componentsHelper.getProp(item.label,'other')+'</div>'
            cR += '</div>';
        }
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';
        return cR;
    }
    ,afterDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;

        if(!prx.editor) {

            if($.trim($('#'+_id+' .real-input').val()) == "") {
                $('#'+_id+' textarea + .label').addClass('empty');
            }
            else {
                $('#'+_id+' textarea + .label').removeClass('empty');
            }

            $('#'+_id)
                .hammer()
                .find('.real-input')
                .focus(function(){
                    if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
                    prx.variables._triggerData['#'+_id]['inputfocus'] = { value: $(this).val() }
                    $('#'+_id).trigger('inputfocus');

                    if($.trim($(this).val()) == "") {
                        $('#'+_id+' textarea + .label').removeClass('empty');
                    }
                })
                .blur(function(){
                    if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
                    prx.variables._triggerData['#'+_id]['inputblur'] = { value: $(this).val() };
                    $('#'+_id).trigger('inputblur');

                    if($.trim($(this).val()) == "") {
                        $('#'+_id+' textarea + .label').addClass('empty');

                    } else {
	                    $('#'+_id+' textarea + .label').removeClass('empty');
                    }
                })
                .keyup(function(e){
                    if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
                    prx.variables._triggerData['#'+_id]['inputkeyup'] = { value: $(this).val() };
                    var event = jQuery.Event("inputkeyup");
                    event.which = e.which;
                    $('#'+_id).trigger(event);
                });

            prx.actions.disableFlashActionOnItemTap('#' + _id, '.flashactiontap-afterdisplay');

        }
    }
    ,interactions: [ prx.commonproperties.actions ]
    ,mpactions: {
        specialEvents: ['inputfocus','inputblur','inputkeyup']
    }
    ,editableProperties: [
        {
            caption: 'Value'
            ,name: 'value'
            ,type: 'textarea'
            ,value: function(item,name) {
                return item.value;
            }
            ,changeProperty: {
                caption: 'Value',
				property: 'textarea-value',
				selector: '.real-input',
                transitionable: false,
                changeFunction: function(item, containerid) {
                    var _id = (!containerid) ? item.id : containerid+'-'+item.id;

                    var oldVal = $('#'+_id+' .real-input').val();
    
                    if($.trim(item.value) == "") {
                        $('#'+_id+' textarea + .label').addClass('empty');
                    }
                    else {
                        $('#'+_id+' textarea + .label').removeClass('empty');
                    }

                    if( $.trim(oldVal) == "" && $.trim(item.value) != "" ) {
                        setTimeout(function () {
                            $('#' + _id + ' .real-input').val(prx.componentsHelper.getProp(item.value,'text-textarea').replace(/<br \/>/g, "\n"));
                        }, 750);
                    }
                    else {
                        $('#'+_id+' .real-input').val(prx.componentsHelper.getProp(item.value,'text-textarea').replace(/<br \/>/g, "\n"));
                    }
                }
            }
        }
    ]
    ,propertyGroups: [
        {
            caption: 'Style',
            properties: [
                [
                    prx.commonproperties.materialBackgroundColor,
                    prx.commonproperties.borderWidth,
                    prx.commonproperties.materialBorderColor,
                    prx.commonproperties.materialBorderColorActive
                ]
            ]
        },{
            caption: 'Text',
            properties: [
                [
                    prx.commonproperties.textFont,
                    prx.commonproperties.textSize,
                    prx.commonproperties.materialTextColor
                ],
                [
                    prx.commonproperties.textProperties,
                    prx.commonproperties.textAlign
                ]
            ]
        },{
            caption: 'Label',
            properties: [
                [
                    prx.commonproperties.labelInput
                ],
                [
                    prx.commonproperties.textFontLabel,
                    prx.commonproperties.textColorLabel,
                    prx.commonproperties.textAlignLabel
                ]
            ]
        }
    ]
}

//TYPE: CHECKBOX
prx.types.material_checkbox = {
	name: "material_checkbox"
	,onDisplay: function(item,containerid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);

		var _check = '';
		var _active = "";
		
		if(prx.componentsHelper.getProp(item.active,'boolean')) { _active = 'checked="checked"';}
		
		var cR = '';
		cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-checkbox">';
		
		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		cR += '#' + _id + ' label { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; border-color: '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; }'
		cR += '#' + _id + ' label .check { background-color: '+prx.componentsHelper.getProp(item.checkColor,'color-background')+';}'
		cR += '#' + _id + ' input:checked + label { background-color: '+prx.componentsHelper.getProp(item.activeColor,'color-background')+'; border-color: '+prx.componentsHelper.getProp(item.activeColor,'color-border')+'; }';
		cR += '#' + _id + ' input + label:active .radial { width: '+(dims.width*1.7)+'px; height: '+(dims.width*1.7)+'px; left: -'+Math.round(((dims.width*1.7)-dims.width)/2)+'px; top: -'+Math.round(((dims.width*1.7)-dims.width)/2)+'px; }';
		cR += '#' + _id + ' input:checked + label:active .radial { background-color: '+prx.componentsHelper.getProp(item.activeColor,'color-background')+';}';
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);
		
		cR += '<input type="checkbox" id="'+_id+'-checkbox" '+_active+' style="display: none;" data-role="none" />';
		cR += '<label for="'+_id+'-checkbox" class="'+((_active != '') ? 'liveUpdate-activeColor-border-color liveUpdate-activeColor-background-color changeProperty-activeColor-border-color changeProperty-activeColor-background-color' : 'liveUpdate-backgroundColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-borderColor')+'">';
		cR += '<div class="radial"></div>';
		cR += '<div class="check-container" data-clickable="true"><div class="check short '+((_active != '') ? 'liveUpdate-checkColor changeProperty-checkColor' : '')+'"></div><div class="check long '+((_active != '') ? 'liveUpdate-checkColor changeProperty-checkColor' : '')+'"></div></div>';
		cR += '</label>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,afterDisplay: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		if(!prx.editor) {
			$('#'+_id+'-checkbox').on('change.custom-change-event', function(e){
				if(typeof(prx.variables._triggerData['input:checked[id='+_id+'-checkbox]']) == "undefined") { prx.variables._triggerData['input:checked[id='+_id+'-checkbox]'] = {}; }        					
		        prx.variables._triggerData['input:checked[id='+_id+'-checkbox]']['checkboxchange'] = { state: $(this).is(':checked') };
		        if(typeof(prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)']) == "undefined") { prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)'] = {}; }        					
		        prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)']['checkboxchange'] = { state: $(this).is(':checked') };
				if(typeof(prx.variables._triggerData['#' + _id]) == "undefined") { prx.variables._triggerData['#' + _id] = {}; }
				prx.variables._triggerData['#' + _id]['checkboxchange'] = { state: $(this).is(':checked') };
				$(this).trigger('checkboxchange');
			})
			$('#'+_id).hammer();
			prx.actions.disableFlashActionOnItemTap('#' + _id, '.flashactiontap-afterdisplay');
		}
	}
	,interactions: [
		{
			caption: 'Change',
			name: 'actions',
			type: 'action',
			value: function (item, name) {
				if (typeof(item.actions) == "undefined") {
					item.actions = [];
				}
				return item.actions.length;
			},
			changeProperty: {
				caption: 'Interactions on change',
				selector: '',
				property: 'action',
				transitionable: false,
				changeable: false
			}
		},

		{
			caption: 'Activation',
			name: 'checkboxActionsOnActive', 
			type: 'action',
			value: function(item,name) {
				if(typeof(item.checkboxActionsOnActive) == "undefined") {
					item.checkboxActionsOnActive = [];
				}
				return item.checkboxActionsOnActive.length; 
			}, 
			changeProperty: { caption: 'Interactions', selector: '', property: 'action', transitionable: false, changeable: false }
		},
		{
			caption: 'Deactivation',
			name: 'checkboxActionsOnDeactive', 
			type: 'action', 
			value: function(item,name) {
				if(typeof(item.checkboxActionsOnDeactive) == "undefined") {
					item.checkboxActionsOnDeactive = [];
				}
				return item.checkboxActionsOnDeactive.length; 
			},
			changeProperty: { caption: 'Interactions', selector: '', property: 'action', transitionable: false, changeable: false }
		}
	]
	,mpactions: {
		specialEvents: ['checkboxchange']
	}
	,propertyGroups: [			
		{
			caption: 'Inactive state',
	    	properties: [
				[
					prx.commonproperties.materialBackgroundColor,
					{ 
						caption: 'Border', 
						name: 'borderColor', 
						proptype: 'border-color', 
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.borderColor; 
						}, 
						values: prx.comps.materialColors, 
						liveUpdate: 'border-color', 
						changeProperty: { 
							caption: 'Border Color', 
							selector: '.changeProperty-borderColor', 
							property: 'border-color', 
							transitionable: true 
						} 
					}
				]				
			]
		},
		{
			caption: 'Active state',
	    	properties: [
				[
				 	{ 
				 		caption: 'Background', 
				 		name: 'activeColor', 
				 		proptype: 'background-color-2-active', 
				 		type: 'combo-colorpicker', 
				 		value: function(item,name) { 
				 			return item.activeColor; 
				 		}, 
				 		values: prx.comps.materialColors, 
				 		liveUpdate: 'background-color,border-color', 
				 		changeProperty: {
				 			caption: 'Active color', 
				 			selector: '.changeProperty-activeColor', 
				 			property: 'background-color,border-color', 
				 			transitionable: true 
				 		} 
				 	},
				 	{ 
				 		caption: 'Checkmark', 
				 		name: 'checkColor', 
				 		proptype: 'background-color', 
				 		type: 'combo-colorpicker', 
				 		value: function(item,name) { 
				 			return item.checkColor; 
				 		}, 
				 		values: prx.comps.materialColors, 
				 		liveUpdate: 'background-color', 
				 		changeProperty: { 
				 			caption: 'Checkmark color', 
				 			selector: '.changeProperty-checkColor', 
				 			property: 'background-color', 
				 			transitionable: true 
				 		} 
				 	}
				 ]
			]			
		},
		{
			caption: 'Advanced',
			properties: [
				[
					{
						caption: 'Active'
						,name: 'active'
						,proptype: 'active'
						,type: 'onoff'
						,value: function(item,name) {
							return item.active;
						}
						,changeProperty: {
							caption: 'Active',
							selector: 'input',
							property: 'checkbox-state',
							transitionable: false
						}
					}
				]
			]
		}
	]
	
}

//TYPE: RADIOBUTTON
prx.types.material_radiobutton = {
	name: "material_radiobutton"
	,onDisplay: function(item,containerid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		var _check = '';
		var _active = "";
		var _type = (prx.componentsHelper.getProp(item.actAsCheckbox,'boolean')) ? 'checkbox' : 'radio';
		
		if(prx.componentsHelper.getProp(item.active,'boolean')) { _active = 'checked="checked"';}
		
		var cR = '';
		cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-radiobutton">';
		
		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		cR += '#'+_id+' label { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; border-color: '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; }'
		cR += '#'+_id+' label .circle { background-color: '+prx.componentsHelper.getProp(item.activeColor,'color-background')+'; border-width: '+(item.height-2*prx.componentsHelper.getScale('material'))*0.16+'px '+(item.width-2*prx.componentsHelper.getScale('material'))*0.16+'px;}'
		cR += '#'+_id+' input:checked + label { border-color: '+prx.componentsHelper.getProp(item.activeColor,'color-border')+'; }';
		cR += '#'+_id+' input:checked + label .circle { background-color: '+prx.componentsHelper.getProp(item.activeColor,'color-background')+';}';
		cR += '#'+_id+' input + label:active .radial { width: '+(dims.width*1.7)+'px; height: '+(dims.width*1.7)+'px; left: -'+((dims.width*1.7)-dims.width)/2+'px; top: -'+((dims.width*1.7)-dims.width)/2+'px; }';
		cR += '#'+_id+' input:checked + label:active .radial { background-color: '+prx.componentsHelper.getProp(item.activeColor,'color-background')+';}';
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

		cR += '<input type="'+_type+'" id="'+_id+'-checkbox" '+_active+' style="display: none;" data-role="none" />';
		cR += '<label class="liveUpdate-backgroundColor liveUpdate-activeColor-border-color changeProperty-backgroundColor changeProperty-activeColor-border-color" for="'+_id+'-checkbox">';
		cR += '<div class="radial"></div>';
		cR += '<div class="circle liveUpdate-activeColor-background-color changeProperty-activeColor-background-color"></div>';
		cR += '</label>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		$('#'+_id+' label .circle').css({
			'border-width': (item.height-2*prx.componentsHelper.getScale('material'))*0.16+'px '+(item.width-2*prx.componentsHelper.getScale('material'))*0.16+'px'
		});
	}
	,afterDisplay: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		if(!prx.editor) {
			$('#'+_id+'-checkbox').on('change.custom-change-event', function(e){
				if(typeof(prx.variables._triggerData['input:checked[id='+_id+'-checkbox]']) == "undefined") { prx.variables._triggerData['input:checked[id='+_id+'-checkbox]'] = {}; }
				prx.variables._triggerData['input:checked[id='+_id+'-checkbox]']['checkboxchange'] = { state: $(this).is(':checked') };
				if(typeof(prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)']) == "undefined") { prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)'] = {}; }
				prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)']['checkboxchange'] = { state: $(this).is(':checked') };
				if(typeof(prx.variables._triggerData['#' + _id]) == "undefined") { prx.variables._triggerData['#' + _id] = {}; }
				prx.variables._triggerData['#' + _id]['checkboxchange'] = { state: $(this).is(':checked') };
				$(this).trigger('checkboxchange');
			})
			$('#'+_id).hammer();
			prx.actions.disableFlashActionOnItemTap('#' + _id, '.flashactiontap-afterdisplay');
		}
	}	
	,interactions: [
		{
			caption: 'Change',
			name: 'actions',
			type: 'action',
			value: function (item, name) {
				if (typeof(item.actions) == "undefined") {
					item.actions = [];
				}
				return item.actions.length;
			},
			changeProperty: {
				caption: 'Interactions on change',
				selector: '',
				property: 'action',
				transitionable: false,
				changeable: false
			}
		},
		{ 
			caption: 'Activation',
			name: 'checkboxActionsOnActive', 
			type: 'action',
			value: function(item,name) {
				if(typeof(item.checkboxActionsOnActive) == "undefined") {
					item.checkboxActionsOnActive = [];
				}
				return item.checkboxActionsOnActive.length; 
			},
			changeProperty: { caption: 'Interactions', selector: '', property: 'action', transitionable: false, changeable: false }

		},
		{
			caption: 'Deactivation',
			name: 'checkboxActionsOnDeactive', 
			type: 'action', 
			value: function(item,name) {
				if(typeof(item.checkboxActionsOnDeactive) == "undefined") {
					item.checkboxActionsOnDeactive = [];
				}
				return item.checkboxActionsOnDeactive.length; 
			},
			changeProperty: { caption: 'Interactions', selector: '', property: 'action', transitionable: false, changeable: false }
		
		}
	]
	,mpactions: {
		specialEvents: ['checkboxchange']
	}
	,propertyGroups: [			
		{
			caption: 'Style',
	    	properties: [
				[
					prx.commonproperties.materialBackgroundColor
				],
				[
					{
						caption: 'Active'
						,name: 'activeColor'
						,proptype: 'background-color-2-active' 
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							return item.activeColor;
						}
						,values: prx.comps.materialColors
						,liveUpdate: 'background-color,border-color'
						,changeProperty: {  
							caption: 'Active color',
							selector: '.changeProperty-activeColor',
							property: 'background-color,border-color',
							transitionable: true
						} 
					}
				 ]
			]
		},{
			caption: 'Advanced',
			properties: [
				[
					{
						caption: 'Active'
						,name: 'active'
						,proptype: 'active'
						,type: 'onoff'
						,value: function(item,name) {
							return item.active;
						}
						,changeProperty: {
							caption: 'Active',
							selector: 'input',
							property: 'checkbox-state',
							transitionable: false
						}
					}
				],[
					{
						caption: 'Act as checkbox'
						,name: 'actAsCheckbox'
						,proptype: 'radio-as-checkbox'
						,type: 'onoff'
						,value: function(item,name) {
							return item.actAsCheckbox;
						}
						,changeProperty: {  
							caption: 'Act as checkbox',
							rerender: true,
							changeable: false
						} 
					}
				]
			]
		}
	]
}

//TYPE: ONOFF SWITCH
prx.types.material_onoffswitch = {
	name: "material_onoffswitch"
	,onDisplay: function(item,containerid,symbol) {

		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);	
		
		var _active = "";		
		if(prx.componentsHelper.getProp(item.active,'boolean')) { _active = 'checked="checked"';}		
		
		var buttonDims = dims.height;

		var cR = '';
		cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-onoffswitch">';
				
		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		cR += '#'+_id+' .material-onoff-inner { border-radius: '+prx.componentsHelper.getProp(Math.round(dims.height/2),'border-radius')+' }';
		cR += '#'+_id+' .material-onoff-inner:before { background-color: '+prx.componentsHelper.getProp(item.activeLabelColor,'color-background')+'; }';
		cR += '#'+_id+' .material-onoff-inner:after { background-color: '+prx.componentsHelper.getProp(item.inactiveLabelColor,'color-background')+'; }';
		cR += '#'+_id+' .material-onoff-switch { width: '+dims.height+'px; box-shadow: 0 '+(2*prx.componentsHelper.getScale(item.lib))+'px '+(4*prx.componentsHelper.getScale(item.lib))+'px 0px '+prx.componentsHelper.getProp(item.inactiveShadowColor,'color-shadow')+'; background-color: '+prx.componentsHelper.getProp(item.inactiveSwitchColor,'color-background')+'; }';
		cR += '#'+_id+' input:checked + label .material-onoff-switch { box-shadow: '+(1*prx.componentsHelper.getScale(item.lib))+'px '+(2*prx.componentsHelper.getScale(item.lib))+'px '+(6*prx.componentsHelper.getScale(item.lib))+'px 0px '+prx.componentsHelper.getProp(item.activeShadowColor,'color-shadow')+'; background-color: '+prx.componentsHelper.getProp(item.activeSwitchColor,'color-switch')+'; }';
		cR += '#'+_id+' input + label:active .radial { width: '+(buttonDims*1.5)+'px; height: '+(buttonDims*1.5)+'px; left: -'+Math.round(((buttonDims*1.5)-buttonDims)/2)+'px; top: -'+Math.round(((buttonDims*1.5)-buttonDims)/2)+'px; }';
		cR += '#'+_id+' input:checked + label:active .radial { background-color: '+prx.componentsHelper.getProp(item.activeSwitchColor,'color-background')+';}';
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);
		
		// checkbox needs to stay "id-flipswitch" for player compatibility!
		cR += '<input class="material-onoff-checkbox" type="checkbox" '+_active+ ' id="'+_id+'-flipswitch" data-role="none">';
		cR += '<label class="material-onoff-label" for="'+_id+'-flipswitch"  data-clickable="true">';
		cR += '<span class="material-onoff-inner '+((prx.componentsHelper.getProp(item.active,'boolean')) ? 'liveUpdate-activeLabelColor changeProperty-activeLabelColor' : 'liveUpdate-inactiveLabelColor changeProperty-inactiveLabelColor')+'"></span>';
		cR += '<span class="material-onoff-switch '+((prx.componentsHelper.getProp(item.active,'boolean')) ? 'liveUpdate-activeSwitchColor changePropetry-activeSwitchColor' : 'liveUpdate-inactiveSwitchColor changePropetry-inactiveSwitchColor')+'">';
		cR += '<span class="radial"></span>';
		cR += '</span>';
		cR += '</label>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		
		return cR;
	}
	,onResize: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item,symbol);	
		
		$('#'+_id).find('.material-onoff-inner').css('border-radius', Math.round(dims.height/2)+'px');
		$('#'+_id).find('.material-onoff-switch').css({
			'width': dims.height+'px'
		});
	}
	,afterDisplay: function(item,containerid,symbol) {
		if(!prx.editor) {
			var _id = (!containerid) ? item.id : containerid + '-' + item.id;

			$('#'+_id+'-flipswitch').on('change.custom-change-event', function(e){
				if(typeof(prx.variables._triggerData['input:checked[id='+_id+'-checkbox]']) == "undefined") { prx.variables._triggerData['input:checked[id='+_id+'-checkbox]'] = {}; }
				prx.variables._triggerData['input:checked[id='+_id+'-checkbox]']['checkboxchange'] = { state: $(this).is(':checked') };
				if(typeof(prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)']) == "undefined") { prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)'] = {}; }
				prx.variables._triggerData['input[id='+_id+'-checkbox]:not(:checked)']['checkboxchange'] = { state: $(this).is(':checked') };
				if(typeof(prx.variables._triggerData['#' + _id]) == "undefined") { prx.variables._triggerData['#' + _id] = {}; }
				prx.variables._triggerData['#' + _id]['checkboxchange'] = { state: $(this).is(':checked') };
				$(this).trigger('checkboxchange');
			})

			$('#' + _id).hammer();
			prx.actions.disableFlashActionOnItemTap('#' + _id, '.flashactiontap-afterdisplay');
		}
	}
	,interactions: [
		{
			caption: 'Change',
			name: 'actions',
			type: 'action',
			value: function (item, name) {
				if (typeof(item.actions) == "undefined") {
					item.actions = [];
				}
				return item.actions.length;
			},
			changeProperty: {
				caption: 'Interactions on change',
				selector: '',
				property: 'action',
				transitionable: false,
				changeable: false
			}
		},
		{
			caption: 'Activation',
			name: 'flipswitchActionsOnActive',
			type: 'action',
			value: function(item,name) {
				if(typeof(item.flipswitchActionsOnActive) == "undefined") {
					if (typeof(item.actionsOnActive) == "undefined") {
						item.flipswitchActionsOnActive = [];
					} else {
						item.flipswitchActionsOnActive = item.actionsOnActive;
					}
				}
				return item.flipswitchActionsOnActive.length;
			},
			changeProperty: { caption: 'Interactions', selector: '', property: 'action', transitionable: false, changeable: false }
		},
		{
			caption: 'Deactivation',
			name: 'flipswitchActionsOnDeactive',
			type: 'action',
			value: function(item,name) {
				if(typeof(item.flipswitchActionsOnDeactive) == "undefined") {
					if (typeof(item.actionsOnDeactive) == "undefined") {
						item.flipswitchActionsOnDeactive = [];
					} else {
						item.flipswitchActionsOnDeactive = item.actionsOnDeactive;
					}
				}
				return item.flipswitchActionsOnDeactive.length;
			},
			changeProperty: { caption: 'Interactions', selector: '', property: 'action', transitionable: false, changeable: false }
		}
	]
	,mpactions: {
		specialEvents: ['checkboxchange'],
	}
	,propertyGroups: [	
		{
			caption: 'Active State',
			properties: [
				[
					{ 
						caption: 'Background', 
						name: 'activeLabelColor', 
						proptype: 'background-color-label-2-active', 
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.activeLabelColor; 
						}, 
						values: prx.comps.materialColors, 
						liveUpdate: 'background-color', 
						changeProperty: {
							caption: 'Active state color', 
							selector: '.changeProperty-activeLabelColor', 
							property: 'background-color', 
							transitionable: true 
						} 
					},
					{
						caption: 'Switch'
						,name: 'activeSwitchColor'
						,proptype: 'background-color-switch-2-active'
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							return item.activeSwitchColor;
						}
						,values: prx.comps.materialColors
						,liveUpdate: 'background-color'
						,changeProperty: {  
							caption: 'Active switch color', 
							selector: '.changeProperty-activeSwitchColor', 
							property: 'background-color', 
							transitionable: true
						} 
					}
				],
				[
				 	{ 
				 		caption: 'Shadow', 
				 		name: 'activeShadowColor', 
				 		proptype: 'shadow-color-2-active', 
				 		type: 'combo-colorpicker', 
				 		value: function(item,name) { 
				 			return item.activeShadowColor; 
				 		}, 
						values: prx.comps.materialColors,
				 		changeProperty: { 
				 			caption: 'Active shadow color', 
				 			rerender: true, 
				 			changeable: false
				 		} 
				 	}
				 ]
			]
		},
		{
			caption: 'Inactive State',
			properties: [
				[
					{ 
						caption: 'Background', 
						name: 'inactiveLabelColor', 
						proptype: 'background-color-label', 
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.inactiveLabelColor; 
						}, 
						values: prx.comps.materialColors, 
						liveUpdate: 'background-color', 
						changeProperty: {
							caption: 'Inactive state color', 
							selector: '.changeProperty-inactiveLabelColor', 
							property: 'background-color', 
							transitionable: true 
						} 
					},
					{
						caption: 'Switch'
						,name: 'inactiveSwitchColor'
						,proptype: 'background-color-switch'
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							return item.inactiveSwitchColor;
						}
						,values: prx.comps.materialColors
						,liveUpdate: 'background-color'
						,changeProperty: {  
							caption: 'Inactive switch color', 
							selector: '.changeProperty-inactiveSwitchColor', 
							property: 'background-color', 
							transitionable: true
						} 
					}
				],
				[
					{ 
						caption: 'Shadow', 
						name: 'inactiveShadowColor', 
						proptype: 'shadow-color', 
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.inactiveShadowColor; 
						}, 
						values: prx.comps.materialColors,
						changeProperty: { 
							caption: 'Inactive shadow color', 
							rerender: true, 
							changeable: false
						} 
					}
				]
			]
		},
		{
			caption: 'Advanced',
			properties: [
				[
					{
						caption: 'Active'
						,name: 'active'
						,proptype: 'active'
						,type: 'onoff'
						,value: function(item,name) {
							return item.active;
						}
						,changeProperty: {
							caption: 'Active',
							selector: 'input',
							property: 'checkbox-state',
							transitionable: false
						}
					} 
				 ]
				
			]
		}
	]
	
}


/***** LIST COMPONENTS *****/

//TYPE: BOTTOM SHEET COMPLEX
prx.types.material_bottomsheet_complex = {
	name: "material_bottomsheet_complex"
	,onDisplay: function(item,containerid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;		
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		var listH = Math.round((dims.height - 1 - item.listitems.length) / item.listitems.length);
		var listItemH = (dims.height - (item.listitems.length + 1))/item.listitems.length;

        var hasIcon = prx.componentsHelper.hasIcons(item);
        var hasLeftIcon = false;
        var hasRightIcon = false;
        var hasThumbs = prx.componentsHelper.hasThumbnails(item);

        if(hasIcon && item.iconpos == 'left'){
            hasLeftIcon = true;
        }
        if(hasIcon && item.iconpos == 'right'){
            hasRightIcon = true;
        }
			

		var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';

		var _subprops = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.subProperties,'props-text') : '';

		
		
		var cR = '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-bottomsheet">';
		
		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		cR += '#' + _id + ' .material-bottomsheet-inner { '+prx.css.flexJustifyContent(prx.componentsHelper.getProp(item.textAlign,'align'))+' background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; }';
		cR += '#' + _id + ' .material-bottomsheet-icon-wrapper { width: '+Math.round((parseInt(listItemH)/2)-(5*prx.componentsHelper.getScale(item.lib)))+'px; height: '+Math.round((parseInt(listItemH)/2)-(5*prx.componentsHelper.getScale(item.lib)))+'px; }';
		cR += '#' + _id + ' .material-bottomsheet-listitem-type-infoTitle .material-bottomsheet-icon-wrapper { width: '+Math.round((parseInt(listItemH)/2)+(10*prx.componentsHelper.getScale(item.lib)))+'px; height: '+Math.round((parseInt(listItemH)/2)+(10*prx.componentsHelper.getScale(item.lib)))+'px; }';
		cR += '#' + _id + ' .material-bottomsheet-text-wrapper { height: '+Math.round(listItemH)+'px; }';
		cR += '#' + _id + ' .material-bottomsheet-text { '+prx.componentsHelper.getProp(item.textFont,'font-family')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; '+_props+' }';
		cR += '#' + _id + ' .material-bottomsheet-subtitle { '+prx.componentsHelper.getProp(item.textFont,'font-family')+'; font-size: '+prx.componentsHelper.getProp(item.subtitleSize,'num-text-size')+'px; color: '+prx.componentsHelper.getProp(item.subtitleColor,'color-text')+'; '+_subprops+' }';
		cR += '#' + _id + ' .material-bottomsheet-listitem-type-infoTitle .material-bottomsheet-text { color: '+prx.componentsHelper.getProp(item.infoTitleColor,'color-text')+'; }';
		cR += '#' + _id + ' .material-bottomsheet-listitem-type-actionTitle .material-bottomsheet-text { color: '+prx.componentsHelper.getProp(item.actionTitleColor,'color-text')+'; }';
		if(prx.componentsHelper.getProp(item.name,'other') == 'material_bottomsheet_info') {
			cR += '#' + _id + ' .material-bottomsheet-separator { width: '+Math.round(dims.width-((parseInt(listItemH)/2)+(22*prx.componentsHelper.getScale(item.lib))+(26*prx.componentsHelper.getScale(item.lib))))+'px; background-color: '+prx.componentsHelper.getProp(item.dividerColor,'color-background')+'; }';
		}
		else {
			cR += '#' + _id + ' .material-bottomsheet-separator { width: '+dims.width+'px; background-color: '+prx.componentsHelper.getProp(item.dividerColor,'color-background')+'; }';
		}
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);
		
		cR += '<div class="material-bottomsheet-inner liveUpdate-backgroundColor changeProperty-backgroundColor changeProperty-textAlign changeProperty-textFont changeProperty-textSize">';
				
		$.each(item.listitems, function(i,elm){	
			
			if(prx.componentsHelper.getProp(elm.itemtype,'other') == 'separator') {
				cR += '<div id="'+_id+'-listitems-'+i+'" class="material-bottomsheet-separator liveUpdate-dividerColor dynamic-property" data-dynamic-property-index="'+i+'"></div>'
			}
			else {
				if(typeof(elm.thumbnail) == "undefined") { elm.thumbnail = {"fileId":"","name":"","assetType":""} };
				if(typeof(elm.leftIcon) == "undefined") { elm.leftIcon = {"fileId":"","name":"","assetType":"icon","bucketsource":"","targetSrc":"","color":""} };
				if(typeof(elm.rightIcon) == "undefined") { elm.rightIcon = {"fileId":"","name":"","assetType":"icon","bucketsource":"","targetSrc":"","color":""} };
							
				cR += '<style>';
				if(prx.componentsHelper.getProp(elm.leftIcon.fileId,'other') != '') {
					cR += '#' + _id + '-listitems-'+i+' .material-bottomsheet-icon-left { background-image: url('+prx.componentsHelper.getProp(elm.leftIcon,'asset')+'); }';
				}	
				if(prx.componentsHelper.getProp(elm.rightIcon.fileId,'other') != '') {
					cR += '#' + _id + '-listitems-'+i+' .material-bottomsheet-icon-right { background-image: url('+prx.componentsHelper.getProp(elm.rightIcon,'asset')+'); }';
				}	
				if(prx.componentsHelper.getProp(elm.thumbnail.fileId,'other') != '') {
					cR += '#' + _id + '-listitems-'+i+' .material-bottomsheet-thumb { background-image: url('+prx.componentsHelper.getProp(elm.thumbnail,'asset')+'); }';
				}
				if(prx.componentsHelper.getProp(elm.itemtype,'other') == 'infoTitle' || prx.componentsHelper.getProp(elm.itemtype,'other') == 'actionTitle' ) {
					cR += '#' + _id + '-listitems-'+i+' { -webkit-flex-basis: 9px; -ms-flex-basis: 9px; flex-basis: 9px; }';
				}
				if( prx.componentsHelper.getProp(elm.itemtype,'other') == 'actionTitle' ) {
					cR += '#' + _id + '-listitems-'+i+' .material-bottomsheet-text-wrapper { padding: 0; }';
				}
				cR += '</style>';
				
				var iconL = '';
				var iconR = '';
				var thumb = '';
				if(( (prx.componentsHelper.getProp(elm.leftIcon.fileId,'other') != '') && 
						(prx.componentsHelper.getProp(elm.itemtype,'other') == 'actionItem' || 
						 prx.componentsHelper.getProp(elm.itemtype,'other') == 'infoItem')) || 
						(hasLeftIcon && (!prx.componentsHelper.getProp(elm.itemtype,'other') == 'actionTitle'))) {
					iconL += '<div class="material-bottomsheet-icon-wrapper"><div class="material-bottomsheet-icon material-bottomsheet-icon-left"></div></div>';
				}
				else if(( (prx.componentsHelper.getProp(elm.thumbnail.fileId,'other') != '') && (prx.componentsHelper.getProp(elm.itemtype,'other') == 'infoTitle')) || 
							(hasThumbs && (!prx.componentsHelper.getProp(elm.itemtype,'other') == 'actionTitle'))) {
					thumb += '<div class="material-bottomsheet-icon-wrapper"><div class="material-bottomsheet-thumb"></div></div>';
				}
				if(( (prx.componentsHelper.getProp(elm.rightIcon.fileId,'other') != '') && (prx.componentsHelper.getProp(elm.itemtype,'other') == 'infoItem')) || 
						(hasRightIcon && (!prx.componentsHelper.getProp(elm.itemtype,'other') == 'actionTitle'))) {
					iconR += '<div class="material-bottomsheet-icon-wrapper right"><div class="material-bottomsheet-icon material-bottomsheet-icon-right"></div></div>';
				}
				
				cR += '<div id="'+_id+'-listitems-'+i+'" class="dynamic-property material-bottomsheet-listitem material-bottomsheet-listitem-type-'+prx.componentsHelper.getProp(elm.itemtype,'other')+'" data-dynamic-property-index="'+i+'">';
									
				cR += '<div class="bordered-container '+((prx.componentsHelper.getProp(item.rippleEffect,'boolean') && 
															!(prx.componentsHelper.getProp(elm.itemtype,'other') == 'separator' || 
																prx.componentsHelper.getProp(elm.itemtype,'other') == 'actionTitle' || 
																prx.componentsHelper.getProp(elm.itemtype,'other') == 'infoTitle')) 
																? 'prx-material-ripple ' : '' )+'">';
	
				if( iconL == '' && thumb == '' && (hasThumbs || hasLeftIcon) && (prx.componentsHelper.getProp(elm.itemtype,'other') == 'actionItem' || prx.componentsHelper.getProp(elm.itemtype,'other') == 'infoItem') ) {
					cR += '<div class="material-bottomsheet-icon-wrapper"><div class="material-bottomsheet-icon material-bottomsheet-icon-left"></div></div>';
				}
				else {
				cR += iconL;
				cR += thumb;
				}
				
				cR += '<div class="material-bottomsheet-text-wrapper">';
				cR += '<div class="material-bottomsheet-text '+((prx.componentsHelper.getProp(elm.itemtype,'other') == 'infoTitle' || prx.componentsHelper.getProp(elm.itemtype,'other') == 'actionTitle') ? 'title' : 'liveUpdate-textColor changeProperty-textColor')+' '+((prx.componentsHelper.getProp(elm.itemtype,'other') == 'infoTitle') ? 'info liveUpdate-infoTitleColor changeProperty-infoTitleColor' : '')+' '+((prx.componentsHelper.getProp(elm.itemtype,'other') == 'actionTitle') ? 'action liveUpdate-actionTitleColor changePropery-actionTitleColor' : '')+'">';
				cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">'+prx.componentsHelper.getProp(elm.text,'text-textarea')+'</span>';
				cR += '</div>';
				if(prx.componentsHelper.getProp(elm.itemtype,'other') == 'infoItem') {
				cR += '<div class="material-bottomsheet-subtitle liveUpdate-subtitleColor changeProperty-subtitleColor changeProperty-subtitleFont changeProperty-subtitleSize">';
				cR += '<span data-editableproperty="subtitle" data-dynamic-property-index="'+i+'">'+prx.componentsHelper.getProp(elm.subtitle,'text-textarea')+'</span>';
				cR += '</div>';
				}
				cR += '</div>';
	
				cR += iconR;
				
				cR += '</div>';
				cR += '</div>';
			}
		});
		cR += '</div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		var listItemH = (dims.height - (item.listitems.length + 1))/item.listitems.length;
		
		$('#' + _id).find('.material-bottomsheet-icon-wrapper').css({
			'width': Math.round(listItemH/2)+'px',
			'height': Math.round(listItemH/2)+'px'
		});
		$('#' + _id).find('.material-bottomsheet-listitem-type-infoTitle .material-bottomsheet-icon-wrapper').css({
			'width': Math.round((parseInt(listItemH)/2)+(10*prx.componentsHelper.getScale(item.lib)))+'px',
			'height': Math.round((parseInt(listItemH)/2)+(10*prx.componentsHelper.getScale(item.lib)))+'px'
		});
		$('#' + _id).find('.material-bottomsheet-text-wrapper').css({
			'height': Math.round(listItemH)+'px'
		});
		if(item.name == "material_bottomsheet_info") {
		$('#' + _id).find('.material-bottomsheet-separator').css({ 
			width: Math.round(dims.width-((parseInt(listItemH)/2)+(22*prx.componentsHelper.getScale(item.lib))+(25*prx.componentsHelper.getScale(item.lib))))+'px' 
		});
		}
		else{
		$('#' + _id).find('.material-bottomsheet-separator').css({ 
			width: dims.width+'px' 
		});
		}
	}
	,propertyGroups: [
		{
			caption: 'List',
			properties: [
				[
					prx.commonproperties.materialBackgroundColor
				],
				[
					{ 
						caption: 'Separator', 
						name: 'dividerColor', 
						proptype: 'divider-color',
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.dividerColor; 
						}, 
						liveUpdate: 'background-color',
						values: prx.comps.materialColors,
						changeProperty: { 
							caption: 'Separator color', 
							rerender: true 
						} 
					}
				]
			]
		},
		{
			caption: 'Text',
			properties: [
				[
					prx.commonproperties.textFontRichText('font-family','listitems.text')
					,prx.commonproperties.textSizeRichText('font-size','listitems.text')
					,prx.commonproperties.materialTextColorRichText('color','listitems.text')
				],[
					prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'listitems.text')
				]
			]
		},
		{
			caption: 'Titles',
			properties: [[
				{ 
					caption: 'Action title', 
					name: 'actionTitleColor', 
					proptype: 'title-color',
					type: 'combo-colorpicker', 
					value: function(item,name) {
						return item.actionTitleColor; 
					}
					,liveUpdate: 'color' 
					,values: prx.comps.materialColors
					,changeProperty: {  
						caption: 'Action title color',
						property: 'color',
						selector: '.changeProperty-actionTitleColor',
						transitionable: true
					} 		
				},
				{ 
					caption: 'Info title', 
					name: 'infoTitleColor', 
					proptype: 'title-color',
					type: 'combo-colorpicker', 
					value: function(item,name) {
						return item.infoTitleColor; 
					}
					,liveUpdate: 'color' 
					,values: prx.comps.materialColors
					,changeProperty: {  
						caption: 'Info title color',
						property: 'color',
						selector: '.changeProperty-infoTitleColor',
						transitionable: true
					} 		
				}
			]]
		},
		{
			caption: 'Subtitle',
			properties: [				
				[
					prx.commonproperties.textSizeSubtitleRichText('font-size','listitems.subtitle'),
					prx.commonproperties.textColorSubtitleRichText('color','listitems.subtitle'),
					prx.commonproperties.textPropertiesSubtitleRichText(['font-weight','font-style','text-decoration'],'listitems.subtitle')
				]
			]
		},		
		prx.commonproperties.materialRipple
	]
	,dynamicProperties: {
		data: 'listitems'
		,propertyCaption: 'Bottom Sheet items'
  		,propertyName: 'Bottom Sheet item'
		,addCaption: 'Add Bottom Sheet item'
		,deleteCaption: 'Delete'
		,blankItem: {
			text: 'Label'
			,itemtype: 'actionItem'
			,subtitle: ''
			,thumbnail: {"fileId":"","name":"","assetType":""}
			,leftIcon: {"fileId":"873054abbe95613746ad1d629c08dd84.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"}
			,rightIcon: {"fileId":"","name":"","assetType":"icon","url":""}
			,actions: []
		}
		,captionProperty: 'text' 
		,editableProperties: [
			{
				caption: 'Label'
				,name: 'text'
				,type: 'input'
				,value: function(item,name,index) {
					return item.listitems[index].text;
				}
				,hiddenByDefault: function(item,name,index){
					return (item.listitems[index].itemtype == 'separator');
				}
				,changeProperty: {  
					caption: 'Label',
					property: 'text',
					selector: '.material-bottomsheet-text',
					transitionable: false
				}  

			},
			{
				caption: 'Subtitle'
				,name: 'subtitle'
				,type: 'textarea'
				,value: function(item,name,index) {
					if(typeof(item.listitems[index].subtitle) == 'undefined') { return ''; }
					return item.listitems[index].subtitle;
				}
				,hiddenByDefault: function(item,name,index){
					return (item.listitems[index].itemtype != 'infoItem');
				}
				,changeProperty: {  
					caption: 'Subtitle Text',
					property: 'text',
					selector: '.material-bottomsheet-subtitle',
					transitionable: false
				}  
			}
		]
		,interactions: [ prx.commonproperties.actions_listitems ]
		,propertyGroups: [
			{
				caption:  'Style',
				properties: [[
					{
						caption: false //'List item Type'
						,name: 'itemtype'
						,type: 'select'
						,value: function(item,name,index) {
							if(typeof(item.listitems[index].itemtype) == "undefined") {
								item.listitems[index].itemtype = 'actionItem'
							}
							return item.listitems[index].itemtype;
						}
						,values: [
								  { value: 'actionTitle', displayValue: 'Action Title'}
								  ,{ value: 'actionItem', displayValue: 'Action Item'}
								  ,{ value: 'infoTitle', displayValue: 'Info Title' }
								  ,{ value: 'infoItem', displayValue: 'Info Item'}
								  ,{ value: 'separator', displayValue: 'Separator'}
						],
						onChange: function(item, index) {
							switch(item.itemtype) {
							case 'actionTitle':
								$('#property-subtitle, #property-thumbnail, #property-lefticon, #property-righticon').hide();
								break;
							case 'infoTitle':
								item.thumbnail = {"fileId":"5567098f429d13ad869c774482681d25.svg","name":"account_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091456673/56f6ac46a0eb9f024735e3007529b884.svg","targetSrc":"generated/56f6ac46a0eb9f024735e3007529b884_7d7d7d.svg","color":"757575"};
								$('#property-subtitle, #property-thumbnail, #property-lefticon, #property-righticon').hide();
								return item;
								break;
							case 'actionItem':
								item.leftIcon = {"fileId":"873054abbe95613746ad1d629c08dd84.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"};
								$('#property-subtitle, #property-thumbnail, #property-righticon').hide();
								return item;
								break;
							case 'infoItem':
								item.leftIcon = {"fileId":"9a81f4137913304aad2b01c7122b0607.svg","name":"phone.svg","assetType":"icon","bucketsource":"static","url":"f1424091903407/3bfcda2308acf98adb9d2ffd25991048.svg","targetSrc":"generated/3bfcda2308acf98adb9d2ffd25991048_2196f3.svg","color":"2196F3"}
								item.rightIcon = {"fileId":"aed7a2cd999129a405fb18392da8aa79.svg","name":"google__x2B_.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/124ae0d28445f3f091c420e879dd6793.svg"};
								$('#property-thumbnail').hide();
								return item;
								break;	
							case 'separator':
								$('#property-text, #property-subtitle, #property-thumbnail, #property-lefticon, #property-righticon, #property-actions').hide();
								break;								
							default: break;
							}
							return false;
						}
						,changeProperty: {  
							caption: 'Listitem type',
							rerender: true
						} 
					}
				]]
			},					
			{
				caption: 'Thumbnail',
				properties: [[
		  			{ 
		  				caption: false, 
		  				name: 'thumbnail', 
		  				proptype: 'thumbnail-source-list', 
		  				type: 'combo-asset', 
		  				displayValue: function(item,name,index) { 
		  				if(typeof(item.listitems[index].thumbnail) == 'undefined' || item.listitems[index].thumbnail.fileId == '') { return 'No thumbnail selected'; }
		  				return item.listitems[index].thumbnail.name; }, 
		  				value: function(item,name,index) { 
		  					return JSON.stringify({ allow: 'image', asset: item.listitems[index].thumbnail });
		  				}, 
						hiddenByDefault: function(item,name,index){
							return (item.listitems[index].itemtype != 'infoTitle');
						},
		  				changeProperty: { 
		  					caption: 'Thumbnail', 
		  					rerender: true 
		  				} 
		  			}
				]]
			},
			{ 
				caption: 'Left Icon',
				properties: [
				    [
			  			{ 
			  				caption: false, 
			  				name: 'leftIcon', 
			  				proptype: 'icon-source-2-secondary', 
			  				type: 'combo-asset', 
			  				displayValue: function(item,name,index) { 
			  					if(item.listitems[index].leftIcon.fileId == '') { return 'No asset selected.'; }
			  					return item.listitems[index].leftIcon.name; 
			  				},
			  				value: function(item,name,index) { 
			  					return JSON.stringify({ allow: 'image', asset: item.listitems[index].leftIcon });
			  				},
	
							hiddenByDefault: function(item,name,index){
								return (item.listitems[index].itemtype != 'actionItem' && item.listitems[index].itemtype != 'infoItem');
							},
			  				changeProperty: { 
			  					caption: 'Secondary Icon', 
			  					rerender: true 
			  				} 
			  			}
		  			]
				]
			},
			{ 
				caption: 'Right Icon',
				properties: [
				    [
			  			{ 
			  				caption: false, 
			  				name: 'rightIcon', 
			  				proptype: 'icon-source', 
			  				type: 'combo-asset', 
			  				displayValue: function(item,name,index) { 
			  					if(item.listitems[index].rightIcon.fileId == '') { return 'No asset selected.'; }
			  					return item.listitems[index].rightIcon.name; 
			  				},
			  				value: function(item,name,index) { 
			  					return JSON.stringify({ allow: 'image', asset: item.listitems[index].rightIcon });
			  				},
							hiddenByDefault: function(item,name,index){
								return (item.listitems[index].itemtype != 'infoItem');
							},
			  				changeProperty: { 
			  					caption: 'Icon', 
			  					rerender: true 
			  				} 
			  			}
		  			]
				]
			}
		]
	}
}

//TYPE = ACTION BOTTOM SHEET
prx.types.material_bottomsheet_action = prx.componentsHelper.cloneobject(prx.types.material_bottomsheet_complex);
prx.types.material_bottomsheet_action.name = 'material_bottomsheet_action';
prx.componentsHelper.removeProperties(prx.types.material_bottomsheet_action.propertyGroups, ['thumbnailSize', 'infoTitleColor', 'subSize', 'subColor', 'subProperties'])
prx.componentsHelper.removeProperties(prx.types.material_bottomsheet_action.dynamicProperties.propertyGroups, ['thumbnail','rightIcon']);
prx.types.material_bottomsheet_action.dynamicProperties.blankItem.itemtype = 'actionItem';
prx.types.material_bottomsheet_action.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_bottomsheet_action.dynamicProperties.propertyGroups, 'itemtype', 'values', [{ value: 'actionTitle', displayValue: 'Action Title'},{ value: 'actionItem', displayValue: 'Action Item'},{ value: 'separator', displayValue: 'Separator'}]);


//TYPE = INFO BOTTOM SHEET
prx.types.material_bottomsheet_info = prx.componentsHelper.cloneobject(prx.types.material_bottomsheet_complex);
prx.types.material_bottomsheet_info.name = 'material_bottomsheet_info';
prx.componentsHelper.removeProperties(prx.types.material_bottomsheet_info.propertyGroups, ['actionTitleColor'])
prx.types.material_bottomsheet_info.dynamicProperties.blankItem = prx.componentsHelper.removeObjMembers(prx.types.material_bottomsheet_info.dynamicProperties.blankItem, ['imgSrc','checked']);
prx.types.material_bottomsheet_info.dynamicProperties.blankItem.itemtype = 'infoItem';
prx.types.material_bottomsheet_info.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_bottomsheet_info.dynamicProperties.propertyGroups, 'itemtype', 'values', [{ value: 'infoTitle', displayValue: 'Info Title' },{ value: 'infoItem', displayValue: 'Info Item'},{ value: 'separator', displayValue: 'Separator'}]);


//TYPE: LIST COMPLEX
prx.types.material_list_complex = {
	name: "material_list_complex"
	,onDisplay: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid + '-' + item.id;
        var dims = prx.componentsHelper.getRealDims(item, symbol);

        var listH = Math.round((dims.height - 1 - item.listitems.length) / item.listitems.length);
        var listItemH = (dims.height - (item.listitems.length + 1)) / item.listitems.length;

        if (typeof(item.radioBackgroundColor) == 'undefined') {
            item.radioBackgroundColor = 'none'
        }
        ;
        if (typeof(item.checkInactiveBackground) == 'undefined') {
            item.checkInactiveBackground = 'none'
        }
        ;
        if (typeof(item.checkCheckmarkColor) == 'undefined') {
            item.checkCheckmarkColor = 'ffffff'
        }
        ;
        if (typeof(item.checkActiveColor) == 'undefined') {
            item.checkActiveColor = '2196F3'
        }
        ;
        if (typeof(item.radioActiveColor) == 'undefined') {
            item.radioActiveColor = '2196F3'
        }
        ;
        if (typeof(item.checkInactiveColor) == 'undefined') {
            item.checkInactiveColor = '757575'
        }
        ;
        if (typeof(item.radioInactiveColor) == 'undefined') {
            item.radioInactiveColor = '757575'
        }

        var hasIcon = prx.componentsHelper.hasIcons(item);
        var hasIconLeft = false;
        var hasIconRight = false;
        var hasThumb = prx.componentsHelper.hasThumbnails(item);
        var hasThumbLeft = false;
        var hasThumbRight = false;

        if(hasThumb && item.thumbpos == 'left'){
            hasThumbLeft = true;
		}
        if(hasThumb && item.thumbpos == 'right'){
            hasThumbRight = true;
        }
        if(hasIcon && item.iconpos == 'left'){
            hasIconLeft = true;
        }
        if(hasIcon && item.iconpos == 'right'){
            hasIconRight = true;
        }

			
		var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';
		var _subprops = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.subtitleProperties,'props-text') : '';

		var cR = '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-list">';
		
		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);

		cR += '#' + _id + ' .material-list-inner { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; border: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; }';
		cR += '#' + _id + ' .material-list-icon-wrapper { width: '+Math.round((parseInt(listItemH)/2)-(7*prx.componentsHelper.getScale(item.lib)))+'px; height: '+Math.round((parseInt(listItemH)/2)-(7*prx.componentsHelper.getScale(item.lib)))+'px; }';
		cR += '#' + _id + ' .material-list-icon-wrapper.thumb { width: '+Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib)))+'px; height: '+Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib)))+'px; }';
		if( (prx.componentsHelper.getProp(item.iconpos,'icon-position') == 'left' && prx.componentsHelper.getProp(item.thumbpos,'icon-position') == 'right') || 
			(prx.componentsHelper.getProp(item.iconpos,'icon-position') == 'right' && prx.componentsHelper.getProp(item.thumbpos,'icon-position') == 'left')) {
			cR += '#' + _id + ' .material-list-icon-wrapper { padding: 0;}';
		}
		if( prx.componentsHelper.getProp(item.thumbFrame,'boolean')) {
		cR += '#' + _id + ' .material-list-thumb { border: '+(1*prx.componentsHelper.getScale(item.lib))+'px solid '+prx.componentsHelper.getProp(item.thumbFrameColor,'color-border')+'; }';
		}
		cR += '#' + _id + ' .listitem-border { border-top: '+item.borderWidth+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; }'
		if( hasThumbRight) {
			cR += '#' + _id + ' .listitem-border { right: '+((16*prx.componentsHelper.getScale(item.lib))+(10*prx.componentsHelper.getScale(item.lib))+Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib))))+'px; }';
		}
		if( hasThumbLeft) {
			cR += '#' + _id + ' .listitem-border { left: '+((16*prx.componentsHelper.getScale(item.lib))+(10*prx.componentsHelper.getScale(item.lib))+Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib))))+'px; }';
		}
		cR += '#' + _id + ' .material-list-text-wrapper { '+prx.css.flexAlignContent(prx.componentsHelper.getProp(item.textAlign,'align'))+' height: '+Math.round(listItemH)+'px; }';
		if(!(hasIconLeft || hasThumbLeft)) {
			cR += '#' + _id + ' .material-list-text-wrapper { padding-left: 0; }';
		}
		if(!(hasIconRight || hasThumbRight)) {
			cR += '#' + _id + ' .material-list-text-wrapper { padding-right: 0; }';
		}
		cR += '#' + _id + ' .material-list-text { '+prx.componentsHelper.getProp(item.textFont,'font-family')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; '+_props+' }';
		cR += '#' + _id + ' .material-list-subtitle { '+prx.componentsHelper.getProp(item.subtitleFont,'font-family')+'; font-size: '+prx.componentsHelper.getProp(item.subtitleSize,'num-text-size')+'px; color: '+prx.componentsHelper.getProp(item.subtitleColor,'color-text')+'; '+_subprops+' }';
		cR += '#' + _id + ' .material-list-listitem-type-infoTitle .material-list-text { color: '+prx.componentsHelper.getProp(item.infoTitleColor,'color-text')+'; }';
		cR += '#' + _id + ' .material-list-listitem-type-actionTitle .material-list-text { color: '+prx.componentsHelper.getProp(item.actionTitleColor,'color-text')+'; }';
		cR += '#' + _id + ' .material-list-separator { background-color: '+prx.componentsHelper.getProp(item.dividerColor,'color-background')+'; }';
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);
		
		cR += '<div class="material-list-inner liveUpdate-backgroundColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-borderColor">';
				
		$.each(item.listitems, function(i,elm){	
			
			if(typeof(elm.thumbnail) == "undefined") { elm.thumbnail = {"fileId":"","name":"","assetType":""} };
			if(typeof(elm.leftIcon) == "undefined") { elm.leftIcon = {"fileId":"","name":"","assetType":"icon","url":""} };
			if(typeof(elm.rightIcon) == "undefined") { elm.rightIcon = {"fileId":"","name":"","assetType":"icon","url":""} };
			if(typeof(item.subtitleSize) == "undefined") {item.subtitleSize = 12;}
			if(typeof(item.subtitleColor) == "undefined") {item.subtitleColor = '999999';} 
			if(typeof(item.subProperties) == "undefined") {item.subProperties = [];}
			if(typeof(item.subtitleColorActive) == "undefined") {item.subtitleColorActive = 'FFFFFF';}
						
			cR += '<style>';
			cR += '#' + _id + '-listitems-0 .listitem-border { border-top: 0 none;}';
			if(hasIcon && prx.componentsHelper.getProp(elm.imgSrc.fileId,'other') != '') {
				cR += '#' + _id + '-listitems-'+i+' .bordered-container .material-list-icon { background-image: url('+prx.componentsHelper.getProp(elm.imgSrc,'asset')+'); }';
			}	
			if(hasThumb && prx.componentsHelper.getProp(elm.thumbnail.fileId,'other') != '') {
				cR += '#' + _id + '-listitems-'+i+' .bordered-container .material-list-thumb { background-image: url('+prx.componentsHelper.getProp(elm.thumbnail,'asset')+'); }';
			}
			
			cR += '#' + _id + ' .material-list-switch { width: '+Math.round(listItemH/2.8)+'px; height: '+Math.round(listItemH/2.8)+'px; }'
			cR += '#' + _id + ' .material-list-switch.checkbox { background-color: '+prx.componentsHelper.getProp(item.checkInactiveBackground,'color-background')+'; border-color: '+prx.componentsHelper.getProp(item.checkInactiveColor,'color-border')+'; }';
			cR += '#' + _id + ' .material-list-switch.radio { width: '+Math.round(listItemH/2.5)+'px; height: '+Math.round(listItemH/2.5)+'px; background-color: '+prx.componentsHelper.getProp(item.radioBackgroundColor,'color-background')+'; border-color: '+prx.componentsHelper.getProp(item.radioInactiveColor,'color-border')+'; }';
			cR += '#' + _id + ' .material-list-switch.checkbox .check { background-color: '+prx.componentsHelper.getProp(item.checkCheckmarkColor,'color-background')+'; }';
			cR += '#' + _id + ' input:checked + label .material-list-switch.checkbox { background-color: '+prx.componentsHelper.getProp(item.checkActiveColor,'color-background')+'; border-color: '+prx.componentsHelper.getProp(item.checkActiveColor,'color-border')+'; }';
			cR += '#' + _id + ' input:checked + label .material-list-switch.radio .circle { background-color: '+prx.componentsHelper.getProp(item.radioActiveColor,'color-background')+';}';
			cR += '#' + _id + ' input:checked + label .material-list-switch.radio { border-color: '+prx.componentsHelper.getProp(item.radioActiveColor,'color-border')+'; }';
			cR += '#' + _id + ' .material-list-switch.radio .circle { background-color: none; }';
			cR += '</style>';					
			
			var icon = '';
			var thumb = '';
						
			if(hasIcon)
				icon += '<div class="material-list-icon-wrapper '+prx.componentsHelper.getProp(item.iconpos,'icon-position')+'"><div class="material-list-icon"></div></div>';				
			if(hasThumb)
				thumb += '<div class="material-list-icon-wrapper thumb '+prx.componentsHelper.getProp(item.thumbpos,'icon-position')+'"><div class="material-list-thumb liveUpdate-thumbFrameColor changeProperty-thumbFrameColor"></div></div>';
			
			cR += '<div id="'+_id+'-listitems-'+i+'" class="'+((prx.componentsHelper.getProp(item.rippleEffect,'boolean')) ? 'prx-material-ripple ' : '' )+'dynamic-property material-list-listitem material-list-listitem-type-'+prx.componentsHelper.getProp(elm.itemtype,'other')+'" data-dynamic-property-index="'+i+'">';
					
			if(prx.componentsHelper.getProp(elm.itemtype,'other') == 'withCheckbox' || prx.componentsHelper.getProp(elm.itemtype,'other') == 'withRadio') {
				cR += '<input type="'+((elm.itemtype == 'withCheckbox') ? 'checkbox': 'radio') +'" name="'+_id+'-checkbox" id="'+_id+'-checkbox-'+i+'" data-role="none" '+ ((typeof(elm.checked) != "undefined" && prx.componentsHelper.getProp(elm.checked,'boolean')) ? 'checked' : '') +' />';
			}
			cR +=' <label  for="'+_id+'-checkbox-'+i+'">'
			
			cR += '<div class="listitem-border liveUpdate-borderColor changeProperty-borderColor"></div>';
								
			cR += '<div class="bordered-container">';	
				
			if(prx.componentsHelper.getProp(item.thumbpos,'icon-position') == "left" && prx.componentsHelper.getProp(elm.thumbnail.fileId,'other') != '') {cR += thumb; }
			if(hasThumbLeft && (prx.componentsHelper.getProp(elm.thumbnail.fileId,'other') == '' || (prx.componentsHelper.getProp(item.thumbpos,'icon-position') == "right" && prx.componentsHelper.getProp(elm.thumbnail.fileId,'other') != ''))) cR += '<div class="material-list-icon-wrapper left thumb"></div>';
			
			if(prx.componentsHelper.getProp(item.iconpos,'icon-position') == "left" && prx.componentsHelper.getProp(elm.imgSrc.fileId,'other') != '') { cR += icon; }
			if(hasIconLeft && (prx.componentsHelper.getProp(elm.imgSrc.fileId,'other') == '' || (prx.componentsHelper.getProp(item.iconpos,'icon-position') == "right" && prx.componentsHelper.getProp(elm.imgSrc.fileId,'other') != ''))) cR += '<div class="material-list-icon-wrapper left"></div>';
			
			cR += '<div class="material-list-text-wrapper '+(hasThumb ? 'thumb' : '')+'">';
			cR += '<div class="material-list-text liveUpdate-textColor changeProperty-textColor changeProperty-textFont changeProperty-textSize changeProperty-textAlign">';
			cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">'+prx.componentsHelper.getProp(elm.text,'text-textarea')+'</span>';
			cR += '</div>';
			cR += '<div class="material-list-subtitle liveUpdate-textColorSubtitle changeProperty-textColorSubtitle changeProperty-textFontSubtitle changeProperty-textSizeSubtitle">';
			cR += '<span data-editableproperty="subtitle" data-dynamic-property-index="'+i+'">'+prx.componentsHelper.getProp(elm.subtitle,'text-textarea')+'</span>';
			cR += '</div>';
			cR += '</div>';		
			
			if(prx.componentsHelper.getProp(elm.itemtype,'other') == 'withCheckbox' || prx.componentsHelper.getProp(elm.itemtype,'other') == 'withRadio') { 				
				cR += '<div class="material-list-switch '+((prx.componentsHelper.getProp(elm.itemtype,'other') == 'withCheckbox') ? 'checkbox '+((prx.componentsHelper.getProp(elm.checked,'boolean') == true) ? 'liveUpdate-checkActiveColor-background-color liveUpdate-checkActiveColor-border-color changeProperty-checkActiveColor-background-color changeProperty-checkActiveColor-border-color' : 'liveUpdate-checkInactiveColor liveUpdate-checkInactiveBackground changeProperty-checkInactiveColor changeProperty-checkInactiveBackground')+'' : 'radio liveUpdate-radioBackgroundColor changeProperty-radioBackgroundColor '+((elm.checked == true) ? 'liveUpdate-radioActiveColor-border-color changeProperty-radioActiveColor-border-color' : 'liveUpdate-radioInactiveColor changeProperty-radioInactiveColor')+'')+'">';
				cR += '<div class="';
				if(prx.componentsHelper.getProp(elm.itemtype,'other') == 'withCheckbox') { cR += 'check-container" data-clickable="true"><div class="check short '+((prx.componentsHelper.getProp(elm.checked,'boolean') == true) ? 'liveUpdate-checkCheckmarkColor changeProperty-checkCheckmarkColor' : '')+'"></div><div class="check long '+((prx.componentsHelper.getProp(elm.checked,'boolean') == true) ? 'liveUpdate-checkCheckmarkColor changeProperty-checkCheckmarkColor' : '')+'"></div>';}
				if(prx.componentsHelper.getProp(elm.itemtype,'other') == 'withRadio') { cR += 'circle liveUpdate-radioActiveColor-background-color changeProperty-radioActiveColor-background-color">';}
				cR += '</div>';
				cR += '</div>';
			}

			if( prx.componentsHelper.getProp(elm.itemtype,'other') != 'withCheckbox' && 
					prx.componentsHelper.getProp(elm.itemtype,'other') != 'withRadio' && 
					prx.componentsHelper.getProp(item.iconpos,'other') == "right" && 
					prx.componentsHelper.getProp(elm.imgSrc.fileId,'other') != '') { 
				cR += icon; }
			
			if( prx.componentsHelper.getProp(elm.itemtype,'other') != 'withCheckbox' && 
				prx.componentsHelper.getProp(elm.itemtype,'other') != 'withRadio' && 
				hasIconRight && 
				( prx.componentsHelper.getProp(elm.imgSrc.fileId,'other') == '' || (prx.componentsHelper.getProp(item.iconpos,'icon-position') == "left" && prx.componentsHelper.getProp(elm.imgSrc.fileId,'other') != ''))) { 
				cR += '<div class="material-list-icon-wrapper right"></div>';}
	
			if( prx.componentsHelper.getProp(item.thumbpos,'icon-position') == "right" && 
					prx.componentsHelper.getProp(elm.thumbnail.fileId,'other') != '') {
				cR += thumb; }
			
			if( hasThumbRight && 
					(prx.componentsHelper.getProp(elm.thumbnail.fileId,'other') == '' || (prx.componentsHelper.getProp(item.thumbpos,'icon-position') == "left" && prx.componentsHelper.getProp(elm.thumbnail.fileId,'other') != ''))) { 
				cR += '<div class="material-list-icon-wrapper right thumb"></div>';}

			cR += '</div>';
			cR += '</label>';
			cR += '</div>';
		});
		cR += '</div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
		
		$('#property-checked, #property-activeColor, #property-checkColor, #property-inactiveColor, #property-borderColorCheck')
	}
	,onResize: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		var dims = prx.componentsHelper.getRealDims(item, symbol);
		var listItemH = (dims.height - (item.listitems.length + 1))/item.listitems.length;
		
		$('#' + _id).find('.material-list-icon-wrapper').css({
			'width': Math.round((listItemH/2)-(7*prx.componentsHelper.getScale(item.lib)))+'px',
			'height': Math.round((listItemH/2)-(7*prx.componentsHelper.getScale(item.lib)))+'px'
		});
		$('#' + _id).find('.material-list-icon-wrapper.thumb').css({
			'width': Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib)))+'px',
			'height': Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib)))+'px'
		});
		$('#' + _id).find('.material-list-text-wrapper').css({
			'height': Math.round(listItemH)+'px'
		});
		if(item.thumbpos == 'right' && prx.componentsHelper.hasThumbnails(item)) {
			$('#' + _id).find('.listitem-border').css({ 
				'right': ((16*prx.componentsHelper.getScale(item.lib))+(10*prx.componentsHelper.getScale(item.lib))+Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib))))+'px' 
			});
		}
		if(item.thumbpos == 'left' && prx.componentsHelper.hasThumbnails(item)) {
			$('#' + _id).find('.listitem-border').css({ 
				'left': ((16*prx.componentsHelper.getScale(item.lib))+(10*prx.componentsHelper.getScale(item.lib))+Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib))))+'px'
			});
		}
		
		$('#' + _id).find('.material-list-switch').css({
			'width': Math.round(listItemH/2.8)+'px',
			'height': Math.round(listItemH/2.8)+'px'
		});
		$('#' + _id).find('.material-list-switch.radio').css({
			'width': Math.round(listItemH/2.5)+'px',
			'height': Math.round(listItemH/2.5)+'px'
		});
		$('#' + _id).find('.material-list-switch .check').css({
			'font-size': Math.round(listItemH/2.8)+'px',
			'line-height': Math.round(listItemH/2.8)+'px'
		});

	}
	,propertyGroups: [
		{
			caption: 'List',
			properties: [
				[
					prx.commonproperties.materialBackgroundColor,
					{
						caption: 'Border',
						name: 'borderWidth',
						proptype: 'border-width',
						type: 'combo-select',
						value: function(item,name)
						{
							if(typeof(item.borderWidth) == "undefined") {
								return 1;
							}
							return item.borderWidth;
						},
						values: { min: 0, max: 20, step: 2 }
						,changeProperty: {
							caption: 'Border width',
							rerender: true
						}

					},
					{ 
						caption: false, 
						name: 'borderColor', 
						proptype: 'border-color',
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.borderColor; 
						}, 
						values: prx.comps.materialColors,
						liveUpdate: 'border-color', 
						changeProperty: { 
							caption: 'Border color',
							transitionable: true 
						} 
					}
				]
			]
		},
		{
			caption: 'Text',
			properties: [
				[
					prx.commonproperties.textFontRichText('font-family','listitems.text')
					,prx.commonproperties.textSizeRichText('font-size','listitems.text')
					,prx.commonproperties.materialTextColorRichText('color','listitems.text')
				],[
					prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'listitems.text')
					,prx.commonproperties.textAlignRichText('text-align','listitems.text')
				]
			]
		},
		{
			caption: 'Subtitle',
			properties: [
				[
					prx.commonproperties.textFontSubtitleRichText('font-family','listitems.subtitle')
					,prx.commonproperties.textSizeSubtitleRichText('font-size','listitems.subtitle')
					,prx.commonproperties.textColorSubtitleRichText('color','listitems.subtitle')
				],[
					prx.commonproperties.textPropertiesSubtitleRichText(['font-weight','font-style','text-decoration'],'listitems.subtitle')
				]
			]
		},
		{
			caption: 'Avatar',
			properties: [
				[
					{
						caption: 'Avatar Border?'
						,name: 'thumbFrame'
						,type: 'onoff'
						,value: function(item,name,index){
							return item.thumbFrame;
						}
						,onChange: function(item){
							if(item.thumbFrame) {
								$('#property-thumbFrameColor').show();
							} else {
								$('#property-thumbFrameColor').hide();
							}	
						}
						,changeProperty: {  
							caption: 'Activate/Deactivate thumbnail frames',
							rerender: true
						}  
					
					},
					{ 
						caption: false, 
						name: 'thumbFrameColor', 
						proptype: 'border-color',
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.thumbFrameColor; 
						}, 
						values: prx.comps.materialColors,
						hiddenByDefault: function(item,name,index){
							return !item.thumbFrame;
						},
						liveUpdate: 'border-color', 
						changeProperty: { 
							caption: 'Border color', 
							selector: '.changeProperty-thumbFrameColor',
							 property: 'border-color',
							transistionable: true 
						} 
					}
				],
				[
					{
						caption: 'Position'
						,name: 'thumbpos'
						,proptype: 'thumbnail-position'
						,type: 'select'
						,value: function(item,name,index) {
							return item.thumbpos;
						}
						,values: [{value: 'left',displayValue: 'Left'},{value: 'right',displayValue: 'Right'}]
						,changeProperty: {  
							caption: 'Thumbnail position',
							rerender: true,
							changeable: false
						}  
		
					}
				] 
			]
		},
		{
			caption: 'Icon',
			properties: [
	            [
					{
						caption: 'Position'
						,name: 'iconpos'
						,proptype: 'icon-position'
						,type: 'select'
						,value: function(item,name,index) {
							return item.iconpos;
						}
						,values: [{value: 'left',displayValue: 'Left'},{value: 'right',displayValue: 'Right'}]
						,changeProperty: {  
							caption: 'Thumbnail position',
							rerender: true,
							changeable: false
						}  
					
					}	             	
	            ]
            ]
		},
		{
			caption:  'Radio',
			properties: [
             [	
					{
						caption: 'Background'
						,name: 'radioBackgroundColor'
						,proptype: 'background-color-radio' 
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							if(typeof(item.radioBackgroundColor) == 'undefined') { item.radioBackgroundColor = 'none'};
							
							return item.radioBackgroundColor;
						}
						,values: prx.comps.materialColors
						,hiddenByDefault: function(item,name,index){
							return (item.type != 'material_list_complex' && item.type != 'material_list_radio');
						}
						,liveUpdate: 'background-color'
						,changeProperty: {  
							caption: 'Radio background color',
							selector: '.changeProperty-radioBackgroundColor',
							property: 'background-color',
							transitionable: true
						} 
					},
					{
						caption: 'Active color'
						,name: 'radioActiveColor'
						,proptype: 'radio-active-color' 
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							if(typeof(item.radioActiveColor) == 'undefined') { item.radioActiveColor = '2196F3'};
							
							return item.radioActiveColor;
						}
						,values: prx.comps.materialColors
						,hiddenByDefault: function(item,name,index){
							return (item.type != 'material_list_complex' && item.type != 'material_list_radio');
						}
						,liveUpdate: 'background-color,border-color'
						,changeProperty: {  
							caption: 'Active radio color',
							selector: '.changeProperty-radioActiveColor',
							property: 'background-color,border-color',
							transitionable: true
						} 
					},
					{
						caption: 'Border'
						,name: 'radioInactiveColor'
						,proptype: 'border-color' 
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							if(typeof(item.radioInactiveColor) == 'undefined') { item.radioInactiveColor = '757575'};
						
							return item.radioInactiveColor;
						}
						,values: prx.comps.materialColors
						,hiddenByDefault: function(item,name,index){
							return (item.type != 'material_list_complex' && item.type != 'material_list_radio');
						}
						,liveUpdate: 'border-color'
						,changeProperty: {  
							caption: 'Inactive radio border color',
							selector: '.changeProperty-radioInactiveColor',
							property: 'border-color',
							transitionable: true
						} 
					}
             	]
			]
		},
		{
			caption:  'Inactive Checkbox State',
			properties: [[							
			 	{
					caption: 'Background'
					,name: 'checkInactiveBackground'
					,proptype: 'background-color-checkbox' 
					,type: 'combo-colorpicker'
					,value: function(item,name) {
			 			if(typeof(item.checkInactiveBackground) == 'undefined') { item.checkInactiveBackground = 'none'};
					
						return item.checkInactiveBackground;
					}
					,values: prx.comps.materialColors
					,hiddenByDefault: function(item,name,index){
						return (item.type != 'material_list_complex' && item.type != 'material_list_checkbox');
					}
					,liveUpdate: 'background-color'
					,changeProperty: {  
						caption: 'Inactive checkbox background color',
						selector: '.changeProperty-checkInactiveBackground',
						property: 'background-color',
						transitionable: true
					} 
				},
				{ 
					caption: 'Border', 
					name: 'checkInactiveColor', 
					proptype: 'border-color', 
					type: 'combo-colorpicker', 
					value: function(item,name) { 
						if(typeof(item.checkInactiveColor) == 'undefined') { item.checkInactiveColor = '757575'};
					
						return item.checkInactiveColor; 
					}, 
					values: prx.comps.materialColors, 
					hiddenByDefault: function(item,name,index){
						return (item.type != 'material_list_complex' && item.type != 'material_list_checkbox');
					},
					liveUpdate: 'border-color', 
					changeProperty: { 
						caption: 'Inactive checkbox border color', 
						selector: '.changeProperty-checkInactiveColor', 
						property: 'border-color', 
						transitionable: true 
					} 
				}
			]]
		},
		{
			caption:  'Active Checkbox State',
			properties: [[					
				{
					caption: 'Background'
					,name: 'checkActiveColor'
					,proptype: 'background-color-2-active' 
					,type: 'combo-colorpicker'
					,value: function(item,name) {
						if(typeof(item.checkActiveColor) == 'undefined') { item.checkActiveColor = '2196F3'};
						
						return item.checkActiveColor;
					}
					,values: prx.comps.materialColors
					,hiddenByDefault: function(item,name,index){
						return (item.type != 'material_list_complex' && item.type != 'material_list_checkbox');
					}
					,liveUpdate: 'background-color,border-color'
					,changeProperty: {  
						caption: 'Active checkbox color',
						selector: '.changeProperty-checkActiveColor',
						property: 'background-color,border-color',
						transitionable: true
					} 
				},
				{ 
					caption: 'Checkmark', 
					name: 'checkCheckmarkColor', 
					proptype: 'checkmark-color', 
					type: 'combo-colorpicker', 
					value: function(item,name) { 
						if(typeof(item.checkCheckmarkColor) == 'undefined') { item.checkCheckmarkColor = 'ffffff'};
					
						return item.checkCheckmarkColor; 
					}, 
					values: prx.comps.materialColors, 
					hiddenByDefault: function(item,name,index){
							return (item.type != 'material_list_complex' && item.type != 'material_list_checkbox');
					},
					liveUpdate: 'background-color', 
					changeProperty: { 
						caption: 'Checkmark color', 
						selector: '.changeProperty-checkCheckmarkColor', 
						property: 'background-color', 
						transitionable: true 
					} 
				}		 	
			]]
		},
		prx.commonproperties.materialRipple
	]
	,dynamicProperties: {
		data: 'listitems'
		,propertyCaption: 'List items'
  		,propertyName: 'List item'
		,addCaption: 'Add list item'
		,deleteCaption: 'Delete'
		,blankItem: {
			text: 'Label'
			,itemtype: 'basic'
			,subtitle: 'Subtitle'
			,thumbnail: {"fileId":"","name":"","assetType":""}
			,imgSrc: {"fileId":"","name":"","assetType":"icon","url":""}
			,actions: []
		}
		,captionProperty: 'text' 
		,editableProperties: [
			{
				caption: 'Label'
				,name: 'text'
				,type: 'input'
				,value: function(item,name,index) {
					return item.listitems[index].text;
				}
				,hiddenByDefault: function(item,name,index){
					return (item.listitems[index].itemtype == 'separator');
				}
				,changeProperty: {  
					caption: 'Label',
					property: 'text',
					selector: '.material-list-text',
					transitionable: false
				}  

			},
			{
				caption: 'Subtitle'
				,name: 'subtitle'
				,type: 'textarea'
				,value: function(item,name,index) {
					if(typeof(item.listitems[index].subtitle) == 'undefined') { return ''; }
					return item.listitems[index].subtitle;
				}
				,hiddenByDefault: function(item,name,index){
					return (item.listitems[index].itemtype == 'separator');
				}
				,changeProperty: {  
					caption: 'Subtitle Text',
					property: 'text',
					selector: '.material-list-subtitle',
					transitionable: false
				}  
			}
		]
		,interactions: [ prx.commonproperties.actions_listitems ]
		,propertyGroups: [
			{
				caption:  'Style',
				properties: [[
					{
						caption: false //'List item Type'
						,name: 'itemtype'
						,type: 'select'
						,value: function(item,name,index) {
							if(typeof(item.listitems[index].itemtype) == "undefined") {
								item.listitems[index].itemtype = 'basic'
							}
							return item.listitems[index].itemtype;
						}
						,values: [
								  { value: 'basic', displayValue: 'Basic'}
								  ,{ value: 'withAvatar', displayValue: 'With Avatar' }
								  ,{ value: 'withIcon', displayValue: 'With Icon' }
								  ,{ value: 'withAvatarIcon', displayValue: 'With Avatar and Icon'}
								  ,{ value: 'withCheckbox', displayValue: 'Checkbox (On/off)'}
								  ,{ value: 'withRadio', displayValue: 'Radio (On/off)'}
						],
						onChange: function(item, index) {
							switch(item.itemtype) {
							case 'basic':
								item.thumbnail = {"fileId":"","name":"","assetType":""};
								item.imgSrc = {"fileId":"","name":"","assetType":"icon","url":""};
								$('#property-checked, #property-checkActiveColor, #property-checkInactiveColor, #property-checkInactiveBackground, #property-checkCheckmarkColor, #property-radioActiveColor, #property-radioInactiveColor, #propery-radioBackgroundColor').hide();
								return item;
								break;
							case 'withAvatar':
								item.thumbnail = {"fileId":"a338528b56a2f91841e8b97b1dd11fd9.png","assetType":"gallery","bucketsource":"static","name":" avatar_female.png","url":"f1353077251107/8ef69ccff0f6e97618dde27ce903cb15.png"};
								item.imgSrc = {"fileId":"","name":"","assetType":"icon","url":""};
								$('#property-checked, #property-checkActiveColor, #property-checkInactiveColor, #property-checkInactiveBackground, #property-checkCheckmarkColor, #property-radioActiveColor, #property-radioInactiveColor, #propery-radioBackgroundColor').hide();
								return item;
								break;
							case 'withIcon':
								item.thumbnail = {"fileId":"","assetType":"","name":""};
								item.imgSrc = {"fileId":"873054abbe95613746ad1d629c08dd84.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"};
								$('#property-checked, #property-checkActiveColor, #property-checkInactiveColor, #property-checkInactiveBackground, #property-checkCheckmarkColor, #property-radioActiveColor, #property-radioInactiveColor, #propery-radioBackgroundColor').hide();
								return item;
								break;
							case 'withAvatarIcon':
								item.thumbnail = {"fileId":"a338528b56a2f91841e8b97b1dd11fd9.png","assetType":"gallery","bucketsource":"static","name":" avatar_female.png", "url": "f1353077251107/8ef69ccff0f6e97618dde27ce903cb15.png"};
								item.imgSrc = {"fileId":"873054abbe95613746ad1d629c08dd84.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"};
								$('#property-checked, #property-checkActiveColor, #property-checkInactiveColor, #property-checkInactiveBackground, #property-checkCheckmarkColor, #property-radioActiveColor, #property-radioInactiveColor, #propery-radioBackgroundColor').hide();
								return item;
								break;
							case 'withCheckbox':
							case 'withRadio':
								item.thumbnail = {"fileId":"","name":"","assetType":""};
								item.imgSrc = {"fileId":"","name":"","assetType":"icon","url":""};
								$('#property-checked, #property-checkActiveColor, #property-checkInactiveColor, #property-checkInactiveBackground, #property-checkCheckmarkColor, #property-radioActiveColor, #property-radioInactiveColor, #propery-radioBackgroundColor').show();
								return item;
								break;							
							default: break;
							}
							return false;
						}
						,changeProperty: {  
							caption: 'Listitem type',
							rerender: true
						} 
					}
				]]
			},
			{
				caption: 'Thumbnail',
				properties: [[
				    prx.commonproperties.thumbnailSourceList
				]]
			},
			{ 
				caption: 'Icon',
				properties: [
				    [
			  			{ 
			  				caption: false, 
			  				name: 'imgSrc', 
			  				proptype: 'icon-source', 
			  				type: 'combo-asset', 
			  				displayValue: function(item,name,index) { 
			  					if(item.listitems[index].imgSrc.fileId == '') { return 'No asset selected.'; }
			  					return item.listitems[index].imgSrc.name; 
			  				},
			  				value: function(item,name,index) { 
			  					return JSON.stringify({ allow: 'image', asset: item.listitems[index].imgSrc });
			  				},
							hiddenByDefault: function(item,name,index){
								return (item.listitems[index].itemtype == 'withCheckbox' || item.listitems[index].itemtype == 'withRadio');
							},
			  				changeProperty: { 
			  					caption: 'Icon', 
			  					rerender: true 
			  				} 
			  			}
						]
				]
			},
			{
				caption: 'Checkbox state',
				properties: [[
					{
						caption: 'Checked?'
						,name: 'checked'
						,proptype: 'checked'
						,type: 'onoff'
						,value: function(item,name,index){
							return item.listitems[index].checked;
						}
						,hiddenByDefault: function(item,name,index){
							return (item.listitems[index].itemtype != 'withCheckbox' && item.listitems[index].itemtype != 'withRadio');
						}
						,changeProperty: {  
							caption: 'Checkbox active state',
							rerender: true
						}  

					}
				]]
			}
		]
	}
}

//TYPE = BASIC LIST
prx.types.material_list_basic = prx.componentsHelper.cloneobject(prx.types.material_list_complex);
prx.types.material_list_basic.name = 'material_list_basic';
prx.componentsHelper.removeProperties(prx.types.material_list_basic.propertyGroups, ['thumbpos','thumbFrame','thumbFrameColor','iconpos','checkActiveColor','checkInactiveColor','checkInactiveBackground','checkCheckmarkColor','radioActiveColor','radioInactiveColor','radioBackgroundColor']);
prx.componentsHelper.removeProperties(prx.types.material_list_basic.dynamicProperties.propertyGroups, ['itemtype','thumbnail','imgSrc']);
prx.types.material_list_basic.dynamicProperties.blankItem = prx.componentsHelper.removeObjMembers(prx.types.material_list_basic.dynamicProperties.blankItem, ['checked']);
prx.types.material_list_basic.dynamicProperties.blankItem.itemtype = 'basic';
prx.types.material_list_basic.dynamicProperties.blankItem.subtitle = '';
prx.types.material_list_basic.dynamicProperties.blankItem.thumbnail = {"fileId":"","name":"","assetType":""};
prx.types.material_list_basic.dynamicProperties.blankItem.imgSrc = {"fileId":"","name":"","assetType":"icon","url":""};
prx.types.material_list_basic.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_list_basic.dynamicProperties.propertyGroups, 'itemtype', 'value', 'basic');
prx.types.material_list_basic.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_list_basic.dynamicProperties.propertyGroups, 'itemtype', 'hiddenByDefault', true);

//TYPE = LIST WITH AVATAR
prx.types.material_list_avatar = prx.componentsHelper.cloneobject(prx.types.material_list_complex);
prx.types.material_list_avatar.name = 'material_list_avatar';
prx.componentsHelper.removeProperties(prx.types.material_list_avatar.propertyGroups, ['iconpos','checkActiveColor','checkInactiveColor','checkInactiveBackground','checkCheckmarkColor','radioActiveColor','radioInactiveColor','radioBackgroundColor']);
prx.componentsHelper.removeProperties(prx.types.material_list_avatar.dynamicProperties.propertyGroups, ['itemtype','imgSrc']);
prx.types.material_list_avatar.dynamicProperties.blankItem = prx.componentsHelper.removeObjMembers(prx.types.material_list_avatar.dynamicProperties.blankItem, ['checked']);
prx.types.material_list_avatar.dynamicProperties.blankItem.itemtype = 'withAvatar';
prx.types.material_list_avatar.dynamicProperties.blankItem.subtitle = '';
prx.types.material_list_avatar.dynamicProperties.blankItem.thumbnail = {"fileId":"5567098f429d13ad869c774482681d25.svg","name":"account_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091456673/56f6ac46a0eb9f024735e3007529b884.svg","targetSrc":"generated/56f6ac46a0eb9f024735e3007529b884_7d7d7d.svg","color":"757575"};
prx.types.material_list_avatar.dynamicProperties.blankItem.imgSrc = {"fileId":"","name":"","assetType":"icon","url":""};
prx.types.material_list_avatar.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_list_avatar.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withAvatar');
prx.types.material_list_avatar.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_list_avatar.dynamicProperties.propertyGroups, 'itemtype', 'hiddenByDefault', true);

//TYPE = LIST WITH ICON
prx.types.material_list_icon = prx.componentsHelper.cloneobject(prx.types.material_list_complex);
prx.types.material_list_icon.name = 'material_list_icon';
prx.componentsHelper.removeProperties(prx.types.material_list_icon.propertyGroups, ['thumbpos','thumbFrame','thumbFrameColor','checkActiveColor','checkInactiveColor','checkInactiveBackground','checkCheckmarkColor','radioActiveColor','radioInactiveColor','radioBackgroundColor']);
prx.componentsHelper.removeProperties(prx.types.material_list_icon.dynamicProperties.propertyGroups, ['itemtype','thumbnail']);
prx.types.material_list_icon.dynamicProperties.blankItem = prx.componentsHelper.removeObjMembers(prx.types.material_list_icon.dynamicProperties.blankItem, ['checked']);
prx.types.material_list_icon.dynamicProperties.blankItem.itemtype = 'withIcon';
prx.types.material_list_icon.dynamicProperties.blankItem.subtitle = '';
prx.types.material_list_icon.dynamicProperties.blankItem.thumbnail = {"fileId":"","name":"","assetType":""};
prx.types.material_list_icon.dynamicProperties.blankItem.imgSrc = {"fileId":"873054abbe95613746ad1d629c08dd84.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"};
prx.types.material_list_icon.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_list_icon.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withIcon');
prx.types.material_list_icon.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_list_icon.dynamicProperties.propertyGroups, 'itemtype', 'hiddenByDefault', true);

//TYPE = LIST WITH AVATAR AND ICON
prx.types.material_list_avatar_icon = prx.componentsHelper.cloneobject(prx.types.material_list_complex);
prx.types.material_list_avatar_icon.name = 'material_list_avatar_icon';
prx.componentsHelper.removeProperties(prx.types.material_list_avatar_icon.propertyGroups, ['checkActiveColor','checkInactiveColor','checkInactiveBackground','checkCheckmarkColor','radioActiveColor','radioInactiveColor','radioBackgroundColor']);
prx.componentsHelper.removeProperties(prx.types.material_list_avatar_icon.dynamicProperties.propertyGroups, ['itemtype']);
prx.types.material_list_avatar_icon.dynamicProperties.blankItem = prx.componentsHelper.removeObjMembers(prx.types.material_list_avatar_icon.dynamicProperties.blankItem, ['checked']);
prx.types.material_list_avatar_icon.dynamicProperties.blankItem.itemtype = 'withAvatarIcon';
prx.types.material_list_avatar_icon.dynamicProperties.blankItem.subtitle = '';
prx.types.material_list_avatar_icon.dynamicProperties.blankItem.thumbnail = {"fileId":"5567098f429d13ad869c774482681d25.svg","name":"account_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091456673/56f6ac46a0eb9f024735e3007529b884.svg","targetSrc":"generated/56f6ac46a0eb9f024735e3007529b884_7d7d7d.svg","color":"757575"};
prx.types.material_list_avatar_icon.dynamicProperties.blankItem.imgSrc = {"fileId":"873054abbe95613746ad1d629c08dd84.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"};
prx.types.material_list_avatar_icon.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_list_avatar_icon.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withAvatarIcon');
prx.types.material_list_avatar_icon.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_list_avatar_icon.dynamicProperties.propertyGroups, 'itemtype', 'hiddenByDefault', true);

//TYPE = RADIO LIST
prx.types.material_list_radio = prx.componentsHelper.cloneobject(prx.types.material_list_complex);
prx.types.material_list_radio.name = 'material_list_radio';
prx.componentsHelper.removeProperties(prx.types.material_list_radio.propertyGroups, ['iconpos']);
prx.componentsHelper.removeProperties(prx.types.material_list_radio.dynamicProperties.propertyGroups, ['itemtype','imgSrc']);
prx.types.material_list_radio.dynamicProperties.blankItem.itemtype = 'withRadio';
prx.types.material_list_radio.dynamicProperties.blankItem.subtitle = '';
prx.types.material_list_radio.dynamicProperties.blankItem.thumbnail = {"fileId":"","name":"","assetType":""};
prx.types.material_list_radio.dynamicProperties.blankItem.imgSrc = {"fileId":"","name":"","assetType":"icon","url":""};
prx.types.material_list_radio.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_list_radio.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withRadio');
prx.types.material_list_radio.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_list_radio.dynamicProperties.propertyGroups, 'itemtype', 'hiddenByDefault', true);

//TYPE = CHECKBOX LIST
prx.types.material_list_checkbox = prx.componentsHelper.cloneobject(prx.types.material_list_radio);
prx.types.material_list_checkbox.name = 'material_list_checkbox';
prx.componentsHelper.removeProperties(prx.types.material_list_radio.propertyGroups, ['iconpos']);
prx.componentsHelper.removeProperties(prx.types.material_list_radio.dynamicProperties.propertyGroups, ['itemtype','imgSrc']);
prx.types.material_list_checkbox.dynamicProperties.blankItem.itemtype = 'withCheckbox';
prx.types.material_list_checkbox.dynamicProperties.blankItem.subtitle = '';
prx.types.material_list_checkbox.dynamicProperties.blankItem.thumbnail = {"fileId":"","name":"","assetType":""};
prx.types.material_list_checkbox.dynamicProperties.blankItem.imgSrc = {"fileId":"","name":"","assetType":"icon","url":""};
prx.types.material_list_checkbox.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_list_checkbox.dynamicProperties.propertyGroups, 'itemtype', 'value', 'withCheckbox');


/***** OTHER COMPONENTS *****/

//TYPE: ACTION AREA
prx.types.material_ripple = {
	name: "material_ripple"
	,onDisplay: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		if(typeof(item.circ) == "undefined") { item.circ = false; }

		var cR = '';

		cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-ripple">';

		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		cR += '#'+_id+' .inner-rec { background-color: '+prx.componentsHelper.getProp(item.rippleEffectColor,'color-background')+'; }';
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

		cR += '<div class="inner-rec liveUpdate-rippleEffectColor prx-material-ripple '+((prx.componentsHelper.getProp(item.circ,'boolean')) ? 'type-material-ripple-circ' : '')+' '+((prx.editor) ? 'in-editor' : 'in-player')+'"><div></div></div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,interactions: [ prx.commonproperties.actions ]
	,propertyGroups: [
		{
			caption: "Ripple effect",
			properties: [[
				{
					caption: false,
					name: 'rippleEffectColor',
					type: 'colorpicker',
					value: function (item, name) {
						return item.rippleEffectColor;
					},
					liveUpdate: 'background-color',
					changeProperty: {
						caption: 'Ripple effect color',
						rerender: true
					}
				}
			]]
		}
	]
};


//TYPE: TOAST
prx.types.material_toast = {
	name: "material_toast"
	,onDisplay: function(item,containerid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item,symbol);

		var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';
				
		var cR = '';
		cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-toast">';
		
		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		cR += '#'+_id+' .material-toast-wrapper { border-radius: '+prx.componentsHelper.getProp(Math.round(dims.height/2),'border-radius')+'; background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; }';
		cR += '#'+_id+' .material-toast-inner { '+prx.componentsHelper.getProp(item.textFont,'font-family')+' font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; '+_props+' }';
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);
				
		cR += '<div class="material-toast-wrapper liveUpdate-backgroundColor changeProperty-backgroundColor">';
		cR += '<div class="material-toast-inner liveUpdate-textColor changeProperty-text changeProperty-textFont changeProperty-textSize changeProperty-textColor"><span data-editableproperty="text">' + prx.componentsHelper.getProp(item.text,'text-textarea') + '</span></div>';
		cR += '</div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		$('#'+_id).find('.material-toast-wrapper').css('border-radius', Math.round(dims.height/2)+'px');
	}
	,interactions: [ prx.commonproperties.actions ]
	,editableProperties: [
	        prx.commonproperties.text
	]
	,propertyGroups: [			
		{
			caption: 'Style',
			properties: [
				[
					prx.commonproperties.materialBackgroundColor 
				],
				[
					{ 
						caption: 'Color', 
						name: 'shadowColor', 
						proptype: 'shadow-color',
						type: 'colorpicker', 
						value: function(item,name) { 
							return item.shadowColor; 
						} 
						,hiddenByDefault: function(item) {
							return (!item.enableShadow);
						}
						,changeProperty: {  
							caption: 'Shadow color',
							rerender: true
						} 
					}
				]
			]
		},
		{
			caption: 'Text',
			properties: [
				[
					prx.commonproperties.textFontRichText('font-family','text')
					,prx.commonproperties.textSizeRichText('font-size','text')
					,prx.commonproperties.materialTextColorRichText('color','text')
				],[
					prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'text')
				]
			]
		}
	]
	
}

//TYPE: SNACKBAR WITH ACTION
prx.types.material_snackbar_action = {
	name: "material_snackbar_action"
	,onDisplay: function(item,containerid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);

		var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';
			
		if(prx.componentsHelper.getProp(item.hasAction,'boolean')) {
		var _actionprops = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.actionProperties,'props-text') : '';
		}
		
		var cR = '';
		cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-snackbar">';
		
		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		cR += '#' + _id + ' .material-snackbar-wrapper { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; }';
		cR += '#' + _id + ' .material-snackbar-text { color: '+prx.componentsHelper.getProp(item.textColor,'color-background')+'; '+prx.componentsHelper.getProp(item.textFont,'font-family')+' font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+_props+'}';
		cR += '#' + _id + ' .material-snackbar-close-separator { background-color: '+prx.componentsHelper.getProp(item.separatorColor,'color-background')+';}';
		if(prx.componentsHelper.getProp(item.hasAction,'boolean')) {
		cR += '#' + _id + ' .material-snackbar-action-text { color: '+prx.componentsHelper.getProp(item.actionColor,'color-text')+'; '+prx.componentsHelper.getProp(item.actionFont,'font-family')+' font-size: '+prx.componentsHelper.getProp(item.actionSize,'num-text-size')+'px; '+_actionprops+'}';
		}
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);
		
		cR += '<div class="material-snackbar-wrapper liveUpdate-backgroundColor changeProperty-backgroundColor">';
		cR += '<div class="material-snackbar-text liveUpdate-textColor changeProperty-textColor changeProperty-textSize changeProperty-textFont actions-actions1"><span data-editableproperty="text">'+prx.componentsHelper.getProp(item.text,'text-textarea')+'</span></div>';
		if(prx.componentsHelper.getProp(item.hasAction,'boolean')) {
		cR += '<div class="material-snackbar-action-text liveUpdate-actionColor changeProperty-actiontColor changeProperty-actionSize changeProperty-actionFont actions-actions2 '+((prx.componentsHelper.getProp(item.rippleEffect,'boolean')) ? 'prx-material-ripple' : '' )+'" data-editableproperty="action">'+prx.componentsHelper.getProp(item.action,'text-textarea')+'</div>';
		}
		cR += '</div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,interactions:[
   		{ 
			caption: 'Item',
			name: 'actions1', 
			type: 'action', 
			value: function(item,name) {
				return item.actions1.length; 
			}, 
			changeProperty: { caption: 'Interactions', selector: '.actions-actions1', property: 'action', transitionable: false, changeable: false } 
		},
		{ 
			caption: 'Action button',
			name: 'actions2', 
			type: 'action', 
			value: function(item,name) {
				return item.actions2.length; 
			},
			hiddenByDefault: function(item) {
				return (!item.hasAction);
			}, 
			changeProperty: { caption: 'Action button interactions', selector: '.actions-actions2', property: 'action', transitionable: false, changeable: false }
		}
   	]
	,editableProperties: [
	    {
			caption: 'Text'
			,name: 'text'
			,type: 'input'
			,value: function(item,name) {
				return item.text;
			}
        	,changeProperty: {
        		caption: 'Text',
        		selector: '.material-snackbar-text',
        		property: 'text',
        		transitionable: false
        	}
		},
		{
			caption: 'Action'
			,name: 'action'
			,type: 'input'
			,value: function(item,name) {
				return item.action;
			},
			hiddenByDefault: function(item) {
				return (!item.hasAction);
			},
			changeProperty: {
				caption: 'Action',
				selector: '.material-snackbar-action-text',
				property: 'text',
				transitionable: false
			}
		}	
  	]
	,propertyGroups: [
		{
  		    caption: 'Style',
  		    properties: [
  		        [
  					prx.commonproperties.materialBackgroundColor
  				]
  			]
  		},
  		{
  		    caption: 'Text',
  		    properties: [
				[
					prx.commonproperties.textFontRichText('font-family','text')
					,prx.commonproperties.textSizeRichText('font-size','text')
					,prx.commonproperties.materialTextColorRichText('color','text')
				],[
					prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'text')
				]
			]
  		},
  		{
  		    caption: 'Action',
  		    properties: [
				[
					{ 
						caption: false, 
						name: 'actionFont',
						proptype: 'font-family-3-action',
						type: 'select',
						relatedEditableProperties: 'action',
						relatedCSSProperties: 'font-family',
						value: function(item,name) { 
							return item.actionFont; 
						}, 
						values: function(){ 
							return prx.comps.fonts 
						}, 
						hiddenByDefault: function(item) {
							return (!item.hasAction);
						},
						changeProperty: { 
							caption: 'Action font', 
							selector: '.changeProperty-actionFont', 
							property: 'font-family', 
							transitionable: false 
						} 
					},
					{ 
						caption: false, 
						name: 'actionSize', 
						proptype: 'font-size-5-action',
						type: 'combo-select',
						relatedEditableProperties: 'action',
						relatedCSSProperties: 'font-size',
						value: function(item,name) { 
							return item.actionSize; 
						}, 
						values: prx.comps.textsize, 
						hiddenByDefault: function(item) {
							return (!item.hasAction);
						},
						changeProperty: { 
							caption: 'Action size', 
							selector: '.changeProperty-actionSize', 
							property: 'font-size', 
							transitionable: true 
						} 
					},
					{ 
						caption: false, 
						name: 'actionColor',
						proptype: 'font-color-5-action', 
						type: 'combo-colorpicker',
						relatedEditableProperties: 'action',
						relatedCSSProperties: 'color',
						value: function(item,name) { 
							return item.actionColor; 
						}, 
						values: prx.comps.materialColors, 
						hiddenByDefault: function(item) {
							return (!item.hasAction);
						},
						liveUpdate: 'color', 
						changeProperty: { 
							caption: 'Action color', 
							selector: '.changeProperty-actionColor', 
							property: 'color', 
							transitionable: true 
						} 
					}
				],
				[
					{ 
						caption: false, 
						name: 'actionProperties',
						proptype: 'text-properties-4-action',
						type: 'checkbox',
						relatedEditableProperties: 'action',
						relatedCSSProperties: ['font-weight','font-style','text-decoration'],
						value: function(item,name) { 
							if(typeof(item.actionProperties) == "undefined") {
								item.actionProperties = [];
							} 
							return item.actionProperties; 
						},
						values: [
							{ value: 'bold', displayValue: '', icon: 'text-bold'},
							{ value: 'italic', displayValue: '', icon: 'text-italic'},
							{ value: 'underline', displayValue: '', icon: 'text-underline'}
						],
					    hiddenByDefault: function(item) {
							return (!item.hasAction);
						},
						changeProperty: {
							caption: 'Action properties',
							rerender: true 
						} 
					}
				]
  			]
  		},
		prx.commonproperties.materialRipple
  		
    ]
}

//TYPE = SIMPLE SNACKBAR
prx.types.material_snackbar = prx.componentsHelper.cloneobject(prx.types.material_snackbar_action);
prx.types.material_snackbar.name = 'material_snackbar';
prx.componentsHelper.removeProperties(prx.types.material_snackbar.propertyGroups, ['actionFont', 'actionSize', 'actionColor', 'actionProperties']);


/********************************/
/*** DIALOG & MENU COMPONENTS ***/
/********************************/

// ALERT DIALOG
prx.types.material_dialog_alert = {
	name: "material_dialog_alert"
	,onDisplay: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		if(typeof(item.confirmDialog) == 'undefined') { item.confirmDialog = false;}

		var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';
		var _titleprops = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.titleProperties,'props-text') : '';

		
		var cR = '';
		cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-dialog">';
		
		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		cR += '#' + _id + ' .material-dialog-wrapper { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; }';
		cR += '#' + _id + ' .material-dialog-title { color: '+prx.componentsHelper.getProp(item.titleColor,'color-text')+'; '+prx.componentsHelper.getProp(item.textFont,'font-family')+' font-size: '+prx.componentsHelper.getProp(item.titleSize,'num-text-size')+'px; '+_titleprops+' }';
		cR += '#' + _id + ' .material-dialog-text { color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; '+prx.componentsHelper.getProp(item.textFont,'font-family')+' font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+_props+' }';
		if(prx.componentsHelper.getProp(item.confirmDialog,'boolean')) {
		cR += '#' + _id + ' .material-dialog-text { border-bottom: '+(1*prx.componentsHelper.getScale(item.lib))+'px solid #ddd;}';
		}
		if(prx.componentsHelper.getProp(item.name,'other') == 'material_dialog_confirmation') {
			cR += '#' + _id + ' .material-dialog-buttons { padding: '+(4*prx.componentsHelper.getScale(item.lib))+'px '+(24*prx.componentsHelper.getScale(item.lib))+'px '+(8*prx.componentsHelper.getScale(item.lib))+'px 0;}';
		}
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);
		
		cR += '<div class="material-dialog-wrapper liveUpdate-backgroundColor changeProperty-backgroundColor">';
		if(item.withTitle) {
		cR += '<div class="material-dialog-title liveUpdate-titleColor changeProperty-titleColor changeProperty-titleSize changeProperty-textFont"><span data-editableproperty="title">'+prx.componentsHelper.getProp(item.title,'text-textarea')+'</span></div>';
		}
		cR += '<div class="material-dialog-text liveUpdate-textColor changeProperty-textColor changeProperty-textSize changeProperty-textFont changeProperty-textAlign"><span data-editableproperty="text">'+prx.componentsHelper.getProp(item.text,'text-textarea')+'</span></div>';
		cR += '<div class="material-dialog-buttons liveUpdate-borderColor liveUpdate-borderWidth changeProperty-borderColor changeProperty-borderWidth">'
		
		$.each(item.buttons, function(i,elm) {
			var _button_props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(elm.textProperties,'props-text') : '';

			cR += '<div id="'+_id+'-buttons-'+i+'" class="material-dialog-button '+((prx.componentsHelper.getProp(item.rippleEffect,'boolean')) ? 'prx-material-ripple ' : '' )+'dynamic-property liveUpdate-buttonColor-'+i+' changeProperty-buttonColor changeProperty-buttonSize" data-dynamic-property-index="'+i+'" style="font-size: '+prx.componentsHelper.getProp(item.buttonSize,'num-other')+'px; '+_button_props+' color: '+prx.componentsHelper.getProp(elm.textColor,'color-text')+';">';
			cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">' + prx.componentsHelper.getProp(elm.text,'text-textarea') + '</span>';
			cR += '</div>';
		});
		cR += '</div>';
		cR += '</div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,editableProperties: [
		{
			caption: 'Title'
			,name: 'title'
			,type: 'input'
			,value: function(item,name) {
				return item.title;
			}
			,hiddenByDefault: function(item) {
				return (!item.withTitle);
			}
			,changeProperty: {
				caption: 'Title',
				selector: '.material-dialog-title',
				property: 'text',
				transitionable: false
			}
		},
	    {
			caption: 'Text'
			,name: 'text'
			,type: 'input'
			,value: function(item,name) {
				return item.text;
			}
			,hiddenByDefault: function(item) {
				return (!item.withText);
			}
        	,changeProperty: {
        		caption: 'Text',
        		selector: '.material-dialog-text',
        		property: 'text',
        		transitionable: false
        	}
		}
  	]
	,propertyGroups: [
		{
		    caption: 'Style',
		    properties: [[
				prx.commonproperties.materialBackgroundColor
			]]
		},
		{
			caption: 'Title',
		    properties: [
		        [
					{ 
						caption: false, 
						name: 'titleSize', 
						proptype: 'font-size-6-title',
						type: 'combo-select',
						relatedEditableProperties: 'title',
						relatedCSSProperties: 'font-size',
						value: function(item,name) { 
							return item.titleSize;
						}, 
						values: prx.comps.textsize,	
						hiddenByDefault: function(item) {
							return (!item.withTitle);
						},					
						changeProperty: { 
							caption: 'Title size', 
							selector: '.changeProperty-titleSize', 
							property: 'font-size', 
							transitionable: true 
						} 
					},
		         	{ 
						caption: false, 
						name: 'titleColor', 
						proptype: 'font-color-6-title',
						type: 'combo-colorpicker',
						relatedEditableProperties: 'title',
						relatedCSSProperties: 'color',
						value: function(item,name,index) { 
							return item.titleColor;
						},
						liveUpdate: 'color', 
						values: prx.comps.materialColors,	
						hiddenByDefault: function(item) {
							return (!item.withTitle);
						},			
						changeProperty: { 
							caption: 'Title color', 
							selector: '.changeProperty-titleColor', 
							property: 'color', 
							transitionable: true
						} 
					},
					{ 
		         		caption: false, 
		         		name: 'titleProperties', 
						proptype: 'text-properties-5-title',
		         		type: 'checkbox',
						relatedEditableProperties: 'title',
						relatedCSSProperties: ['font-weight','font-style','text-decoration'],
		         		value: function(item,name,index) {  
		         			return item.titleProperties; 
		         		},
						values: [
							{ value: 'bold', displayValue: '', icon: 'text-bold'},
							{ value: 'italic', displayValue: '', icon: 'text-italic'},
							{ value: 'underline', displayValue: '', icon: 'text-underline'}
						],
		    			hiddenByDefault: function(item) {
		    				return (!item.withTitle);
		    			},
		         		changeProperty: { 
		         			caption: 'Title properties', 
		         			rerender: true 
		         		} 
		         	}		         	
	         ]]
		},
		{
		    caption: 'Text',
		    properties: [
				[
					prx.commonproperties.textFontRichText('font-family','text')
					,prx.commonproperties.textSizeRichText('font-size','text')
					,prx.commonproperties.materialTextColorRichText('color','text')
				],[
					prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'text')
				]
		     
			]
		},
		{
			 caption: 'Buttons',
			    properties: [
			        [
						{ 
							caption: false, 
							name: 'buttonSize', 
							proptype: 'font-size-2',
							type: 'combo-select',
							relatedEditableProperties: ['buttons.text'],
							relatedCSSProperties: 'font-size',
							value: function(item,name,index) { 
								if(typeof(item.buttonSize) == 'undefined') {
									return 14*prx.componentsHelper.getScale(item.lib);
								}
								return item.buttonSize;
							}, 
							values: prx.comps.textsize,						
							changeProperty: { 
								caption: 'Button text size', 
								selector: '.changeProperty-buttonSize', 
								property: 'font-size', 
								transitionable: true 
							} 
						}
					]
			]
		},
		prx.commonproperties.materialRipple
    ]
	,dynamicProperties: {
   		data: 'buttons'
   		,propertyCaption: 'Buttons'
    	,propertyName: 'Button'
   		,addCaption: 'Add button'
   		,deleteCaption: 'Delete'
   		,captionProperty: 'text'
   		,blankItem: {
			text: 'Action',
   			actions: [],
   			textColor: '2196F3',
   			textSize: 14*prx.componentsHelper.getScale('material'),
   			textProperties: ['bold']
   		}
   		,interactions: [ prx.commonproperties.actions_buttons ]
   		,editableProperties: [
  			{
 				caption: 'Text'
 				,name: 'text'
 				,type: 'input'
 				,value: function(item,name,index) {
 					return item.buttons[index].text;
 				}
 				,changeProperty: {
					caption: 'Text',
					selector: '.material-dialog-button span[data-editableproperty="text"]',
					property: 'text',
					transitionable: false
				 }
 			}
  		],
  		propertyGroups: [
   	   		{
   	   		    caption: 'Text',
   	   		    properties: [
   	   		        [
   	   		         	{ 
   	   		         		caption: false, 
   	   		         		name: 'textColor',
   	   		         		proptype: 'font-color',
   	   		         		type: 'combo-colorpicker',
							relatedEditableProperties: 'text',
							relatedCSSProperties: 'color',
   	   		         		value: function(item,name,index) { 
   	   		         			return item.buttons[index].textColor; 
   	   		         		},
   	   		         		liveUpdate: 'color', 
   							values: prx.comps.materialColors,
   	   		         		changeProperty: { 
   	   		         			caption: 'Text color', 
   	   		         			selector: '.changeProperty-buttonColor', 
   	   		         			property: 'color', 
   	   		         			transitionable: true
   	   		         		} 
   	   		         	},
						prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'text')
   	   		         	// {
   	   		         	// 	caption: false,
   	   		         	// 	name: 'textProperties',
   	   		         	// 	proptype: 'text-properties',
   	   		         	// 	type: 'checkbox',
							// relatedEditableProperties: 'text',
							// relatedCSSProperties: ['font-weight','font-style','text-decoration'],
   	   		         	// 	value: function(item,name,index) {  return item.buttons[index].textProperties; },
							// values: [
							// 	{ value: 'bold', displayValue: '', icon: 'text-bold'},
							// 	{ value: 'italic', displayValue: '', icon: 'text-italic'},
							// 	{ value: 'underline', displayValue: '', icon: 'text-underline'}
							// ],
							// changeProperty: {
   	   		         	// 		caption: 'Text properties',
   	   		         	// 		rerender: true
   	   		         	// 	}
   	   		         	// }
   	   				]
   	   			]
   	   		}
     	]
	}
}

//TYPE = SIMPLE ALERT DIALOG
prx.types.material_dialog_alert_simple = prx.componentsHelper.cloneobject(prx.types.material_dialog_alert);
prx.types.material_dialog_alert_simple.name = 'material_dialog_alert_simple';
prx.componentsHelper.removeProperties(prx.types.material_dialog_alert_simple.propertyGroups, ['titleSize','titleColor','titleProperties']);

//TYPE = CONFIRMATION DIALOG
prx.types.material_dialog_confirmation = prx.componentsHelper.cloneobject(prx.types.material_dialog_alert);
prx.types.material_dialog_confirmation.name = 'material_dialog_confirmation';
prx.componentsHelper.removeProperties(prx.types.material_dialog_confirmation.propertyGroups, ['textFont','textSize','textColor','textProperties']);

//TYPE: SIMPLE DIALOG
prx.types.material_dialog_simpledialog = {
	name: "material_dialog_simpledialog"
	,onDisplay: function(item,containerid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;		
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		var listH = Math.round((dims.height-1-item.listitems.length) / item.listitems.length);
		var listItemH = (dims.height - (item.listitems.length+1))/item.listitems.length;

        var hasThumbs = prx.componentsHelper.hasThumbnails(item);


        var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';

		var cR = '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-simple-dialog">';
		
		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		if(prx.componentsHelper.getProp(item.name,'other') == 'material_dialog_simplemenu') {
		cR += '#' + _id + ' .material-simple-dialog-inner { box-shadow: 0px 0px '+(2*prx.componentsHelper.getScale(item.lib))+'px '+(1*prx.componentsHelper.getScale(item.lib))+'px rgba(0, 0, 0, 0.25); }';
		}
		cR += '#' + _id + ' .material-simple-dialog-inner { '+prx.css.flexJustifyContent(prx.componentsHelper.getProp(item.textAlign,'align'))+' background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; }';
		cR += '#' + _id + ' .material-simple-dialog-icon-wrapper { width: '+Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib)))+'px; height: '+Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib)))+'px; }';
		cR += '#' + _id + ' .material-simple-dialog-text-wrapper { height: '+Math.round(listItemH)+'px; }';
		cR += '#' + _id + ' .material-simple-dialog-text { '+prx.componentsHelper.getProp(item.textFont,'font-family')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; '+_props+' }';
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);
		
		cR += '<div class="material-simple-dialog-inner liveUpdate-backgroundColor changeProperty-backgroundColor changeProperty-textAlign changeProperty-textFont changeProperty-textSize">';
				
		$.each(item.listitems, function(i,elm){				
			if(typeof(elm.thumbnail) == "undefined") { elm.thumbnail = {"fileId":"","name":"","assetType":""} };
						
			cR += '<style>';
			if(prx.componentsHelper.getProp(elm.thumbnail.fileId,'other') != '') {
				cR += '#' + _id + '-listitems-'+i+' .material-simple-dialog-thumb { background-image: url('+prx.componentsHelper.getProp(elm.thumbnail,'asset')+'); }';
			}
			cR += '</style>';
							
			cR += '<div id="'+_id+'-listitems-'+i+'" class="dynamic-property material-simple-dialog-listitem material-simple-dialog-listitem-type-'+prx.componentsHelper.getProp(elm.itemtype,'other')+'" data-dynamic-property-index="'+i+'">';
								
			cR += '<div class="bordered-container '+((prx.componentsHelper.getProp(item.rippleEffect,'boolean')) ? 'prx-material-ripple ' : '' )+'liveUpdate-dividerColor changeProperty-dividerColor">';

			if(hasThumbs) {
			cR += '<div class="material-simple-dialog-icon-wrapper"><div class="material-simple-dialog-thumb"></div></div>';
			}
			cR += '<div class="material-simple-dialog-text-wrapper">';
			cR += '<div class="material-simple-dialog-text liveUpdate-textColor changeProperty-textColor">';
			cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">'+prx.componentsHelper.getProp(elm.text,'text-textarea')+'</span>';
			cR += '</div>';
			cR += '</div>';
			cR += '</div>';
			cR += '</div>';
		});
		cR += '</div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		var listItemH = (dims.height - (item.listitems.length+1))/item.listitems.length;
		
		$('#' + _id).find('.material-simple-dialog-icon-wrapper').css({
			'width': Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib)))+'px',
			'height': Math.round((parseInt(listItemH)/2)+(14*prx.componentsHelper.getScale(item.lib)))+'px'
		});
		$('#' + _id).find('.material-simple-dialog-text-wrapper').css({
			'height': Math.round(listItemH)+'px'
		});
	}
	,propertyGroups: [
		{
			caption: 'List',
			properties: [
				[
					prx.commonproperties.materialBackgroundColor
				]
			]
		},
		{
			caption: 'Text',
			properties:    [
				[
				prx.commonproperties.textFontRichText('font-family','listitems.text')
				,prx.commonproperties.textSizeRichText('font-size','listitems.text')
				,prx.commonproperties.materialTextColorRichText('color','listitems.text')
			],[
			prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'listitems.text')
			]
		]
		},
		prx.commonproperties.materialRipple
	]

	,dynamicProperties: {
		data: 'listitems'
		,propertyCaption: 'Menu items'
  		,propertyName: 'Menu item'
		,addCaption: 'Add Menu item'
		,deleteCaption: 'Delete'
		,blankItem: {
			text: 'Menu Item'
			,itemtype: 'dialog'
			,subtitle: ''
			,thumbnail: {"fileId":"873054abbe95613746ad1d629c08dd84.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"}
			,actions: []
		}
		,captionProperty: 'text' 
		,editableProperties: [
			{
				caption: 'Label'
				,name: 'text'
				,type: 'input'
				,value: function(item,name,index) {
					return item.listitems[index].text;
				}
				,hiddenByDefault: function(item,name,index){
					return (item.listitems[index].itemtype == 'separator');
				}
				,changeProperty: {  
					caption: 'Label',
					property: 'text',
					selector: '.material-simple-dialog-text',
					transitionable: false
				}  

			}
		]
		,interactions: [ prx.commonproperties.actions_listitems ]
		,propertyGroups: [
			{
				caption:  'Style',
				properties: [[
					{
						caption: false //'List item Type'
						,name: 'itemtype'
						,type: 'select'
						,value: function(item,name,index) {
							if(typeof(item.listitems[index].itemtype) == "undefined") {
								item.listitems[index].itemtype = 'menu'
							}
							return item.listitems[index].itemtype;
						}
						,values: [
								  { value: 'dialog', displayValue: 'Simple Dialog'}
								  ,{ value: 'menu', displayValue: 'Simple Menu'}
						],
						onChange: function(item, index) {
							switch(item.itemtype) {
							case 'dialog':
								item.thumbnail = {"fileId":"873054abbe95613746ad1d629c08dd84.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"};
								return item;
								break;
							case 'menu':
								item.thumbnail =  {"fileId":"","name":"","assetType":""};
								return item;
								break;								
							default: break;
							}
							return false;
						}
						,hiddenByDefault: function(item,name,index){
							return true;
						}
						,changeProperty: {  
							caption: 'Listitem type',
							rerender: true
						} 
					}
				]]
			},			
			{
				caption: 'Thumbnail',
				properties: [[
				    prx.commonproperties.thumbnailSourceList
				]]
			}
		]
	}
}

//TYPE = SIMPLE MENU
prx.types.material_dialog_simplemenu = prx.componentsHelper.cloneobject(prx.types.material_dialog_simpledialog);
prx.types.material_dialog_simplemenu.name = 'material_dialog_simplemenu';
prx.componentsHelper.removeProperties(prx.types.material_dialog_simplemenu.dynamicProperties.propertyGroups, ['thumbnail']);
prx.types.material_dialog_simplemenu.dynamicProperties.blankItem.itemtype = 'menu';
prx.types.material_dialog_simplemenu.dynamicProperties.blankItem.thumbnail =  {"fileId":"","name":"","assetType":""};
prx.types.material_dialog_simplemenu.dynamicProperties.propertyGroups = prx.componentsHelper.editProperty(prx.types.material_dialog_simplemenu.dynamicProperties.propertyGroups, 'itemtype', 'value', 'menu');

// TYPE = DROPDOWN MENU



//TYPE: DROPDOWN WITH SELECTION
prx.types.material_dropdown_menu = {
    name: "material_dropdown_menu"
    ,onDisplay: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var dims = prx.componentsHelper.getRealDims(item, symbol);

        var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';

        var cR = "";
        var _checked = '';

        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-dropdown-menu '+((prx.editor) ? 'in-editor' : 'in-player')+'">';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#'+_id+'.current-component .material-dropdown-contextmenu { top: '+dims.height+'px; }';
        cR += '#'+_id+' .dropdown-trigger { border-bottom: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; '+prx.componentsHelper.getProp(item.textFont,'font-family')+' color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+_props+' }';
        cR += '#'+_id+' .material-dropdown-contextmenu { background: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; '+prx.componentsHelper.getProp(item.textFont,'font-family')+' color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+_props+' }';
		cR += '#'+_id+' .material-dropdown-item.active { color: '+prx.componentsHelper.getProp(item.activeTextColor,'color-text')+'; }';
		cR += '#'+_id+' .dropdown-trigger-arrow-icon { fill: '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; }';
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        // selector

        cR += '<div class="dropdown-trigger liveUpdate-textColor liveUpdate-borderColor changeProperty-textColor changeProperty-textFont changeProperty-textSize changeProperty-borderColor">';

		cR += '<span class="material-dropdown-active-value">';
		cR += (typeof(item.listitems[item.selected]) != "undefined") ? prx.utils.escapeHTML(item.listitems[item.selected].text) : ((typeof(item.listitems[0]) != "undefined") ? prx.utils.escapeHTML(item.listitems[0].text) : '');
		cR += '</span>';

		cR += '<span class="dropdown-trigger-arrow-icon liveUpdate-borderColor changeProperty-borderColor">';
		cR += '<svg viewBox="0 0 17 16"><path d="M3.5 5l5 5 5-5z"></path></svg>';
		cR += '</span>';

        cR += '</div>'

		// context menu

		cR += '<div class="material-dropdown-contextmenu liveUpdate-backgroundColor changeProperty-backgroundColor">'

        $.each(item.listitems, function(i,elm){

            _checked = '';

            if(i == prx.componentsHelper.getProp(item.selected,'num-other')) {
                _checked = ' active'
            }

            cR += '<div class="material-dropdown-item dynamic-property '+_checked+' '+((prx.componentsHelper.getProp(item.rippleEffect,'boolean')) ? 'prx-material-ripple ' : '' )+' '+((i == prx.componentsHelper.getProp(item.selected,'boolean')) ? 'liveUpdate-activeTextColor changeProperty-activeTextColor' : 'liveUpdate-textColor changeProperty-textColor' )+' changeProperty-textFont changeProperty-textSize" id="'+_id+'-listitems-'+i+'" data-dynamic-property-index="'+i+'">';
            cR = cR + '<span data-editableproperty="text" data-dynamic-property-index="'+i+'">'+ prx.componentsHelper.getProp(elm.text,'text-textarea') + '</span>';
            cR += '</div>'
        });

        cR += '</div>';

        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);

        cR += '</div>';

        return cR;
    }
    ,afterDisplay: function(item,containerid,symbol) {
        var _id = (!containerid) ? item.id : containerid+'-'+item.id;

        if(!prx.editor) {


            $('#'+_id).hammer().on('click', function(e){

                e.stopPropagation();

            });

            $('#'+_id+' .dropdown-trigger').hammer().on('tap', function(e){

            	if( $('#'+_id+' .material-dropdown-contextmenu').hasClass('open') )
                	$('#'+_id+' .material-dropdown-contextmenu').removeClass('open');
				else
                    $('#'+_id+' .material-dropdown-contextmenu').addClass('open');

                $('#'+_id).one('dummy.close', function(){
                    $('#'+_id+' .material-dropdown-contextmenu').removeClass('open');
                })

            });

            $('#'+_id+' .material-dropdown-item').hammer().on('tap', function(e){

                $('#'+_id+' .material-dropdown-contextmenu').removeClass('open');

				$('#'+_id+' .material-dropdown-item').removeClass('active');

				$(this).addClass('active');

				$('#'+_id+' .material-dropdown-active-value').text($(this).find('[data-editableproperty]').text());
            });
            //
            // var $componentPage = $('#'+_id).parents('.prx-page'),
            //     $componentsExceptThis = $componentPage.find('> div:not(#'+_id+')');
            //
            // debugger
            //
            // $componentPage.add($componentsExceptThis).hammer().on('tap', function(e){
            //
            //     debugger
            //
            //     $('#'+_id+' .material-dropdown-contextmenu').hide();
            // });

            prx.actions.disableFlashActionOnItemTap('#' + _id + ' .dropdown-trigger', '.flashactiontap-afterdisplay');
            prx.actions.disableFlashActionOnItemTap('#' + _id + ' .material-dropdown-item', '.flashactiontap-afterdisplay');
        }
    }
    ,onResize: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var dims = prx.componentsHelper.getRealDims(item, symbol);

        if( prx.editor ) {

            $('#' + _id + ' .material-dropdown-contextmenu').css({
                top: dims.height + 'px'
            })
        }
    }
    ,propertyGroups: [
        {
            caption: 'Style',
            properties: [
                [
                    {
                        caption: 'Background',
                        name: 'backgroundColor',
                        proptype: 'background-color',
                        type: 'combo-colorpicker',
                        value: function(item,name) { return item.backgroundColor; },
                        values: prx.comps.materialColors,
                        liveUpdate: 'background-color',
                        changeProperty: {
                            caption: 'Dropdown background color',
                            property: 'background-color',
                            transitionable: true
                        }
                    }
                ],
				[
                    prx.commonproperties.borderWidth,
                    {
                        caption: false,
                        name: 'borderColor',
                        proptype: 'border-color',
                        type: 'colorpicker',
                        value: function (item, name) {
                            return typeof item.borderColor == 'undefined' ? '' : item.borderColor;
                        },
                        values: prx.comps.materialColors,
                        liveUpdate: 'border-color',
                        changeProperty: {
                            caption: 'Border color',
                            selector: '.changeProperty-borderColor',
                            property: 'border-top-color,border-bottom-color,border-left-color,border-right-color',
                            transitionable: true
                        }
                    }
				]
            ]
        },
        {
            caption: 'Text',
            properties: [
                [
                    prx.commonproperties.textFontRichText('font-family','text')
                    ,prx.commonproperties.textSizeRichText('font-size','text')
                    ,prx.commonproperties.materialTextColorRichText('color','text')
                ],
				[
                    prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'text')
                    ,{
                        caption: 'Active',
                        name: 'activeTextColor',
                        proptype: 'font-color-2-active',
                        type: 'combo-colorpicker',
                        value: function(item,name) { return item.activeTextColor; },
                        values: prx.comps.materialColors,
                        liveUpdate: 'color',
                        changeProperty: {
                            caption: 'Active item text color',
                            property: 'color',
                            selector: 'changeProperty-activeTextColor',
                            transitionable: true
                        }
                    }
                ]
            ]
        },
		{
            caption: 'Advanced',
            properties: [
                [
                    {
                        caption: 'Active option'
                        ,name: 'selected'
                        ,type: 'select'
                        ,value: function(item,name) {
							return item.selected;
						}
                        ,values: function(item,name) {

							var _rA = [];

							for (var n = 0; n < item.listitems.length; n++) {
								_rA.push({value: n, displayValue: prx.utils.escapeHTML(item.listitems[n].text)});
							}
							return _rA;
						}
                        ,changeProperty: {
							caption: 'Active item',
							rerender: true
						}
                    }
                ]
            ]
        }
    ]

    ,dynamicProperties: {
        data: 'listitems'
        ,propertyCaption: 'Menu items'
        ,propertyName: 'Menu item'
        ,addCaption: 'Add menu item'
        ,deleteCaption: 'Delete'
        ,blankItem: {
            text: 'Option',
            actions: []
        }
        ,captionProperty: 'text'
        ,editableProperties: [
            {
                caption: 'Text'
                ,name: 'text'
                ,type: 'input'
                ,value: function(item,name,index) {
					return item.listitems[index].text;
				}
                ,onChange: function(item, index, val){
					if(item.selected == index) {
						$('#' + item.id).find('.material-dropdown-active-value').text(val);
					}
				}
                ,changeProperty: {
					caption: 'Option label',
					property: 'text',
					selector: '.material-dropdown-item span',
					transitionable: false
				}
            }
        ]
        ,interactions: [ prx.commonproperties.actions_listitems ]
        // ,propertyGroups: [
        //     {
        //         caption: '',
        //         properties: []
        //     }
        // ]
    }
};

/***********************************************/
/*** PROGRESS, ACTIVITY & SLIDER COMPONENTS ***/
/***********************************************/

//TYPE: DETERMINATE PROGRESS BAR */
prx.types.material_progress_determinate = {
	name: "material_progress_determinate"
	,onDisplay: function(item,containerid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		var cR = '';
		cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-progress '+((prx.componentsHelper.getProp(item.isDownloading,'boolean')) ? '' : 'estimation') +'">';
		
		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		cR += '#' + _id + ' .material-progress-bg-bar { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; }';
		if( item.isDownloading ) {
		cR += '#' + _id + ' .material-progress-downloading-bar { width: '+prx.componentsHelper.getProp(item.percentBarValue,'num-percentage')+'%; background-color: '+prx.componentsHelper.getProp(item.percentBarBackgroundColor,'color-fill')+'; }';
		}
		else {
		cR += '#' + _id + ' .material-progress-loading-bar { background-color: '+prx.componentsHelper.getProp(item.percentBarBackgroundColor,'color-fill')+'; }';
		}
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);
		
		cR += '<div class="material-progress-bg-bar liveUpdate-bgBarBackgroundColor changeProperty-bgBarBackgroundColor">';
		
		if( prx.componentsHelper.getProp(item.isDownloading,'boolean') )
		cR += '<div class="material-progress-downloading-bar liveUpdate-backgroundColor changeProperty-backgroundColor changeProperty-percentBarValue changeProperty-percentWidth"></div>';
		else
		cR += '<div class="material-progress-loading-bar liveUpdate-percentBarBackgroundColor changeProperty-percentBarBackgroundColor"></div>';
		
		cR += '</div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
 	,propertyGroups: [
 		{
			caption: "Main Bar",
			properties: [
				[
				 	prx.commonproperties.materialBackgroundColor
      			]
			]
   		},
   		{
			caption: "Percentage Bar",
			properties: [
				[
					{
						caption: 'Progress (%)'
						,name: 'percentBarValue'
						,proptype: 'initial-value-percent'
						,type: 'combo-select'
						,value: function(item,name) {
							return item.percentBarValue;
						}
						,values: { min: 0, max: 100, step: 10 }
						,hiddenByDefault: function(item) {
							return (!item.isDownloading);
						}
						,changeProperty: {
							caption: 'Progress',
							selector: '.changeProperty-percentWidth',
							property: 'percent-width',
							transitionable: true
						 } 
					},
	      			{
	      				caption: 'Color'
	      				,name: 'percentBarBackgroundColor'
	      				,proptype: 'background-color-2'
	      				,type: 'combo-colorpicker'
	      				,value: function(item,name) {
	      					return item.percentBarBackgroundColor;
	      				}
	      				,liveUpdate: 'background-color'
						,values: prx.comps.materialColors
	      				,changeProperty: {
							caption: 'Percentage Bar color',
							selector: '.changeProperty-percentBarBackgroundColor',
							property: 'background-color',
							transitionable: true
						} 
	      			}
      			]
			]
   		}
	]
}

//TYPE: INDETERMINATE PROGRESS BAR
prx.types.material_progress_indeterminate = prx.componentsHelper.cloneobject(prx.types.material_progress_determinate);
prx.types.material_progress_indeterminate.name = 'material_progress_indeterminate';
prx.componentsHelper.removeProperties(prx.types.material_progress_indeterminate.propertyGroups, ['percentBarValue']);

//TYPE: SLIDER
prx.types.material_slider_continuous = {
	name: 'material_slider_continuous'
	,onDisplay: function(item,containerid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);
		
		if(typeof(item.badgeSize) == 'undefined') { item.badgeSize = 0;}
		
		var cR = '';			
		cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-slider">';
		
		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		cR += '#'+_id+' .material-slider-bar-wrapper { height: '+dims.height+'px; }';
		cR += '#'+_id+' .material-slider-bar { height: '+prx.componentsHelper.getProp(item.barThickness,'num-other')+'px; background-color: '+prx.componentsHelper.getProp(item.barColor,'color-background')+'; margin-top: -'+(prx.componentsHelper.getProp(item.barThickness,'num-other')/2)+'px; }'
		cR += '#'+_id+' .material-slider-bar-filled { width: '+prx.componentsHelper.getProp(item.sliderPosition,'num-percentage')+'%; background-color: '+prx.componentsHelper.getProp(item.fillBarColor,'color-fill')+' }'
		cR += '#'+_id+' .material-slider-button-wrapper { width: '+Math.round(dims.height/2)+'px; height: '+Math.round(dims.height/2)+'px; margin-left: -'+Math.round(dims.height/4)+'px; margin-right: -'+Math.round(dims.height/4)+'px; margin-top: -'+Math.round(parseInt(dims.height/2)+parseInt(dims.height/4)-(prx.componentsHelper.getProp(item.barThickness,'num-other')/2))+'px; }';
		cR += '#'+_id+' .material-slider-button { background-color: '+prx.componentsHelper.getProp(item.sliderColor,'color-background')+'; }';
		if(prx.componentsHelper.getProp(item.sliderPosition,'num-other') == 0) {
			cR += '#'+_id+' .material-slider-button:not(.discrete) { background-color : #eee; border : '+(2*prx.componentsHelper.getScale(item.lib))+'px solid ' + prx.componentsHelper.getProp(item.barColor,'color-border') +'; }';
			if(!prx.editor) {
				cR += '#'+_id+' .material-slider-button.discrete { background-color : #333 }';
				cR += '#'+_id+' .material-slider-button.discrete:active { background-color : '+prx.componentsHelper.getProp(item.barColor,'color-background')+' }';
			}
			else {
				cR += '#'+_id+' .material-slider-button.discrete { background-color : '+prx.componentsHelper.getProp(item.barColor,'color-background')+' }';
			}
		}
		if(prx.componentsHelper.getProp(item.isDiscrete,'boolean')) {
			
		cR += '#'+_id+' .material-slider-badge { line-height: '+prx.componentsHelper.getProp(item.badgeSize,'num-other')+'px; color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; }';
		if(!prx.editor) {		
		cR += '#'+_id+' .material-slider-button.discrete.active { width: '+prx.componentsHelper.getProp(item.badgeSize,'num-other')+'px; height: '+prx.componentsHelper.getProp(item.badgeSize,'num-other')+'px; top: '+Math.round((dims.height/4)-prx.componentsHelper.getProp(item.badgeSize,'num-other')-(17*prx.componentsHelper.getScale(item.lib)))+'px; left: '+Math.round((dims.height/4)-(prx.componentsHelper.getProp(item.badgeSize,'num-other')/2))+'px; }';
		}
		else {
		cR += '#'+_id+' .material-slider-button.discrete { width: '+prx.componentsHelper.getProp(item.badgeSize,'num-other')+'px; height: '+prx.componentsHelper.getProp(item.badgeSize,'num-other')+'px; top: '+Math.round((dims.height/4)-prx.componentsHelper.getProp(item.badgeSize,'num-other')-(17*prx.componentsHelper.getScale(item.lib)))+'px; left: '+Math.round((dims.height/4)-(prx.componentsHelper.getProp(item.badgeSize,'num-other')/2))+'px; box-sizing: content-box; border: none; border-radius: 80% 0 55% 50% / 55% 0 80% 50%; font: Roboto Regular, sans-serif; text-overflow: clip; -webkit-transform: rotateZ(135deg); transform: rotateZ(135deg); }';
		cR += '#'+_id+' .material-slider-badge { display: block;}';
		}		
		
		}
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);
			
		cR += '<div class="material-slider-bar-wrapper">';
		cR += '<div class="material-slider-bar liveUpdate-barColor">';
		cR += '<div class="material-slider-bar-filled liveUpdate-fillBarColor"></div>'
		cR += '</div>';
		cR += '</div>';
		cR += '<div class="material-slider-button-wrapper">';

		if(prx.componentsHelper.getProp(item.isDiscrete,'boolean')) {
			cR += '<span class="material-slider-button discrete liveUpdate-sliderColor">';
			cR += '<span class="material-slider-badge liveUpdate-textColor changeProperty-textColor changeProperty-textSize">'+prx.componentsHelper.getProp(item.sliderPosition,'num-precentage')+'</span>';
			cR += '</span>';
		}
		else {
			cR += '<span class="material-slider-button liveUpdate-sliderColor"></span>';
		}

		cR += '</div>';

		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
	
		return cR;
	}
	,onResize: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item,symbol);
		
		$('#'+_id).find('.material-slider-bar-wrapper').css({ 'height': dims.height + 'px'});
		
		$('#'+_id).find('.material-slider-button-wrapper').css({
			'width': Math.round(dims.height/2) + 'px',
			'height': Math.round(dims.height/2) + 'px',
			'margin-left': '-' + Math.round(dims.height/4) + 'px',
			'margin-right': '-' + Math.round(dims.height/4) + 'px',
			'margin-top': '-' + Math.round(parseInt(dims.height/2)+parseInt(dims.height/4)-(prx.componentsHelper.getProp(item.barThickness,'num-other')/2)) + 'px'
		});

		if(!prx.editor) {
			$('#'+_id).find('.material-slider-button.discrete.active').css({
				'left': Math.round((dims.height/4)-(prx.componentsHelper.getProp(item.badgeSize,'num-other')/2))+'px',
				'top': Math.round((dims.height/4)-prx.componentsHelper.getProp(item.badgeSize,'num-other')-(17*prx.componentsHelper.getScale(item.lib)))+'px'
			});
		}		
		else {
			$('#'+_id).find(' .material-slider-button-wrapper').css({ 
				'left': ((dims.width)*(prx.componentsHelper.getProp(item.sliderPosition,'num-percentage')*0.01)) + 'px'
			});
			$('#'+_id).find('.material-slider-button.discrete').css({
				'left': Math.round((dims.height/4)-(prx.componentsHelper.getProp(item.badgeSize,'num-other')/2))+'px',
				'top': Math.round((dims.height/4)-prx.componentsHelper.getProp(item.badgeSize,'num-other')-(17*prx.componentsHelper.getScale(item.lib)))+'px'
			});
		}
	}
	,interactions: [ prx.commonproperties.actions ]
	,mpactions: {
		specialEvents: ['sliderdragstart','sliderdrag','sliderdragend']
	}
	,afterDisplay: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item,symbol);
		
		var rangeLength = prx.componentsHelper.getProp(item.max,'num-other') - prx.componentsHelper.getProp(item.min,'num-other');
		
		if(!prx.editor) {
			prx.draggable._draggables['#'+_id+' .material-slider-button-wrapper'] = Draggable.create('#'+_id+' .material-slider-button-wrapper', {
				type: 'x',
				bounds: { left:  - (dims.height/4), width: parseInt(dims.width)+parseInt(dims.height/4)+(dims.height/4), top: 0, height: 0 },
				onDragStart: function(){
					$(this.target).parents('.box').each(function() {
            			if(typeof(prx.scrollable._scrollables[this.id + '-inner']) != "undefined") {
							prx.scrollable._scrollables[this.id + '-inner'].disable();
            			}
            		});

            		var pos = this.x - this.minX;
					var width = this.maxX - this.minX;
					
            		var progress = Math.ceil((pos / width)*100);
    				var progressTest = (progress*0.01);
					
					if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }        					
			        prx.variables._triggerData['#'+_id]['sliderdragstart'] = { value: Math.round((rangeLength * (progress*0.01)) + parseInt(item.min)) };
					$('#'+_id).trigger('sliderdragstart');
					
					// hack instead of ondrag because greensock on drag only triggers if the item has actually moved
					// so if you are at 0 or 100 it only triggers once, which results in the value not always being updated
					// because of the "actionIsRunning" check
					$(document).on('mousemove.prx-sliderdrag touchmove.prx-sliderdrag', function(){ 
						var pos = $('#' + _id + ' .material-slider-button-wrapper').position().left;
						var width = $('#' + _id).width();
						
						$('#'+_id+' .material-slider-bar-filled').width(pos);
						var progress = Math.ceil((pos / width)*100);
						var progressTest = (progress*0.01);

						if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }        					
				        prx.variables._triggerData['#'+_id]['sliderdrag'] = { value: Math.round((rangeLength * (progress*0.01)) + parseInt(item.min)) };
						$('#'+_id).trigger('sliderdrag');
					});
				},
				onDragEnd: function(){
					
					$(document).off('mousemove.prx-sliderdrag touchmove.prx-sliderdrag');
					
					$(this.target).parents('.box').each(function() { 
            			if(typeof(prx.scrollable._scrollables[this.id + '-inner']) != "undefined") {
							prx.scrollable._scrollables[this.id + '-inner'].enable();
            			}
            		})
            		
            		var pos = this.x - this.minX;
					var width = this.maxX - this.minX;
					
					var progress = Math.ceil((pos / width)*100);
					var progressTest = (progress*0.01);
					
					if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
					prx.variables._triggerData['#'+_id]['sliderdrag'] = { value: Math.round((rangeLength * (progress*0.01)) + parseInt(item.min)) };
			        prx.variables._triggerData['#'+_id]['sliderdragend'] = { value: Math.round((rangeLength * (progress*0.01)) + parseInt(item.min)) };
					$('#'+_id).trigger('sliderdrag');
					$('#'+_id).trigger('sliderdragend');
				},
				onDrag: function(){					
            		var pos = this.x - this.minX;
					var width = this.maxX - this.minX;
					
					var progress = Math.ceil((pos / width)*100);
					$('#'+_id+' .material-slider-badge').html(Math.round((rangeLength * (progress*0.01)) + parseInt(item.min)));
					
					isZero(rangeLength, progress);
				},
				onPress: function() {					
					$('#'+_id+' .material-slider-button.discrete').addClass('active');
					$('#'+_id+' .material-slider-button:not(.discrete)').css({
						'-webkit-transform' : 'scale(1.4)',
						'transform' : 'scale(1.4)'
					});
				},
				onRelease: function() {
					$('#'+_id+' .material-slider-button.discrete').removeClass('active');
					$('#'+_id+' .material-slider-button:not(.discrete)').css({
						'-webkit-transform' : 'scale(1)',
						'transform' : 'scale(1)'
					});
				}
			});
			
			TweenLite.set('#'+_id+' .material-slider-button-wrapper',{x:((dims.width)*(prx.componentsHelper.getProp(item.sliderPosition,'num-percentage')*0.01))});
			$('#'+_id+' .material-slider-badge').html(Math.round((rangeLength * (prx.componentsHelper.getProp(item.sliderPosition,'num-percentage')*0.01)) + parseInt(prx.componentsHelper.getProp(item.min,'num-other'))));
			
			$('#'+_id+' .material-slider-bar-wrapper').hammer().on('mousedown touchstart', function(e){

				var _pageXY = prx.utils.getEventPageXY(e);				
				var _pos = _pageXY.x - $(this).offset().left;
				
				var progress = Math.ceil((_pos / $('#'+_id).width())*100);
				var progressTest = (progress*0.01);
							
				var timeline = new TimelineMax();
				var element1 = $('#'+_id+' .material-slider-bar-filled');
				var element2 = $('#'+_id+' .material-slider-button:not(.discrete)');
				var element3 = element2.parent(); //button wrapper for continuous slider
				var element4 = $('#'+_id+' .material-slider-button.discrete');
				var element5 = element4.parent(); //button wrapper for discrete slider
				var currentPos = prx.draggable._draggables['#'+_id+' .material-slider-button-wrapper'][0].x;
				
				timeline.add(TweenLite.to(element1, 1, {width:_pos}), 0);
				
				if(item.name == 'material_slider_continuous') {
					timeline.add(TweenLite.to(element3, 1, Object.assign({},prx.basicGreensockOptions,{x:_pos})), 0);
					timeline.add(TweenLite.to(element2, 0.3, Object.assign({},prx.basicGreensockOptions,{transform:'scale(1.2)'})), 0);
					timeline.add(TweenLite.to(element2, 0.3, Object.assign({},prx.basicGreensockOptions,{transform:'scale(1)'})), 0.3);
				}
				else {
					timeline.add(TweenLite.to(element5, 1, Object.assign({},prx.basicGreensockOptions,{x:_pos, onUpdate:discreteUpdate})), 0);
					timeline.add(TweenLite.to(element4, 1, Object.assign({},prx.basicGreensockOptions,{onStart:discreteStart, onComplete:discreteEnd})), 0);
				}
								
				prx.draggable._draggables['#'+_id+' .material-slider-button-wrapper'][0].update();

				if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
				
				prx.variables._triggerData['#'+_id]['sliderdragstart'] = { value: Math.round((rangeLength * (progress*0.01)) + parseInt(prx.componentsHelper.getProp(item.min,'num-other'))) };
				prx.variables._triggerData['#'+_id]['sliderdrag'] = { value: Math.round((rangeLength * (progress*0.01)) + parseInt(prx.componentsHelper.getProp(item.min,'num-other'))) };
				prx.variables._triggerData['#'+_id]['sliderdragend'] = { value: Math.round((rangeLength * (progress*0.01)) + parseInt(prx.componentsHelper.getProp(item.min,'num-other'))) };
				$('#'+_id).trigger('sliderdragstart');
				$('#'+_id).trigger('sliderdrag');	
				$('#'+_id).trigger('sliderdragend');
				
				$('#'+_id+' .material-slider-badge').html(Math.round((rangeLength * (progress*0.01)) + parseInt(item.min)));
				
				isZero(rangeLength, progress);
				
			});

			prx.actions.disableFlashActionOnItemTap('#' + _id + ' .material-slider-bar-wrapper', '.flashactiontap-afterdisplay');
			
			function isZero(x,y) {
				if((x * (y*0.01)) + parseInt(prx.componentsHelper.getProp(item.min,'num-other')) == item.min) {
					$('#'+_id+' .material-slider-button:not(.discrete)').css({
						'background-color' : '#eee',
						'border' : (2*prx.componentsHelper.getScale(item.lib)) + 'px solid ' + prx.componentsHelper.getProp(item.barColor,'color-border')
					});	
					
					$('#'+_id+' .material-slider-button.discrete').css({'background-color' : '#333'});	
					$('#'+_id+' .material-slider-button.discrete:active').css({'background-color' : prx.componentsHelper.getProp(item.barColor,'color-background')});	
				}
				else {
					$('#'+_id+' .material-slider-button:not(.discrete)').css({
						'background-color' : prx.componentsHelper.getProp(item.sliderColor,'color-background'),
						'border' : '0 none'
					});	
					
					$('#'+_id+' .material-slider-button.discrete, #'+_id+' .material-slider-button.discrete:active').css({
						'background-color' : prx.componentsHelper.getProp(item.sliderColor,'color-background')
					});	
				}
			}
			function discreteStart() {
				$('#'+_id+' .material-slider-button.discrete').addClass('active');
			}

			function discreteEnd() {
				$('#'+_id+' .material-slider-button.discrete').removeClass('active');
			}
			
			function discreteUpdate() {
				var element1 = $('#'+_id+' .material-slider-button.discrete');
				var element2 = element1.parent(); //button wrapper for discrete slider
				
				var draggable = prx.draggable._draggables['#'+_id+' .material-slider-button-wrapper'][0];
				var width = draggable.maxX - draggable.minX;        		
        		var progress = element2.position().left / width;
				
				var xVal = Math.round((rangeLength * progress) + parseInt(prx.componentsHelper.getProp(item.min,'num-other')));				
				element1.find('.material-slider-badge').html(xVal);
			} 
		}
		else {	
			
			$('#'+_id+' .material-slider-badge').html(Math.round((rangeLength * (prx.componentsHelper.getProp(item.sliderPosition,'num-percentage')*0.01)) + parseInt(prx.componentsHelper.getProp(item.min,'num-other'))));		

			$('#'+_id).find(' .material-slider-button-wrapper').css({ 
				'left': ((dims.width)*(prx.componentsHelper.getProp(item.sliderPosition,'num-percentage')*0.01)) + 'px'
			});
		}
	}
	,propertyGroups:	[
				
		{
			caption: 'Bar',
			properties: [
				[
					{
						caption: 'Thickness'
						,name: 'barThickness'
						,proptype: 'bar-thickness'
						,type: 'combo-select'
						,value: function(item,name) {
							return item.barThickness;
						}
						,values: { min: 2, max: 20, step: 2 }
		      	    	,changeProperty: {  
							caption: 'Thickness',
							rerender: true,
							changeable: false
						} 
					}
				],
				[
					{
						caption: 'Color'
						,name: 'barColor'
						,proptype: 'background-color'
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							return item.barColor;
						}
						,values: prx.comps.materialColors
						,liveUpdate:'background-color'
		      	    	,changeProperty: {  
							caption: 'Color',
							property: 'background-color',
							selector: '.material-slider-bar',
							transitionable: true
						} 
						
					},
					{
						caption: 'Fill Color'
						,name: 'fillBarColor'
						,proptype: 'background-color-2'
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							return item.fillBarColor;
						}
						,values: prx.comps.materialColors 
						,liveUpdate:'background-color'
		      	    	,changeProperty: {  
							caption: 'Fill Color',
							property: 'background-color',
							selector: '.material-slider-bar-filled',
							transitionable: true
						} 
					}
				]
			]
		},
		{
			caption: 'Slider',
	    	properties: [
				[
					{
						caption: 'Color'
						,name: 'sliderColor'
						,proptype: 'background-color-3'
						,type: 'combo-colorpicker'
						,value: function(item,name) {
							return item.sliderColor;
						}
						,values: prx.comps.materialColors
						,liveUpdate:'background-color'
		      	    	,changeProperty: {  
							caption: 'Slider color',
							property: 'background-color',
							selector: '.material-slider-button',
							transitionable: true
						} 
					}
				]
				,[
					{
						caption: 'Original position (%)'
						,name: 'sliderPosition'
						,proptype: 'initial-value-percent'
						,type: 'combo-select'
						,value: function(item,name) {
							return item.sliderPosition;
						}
						,values: { min: 0, max: 100, step: 10 }
						,changeProperty: {  
							caption: 'Slider position',
							rerender: true
						} 
					}
				]
				
			]
		},
		{
			caption: 'Badge',
	    	properties: [
				[
					{
						caption: 'Size'
						,name: 'badgeSize'
						,proptype: 'badge-size'
						,type: 'combo-select'
						,value: function(item,name) {
							return item.badgeSize;
						}
						,values: { min: 20, max: 60, step: 10 }
						,hiddenByDefault: function(item) {
							return (!item.isDiscrete);
						}
						,changeProperty: {  
							caption: 'Badge size',
							transitionable: true
						} 
					},
					{
						caption: 'Range'
						,name: 'min'
						,proptype: 'range-min'
						,type: 'combo-select'
						,value: function(item,name) {
							return item.min;
						}
						,values: { min: 0, max: 100, step: 10 }
						,hiddenByDefault: function(item) {
							return (!item.isDiscrete);
						}
						,changeProperty: {  
							caption: 'Range minimum',
							rerender: true
						} 
					},
					{
						caption: '-'
						,name: 'max'
						,proptype: 'range-max'
						,type: 'combo-select'
						,value: function(item,name) {
							return item.max;
						}
						,values: { min: 0, max: 100, step: 10 }
						,hiddenByDefault: function(item) {
							return (!item.isDiscrete);
						}
						,changeProperty: {  
							caption: 'Range maximum',
							rerender: true
						} 
					}
				],
	    	    [
					{ 
						caption: 'Font', 
						name: 'textSize',
						proptype: 'font-size',
						type: 'combo-select', 
						value: function(item,name) { 
							return item.textSize; 
						}, 
						values: prx.comps.textsize, 
						hiddenByDefault: function(item) {
							return (!item.isDiscrete);
						},
						changeProperty: { 
							caption: 'Text size', 
							selector: '.changeProperty-textSize', 
							property: 'font-size', 
							transitionable: true 
						} 
					},
					{ 
						caption: false, 
						name: 'textColor', 
						proptype: 'font-color',
						type: 'combo-colorpicker', 
						value: function(item,name) { 
							return item.textColor; 
						}, 
						values: prx.comps.materialColors, 
						hiddenByDefault: function(item) {
							return (!item.isDiscrete);
						},
						liveUpdate: 'color', 
						changeProperty: { 
							caption: 'Text color', 
							selector: '.changeProperty-textColor', 
							property: 'color', 
							transitionable: true 
						} 
					}
	    	    ]
			]
		}
	]
};

//TYPE: Toolbar
prx.types.material_toolbar = {
	name: "material_toolbar"
	,onDisplay: function(item,containerid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		if(typeof(item.borderStyle) == "undefined") { item.borderStyle = "solid"; }
		if(typeof(item.text) == "undefined") { item.text = '' }
		if(typeof(item.textProperties) == "undefined") { item.textProperties = [] }

		var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';

		var cR = '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-toolbar">';
		
		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		cR += '#'+_id+' .inner-rec { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-backgrounnd')+'; } ';
		if(prx.componentsHelper.getProp(item.shadowEnabled,'boolean')) {
			cR += '#'+_id+' .inner-rec { box-shadow: 0 '+(1*prx.componentsHelper.getScale(item.lib))+'px '+(3*prx.componentsHelper.getScale(item.lib))+'px '+(1*prx.componentsHelper.getScale(item.lib))+'px '+ prx.componentsHelper.getProp(item.shadowColor,'color-shadow') + '; } ';
		}
		cR += '#'+_id+' .toolbar-text-container { '+_props+' '+prx.componentsHelper.getProp(item.textFont,'font-family')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; text-align: '+prx.componentsHelper.getProp(item.textAlign,'align')+'; color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; }';
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);
		
		cR += '<div id="rec-' + _id + '" class="inner-rec liveUpdate-backgroundColor liveUpdate-borderColor liveUpdate-shadowColor changeProperty-backgroundColor changeProperty-borderColor liveUpdate-shadowColor changeProperty-borderWidth changeProperty-borderStyle">';
		cR += '<div class="toolbar-text-container liveUpdate-textColor changeProperty-textColor changeProperty-textFont changeProperty-textSize changeProperty-textProperties changeProperty-textAlign">';
		cR += '<span data-editableproperty="text">' + prx.componentsHelper.getProp(item.text,'text-textarea') + '</span>';
		cR += '</div>';
		cR += '</div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,interactions: [ prx.commonproperties.actions ]
	,editableProperties: [
		{
	    	caption: 'Text'
	    	,name: 'text'
	    	,type: 'textarea'
	    	,value: function(item,name) {
	    		if(typeof(item.text) == "undefined") { item.text = '' }
	    		return item.text;
	    	},
      		changeProperty: {
				caption: 'Text',
				property: 'text',
				selector: '.toolbar-text-container span',
				transitionable: false
  			}
	    }
	]
	,propertyGroups: [
		{
			caption: 'Text',
			properties: [
				[
					prx.commonproperties.textFontRichText('font-family','text')
					,prx.commonproperties.textSizeRichText('font-size','text')
					,prx.commonproperties.materialTextColorRichText('color','text')
				],[
					prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'text')
					,prx.commonproperties.textAlignRichText('text-align','text')
				]
			]
		},
		{
			caption: 'Style',
			properties: [
      			[
      			 	prx.commonproperties.materialBackgroundColor
      			],
      			[
					{
						caption: 'Shadow?'
						,name: 'shadowEnabled'
						,type: 'onoff'
						,value: function(item,name) {
							if(typeof(item.shadowEnabled)=="undefined") {
								return false;
							}
							return item.shadowEnabled;
						}
						,onChange: function(item){
							if(item.shadowEnabled) {
								$('#property-shadowColor').show();
							} else {
								$('#property-shadowColor').hide();
							}	
						}				
						,changeProperty: {
							caption: 'Shadow toggle',
							rerender: true
						}
					},
					{ 
						caption: false, 
						name: 'shadowColor', 
						proptype: 'shadow-color', 
						type: 'combo-colorpicker',
						value: function(item,name) { 
							return item.shadowColor; 
						}, 
						values: prx.comps.materialColors, 
						hiddenByDefault: function(item) {
							return (!item.shadowEnabled);
						},
						changeProperty: { 
							caption: 'Shadow', 
							rerender: true, 
							changeable: false
						} 
					}
	      		]		      		
	      	]
	   }
	]
	
};

//TYPE: RECTANGLE WITH SHADOW
prx.types.material_rectangle_shadow = {
	name: "material_rectangle_shadow"
	,onDisplay: function(item,containerid,symbol) {
		
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		if(prx.componentsHelper.getProp(item.borderRadius,'num-border-radius') == parseInt(prx.componentsHelper.getProp(item.borderRadius,'num-border-radius'))) { item.borderRadius += 'px'; }
		if(typeof(item.borderStyle) == "undefined") { item.borderStyle = "solid"; }
		if(typeof(item.text) == "undefined") { item.text = '' }
		if(typeof(item.textProperties) == "undefined") { item.textProperties = [] }

		var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';
				
		var cR = '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-rectangle-shadow">';
		
		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		cR += '#'+_id+' .inner-rec { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; box-shadow: 0 1px 1px 1px '+ prx.componentsHelper.getProp(item.shadowColor,'color-shadow') + '; border: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px '+prx.componentsHelper.getProp(item.borderStyle,'border-type')+' ' + prx.componentsHelper.getProp(item.borderColor,'color-border') + '; border-radius: '+prx.componentsHelper.getProp(item.borderRadius,'border-radius')+'; } ';
		cR += '#'+_id+' .rectangle-shadow-text-container { '+_props+' '+prx.componentsHelper.getProp(item.textFont,'font-family')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; text-align: '+prx.componentsHelper.getProp(item.textAlign,'align')+'; color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; }';
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);
		
		cR += '<div id="rec-' + _id + '" class="inner-rec liveUpdate-backgroundColor liveUpdate-borderColor changeProperty-backgroundColor changeProperty-borderColor changeProperty-borderWidth changeProperty-borderStyle">';
		cR += '<div class="rectangle-shadow-text-container liveUpdate-textColor changeProperty-textColor changeProperty-textFont changeProperty-textSize changeProperty-textProperties changeProperty-textAlign">';
		cR += '<span data-editableproperty="text">' + prx.componentsHelper.getProp(item.text,'text-textarea') + '</span>';
		cR += '</div>';
		cR += '</div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,interactions: [ prx.commonproperties.actions ]
	,editableProperties: [
		{
	    	caption: 'Text'
	    	,name: 'text'
	    	,type: 'textarea'
	    	,value: function(item,name) {
	    		if(typeof(item.text) == "undefined") { item.text = '' }
	    		return item.text;
	    	},
      		changeProperty: {
				caption: 'Text',
				property: 'text',
				selector: '.rectangle-shadow-text-container span',
				transitionable: false
  			}
	    }
	]
	,propertyGroups: [
		{
		caption: 'Text',
		properties: [
			[
				prx.commonproperties.textFontRichText('font-family','text')
				,prx.commonproperties.textSizeRichText('font-size','text')
				,prx.commonproperties.materialTextColorRichText('color','text')
			],[
				prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'text')
				,prx.commonproperties.textAlignRichText('text-align','text')
			]
		]
		},
		{
			caption: 'Style',
			properties: [
				[
					prx.commonproperties.materialBackgroundColor
				],
				[
					prx.commonproperties.borderWidth,
					prx.commonproperties.borderStyle,
					prx.commonproperties.materialBorderColor
				],
				[
					{
						caption: '<span class="icon icon-border-radius" title="Border radius"></span>',
						name: 'borderRadius',
						proptype: 'border-radius',
						type: 'combo-select',
						value: function(item,name) {
							if(item.borderRadius == parseInt(item.borderRadius)) { return item.borderRadius += 'px'; }
							return item.borderRadius;
						},
						values: [{ value: "0px", displayValue: "0px"}, { value: "1px", displayValue: "1px"}, { value: "2px", displayValue: "2px"}, { value: "3px", displayValue: "3px"}, { value: "4px", displayValue: "4px"}, { value: "5px", displayValue: "5px"}, { value: "6px", displayValue: "6px"}, { value: "7px", displayValue: "7px"}, { value: "8px", displayValue: "8px"}, { value: "9px", displayValue: "9px"}, { value: "10px", displayValue: "10px"}, { value: "11px", displayValue: "11px"}, { value: "12px", displayValue: "12px"}, { value: "13px", displayValue: "13px"}, { value: "14px", displayValue: "14px"}, { value: "15px", displayValue: "15px"}, { value: "16px", displayValue: "16px"}, { value: "17px", displayValue: "17px"},{ value: "18px", displayValue: "18px"}, { value: "19px", displayValue: "19px"}, { value: "20px", displayValue: "20px"}],
						expandedValues: ["tl", "tr", "bl", "br"],
						changeProperty: {
							caption: 'Border Radius',
							selector: '.inner-rec',
							property: 'border-radius',
							transitionable: true
						}
					}
				],
				[
					prx.commonproperties.materialShadowColor
				]
	      	]
	   	}
	]
};

/* STATUSBAR */
prx.types.material_statusbar = {
	name: "material_statusbar"
	,onDisplay: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item,symbol);

		var now = new Date();

		var cR = '';
		cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-statusbar" '+((prx.componentsHelper.getProp(item.overlay,'boolean'))? 'data-mpoverlay="1"': '')+'>';

		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		cR += '#'+_id+' .material-statusbar-inner { font-size: '+Math.round(dims.height/2)+'px; background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; color: '+prx.componentsHelper.getProp(item.foregroundColor,'color-text')+'; }';
		cR += '#'+_id+' .material-statusbar-inner>div:not(.material-statusbar-time) { width: '+dims.height+'px;}';
		cR += '#'+_id+' .material-wifi-quarter { background-color: '+prx.componentsHelper.getProp(item.foregroundColor,'color-background')+';}';
		cR += '#'+_id+' .material-wifi-quarter.outer { width: '+Math.round(dims.height/2)+'px; border-radius: '+prx.componentsHelper.getProp(Math.round(dims.height/2),'border-radius')+' 0 0 0;}';
		cR += '#'+_id+' .material-wifi-quarter.inner { width: '+Math.round(dims.height/4)+'px; border-radius: '+prx.componentsHelper.getProp(Math.round(dims.height/4),'border-radius')+' 0 0 0;}';
		cR += '#'+_id+' .material-signal-triangle.outer { border-bottom: '+Math.round(dims.height/2)+'px solid '+prx.componentsHelper.getProp(item.foregroundColor,'color-border')+'; border-left: '+Math.round(dims.height/2)+'px solid transparent;}';
		cR += '#'+_id+' .material-signal-triangle.inner { border-bottom: '+Math.round(dims.height/4)+'px solid '+prx.componentsHelper.getProp(item.foregroundColor,'color-border')+'; border-left: '+Math.round(dims.height/4)+'px solid transparent;}';
		cR += '#'+_id+' .material-battery-container { width: '+Math.round(dims.height/3)+'px; background-color: '+prx.componentsHelper.getProp(item.foregroundColor,'color-background')+';}';
		cR += '#'+_id+' .material-battery-tip { width: '+Math.round(dims.height/6)+'px; margin-left: -'+Math.round(dims.height/12)+'px; background-color: '+prx.componentsHelper.getProp(item.foregroundColor,'color-background')+';}';
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

		cR += '<div class="material-statusbar-inner liveUpdate-backgroundColor liveUpdate-foregroundColor-color changeProperty-backgroundColor changeProperty-foregroundColor-color">';
		cR += '<div class="material-statusbar-wifi">';
		cR += '<div class="material-wifi-quarter outer liveUpdate-foregroundColor-background-color changeProperty-foregroundColor-background-color"></div>';
		cR += '<div class="material-wifi-quarter inner liveUpdate-foregroundColor-background-color changeProperty-foregroundColor-background-color"></div>';
		cR += '</div>';
		cR += '<div class="material-statusbar-signal">';
		cR += '<div class="material-signal-triangle outer liveUpdate-foregroundColor-border-bottom-color changeProperty-foregroundColor-border-color"></div>';
		cR += '<div class="material-signal-triangle inner liveUpdate-foregroundColor-border-bottom-color changeProperty-foregroundColor-border-color"></div>';
		cR += '</div>';		
		cR += '<div class="material-statusbar-battery-life" >';
		cR += '<div class="material-battery-container outer liveUpdate-foregroundColor-background-color changeProperty-foregroundColor-background-color"><div class="material-battery-tip liveUpdate-foregroundColor-background-color changeProperty-foregroundColor-background-color"></div></div>';
		cR += '<div class="material-battery-container inner liveUpdate-foregroundColor-background-color changeProperty-foregroundColor-background-color"></div>';
		cR += '</div>';
		cR += '<div class="material-statusbar-time">'+("0" + now.getHours()).substr(-2,2)+':'+("0" + now.getMinutes()).substr(-2,2)+'</div>';
		cR += '</div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,onResize: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var dims = prx.componentsHelper.getRealDims(item, symbol);

		$('#'+_id).find('.material-statusbar-inner').css('font-size', Math.round(dims.height/2)+'px')
		$('#'+_id).find('.material-statusbar-inner>div:not(.material-statusbar-time)').css('width', dims.height+'px')
		
		$('#'+_id).find('.material-wifi-quarter.outer').css({
			'width': Math.round(dims.height/2)+'px',
			'border-radius': Math.round(dims.height/2)+'px 0 0 0'
		});
		$('#'+_id).find('.material-wifi-quarter.inner').css({
			'width': Math.round(dims.height/4)+'px',
			'border-radius': Math.round(dims.height/4)+'px 0 0 0'
		});
		
		$('#'+_id).find('.material-signal-triangle.outer').css({
			'border-bottom': Math.round(dims.height/2)+'px solid '+prx.componentsHelper.getProp(item.foregroundColor,'color-border'), 
			'border-left': Math.round(dims.height/2)+'px solid transparent'
		});
		$('#'+_id).find('.material-signal-triangle.inner').css({
			'border-bottom': Math.round(dims.height/4)+'px solid '+prx.componentsHelper.getProp(item.foregroundColor,'color-border'), 
			'border-left': Math.round(dims.height/4)+'px solid transparent'
		});
		
		$('#'+_id).find('.material-battery-container').css({
			'width': Math.round(dims.height/3)+'px'
		});
		$('#'+_id).find('.material-battery-tip').css({
			'width': Math.round(dims.height/9)+'px',
			'margin-left': '-'+Math.round(dims.height/18)+'px'
		});
	}
	,propertyGroups: [
  		{
  		    caption: 'Style',
  		    properties: [
  		        [
  					prx.commonproperties.materialBackgroundColor,
  					{
  						caption: 'Foreground',
  						name: 'foregroundColor',
  						proptype: 'foreground-color',
  						type: 'colorpicker',
  						value: function(item,name) { return item.foregroundColor; },
  						//help: 'Will always revert to white in native app mode',
  						liveUpdate: 'color,border-bottom-color,background-color',
  						changeProperty: {
  							caption: 'Foreground color',
  							rerender: true
  						}
  					}
  				]
  			]
  		},
  		{
  			caption: 'Advanced',
  			properties: [[
  				{
  					caption: 'Position fixed on transitions'
  					,name: 'overlay'
  					,type: 'onoff'
  					,value: function(item,name) {
  						if(typeof(item.overlay)=="undefined") {
  							return false;
  						}
  						return item.overlay;
  					}

  					,changeProperty: {
  						caption: 'Position fixed',
  						rerender: true
  					}
  				}
  			]]
  		}
  	]
};


/* NAVIGATIONBAR */
prx.types.material_navigationbar = {
	name: "material_navigationbar"
	,onDisplay: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		var cR = '';
		cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-material-navigationbar" '+((prx.componentsHelper.getProp(item.overlay,'boolean'))? 'data-mpoverlay="1"': '')+'>';

		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		cR += '#'+_id+' .material-navigationbar-inner { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; }';
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

		cR += '<div class="material-navigationbar-inner liveUpdate-backgroundColor">';
		cR += '<div class="material-navigationbar-button" style="background-image: url('+prx.componentsHelper.getProp(item.icon1,'asset')+')"></div>';
		cR += '<div class="material-navigationbar-button" style="background-image: url('+prx.componentsHelper.getProp(item.icon2,'asset')+')"></div>';
		cR += '<div class="material-navigationbar-button" style="background-image: url('+prx.componentsHelper.getProp(item.icon3,'asset')+')"></div>';

		cR += '</div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';
		return cR;
	}
	,propertyGroups: [
		{
		    caption: 'Style',
		    properties: [
		        [
					prx.commonproperties.materialBackgroundColor
				]
			]
		},
		{
		    caption: 'Icons',
		    properties: [
		        [
					{
						caption: 'Left icon',
						name: 'icon1',
						type: 'combo-asset',
						displayValue: function(item,name) {
							if(typeof(item.icon1) == "undefined" || item.icon1.fileId == '') {
								return 'No icon selected';
							}
							return item.icon1.name;
						}
						,value: function(item,name) {
							return JSON.stringify({
								allow: 'image',
								asset: item.icon1
							});
						}
						,changeProperty: {
	                		caption: 'Left icon',
	                		rerender: true
	                	}
					},
					{
						caption: 'Middle icon',
						name: 'icon2',
						type: 'combo-asset',
						displayValue: function(item,name) {
							if(typeof(item.icon2) == "undefined" || item.icon2.fileId == '') {
								return 'No icon selected';
							}
							return item.icon2.name;
						}
						,value: function(item,name) {
							return JSON.stringify({
								allow: 'image',
								asset: item.icon2
							});
						}
						,changeProperty: {
	                		caption: 'Middle icon',
	                		rerender: true
	                	}
					},
					{
						caption: 'Right icon',
						name: 'icon3',
						type: 'combo-asset',
						displayValue: function(item,name) {
							if(typeof(item.icon3) == "undefined" || item.icon3.fileId == '') {
								return 'No icon selected';
							}
							return item.icon3.name;
						}
						,value: function(item,name) {
							return JSON.stringify({
								allow: 'image',
								asset: item.icon3
							});
						}
						,changeProperty: {
	                		caption: 'Right icon',
	                		rerender: true
	                	}
					}
				]
			]
		},
		{
			caption: 'Advanced',
			properties: [[
				{
					caption: 'Position fixed on transitions'
					,name: 'overlay'
					,type: 'onoff'
					,value: function(item,name) {
						if(typeof(item.overlay)=="undefined") {
							return false;
						}
						return item.overlay;
					}

					,changeProperty: {
						caption: 'Position fixed',
						rerender: true
					}
				}
			]]
		}
	]
};





/************************************************************************************************/
/************************************* COMPONENTS (OBJECTS) *************************************/
/************************************************************************************************/



/****** BOTTOM SHEETS ******/

//TYPE: ACTION BOTTOM SHEET
prx.components.material_bottomsheet_action = {
    name: 'material_bottomsheet_action'
    ,type: 'material_bottomsheet_action'
    ,lib: _library
    ,caption: 'Action Bottom Sheet'
    ,icon: '-700px -300px'
    ,helper: prx.url.devices+ _path + 'bottomsheet_action/helper.png'
    ,width: "full"
    ,height: 235*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,dividerColor: 'bbbbbb'
    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor:  '000000'
    ,textProperties: []
    ,subtitleSize: 14*prx.componentsHelper.getScale(_library)
    ,subtitleColor: '999999'
    ,subtitleProperties: []
    ,backgroundColor: 'ffffff'
    ,actionTitleColor: '757575'
    ,infoTitleColor: '000000'
    ,listitems: [
        {
            text: 'Create'
            ,itemtype: 'actionTitle'
            ,subtitle: ''
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,leftIcon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,rightIcon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,actions: []
        }
        ,{
            text: 'Folder'
            ,itemtype: 'actionItem'
            ,subtitle: ''
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,leftIcon: {"fileId":"afde2dd3c533f18d272ce79af39c5cf8.svg","name":"folder.svg","assetType":"icon","bucketsource":"static","url":"f1424098398753/87131ba67c3ed7c7a8b7f1b6dee8ea89.svg","targetSrc":"generated/87131ba67c3ed7c7a8b7f1b6dee8ea89_7d7d7d.svg","color":"757575"}
            ,rightIcon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,actions: []
        }
        ,{
            text: ''
            ,itemtype: 'separator'
            ,subtitle: ''
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,leftIcon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,rightIcon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,actions: []
        }
        ,{
            text: 'Upload photos or videos'
            ,itemtype: 'actionItem'
            ,subtitle: ''
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,leftIcon: {"fileId":"c36808554b6896f91ea6d3ba549ac5b0.svg","name":"cloud_upload.svg","assetType":"icon","bucketsource":"static","url":"f1424098398753/67393b9c0b365f46f4c33c934a964a1a.svg","targetSrc":"generated/67393b9c0b365f46f4c33c934a964a1a_7d7d7d.svg","color":"757575"}
            ,rightIcon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,actions: []
        }
    ]
    ,dynamicSizeExpand: 'v'
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
};

//TYPE: INFO BOTTOM SHEET
prx.components.material_bottomsheet_info = {
    name: 'material_bottomsheet_info'
    ,type: 'material_bottomsheet_info'
    ,lib: _library
    ,caption: 'Info Bottom Sheet'
    ,icon: '-800px -300px'
    ,helper: prx.url.devices+ _path + 'bottomsheet_info/helper.png'
    ,width: "full"
    ,height: 235*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,dividerColor: 'bbbbbb'
    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor:  '000000'
    ,textProperties: []
    ,subtitleSize: 14*prx.componentsHelper.getScale(_library)
    ,subtitleColor: '999999'
    ,subtitleProperties: []
    ,backgroundColor: 'ffffff'
    ,actionTitleColor: '757575'
    ,infoTitleColor: '000000'
    ,listitems: [
        {
            text: 'Contact Name'
            ,itemtype: 'infoTitle'
            ,subtitle: ''
            ,thumbnail: {"fileId":"a338528b56a2f91841e8b97b1dd11fd9.png","assetType":"gallery","bucketsource":"static","name":" avatar_female.png", "url":"f1353077251107/8ef69ccff0f6e97618dde27ce903cb15.png"}
            ,leftIcon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,rightIcon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,actions: []
        }
        ,{
            text: '(650)555-1234'
            ,itemtype: 'infoItem'
            ,subtitle: 'Mobile'
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,leftIcon: {"fileId":"9a81f4137913304aad2b01c7122b0607.svg","name":"phone.svg","assetType":"icon","bucketsource":"static","url":"f1424091903407/3bfcda2308acf98adb9d2ffd25991048.svg","targetSrc":"generated/3bfcda2308acf98adb9d2ffd25991048_2196f3.svg","color":"2196F3"}
            ,rightIcon: {"fileId":"aed7a2cd999129a405fb18392da8aa79.svg","name":"google__x2B_.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/124ae0d28445f3f091c420e879dd6793.svg"}
            ,actions: []
        }
        ,{
            text: ''
            ,itemtype: 'separator'
            ,subtitle: ''
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,leftIcon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,rightIcon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,actions: []
        }
        ,{
            text: 'contact_name@sample.com'
            ,itemtype: 'infoItem'
            ,subtitle: 'Personal'
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,leftIcon: {"fileId":"7c8e75d29b826513d12f201f6f7d4294.svg","name":"email.svg","assetType":"icon","bucketsource":"static","url":"f1424091903407/8ccae96eb3d9a10429594a4a6b7afdf8.svg","targetSrc":"generated/8ccae96eb3d9a10429594a4a6b7afdf8_2196f3.svg","color":"2196F3"}
            ,rightIcon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,actions: []
        }
    ]
    ,dynamicSizeExpand: 'v'
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
};

//TYPE: BOTTOM SHEET
prx.components.material_bottomsheet_complex = {
    name: 'material_bottomsheet_complex'
    ,type: 'material_bottomsheet_complex'
    ,lib: _library
    ,caption: 'Complex Bottom Sheet'
    ,icon: '-900px -300px'
    ,helper: prx.url.devices+ _path + 'bottomsheet_complex/helper.png'
    ,width: "full"
    ,height: 300*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,dividerColor: 'bbbbbb'
    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor:  '000000'
    ,textProperties: []
    ,subtitleSize: 14*prx.componentsHelper.getScale(_library)
    ,subtitleColor: '999999'
    ,subtitleProperties: []
    ,backgroundColor: 'ffffff'
    ,actionTitleColor: '757575'
    ,infoTitleColor: '000000'
    ,listitems: [
        {
            text: 'Contact Name'
            ,itemtype: 'infoTitle'
            ,subtitle: ''
            ,thumbnail: {"fileId":"a338528b56a2f91841e8b97b1dd11fd9.png","assetType":"gallery","bucketsource":"static","name":" avatar_female.png", "url": "f1353077251107/8ef69ccff0f6e97618dde27ce903cb15.png"}
            ,leftIcon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,rightIcon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,actions: []
        }
        ,{
            text: '(650)555-1234'
            ,itemtype: 'infoItem'
            ,subtitle: 'Mobile'
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,leftIcon: {"fileId":"9a81f4137913304aad2b01c7122b0607.svg","name":"phone.svg","assetType":"icon","bucketsource":"static","url":"f1424091903407/3bfcda2308acf98adb9d2ffd25991048.svg","targetSrc":"generated/3bfcda2308acf98adb9d2ffd25991048_2196f3.svg","color":"2196F3"}
            ,rightIcon: {"fileId":"aed7a2cd999129a405fb18392da8aa79.svg","name":"google__x2B_.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/124ae0d28445f3f091c420e879dd6793.svg",}
            ,actions: []
        }
        ,{
            text: ''
            ,itemtype: 'separator'
            ,subtitle: ''
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,leftIcon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,rightIcon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,actions: []
        }
        ,{
            text: 'Update contact picture'
            ,itemtype: 'actionTitle'
            ,subtitle: ''
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,leftIcon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,rightIcon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,actions: []
        }
        ,{
            text: 'Upload photos'
            ,itemtype: 'actionItem'
            ,subtitle: ''
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,leftIcon: {"fileId":"c36808554b6896f91ea6d3ba549ac5b0.svg","name":"cloud_upload.svg","assetType":"icon","bucketsource":"static","url":"f1424098398753/67393b9c0b365f46f4c33c934a964a1a.svg","targetSrc":"generated/67393b9c0b365f46f4c33c934a964a1a_7d7d7d.svg","color":"757575"}
            ,rightIcon: {"fileId":"","name":"","assetType":"icon","url":""}
            ,actions: []
        }
    ]
    ,dynamicSizeExpand: 'v'
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
};



/****** BUTTON COMPONENTS ******/

//TYPE: ACTION BUTTON
prx.components.material_button_action = {
    name: 'material_button_action'
    ,type: 'material_button_raised'
    ,lib: _library
    ,caption: 'Action Button'
    ,icon: '-1000px -300px'
    ,helper: prx.url.devices+ _path + 'button_action/helper.png'
    ,width: 56*prx.componentsHelper.getScale(_library)
    ,height: 56*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: '2196F3'
    ,text: 'BUTTON'
    ,textFont: 'Roboto Medium, sans-serif'
    ,textSize: 14*prx.componentsHelper.getScale(_library)
    ,textColor: 'FFFFFF'
    ,textProperties: ['bold']
    ,shadowColor: 'rgba(0, 0, 0, 0.2)'
    ,imgSrc: {"fileId":"afbf7d78ca89fe2f05ab67bc7ee7a8d2.svg","name":"add.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/b4468c977d5a8083541353d264cbb89d.svg","targetSrc":"generated/b4468c977d5a8083541353d264cbb89d_ffffff.svg","color":"ffffff"}
    ,actions: []
    ,aspectratio: true
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
};

//TYPE: RAISED BUTTON
prx.components.material_button_raised = {
    name: 'material_button_raised'
    ,type: 'material_button_raised'
    ,lib: _library
    ,caption: 'Raised Button'
    ,icon: '-1100px -300px'
    ,helper: prx.url.devices+ _path + 'button_raised/helper.png'
    ,width: 112*prx.componentsHelper.getScale(_library)
    ,height: 36*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: '2196F3'
    ,text: 'BUTTON'
    ,textFont: 'Roboto Medium, sans-serif'
    ,textSize: 14*prx.componentsHelper.getScale(_library)
    ,textColor: 'FFFFFF'
    ,textProperties: ['bold']
    ,shadowColor: 'rgba(0, 0, 0, 0.2)'
    ,imgSrc: {"fileId":"","name":"","assetType":"icon","url":""}
    ,actions: []
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
};

//TYPE: FLAT BUTTON
prx.components.material_button_flat = {
    name: 'material_button_flat'
    ,type: 'material_button_raised'
    ,lib: _library
    ,caption: 'Flat Button'
    ,icon: '-1200px -300px'
    ,helper: prx.url.devices+ _path + 'button_flat/helper.png'
    ,width: 112*prx.componentsHelper.getScale(_library)
    ,height: 36*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: 'transparent'
    ,text: 'BUTTON'
    ,textFont: 'Roboto Medium, sans-serif'
    ,textSize: 14*prx.componentsHelper.getScale(_library)
    ,textColor:  '2196F3'
    ,textProperties: ['bold']
    ,shadowColor: 'transparent'
    ,imgSrc: {"fileId":"","name":"","assetType":"icon","url":""}
    ,actions: []
    ,rippleEffect: true
    ,rippleEffectType: 'custom'
    ,rippleEffectColor: 'rgba(153,153,153,0.4)'
};

//TYPE: ICON BUTTON
prx.components.material_button_icon = {
    name: 'material_button_icon'
    ,type: 'material_button_raised'
    ,lib: _library
    ,caption: 'Icon Button'
    ,icon: '-1300px -300px'
    ,helper: prx.url.devices+ _path + 'button_icon/helper.png'
    ,width: 56*prx.componentsHelper.getScale(_library)
    ,height: 56*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: 'transparent'
    ,text: 'BUTTON'
    ,textFont: 'Roboto Medium, sans-serif'
    ,textSize: 14*prx.componentsHelper.getScale(_library)
    ,textColor: 'FFFFFF'
    ,textProperties: ['bold']
    ,shadowColor: 'transparent'
    ,imgSrc: {"fileId":"987371e0c84e1e3877c0b8f6aea57272.svg","name":"home.svg","assetType":"icon","bucketsource":"static","url":"f1424091456673/caeebe7f3a62939528c6a4ed009de42c.svg","targetSrc":"generated/caeebe7f3a62939528c6a4ed009de42c_7d7d7d.svg","color":"757575"}
    ,actions: []
    ,aspectratio: true
    ,rippleEffect: true
    ,rippleEffectType: 'custom'
    ,rippleEffectColor: 'rgba(153,153,153,0.4)'
};

//TYPE: ACTION OVERFLOW
prx.components.material_actionoverflow = {
    name: 'material_actionoverflow'
    ,type: 'material_actionoverflow'
    ,lib: _library
    ,caption: 'Action Overflow'
    ,icon: '-1400px -300px'
    ,helper: prx.url.devices+_path + 'actionoverflow/helper.png'
    ,width: 56*prx.componentsHelper.getScale(_library)
    ,height: 56*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,actionOverflowColor: '757575'
    ,actionbarActionOverflowActions: []
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
};

//TYPE: MORPHING ICON
prx.components.material_morphing_lines = {
    name: 'material_morphing_lines'
    ,type: 'material_morphing_lines'
    ,lib: _library
    ,caption: 'Morphing Icon'
    ,icon: '-1500px -300px'
    ,helper: prx.url.devices+ _path + 'morphing_lines/helper.png'
    ,width: 56*prx.componentsHelper.getScale(_library)
    ,height: 56*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: '757575'
    ,backgroundColorActive: '757575'
    ,active: false
    ,itemtype: 'lines-close'
    ,checkboxActionsOnActive: []
    ,checkboxActionsOnDeactive: []
    ,aspectratio: true
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
    ,aspectratio: true
};

//TYPE: MORPHING ICON CLOSE
prx.components.material_morphing_lines_close = {
    name: 'material_morphing_lines_close'
    ,type: 'material_morphing_lines'
    ,lib: _library
    ,caption: 'Morphing Icon Close'
    ,icon: '-1500px -300px'
    ,helper: prx.url.devices+ _path + 'morphing_lines/helper.png'
    ,width: 56*prx.componentsHelper.getScale(_library)
    ,height: 56*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: '757575'
    ,backgroundColorActive: '757575'
    ,active: false
    ,itemtype: 'lines-close'
    ,checkboxActionsOnActive: []
    ,checkboxActionsOnDeactive: []
    ,aspectratio: true
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
    ,aspectratio: true
};

//TYPE: MORPHING ICON ARROW LEFT
prx.components.material_morphing_lines_arrow = {
    name: 'material_morphing_lines_arrow'
    ,type: 'material_morphing_lines'
    ,lib: _library
    ,caption: 'Morphing Icon Arrow'
    ,icon: '-1600px -300px'
    ,helper: prx.url.devices+ _path + 'morphing_lines/helper.png'
    ,width: 56*prx.componentsHelper.getScale(_library)
    ,height: 56*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: '757575'
    ,backgroundColorActive: '757575'
    ,active: false
    ,itemtype: 'lines-arrow'
    ,checkboxActionsOnActive: []
    ,checkboxActionsOnDeactive: []
    ,aspectratio: true
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
    ,aspectratio: true
};



/****** CHIP COMPONENTS ******/

//TYPE: COMPLEX CHIP
prx.components.material_chip_complex = {
    name: 'material_chip_complex'
    ,type: 'material_chip_complex'
    ,lib: _library
    ,caption: 'Text Chip'
    ,icon: '-1700px -300px'
    ,helper: prx.url.devices+ _path + 'chip_complex/helper.png'
    ,width: 170*prx.componentsHelper.getScale(_library)
    ,height: 32*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: '#e0e0e0'
    ,iconBackgroundColor: '#bcbcbc'
    ,text: 'Text chip'
    ,textFont: 'Roboto Medium, sans-serif'
    ,textSize: 14*prx.componentsHelper.getScale(_library)
    ,textColor: 'rgba(0,0,0,0.87)'
    ,initials: 'AB'
    ,initialsFont: 'Roboto Medium, sans-serif'
    ,initialsSize: 14*prx.componentsHelper.getScale(_library)
    ,initialsColor: '#ffffff'
    ,imgSrc: {"fileId":"","name":"","assetType":"icon","url":""}
    ,actions: []
};

//TYPE: TEXT CHIP
prx.components.material_chip = {
    name: 'material_chip'
    ,type: 'material_chip'
    ,lib: _library
    ,caption: 'Text Chip'
    ,icon: '-1700px -300px'
    ,helper: prx.url.devices+ _path + 'chip_text/helper.png'
    ,width: 110*prx.componentsHelper.getScale(_library)
    ,height: 32*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: '#e0e0e0'
    ,text: 'Text chip'
    ,textFont: 'Roboto Medium, sans-serif'
    ,textSize: 14*prx.componentsHelper.getScale(_library)
    ,textColor: 'rgba(0,0,0,0.87)'
    ,actions: []
};

//TYPE: AVATAR CHIP
prx.components.material_chip_with_avatar = {
    name: 'material_chip_with_avatar'
    ,type: 'material_chip_with_avatar'
    ,lib: _library
    ,caption: 'Image Avatar Chip'
    ,icon: '-1800px -300px'
    ,helper: prx.url.devices+ _path + 'chip_image/helper.png'
    ,width: 195*prx.componentsHelper.getScale(_library)
    ,height: 32*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: '#e0e0e0'
    ,iconBackgroundColor: 'transparent'
    ,text: 'Image Avatar chip'
    ,textFont: 'Roboto Medium, sans-serif'
    ,textSize: 14*prx.componentsHelper.getScale(_library)
    ,textColor: 'rgba(0,0,0,0.87)'
    ,imgSrc: {"fileId":"a338528b56a2f91841e8b97b1dd11fd9.png","assetType":"gallery","bucketsource":"static","name":" avatar_female.png", "url":"f1353077251107/8ef69ccff0f6e97618dde27ce903cb15.png"}
    ,actions: []
};

//TYPE: ICON CHIP
prx.components.material_chip_with_icon = {
    name: 'material_chip_with_icon'
    ,type: 'material_chip_with_icon'
    ,lib: _library
    ,caption: 'Icon Avatar Chip'
    ,icon: '-1900px -300px'
    ,helper: prx.url.devices+ _path + 'chip_icon/helper.png'
    ,width: 180*prx.componentsHelper.getScale(_library)
    ,height: 32*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: '#e0e0e0'
    ,iconBackgroundColor: '#bcbcbc'
    ,text: 'Icon Avatar chip'
    ,textFont: 'Roboto Medium, sans-serif'
    ,textSize: 14*prx.componentsHelper.getScale(_library)
    ,textColor: 'rgba(0,0,0,0.87)'
    ,imgSrc: {"fileId":"dbc65ee357fed475fc5f86a0fe592023.svg","name":"person_outline.svg","assetType":"icon","bucketsource":"static","url":"f1424098664439/6bb1d6edc65fba70f0f025e2a9c5d7e5.svg","targetSrc":"generated/dbc65ee357fed475fc5f86a0fe592023_ffffff.svg","color":"FFFFFF"}
    ,actions: []
};

//TYPE: INITIALS CHIP
prx.components.material_chip_with_initials = {
    name: 'material_chip_with_initials'
    ,type: 'material_chip_with_initials'
    ,lib: _library
    ,caption: 'Initials Chip'
    ,icon: '0 -400px'
    ,helper: prx.url.devices+ _path + 'chip_initials/helper.png'
    ,width: 150*prx.componentsHelper.getScale(_library)
    ,height: 32*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: '#e0e0e0'
    ,iconBackgroundColor: '#bcbcbc'
    ,text: 'Initials chip'
    ,textFont: 'Roboto Medium, sans-serif'
    ,textSize: 14*prx.componentsHelper.getScale(_library)
    ,textColor: 'rgba(0,0,0,0.87)'
    ,initials: 'AB'
    ,initialsFont: 'Roboto Medium, sans-serif'
    ,initialsSize: 16*prx.componentsHelper.getScale(_library)
    ,initialsColor: '#ffffff'
    ,actions: []
};



/****** DIALOGS & MENUS ******/

//TYPE: SIMPLE ALERT DIALOG
prx.components.material_dialog_alert_simple = {
    name: 'material_dialog_alert_simple'
    ,type: 'material_dialog_alert_simple'
    ,lib: _library
    ,caption: 'Simple Alert Dialog'
    ,icon: '-100px -400px'
    ,helper: prx.url.devices+ _path + 'alert_dialog_simple/helper.png'
    ,width: 282*prx.componentsHelper.getScale(_library)
    ,height: 143*prx.componentsHelper.getScale(_library)
    ,resizable : true

    ,titleFont: 'Roboto Regular, sans-serif'
    ,titleSize: 20*prx.componentsHelper.getScale(_library)
    ,titleColor:  '000000'
    ,titleProperties: []
    ,title: ''
    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 14*prx.componentsHelper.getScale(_library)
    ,textColor:  '616161'
    ,textProperties: []
    ,text: 'Let X apps determine location. This means sending anonymous location data..'
    ,buttonSize: 14*prx.componentsHelper.getScale(_library)
    ,backgroundColor: 'ffffff'
    ,withTitle: false
    ,withText: true
    ,buttons: [{
        actions: [],
        text: 'DISAGREE',
        textColor: '2196F3',
        textProperties: ['bold']
    },{
        actions: [],
        text: 'AGREE',
        textColor: '2196F3',
        textProperties: ['bold']
    }]
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
};

//TYPE: ALERT DIALOG
prx.components.material_dialog_alert = {
    name: 'material_dialog_alert'
    ,type: 'material_dialog_alert'
    ,lib: _library
    ,caption: 'Alert Dialog with Title'
    ,icon: '-200px -400px'
    ,helper: prx.url.devices+ _path + 'alert_dialog/helper.png'
    ,width: 282*prx.componentsHelper.getScale(_library)
    ,height: 193*prx.componentsHelper.getScale(_library)
    ,resizable : true

    ,titleFont: 'Roboto Regular, sans-serif'
    ,titleSize: 20*prx.componentsHelper.getScale(_library)
    ,titleColor:  '000000'
    ,titleProperties: ['bold']
    ,title: 'Use location service?'
    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 14*prx.componentsHelper.getScale(_library)
    ,textColor:  '616161'
    ,textProperties: []
    ,text: 'Let X apps determine location. This means sending anonymous location data..'
    ,buttonSize: 14*prx.componentsHelper.getScale(_library)
    ,backgroundColor: 'ffffff'
    ,withTitle: true
    ,withText: true
    ,buttons: [{
        actions: [],
        text: 'DISAGREE',
        textColor: '2196F3',
        textProperties: ['bold']
    },{
        actions: [],
        text: 'AGREE',
        textColor: '2196F3',
        textProperties: ['bold']
    }]
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
};

//TYPE: CONFIRMATION DIALOG
prx.components.material_dialog_confirmation = {
    name: 'material_dialog_confirmation'
    ,type: 'material_dialog_confirmation'
    ,lib: _library
    ,caption: 'Confirmation Dialog'
    ,icon: '-300px -400px'
    ,helper: prx.url.devices+ _path + 'alert_dialog_confirm/helper.png'
    ,width: 281*prx.componentsHelper.getScale(_library)
    ,height: 260*prx.componentsHelper.getScale(_library)
    ,resizable : true

    ,titleFont: 'Roboto Regular, sans-serif'
    ,titleSize: 20*prx.componentsHelper.getScale(_library)
    ,titleColor:  '000000'
    ,titleProperties: []
    ,title: 'Choose Ringtone'
    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 14*prx.componentsHelper.getScale(_library)
    ,textColor:  '616161'
    ,textProperties: []
    ,text: ''
    ,buttonSize: 14*prx.componentsHelper.getScale(_library)
    ,backgroundColor: 'ffffff'
    ,withTitle: true
    ,withText: false
    ,confirmDialog: true
    ,buttons: [{
        actions: [],
        text: 'CANCEL',
        textColor: '2196F3',
        textProperties: ['bold']
    },{
        actions: [],
        text: 'OK',
        textColor: '2196F3',
        textProperties: ['bold']
    }]
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
};

//TYPE: SIMPLE DIALOG
prx.components.material_dialog_simpledialog = {
    name: 'material_dialog_simpledialog'
    ,type: 'material_dialog_simpledialog'
    ,lib: _library
    ,caption: 'Simple Dialog'
    ,icon: '-400px -400px'
    ,helper: prx.url.devices+ _path + 'menu_dialog/helper.png'
    ,width: 280*prx.componentsHelper.getScale(_library)
    ,height: 174*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor:  '000000'
    ,textProperties: []
    ,backgroundColor: 'ffffff'
    ,listitems: [
        {
            text: 'Menu Item 1'
            ,itemtype: 'dialog'
            ,thumbnail: {"fileId":"a338528b56a2f91841e8b97b1dd11fd9.png","assetType":"gallery","bucketsource":"static","name":" avatar_female.png", "url": "f1353077251107/8ef69ccff0f6e97618dde27ce903cb15.png"}
            ,actions: []
        }
        ,{
            text: 'Menu Item 2'
            ,itemtype: 'dialog'
            ,thumbnail: {"fileId":"d895dfbae1165e530658e11f649bc02c.png","assetType":"gallery","bucketsource":"static","name":" avatar_male.png","url":"f1353077251107/fb6f0d79ca71fc442563cdb95fa60eb6.png"}
            ,actions: []
        }
        ,{
            text: 'Menu Item 3'
            ,itemtype: 'dialog'
            ,thumbnail: {"fileId":"873054abbe95613746ad1d629c08dd84.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"}
            ,actions: []
        }
    ]
    ,dynamicSizeExpand: 'v'
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
};

//TYPE: SIMPLE MENU
prx.components.material_dialog_simplemenu = {
    name: 'material_dialog_simplemenu'
    ,type: 'material_dialog_simplemenu'
    ,lib: _library
    ,caption: 'Simple Menu'
    ,icon: '-500px -400px'
    ,helper: prx.url.devices+ _path + 'menu_simple/helper.png'
    ,width: 280*prx.componentsHelper.getScale(_library)
    ,height: 143*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor:  '000000'
    ,textProperties: []
    ,backgroundColor: 'ffffff'
    ,listitems: [
        {
            text: 'Menu Item 1'
            ,itemtype: 'menu'
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,actions: []
        }
        ,{
            text: 'Menu Item 2'
            ,itemtype: 'menu'
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,actions: []
        }
        ,{
            text: 'Menu Item 3'
            ,itemtype: 'menu'
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,actions: []
        }
    ]
    ,dynamicSizeExpand: 'v'
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
};

//TYPE: DROPDOWN MENU
prx.components.material_dropdown_menu = {
    name: 'material_dropdown_menu'
    ,type: 'material_dropdown_menu'
    ,lib: _library
    ,caption: 'Dropdown'
    ,icon: '-600px -400px'
    ,helper: prx.url.devices+ _path + 'dropdown_menu/helper.png'
    ,width: 100*prx.componentsHelper.getScale(_library)
    ,height: 26*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 14*prx.componentsHelper.getScale(_library)
    ,textColor:  '000000'
    ,textProperties: []
    ,activeTextColor: 'FF4081'
    ,backgroundColor: 'FFFFFF'
    ,borderWidth: 1*prx.componentsHelper.getScale(_library)
    ,borderColor: 'E0E0E0'
    ,selected: 0
    ,listitems: [
        {
            text: 'Option 1',
            actions: []
        },
        {
            text: 'Option 2',
            actions: []
        },
        {
            text: 'Option 3',
            actions: []
        }
    ]
    ,dynamicSizeExpand: 'v'
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
};



/***** LIST COMPONENTS *****/

//TYPE: LIST BASIC
prx.components.material_list_basic = {
    name: 'material_list_basic'
    ,type: 'material_list_basic'
    ,lib: _library
    ,caption: 'Basic List'
    ,icon: '-700px -400px'
    ,helper: prx.url.devices+ _path + 'list_basic/helper.png'
    ,width: "full"
    ,height: 111*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,borderColor: 'bbbbbb'
    ,borderWidth: 0*prx.componentsHelper.getScale(_library)
    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor:  '000000'
    ,textProperties: []
    ,subtitleFont: 'Roboto Regular, sans-serif'
    ,subtitleSize: 14*prx.componentsHelper.getScale(_library)
    ,subtitleColor: '999999'
    ,subtitleProperties: []
    ,backgroundColor: 'ffffff'
    ,thumbFrameColor: "f9f9f9"
    ,thumbFrame: true
    ,thumbpos: 'left'
    ,iconpos: 'right'
    ,listitems: [
        {
            text: 'Label 1'
            ,itemtype: 'basic'
            ,subtitle: ''
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,imgSrc: {"fileId":"","name":"","assetType":"icon","url":""}
            ,checked: false
            ,actions: []
        },
        {
            text: 'Label 2'
            ,itemtype: 'basic'
            ,subtitle: ''
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,imgSrc: {"fileId":"","name":"","assetType":"icon","url":""}
            ,checked: false
            ,actions: []
        }
    ]
    ,dynamicSizeExpand: 'v'
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
};

//TYPE: LIST WITH AVATAR
prx.components.material_list_avatar = {
    name: 'material_list_avatar'
    ,type: 'material_list_avatar'
    ,lib: _library
    ,caption: 'List with Avatar'
    ,icon: '-800px -400px'
    ,helper: prx.url.devices+ _path + 'list_avatar/helper.png'
    ,width: "full"
    ,height: 111*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,borderColor: 'bbbbbb'
    ,borderWidth: 0*prx.componentsHelper.getScale(_library)
    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor:  '000000'
    ,textProperties: []
    ,subtitleFont: 'Roboto Regular, sans-serif'
    ,subtitleSize: 14*prx.componentsHelper.getScale(_library)
    ,subtitleColor: '999999'
    ,subtitleProperties: []
    ,backgroundColor: 'ffffff'
    ,thumbFrameColor: "f9f9f9"
    ,thumbFrame: true
    ,thumbpos: 'left'
    ,iconpos: 'right'
    ,listitems: [
        {
            text: 'Label 1'
            ,itemtype: 'withAvatar'
            ,subtitle: ''
            ,thumbnail: {"fileId":"a338528b56a2f91841e8b97b1dd11fd9.png","assetType":"gallery","bucketsource":"static","name":" avatar_female.png", "url": "f1353077251107/8ef69ccff0f6e97618dde27ce903cb15.png"}
            ,imgSrc: {"fileId":"","name":"","assetType":"icon","url":""}
            ,checked: true
            ,actions: []
        },
        {
            text: 'Label 2'
            ,itemtype: 'withAvatar'
            ,subtitle: ''
            ,thumbnail: {"fileId":"d895dfbae1165e530658e11f649bc02c.png","assetType":"gallery","bucketsource":"static","name":" avatar_male.png", "url":"f1353077251107/fb6f0d79ca71fc442563cdb95fa60eb6.png"}
            ,imgSrc: {"fileId":"","name":"","assetType":"icon","url":""}
            ,checked: true
            ,actions: []
        }
    ]
    ,dynamicSizeExpand: 'v'
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
};

//TYPE: LIST WITH ICON
prx.components.material_list_icon = {
    name: 'material_list_icon'
    ,type: 'material_list_icon'
    ,lib: _library
    ,caption: 'List with Icon'
    ,icon: '-900px -400px'
    ,helper: prx.url.devices+ _path + 'list_icon/helper.png'
    ,width: "full"
    ,height: 111*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,borderColor: 'bbbbbb'
    ,borderWidth: 0*prx.componentsHelper.getScale(_library)
    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor:  '000000'
    ,textProperties: []
    ,subtitleFont: 'Roboto Regular, sans-serif'
    ,subtitleSize: 14*prx.componentsHelper.getScale(_library)
    ,subtitleColor: '999999'
    ,subtitleProperties: []
    ,backgroundColor: 'ffffff'
    ,thumbFrameColor: "f9f9f9"
    ,thumbFrame: true
    ,thumbpos: 'left'
    ,iconpos: 'right'
    ,listitems: [
        {
            text: 'Label 1'
            ,itemtype: 'withIcon'
            ,subtitle: ''
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,imgSrc: {"fileId":"873054abbe95613746ad1d629c08dd84.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"}
            ,checked: true
            ,actions: []
        },
        {
            text: 'Label 2'
            ,itemtype: 'withIcon'
            ,subtitle: ''
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,imgSrc: {"fileId":"873054abbe95613746ad1d629c08dd84.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"}
            ,checked: true
            ,actions: []
        }
    ]
    ,dynamicSizeExpand: 'v'
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
};

//TYPE: LIST WITH AVATAR AND ICON
prx.components.material_list_avatar_icon = {
    name: 'material_list_avatar_icon'
    ,type: 'material_list_avatar_icon'
    ,lib: _library
    ,caption: 'List with Avatar & Icon'
    ,icon: '-1000px -400px'
    ,helper: prx.url.devices+ _path + 'list_avatar_icon/helper.png'
    ,width: "full"
    ,height: 111*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,borderColor: 'bbbbbb'
    ,borderWidth: 0*prx.componentsHelper.getScale(_library)
    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor:  '000000'
    ,textProperties: []
    ,subtitleFont: 'Roboto Regular, sans-serif'
    ,subtitleSize: 14*prx.componentsHelper.getScale(_library)
    ,subtitleColor: '999999'
    ,subtitleProperties: []
    ,backgroundColor: 'ffffff'
    ,thumbFrameColor: "f9f9f9"
    ,thumbFrame: true
    ,thumbpos: 'left'
    ,iconpos: 'right'
    ,listitems: [
        {
            text: 'Label 1'
            ,itemtype: 'withAvatarIcon'
            ,subtitle: ''
            ,thumbnail: {"fileId":"a338528b56a2f91841e8b97b1dd11fd9.png","assetType":"gallery","bucketsource":"static","name":" avatar_female.png", "url": "f1353077251107/8ef69ccff0f6e97618dde27ce903cb15.png"}
            ,imgSrc: {"fileId":"873054abbe95613746ad1d629c08dd84.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"}
            ,checked: true
            ,actions: []
        },
        {
            text: 'Label 2'
            ,itemtype: 'withAvatarIcon'
            ,subtitle: ''
            ,thumbnail: {"fileId":"d895dfbae1165e530658e11f649bc02c.png","assetType":"gallery","bucketsource":"static","name":" avatar_male.png", "url":"f1353077251107/fb6f0d79ca71fc442563cdb95fa60eb6.png"}
            ,imgSrc: {"fileId":"873054abbe95613746ad1d629c08dd84.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"}
            ,checked: true
            ,actions: []
        }
    ]
    ,dynamicSizeExpand: 'v'
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
};

//TYPE: LIST WITH CHECKBOX
prx.components.material_list_checkbox = {
    name: 'material_list_checkbox'
    ,type: 'material_list_checkbox'
    ,lib: _library
    ,caption: 'Checkbox List'
    ,icon: '-1100px -400px'
    ,helper: prx.url.devices+ _path + 'list_checkbox/helper.png'
    ,width: "full"
    ,height: 111*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,borderColor: 'bbbbbb'
    ,borderWidth: 0*prx.componentsHelper.getScale(_library)
    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor:  '000000'
    ,textProperties: []
    ,subtitleFont: 'Roboto Regular, sans-serif'
    ,subtitleSize: 14*prx.componentsHelper.getScale(_library)
    ,subtitleColor: '999999'
    ,subtitleProperties: []
    ,backgroundColor: 'ffffff'
    ,checkInactiveBackground: 'none'
    ,checkActiveColor: '2196F3'
    ,radioActiveColor: '2196F3'
    ,checkInactiveColor: '757575'
    ,radioInactiveColor: '757575'
    ,radioBackgroundColor: 'none'
    ,checkCheckmarkColor: 'ffffff'
    ,thumbFrameColor: "f9f9f9"
    ,thumbFrame: true
    ,thumbpos: 'left'
    ,iconpos: 'right'
    ,listitems: [
        {
            text: 'Label 1'
            ,itemtype: 'withCheckbox'
            ,subtitle: ''
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,imgSrc: {"fileId":"","name":"","assetType":"icon","url":""}
            ,checked: true
            ,actions: []
        },
        {
            text: 'Label 2'
            ,itemtype: 'withCheckbox'
            ,subtitle: ''
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,imgSrc: {"fileId":"","name":"","assetType":"icon","url":""}
            ,checked: true
            ,actions: []
        }
    ]
    ,dynamicSizeExpand: 'v'
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
};

//TYPE: LIST WITH RADIO
prx.components.material_list_radio = {
    name: 'material_list_radio'
    ,type: 'material_list_radio'
    ,lib: _library
    ,caption: 'Radio List'
    ,icon: '-1200px -400px'
    ,helper: prx.url.devices+ _path + 'list_radio/helper.png'
    ,width: "full"
    ,height: 111*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,borderColor: 'bbbbbb'
    ,borderWidth: 0*prx.componentsHelper.getScale(_library)
    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor:  '000000'
    ,textProperties: []
    ,subtitleFont: 'Roboto Regular, sans-serif'
    ,subtitleSize: 14*prx.componentsHelper.getScale(_library)
    ,subtitleColor: '999999'
    ,subtitleProperties: []
    ,backgroundColor: 'ffffff'
    ,checkInactiveBackground: 'none'
    ,checkActiveColor: '2196F3'
    ,radioActiveColor: '2196F3'
    ,checkInactiveColor: '757575'
    ,radioInactiveColor: '757575'
    ,radioBackgroundColor: 'none'
    ,checkCheckmarkColor: 'ffffff'
    ,thumbFrameColor: "f9f9f9"
    ,thumbFrame: true
    ,thumbpos: 'left'
    ,iconpos: 'right'
    ,listitems: [
        {
            text: 'Label 1'
            ,itemtype: 'withRadio'
            ,subtitle: ''
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,imgSrc: {"fileId":"","name":"","assetType":"icon","url":""}
            ,checked: true
            ,actions: []
        },
        {
            text: 'Label 2'
            ,itemtype: 'withRadio'
            ,subtitle: ''
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,imgSrc: {"fileId":"","name":"","assetType":"icon","url":""}
            ,checked: false
            ,actions: []
        }
    ]
    ,dynamicSizeExpand: 'v'
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
};

//TYPE: LIST COMPLEX
prx.components.material_list_complex = {
    name: 'material_list_complex'
    ,type: 'material_list_complex'
    ,lib: _library
    ,caption: 'Complex List'
    ,icon: '-1300px -400px'
    ,helper: prx.url.devices+ _path + 'list_complex/helper.png'
    ,width: "full"
    ,height: 284*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,borderColor: 'bbbbbb'
    ,borderWidth: 0*prx.componentsHelper.getScale(_library)
    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor:  '000000'
    ,textProperties: []
    ,subtitleFont: 'Roboto Regular, sans-serif'
    ,subtitleSize: 14*prx.componentsHelper.getScale(_library)
    ,subtitleColor: '999999'
    ,subtitleProperties: []
    ,backgroundColor: 'ffffff'
    ,checkInactiveBackground: 'none'
    ,checkActiveColor: '2196F3'
    ,radioActiveColor: '2196F3'
    ,checkInactiveColor: '757575'
    ,radioInactiveColor: '757575'
    ,radioBackgroundColor: 'none'
    ,checkCheckmarkColor: 'ffffff'
    ,thumbFrameColor: "f9f9f9"
    ,thumbFrame: true
    ,thumbpos: 'left'
    ,iconpos: 'right'
    ,listitems: [
        {
            text: 'Label 1'
            ,itemtype: 'withAvatar'
            ,subtitle: ''
            ,thumbnail: {"fileId":"a338528b56a2f91841e8b97b1dd11fd9.png","assetType":"gallery","bucketsource":"static","name":" avatar_female.png", "url":"f1353077251107/8ef69ccff0f6e97618dde27ce903cb15.png"}
            ,imgSrc: {"fileId":"","name":"","assetType":"icon","url":""}
            ,checked: true
            ,actions: []
        },
        {
            text: 'Label 2'
            ,itemtype: 'withAvatarIcon'
            ,subtitle: ''
            ,thumbnail: {"fileId":"d895dfbae1165e530658e11f649bc02c.png","assetType":"gallery","bucketsource":"static","name":" avatar_male.png", "url":"f1353077251107/fb6f0d79ca71fc442563cdb95fa60eb6.png"}
            ,imgSrc: {"fileId":"873054abbe95613746ad1d629c08dd84.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"}
            ,checked: true
            ,actions: []
        },
        {
            text: 'Label 3'
            ,itemtype: 'withIcon'
            ,subtitle: ''
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,imgSrc: {"fileId":"873054abbe95613746ad1d629c08dd84.svg","name":"add_circle.svg","assetType":"icon","bucketsource":"static","url":"f1424091950266/4231b8382dafd697f1f3dd01a3397082.svg","targetSrc":"generated/4231b8382dafd697f1f3dd01a3397082_7d7d7d.svg","color":"757575"}
            ,checked: true
            ,actions: []
        },
        {
            text: 'Label 4'
            ,itemtype: 'withCheckbox'
            ,subtitle: ''
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,imgSrc: {"fileId":"","name":"","assetType":"icon","url":""}
            ,checked: true
            ,actions: []
        },
        {
            text: 'Label 5'
            ,itemtype: 'withRadio'
            ,subtitle: ''
            ,thumbnail: {"fileId":"","name":"","assetType":""}
            ,imgSrc: {"fileId":"","name":"","assetType":"icon","url":""}
            ,checked: true
            ,actions: []
        }
    ]
    ,dynamicSizeExpand: 'v'
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
};



/****** PROGRESS & ACTIVITY ******/

//TYPE: DETERMINATE PROGRESS BAR
prx.components.material_progress_determinate = {
    name: 'material_progress_determinate'
    ,type: 'material_progress_determinate'
    ,lib: _library
    ,caption: 'Determinate Progress Bar'
    ,icon: '-1400px -400px'
    ,helper: prx.url.devices+ _path + 'progressbar_determinate/helper.png'
    ,width: "full"
    ,height: 5*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: 'rgba(35, 150, 245, 0.3)'
    ,percentBarBackgroundColor: '2196F3'
    ,percentBarValue : "36"
    ,isDownloading: true
};

//TYPE: INDETERMINATE PROGRESS BAR
prx.components.material_progress_indeterminate = {
    name: 'material_progress_indeterminate'
    ,type: 'material_progress_determinate'
    ,lib: _library
    ,caption: 'Indeterminate Progress Bar'
    ,icon: '-1500px -400px'
    ,helper: prx.url.devices+ _path + 'progressbar_indeterminate/helper.png'
    ,width: "full"
    ,height: 5*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: 'rgba(35, 150, 245, 0.3)'
    ,percentBarBackgroundColor: '2196F3'
    ,isDownloading: false
};



/****** SLIDERS ******/

//TYPE: CONTINUOUS SLIDER
prx.components.material_slider_continuous = {
    name: 'material_slider_continuous'
    ,type: 'material_slider_continuous'
    ,lib: _library
    ,caption: 'Continuous Slider'
    ,icon: '-1600px -400px'
    ,helper: prx.url.devices+_path + 'slider_continuous/helper.png'
    ,width: 300*prx.componentsHelper.getScale(_library)
    ,height: 40*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,barThickness: 2*prx.componentsHelper.getScale(_library)
    ,min: 0
    ,max: 100
    ,barColor: '9E9E9E'
    ,fillBarColor: '2196F3'
    ,sliderColor: '2196F3'
    ,sliderPosition: '70'
    ,properties: "v,l,o,hpos,vpos,w,h,dr,f,ds"
    ,isDiscrete: false
};

//TYPE: DISCRETE SLIDER
prx.components.material_slider_discrete = {
    name: 'material_slider_discrete'
    ,type: 'material_slider_continuous'
    ,lib: _library
    ,caption: 'Discrete Slider'
    ,icon: '-1700px -400px'
    ,helper: prx.url.devices+_path + 'slider_discrete/helper.png'
    ,width: 300*prx.componentsHelper.getScale(_library)
    ,height: 40*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,textColor: 'ffffff'
    ,textSize: 12*prx.componentsHelper.getScale(_library)
    ,barThickness: 2*prx.componentsHelper.getScale(_library)
    ,min: 0
    ,max: 100
    ,barColor: '9E9E9E'
    ,fillBarColor: '2196F3'
    ,sliderColor: '2196F3'
    ,sliderPosition: '70'
    ,properties: "v,l,o,hpos,vpos,w,h,dr,f,ds"
    ,isDiscrete: true
    ,badgeSize: 30*prx.componentsHelper.getScale(_library)
};



/******SNACKBARS & TOASTS ******/

//TYPE: TOAST
prx.components.material_toast = {
    name: 'material_toast'
    ,type: 'material_toast'
    ,lib: _library
    ,caption: 'Toast'
    ,icon: '-1800px -400px'
    ,helper: prx.url.devices+ _path + 'toast/helper.png'
    ,width: 289*prx.componentsHelper.getScale(_library)
    ,height: 48*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 14*prx.componentsHelper.getScale(_library)
    ,textColor:  'ffffff'
    ,textProperties: []
    ,text: 'Message sent'
    ,backgroundColor: '424242'
    ,shadowColor: 'rgba(0,0,0,0.2)'
};

//TYPE: SNACKBAR
prx.components.material_snackbar = {
    name: 'material_snackbar'
    ,type: 'material_snackbar'
    ,lib: _library
    ,caption: 'Simple Snackbar'
    ,icon: '-1900px -400px'
    ,helper: prx.url.devices+ _path + 'snackbar/helper.png'
    ,width: "full"
    ,height: 48*prx.componentsHelper.getScale(_library)
    ,resizable : true

    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 14*prx.componentsHelper.getScale(_library)
    ,textColor:  'ffffff'
    ,textProperties: []
    ,text: 'Message sent'
    ,hasAction: false
    ,backgroundColor: '424242'
    ,shadowColor: 'rgba(0,0,0,0.2)'
    ,rippleEffect: true
    ,rippleEffectType: 'none'
    ,rippleEffectColor: 'rgba(255, 255, 255, 0.1)'
};

//TYPE: SNACKBAR WITH ACTION
prx.components.material_snackbar_action = {
    name: 'material_snackbar_action'
    ,type: 'material_snackbar_action'
    ,lib: _library
    ,caption: 'Snackbar with Action'
    ,icon: '0 -500px'
    ,helper: prx.url.devices+ _path + 'snackbar_action/helper.png'
    ,width:"full"
    ,height: 48*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 14*prx.componentsHelper.getScale(_library)
    ,textColor:  'ffffff'
    ,textProperties: []
    ,text: 'Marked as read'
    ,actionFont: 'Roboto Medium, sans-serif'
    ,actionSize: 14*prx.componentsHelper.getScale(_library)
    ,actionColor: '2196F3'
    ,actionProperties: ['bold']
    ,action: "UNDO"
    ,hasAction: true
    ,backgroundColor: '424242'
    ,shadowColor: 'rgba(0,0,0,0.2)'
    ,rippleEffect: true
    ,rippleEffectType: 'light'
    ,rippleEffectColor: 'rgba(255, 255, 255, 0.1)'
};



/****** SWITCHES ******/

//TYPE: CHECKBOX
prx.components.material_checkbox = {
    name: 'material_checkbox'
    ,type: 'material_checkbox'
    ,lib: _library
    ,caption: 'Checkbox'
    ,icon: '-100px -500px'
    ,helper: prx.url.devices+ _path + 'checkbox/helper.png'
    ,width: 18*prx.componentsHelper.getScale(_library)
    ,height: 18*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: 'none'
    ,borderColor: '757575'
    ,checkColor: 'ffffff'
    ,activeColor: '2196F3'
    ,active: true
    ,checkboxActionsOnActive: []
    ,checkboxActionsOnDeactive: []
    ,aspectratio: true
};

//TYPE: RADIO BUTTON
prx.components.material_radiobutton = {
    name: 'material_radiobutton'
    ,type: 'material_radiobutton'
    ,lib: _library
    ,caption: 'Radio Button'
    ,icon: '-200px -500px'
    ,helper: prx.url.devices+ _path + 'radio/helper.png'
    ,width: 20*prx.componentsHelper.getScale(_library)
    ,height: 20*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: 'none'
    ,borderColor: '757575'
    ,activeColor: '2196F3'
    ,active: true
    ,actAsCheckbox: true
    ,checkboxActionsOnActive: []
    ,checkboxActionsOnDeactive: []
    ,aspectratio: true
};

//TYPE: ONOFF SWITCH
prx.components.material_onoffswitch = {
    name: 'material_onoffswitch'
    ,type: 'material_onoffswitch'
    ,lib: _library
    ,caption: 'On/Off switch'
    ,icon: '-300px -500px'
    ,helper: prx.url.devices+_path + 'onoff_switch/helper.png'
    ,width: 37*prx.componentsHelper.getScale(_library)
    ,height: 21*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,textProperties: []
    ,activeLabelColor: '42A5F5'
    ,activeSwitchColor: '2196F3'
    ,inactiveLabelColor: '9E9E9E'
    ,inactiveSwitchColor: 'FFFFFF'
    ,activeShadowColor: 'rgba(0, 0, 0, 0.2)'
    ,inactiveShadowColor: '757575'
    ,active: true
    ,flipswitchActionsOnActive: []
    ,flipswitchActionsOnDeactive: []
};



/****** TABS ******/

//TYPE: FIXED TABBAR TEXT ONLY
prx.components.material_tabbar_fixed = {
	name: 'material_tabbar_fixed'
	,type: 'material_tabbar_fixed'
	,lib: _library
	,caption: 'Fixed tabbar'
    ,icon: '-400px -500px'
	,helper: prx.url.devices+_path + 'tabbar_fixed/helper.png'
	,width: "full"
	,height: 48*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: '2196F3'
	,shadowColor: 'rgba(0, 0, 0, 0.2)'
	,shadowEnabled: false
	,textFont: 'Roboto Medium, sans-serif'
	,textSize: 14*prx.componentsHelper.getScale(_library)
	,textColor: 'rgba(255, 255, 255, 0.60)'
	,textColorActive: 'FFFFFF'
	,textProperties: ['']
	,tabIndicatorColor: '18FFFF'
	,tabIndicatorWidth: 2*prx.componentsHelper.getScale(_library)
	,selected: 0
	,tabs: [
        {
        	caption: "TAB ONE"
            ,imgSrc: {"fileId":"","assetType":"","name":""}
            ,actions: []
        },
	    {
		   caption: "TAB TWO"
            ,imgSrc: {"fileId":"","assetType":"","name":""}
            ,actions: []
		},
	    {
			caption: "TAB THREE"
            ,imgSrc: {"fileId":"","assetType":"","name":""}
            ,actions: []
		}
     ]
   	,overlay: false
   	,changeActive: true
   	,linkedscreen: '-1'
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
};

// TYPE: FIXED TABBAR ICON ONLY
prx.components.material_tabbar_fixed_icon = {
    name: 'material_tabbar_fixed_icon'
    ,type: 'material_tabbar_fixed'
    ,lib: _library
    ,caption: 'Fixed tabbar - icon only'
    ,icon: '-500px -500px'
    ,helper: prx.url.devices+_path + 'tabbar_fixed_icon/helper.png'
    ,width: "full"
    ,height: 48*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: '2196F3'
    ,shadowColor: 'rgba(0, 0, 0, 0.2)'
    ,shadowEnabled: false
    ,textFont: 'Roboto Medium, sans-serif'
    ,textSize: 14*prx.componentsHelper.getScale(_library)
    ,textColor: 'rgba(255, 255, 255, 0.60)'
    ,textColorActive: 'FFFFFF'
    ,textProperties: ['']
    ,tabIndicatorColor: '18FFFF'
    ,tabIndicatorWidth: 2*prx.componentsHelper.getScale(_library)
    ,selected: 0
    ,tabs: [
        {
            caption: "TAB ONE"
            ,imgSrc: {"fileId":"9a81f4137913304aad2b01c7122b0607.svg","name":"phone.svg","assetType":"icon","bucketsource":"static","url":"f1424091903407/3bfcda2308acf98adb9d2ffd25991048.svg","targetSrc":"generated/9a81f4137913304aad2b01c7122b0607_ffffff.svg","color":"FFFFFF"}
            ,actions: []
        },
        {
            caption: "TAB TWO"
            ,imgSrc: {"fileId":"7f60ee4224b1af37e4f9e21262bd499b.svg","name":"favorite.svg","assetType":"icon","bucketsource":"static","url":"f1424091456673/3f6313217019096e563d6333b7c4412a.svg","targetSrc":"generated/7f60ee4224b1af37e4f9e21262bd499b_ffffff.svg","color":"FFFFFF"}
            ,actions: []
        },
        {
            caption: "TAB THREE"
            ,imgSrc: {"fileId":"40b841ac317da8282743888c3c02f960.svg","name":"location_history.svg","assetType":"icon","bucketsource":"static","url":"f1424098519660/3af2a1b47c59e67961e037e06c348e54.svg","targetSrc":"generated/40b841ac317da8282743888c3c02f960_ffffff.svg","color":"FFFFFF"}
            ,actions: []
        }
    ]
    ,overlay: false
    ,changeActive: true
    ,linkedscreen: '-1'
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
};

// TYPE: FIXED TABBAR ICON AND TEXT
prx.components.material_tabbar_fixed_icon_text = {
    name: 'material_tabbar_fixed_icon_text'
    ,type: 'material_tabbar_fixed'
    ,lib: _library
    ,caption: 'Fixed tabbar - icon & text'
    ,icon: '-600px -500px'
    ,helper: prx.url.devices+_path + 'tabbar_fixed_icon_text/helper.png'
    ,width: "full"
    ,height: 72*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,backgroundColor: '2196F3'
    ,shadowColor: 'rgba(0, 0, 0, 0.2)'
    ,shadowEnabled: false
    ,textFont: 'Roboto Medium, sans-serif'
    ,textSize: 14*prx.componentsHelper.getScale(_library)
    ,textColor: 'rgba(255, 255, 255, 0.60)'
    ,textColorActive: 'FFFFFF'
    ,textProperties: ['']
    ,tabIndicatorColor: '18FFFF'
    ,tabIndicatorWidth: 2*prx.componentsHelper.getScale(_library)
    ,selected: 0
    ,tabs: [
        {
            caption: "TAB ONE"
			,imgSrc: {"fileId":"9a81f4137913304aad2b01c7122b0607.svg","name":"phone.svg","assetType":"icon","bucketsource":"static","url":"f1424091903407/3bfcda2308acf98adb9d2ffd25991048.svg","targetSrc":"generated/9a81f4137913304aad2b01c7122b0607_ffffff.svg","color":"FFFFFF"}
            ,actions: []
        },
        {
            caption: "TAB TWO"
            ,imgSrc: {"fileId":"7f60ee4224b1af37e4f9e21262bd499b.svg","name":"favorite.svg","assetType":"icon","bucketsource":"static","url":"f1424091456673/3f6313217019096e563d6333b7c4412a.svg","targetSrc":"generated/7f60ee4224b1af37e4f9e21262bd499b_ffffff.svg","color":"FFFFFF"}
            ,actions: []
        },
        {
            caption: "TAB THREE"
            ,imgSrc: {"fileId":"40b841ac317da8282743888c3c02f960.svg","name":"location_history.svg","assetType":"icon","bucketsource":"static","url":"f1424098519660/3af2a1b47c59e67961e037e06c348e54.svg","targetSrc":"generated/40b841ac317da8282743888c3c02f960_ffffff.svg","color":"FFFFFF"}
            ,actions: []
        }
    ]
    ,overlay: false
    ,changeActive: true
    ,linkedscreen: '-1'
    ,rippleEffect: true
    ,rippleEffectType: 'dark'
    ,rippleEffectColor: 'rgba(0,0,0,0.1)'
};

//TYPE: SCROLLABLE TABBAR
prx.components.material_tabbar_scrollable = {
	name: 'material_tabbar_scrollable'
	,type: 'material_tabbar_scrollable'
	,lib: _library
	,caption: 'Scrollable tabbar'
    ,icon: '-700px -500px'
	,helper: prx.url.devices+_path + 'tabbar_scrollable/helper.png'
	,width: "full"
	,height: 48*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: '2196F3'
	,shadowColor: 'rgba(0, 0, 0, 0.2)'
	,shadowEnabled: false
	,textFont: 'Roboto Medium, sans-serif'
	,textSize: 14*prx.componentsHelper.getScale(_library)
	,textColor: 'rgba(255, 255, 255, 0.60)'
	,textColorActive: 'FFFFFF'
	,textProperties: ['']
	,tabIndicatorColor: '18FFFF'
	,tabIndicatorWidth: 2*prx.componentsHelper.getScale(_library) 
	,selected: 0
	,tabs: "TAB ONE<br />TAB TWO<br />TAB THREE<br />TAB FOUR<br />TAB FIVE"
   	,overlay: false
	,linkedContainer: '-1'
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
};

//TYPE: SEGMENTED BUTTON TABBAR
prx.components.material_tabbar_segmented_button = {
	name: 'material_tabbar_segmented_button'
	,type: 'material_tabbar_segmented_button'
	,lib: _library
	,caption: 'Segmented Button'
    ,icon: '-800px -500px'
	,helper: prx.url.devices+_path + 'tabbar_segmented_button/helper.png'
	,width: "full"
	,height: 48*prx.componentsHelper.getScale(_library)
	,resizable : true
	,backgroundColor: 'EEEEEE' 
	,backgroundColorActive: 'BDBDBD'
	,iconColorActive: '555'
	,selected: 0
	,iconSize: 3
	,tabs: [
        {
        	imgSrc: {"fileId":"b865d0716b7391761cf395624b30c8d7.svg","name":"today.svg","assetType":"icon","bucketsource":"static","url":"f1424091456673/5f86a4c92ea4932a5620d5071e10c8a1.svg","targetSrc":"generated/5f86a4c92ea4932a5620d5071e10c8a1_7d7d7d.svg","color":"757575"}
    		,actions: []
        },
	    {
       		imgSrc: {"fileId":"afde2dd3c533f18d272ce79af39c5cf8.svg","name":"folder.svg","assetType":"icon","bucketsource":"static","url":"f1424098398753/87131ba67c3ed7c7a8b7f1b6dee8ea89.svg","targetSrc":"generated/87131ba67c3ed7c7a8b7f1b6dee8ea89_7d7d7d.svg","color":"757575"}
       		,actions: []
		},
	    {
			imgSrc: {"fileId":"c36808554b6896f91ea6d3ba549ac5b0.svg","name":"cloud_upload.svg","assetType":"icon","bucketsource":"static","url":"f1424098398753/67393b9c0b365f46f4c33c934a964a1a.svg","targetSrc":"generated/67393b9c0b365f46f4c33c934a964a1a_7d7d7d.svg","color":"757575"}
			,actions: []
		},
	    {
			imgSrc:{"fileId":"3afba0b868d02a906a2626073191dae4.svg","name":"settings.svg","assetType":"icon","bucketsource":"static","url":"f1424091456673/192cd4f92c784c6e33a3167095165093.svg","targetSrc":"generated/192cd4f92c784c6e33a3167095165093_7d7d7d.svg","color":"757575"}
			,actions: []
		},
	    {
			imgSrc: {"fileId":"72dbd80e9f63dda5099544c7bc7e1ed3.svg","name":"delete.svg","assetType":"icon","bucketsource":"static","url":"f1424091456673/ca104a30a743e00e890a864e19c7738d.svg","targetSrc":"generated/ca104a30a743e00e890a864e19c7738d_7d7d7d.svg","color":"757575"}
			,actions: []
		}
     ]
   	,overlay: false
   	,changeActive: true
   	,linkedscreen: '-1'
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
};

//TYPE: TOOLBAR
prx.components.material_toolbar = {
    name: 'material_toolbar'
    ,type: 'material_toolbar'
    ,lib: _library
    ,caption: 'Toolbar'
    ,icon: '-900px -500px'
    ,helper: prx.url.devices+ _path + 'toolbar/helper.png'
    ,width: "full"
    ,height: 56*prx.componentsHelper.getScale(_library)
    ,actions:[]
    ,backgroundColor: '2196F3'
    ,shadowColor: 'rgba(0, 0, 0, 0.2)'
    ,shadowEnabled: false
    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor:  '#2E2E2E'
    ,textProperties: []
    ,textAlign: 'center'
    ,text: ''
};



/****** TEXT FIELDS ******/

//TYPE: TEXTFIELD
prx.components.material_textfield = {
	name: 'material_textfield'
	,type: 'material_textfield'
	,lib: _library
	,caption: 'Text Field'
    ,icon: '-1000px -500px'
	,helper: prx.url.devices+_path + 'textfield/helper.png'		
	,width: 330*prx.componentsHelper.getScale(_library)
	,height: 48*prx.componentsHelper.getScale(_library)
	,value: ''
	,placeholder: 'Placeholder'
	,inputtype: 'text'
	,backgroundColor: 'none'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '212121'
	,placeholderColor: 'BDBDBD'
	,borderWidth: 1*prx.componentsHelper.getScale(_library)
	,borderColor: 'BDBDBD'
	,borderColorActive: '0099cc'
	,textAlign: 'left'
};

//TYPE: FLOATING LABEL TEXTFIELD
prx.components.material_textfield_floating_label = {
    name: 'material_textfield_floating_label'
    ,type: 'material_textfield_floating_label'
    ,lib: _library
	,caption: 'Text Field FloatingLabel'
	,tags: 'Text Field Floating Label'
    ,icon: '-1100px -500px'
    ,helper: prx.url.devices+_path + 'textfield_floating_label/helper.png'
    ,width: 330*prx.componentsHelper.getScale(_library)
    ,height: 62*prx.componentsHelper.getScale(_library)
    ,value: ''
    ,inputtype: 'text'
    ,fieldtype: 'input'
    ,backgroundColor: 'none'
    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor:  '212121'
    ,label: 'Label Text'
    ,labelColor: '757575'
    ,labelFont: 'Roboto Regular, sans-serif'
    ,borderWidth: 1*prx.componentsHelper.getScale(_library)
    ,borderColor: 'BDBDBD'
    ,borderColorActive: '0099cc'
    ,textAlign: 'left'
    ,labelAlign: 'left'
};

//TYPE: TEXTFIELD (FULL WIDTH)
prx.components.material_textfield_full_width = {
	name: 'material_textfield_full_width'
	,type: 'material_textfield'
	,lib: _library
	,caption: 'Text Field (Full Width)'
    ,icon: '-1200px -500px'
	,helper: prx.url.devices+_path + 'textfield_full/helper.png'		
	,width: "full"
	,height: 58*prx.componentsHelper.getScale(_library)
	,value: ''
	,placeholder: 'Placeholder'
	,inputtype: 'text'
	,backgroundColor: 'none'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '212121'
	,placeholderColor: 'BDBDBD'
	,borderWidth: 1*prx.componentsHelper.getScale(_library)
	,borderColor: 'BDBDBD'
	,borderColorActive: '0099cc'
	,textAlign: 'left'
	,isFull: true
};

//TYPE: TEXTFIELD WITH ICON
prx.components.material_textfield_icon = {
	name: 'material_textfield_icon'
	,type: 'material_textfield'
	,lib: _library
	,caption: 'Text Field with Icon'
    ,icon: '-1300px -500px'
	,helper: prx.url.devices+_path + 'textfield_icon/helper.png'		
	,width: 330*prx.componentsHelper.getScale(_library)
	,height: 48*prx.componentsHelper.getScale(_library)
	,value: ''
	,placeholder: 'Placeholder'
	,inputtype: 'text'
	,backgroundColor: 'none'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '212121'
	,placeholderColor: 'BDBDBD'
	,borderWidth: 1*prx.componentsHelper.getScale(_library)
	,borderColor: 'BDBDBD'
	,borderColorActive: '0099cc'
	,textAlign: 'left'
	,hasIcon: true
	,imgSrc: {"fileId":"9a81f4137913304aad2b01c7122b0607.svg","name":"phone.svg","assetType":"icon","bucketsource":"static","url":"f1424091903407/3bfcda2308acf98adb9d2ffd25991048.svg","targetSrc":"generated/3bfcda2308acf98adb9d2ffd25991048_7d7d7d.svg","color":"757575"}
};

//TYPE: PASSWORDFIELD
prx.components.material_passwordfield = {
	name: 'material_passwordfield'
	,type: 'material_textfield'
	,lib: _library
	,caption: 'Password Field'
    ,icon: '-1400px -500px'
	,helper: prx.url.devices+ _path + 'textfield_password/helper.png'		
	,width: 330*prx.componentsHelper.getScale(_library)
	,height: 48*prx.componentsHelper.getScale(_library)
	,value: ''
	,placeholder: 'Placeholder'
	,inputtype: 'password'
	,backgroundColor: 'none'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '212121'
	,placeholderColor: 'BDBDBD'
	,borderWidth: 1*prx.componentsHelper.getScale(_library)
	,borderColor: 'BDBDBD'
	,borderColorActive: '0099cc'
	,textAlign: 'left'
};

//TYPE: TEXTAREA
prx.components.material_textarea = {
	name: 'material_textarea'
	,type: 'material_textarea'
	,lib: _library
	,caption: 'Textarea'
    ,icon: '-1500px -500px'
	,helper: prx.url.devices+ _path + 'textarea/helper.png'		
	,width: 330*prx.componentsHelper.getScale(_library)
	,height: 96*prx.componentsHelper.getScale(_library)
	,value: ''
	,placeholder: 'Placeholder'
	,inputtype: 'text'
	,backgroundColor: 'none'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '212121'
	,placeholderColor: 'BDBDBD'
	,label: 'Label'
	,labelColor: 'a9a9a9'
	,labelSize: 12*prx.componentsHelper.getScale(_library)
	,hasLabel: true
	,borderWidth: 1*prx.componentsHelper.getScale(_library)
	,borderColor: 'BDBDBD'
	,borderColorActive: '0099cc'
	,textAlign: 'left'
};

//TYPE: FLOATING LABEL TEXTAREA FIELD
prx.components.material_textarea_floating_label = {
    name: 'material_textarea_floating_label'
    ,type: 'material_textarea_floating_label'
    ,lib: _library
	,caption: 'Textarea FloatingLabel'
	,tags: 'Textarea Floating Label'
    ,icon: '-1600px -500px'
    ,helper: prx.url.devices+_path + 'textfield_floating_label/helper.png'
    ,width: 330*prx.componentsHelper.getScale(_library)
    ,height: 100*prx.componentsHelper.getScale(_library)
    ,value: ''
    ,backgroundColor: 'none'
    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor:  '212121'
    ,label: 'Label Text'
    ,labelColor: '757575'
    ,labelFont: 'Roboto Regular, sans-serif'
    ,borderWidth: 1*prx.componentsHelper.getScale(_library)
    ,borderColor: 'BDBDBD'
    ,borderColorActive: '0099cc'
    ,textAlign: 'left'
    ,labelAlign: 'left'
    ,isFull: false
};

//TYPE: TEXTAREA (FULL WIDTH)
prx.components.material_textarea_full_width = {
	name: 'material_textarea_full_width'
	,type: 'material_textarea'
	,lib: _library
	,caption: 'Textarea (Full Width)'
    ,icon: '-1700px -500px'
	,helper: prx.url.devices+ _path + 'textarea_full/helper.png'		
	,width: "full"
	,height: 96*prx.componentsHelper.getScale(_library)
	,value: ''
	,placeholder: 'Placeholder'
	,inputtype: 'text'
	,backgroundColor: 'none'
	,textFont: 'Roboto Regular, sans-serif'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '212121'
	,placeholderColor: 'BDBDBD'
	,label: 'Label'
	,labelColor: '757575'
	,labelSize: 12*prx.componentsHelper.getScale(_library)
	,hasLabel: false
	,borderWidth: 1*prx.componentsHelper.getScale(_library)
	,borderColor: 'BDBDBD'
	,borderColorActive: '0099cc'
	,textAlign: 'left'
	,isFull: true
};



/****** OTHER ******/

//TYPE: STATUSBAR
prx.components.material_statusbar = {
    name: 'material_statusbar'
    ,type: 'material_statusbar'
    ,lib: _library
    ,caption: 'Statusbar'
    ,icon: '-1800px -500px'
    ,helper: prx.url.devices+_path+ 'statusbar/helper.png'
    ,width: "full"
    ,height: 24*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,overlay: false
    ,backgroundColor: 'rgba(0,0,0,0.2)'
    ,foregroundColor: 'ffffff'
};

//TYPE: NAVIGATIONBAR
prx.components.material_navigationbar = {
    name: 'material_navigationbar'
    ,type: 'material_navigationbar'
    ,lib: _library
    ,caption: 'Navigation Bar'
    ,icon: '-1900px -500px'
    ,helper: prx.url.devices+_path+ 'navigationbar/helper.png'
    ,width: "full"
    ,height: 48*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,overlay: false
    ,backgroundColor: '000000'
    ,icon1: {"fileId":"c6cedf8d131daea6f649decdd0a41eb7.png","assetType":"gallery","bucketsource":"static","name":" sysbar_back.png", "url":"f1424344463358/d34443ce9db9f7fc16c8c7ca680b2e1c.png"}
    ,icon2: {"fileId":"87655268eb58c1c33f29601e55ad68f0.png","assetType":"gallery","bucketsource":"static","name":" sysbar_home.png", "url":"f1424344463358/89772485345cbd5d2b0e6269719d8eed.png"}
    ,icon3: {"fileId":"3184654843a471d3b719ef02b9eb3a3c.png","assetType":"gallery","bucketsource":"static","name":" sysbar_recent.png", "url":"f1424344463358/7eb321edd1c051ed679bdbbbdcf4d1a6.png"}
};

//TYPE: RECTANGLE WITH SHADOW
prx.components.material_rectangle_shadow = {
    name: 'material_rectangle_shadow'
    ,type: 'material_rectangle_shadow'
    ,lib: _library
    ,caption: 'Rectangle with Shadow'
    ,icon: '0 -600px'
    ,helper: prx.url.devices+ _path + 'rectangle_shadow/helper.png'
    ,width: "full"
    ,height: 100*prx.componentsHelper.getScale(_library)
    ,backgroundColor: '2196F3'
    ,shadowColor: 'rgba(0, 0, 0, 0.2)'
    ,borderWidth: 0*prx.componentsHelper.getScale(_library)
    ,borderColor: '00BCD4'
    ,borderRadius: 0*prx.componentsHelper.getScale(_library)
    ,actions:[]
    ,textFont: 'Roboto Regular, sans-serif'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor:  '#2E2E2E'
    ,textProperties: []
    ,textAlign: 'center'
    ,text: ''
};

//TYPE: MATERIAL RIPPLE
prx.components.material_ripple = {
	name: 'material_ripple'
	,type: 'material_ripple'
	,lib: _library
	,caption: 'Ripple area Rectangular'
    ,icon: '-100px -600px'
	,helper: prx.url.devices+ _path + 'ripple/helper.png'
	,width: 100*prx.componentsHelper.getScale(_library)
	,height: 100*prx.componentsHelper.getScale(_library)
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
};

//TYPE: MATERIAL RIPPLE CIRCULAR
prx.components.material_ripple_circ = {
	name: 'material_ripple_circ'
	,type: 'material_ripple'
	,lib: _library
	,caption: 'Ripple area Circular'
    ,icon: '-200px -600px'
	,helper: prx.url.devices+ _path + 'ripple/helper.png'
	,width: 100*prx.componentsHelper.getScale(_library)
	,height: 100*prx.componentsHelper.getScale(_library)
	,rippleEffect: true
	,rippleEffectType: 'dark'
	,rippleEffectColor: 'rgba(0,0,0,0.1)'
	,circ: true
	,aspectratio: true
};
