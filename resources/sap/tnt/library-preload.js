sap.ui.require.preload({
	"sap/tnt/InfoLabel.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"./library\",\"sap/ui/core/Control\",\"sap/ui/core/library\",\"./InfoLabelRenderer\"],function(e,t,r,o){\"use strict\";var a=e.RenderMode,i=r.TextDirection,n=t.extend(\"sap.tnt.InfoLabel\",{metadata:{interfaces:[\"sap.ui.core.IFormContent\"],library:\"sap.tnt\",properties:{text:{type:\"string\",defaultValue:\"\",bindable:\"bindable\"},renderMode:{type:\"sap.tnt.RenderMode\",defaultValue:a.Loose,group:\"Appearance\"},colorScheme:{type:\"int\",group:\"Misc\",defaultValue:7},width:{type:\"sap.ui.core.CSSSize\",group:\"Dimension\",defaultValue:null},displayOnly:{type:\"boolean\",group:\"Appearance\",defaultValue:!1},textDirection:{type:\"sap.ui.core.TextDirection\",group:\"Appearance\",defaultValue:i.Inherit}}}});return n.prototype.init=function(){sap.ui.getCore().getConfiguration().getAccessibility()&&!o._sAriaText&&(o._sAriaText=sap.ui.getCore().getLibraryResourceBundle(\"sap.tnt\").getText(\"INFOLABEL_DEFAULT\"),o._sAriaTextEmpty=sap.ui.getCore().getLibraryResourceBundle(\"sap.tnt\").getText(\"INFOLABEL_EMPTY\"))},n.prototype.setText=function(e){e=this.validateProperty(\"text\",e);var t=this.getText(),r=this.$();return t!==e&&(this.setProperty(\"text\",e,!0),r.length&&(r.find(\".sapTntInfoLabelInner\").text(e),\"\"!==e?r.find(\".sapUiPseudoInvisibleText\").text(o._sAriaText):r.find(\".sapUiPseudoInvisibleText\").text(o._sAriaTextEmpty)),r.toggleClass(\"sapTntInfoLabelNoText\",!e)),this},n.prototype.setColorScheme=function(e){e=this.validateProperty(\"colorScheme\",e);var t=this.getColorScheme(),r=this.$();return t!==e&&(e>0&&e<10?(this.setProperty(\"colorScheme\",e,!0),r.length&&(r.removeClass(\"backgroundColor\"+t),r.addClass(\"backgroundColor\"+e))):jQuery.sap.log.warning(\"colorScheme value was not set. It should be between 1 and 9\")),this},n.prototype.getFormDoNotAdjustWidth=function(){return!0},n});",
	"sap/tnt/InfoLabelRenderer.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"jquery.sap.global\",\"./library\",\"sap/ui/core/Renderer\",\"sap/ui/core/library\"],function(e,a,t,r){\"use strict\";var s=a.RenderMode,i=r.TextDirection,n={};return n.render=function(e,a){var t=a.getColorScheme(),r=a.getRenderMode(),d=a.getText(),l=a.getTextDirection(),o=a.getWidth(),p=a.getDisplayOnly();e.write(\"<div\"),e.writeControlData(a),e.addClass(\"sapTntInfoLabel\"),r===s.Narrow&&e.addClass(\"sapTntInfoLabelRenderModeNarrow\"),p&&e.addClass(\"sapTntInfoLabelDisplayOnly\"),\"\"===d&&e.addClass(\"sapTntInfoLabelNoText\"),o&&e.addStyle(\"width\",o),e.addClass(\"backgroundColor\"+t),e.writeClasses(),e.writeStyles(),e.write(\">\"),e.write(\"<span\"),e.addClass(\"sapTntInfoLabelInner\"),e.writeClasses(),l!==i.Inherit&&e.writeAttribute(\"dir\",l.toLowerCase()),e.write(\">\"),e.writeEscaped(d),e.write(\"</span>\"),n._sAriaText&&(e.write(\"<span class='sapUiPseudoInvisibleText'>\"),\"\"===d?e.writeEscaped(n._sAriaTextEmpty):e.writeEscaped(n._sAriaText),e.write(\"</span>\")),e.write(\"</div>\")},n},!0);",
	"sap/tnt/library.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"jquery.sap.global\",\"sap/ui/core/library\",\"sap/m/library\"],function(t){\"use strict\";return sap.ui.getCore().initLibrary({name:\"sap.tnt\",version:\"1.54.3\",dependencies:[\"sap.ui.core\",\"sap.m\"],types:[],interfaces:[],controls:[\"sap.tnt.NavigationList\",\"sap.tnt.ToolHeaderUtilitySeparator\",\"sap.tnt.ToolHeader\",\"sap.tnt.SideNavigation\",\"sap.tnt.ToolPage\",\"sap.tnt.InfoLabel\"],elements:[\"sap.tnt.NavigationListItem\"]}),sap.tnt.RenderMode={Narrow:\"Narrow\",Loose:\"Loose\"},sap.tnt});",
	"sap/tnt/NavigationList.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"jquery.sap.global\",\"./library\",\"sap/ui/core/Control\",\"sap/m/Popover\",\"sap/ui/core/delegate/ItemNavigation\",\"sap/ui/core/InvisibleText\",\"./NavigationListRenderer\"],function(t,e,i,o,s,a,n){\"use strict\";var r=i.extend(\"sap.tnt.NavigationList\",{metadata:{library:\"sap.tnt\",properties:{width:{type:\"sap.ui.core.CSSSize\",group:\"Dimension\"},expanded:{type:\"boolean\",group:\"Misc\",defaultValue:!0}},defaultAggregation:\"items\",aggregations:{items:{type:\"sap.tnt.NavigationListItem\",multiple:!0,singularName:\"item\"}},associations:{ariaDescribedBy:{type:\"sap.ui.core.Control\",multiple:!0,singularName:\"ariaDescribedBy\"},ariaLabelledBy:{type:\"sap.ui.core.Control\",multiple:!0,singularName:\"ariaLabelledBy\"},selectedItem:{type:\"sap.tnt.NavigationListItem\",multiple:!1}},events:{itemSelect:{parameters:{item:{type:\"sap.ui.core.Item\"}}}}}});return r.prototype.init=function(){this._itemNavigation=new s,this._itemNavigation.setCycling(!1),this.addEventDelegate(this._itemNavigation),this._itemNavigation.setPageSize(10),this._itemNavigation.setDisabledModifiers({sapnext:[\"alt\",\"meta\"],sapprevious:[\"alt\",\"meta\"]}),this._resourceBundle=sap.ui.getCore().getLibraryResourceBundle(\"sap.ui.core\"),sap.ui.getCore().getConfiguration().getAccessibility()&&!r._sAriaPopupLabelId&&(r._sAriaPopupLabelId=new a({text:\"\"}).toStatic().getId())},r.prototype.onAfterRendering=function(){this._itemNavigation.setRootDomRef(this.getDomRef()),this._itemNavigation.setItemDomRefs(this._getDomRefs()),this._selectedItem&&this._selectedItem._select()},r.prototype._updateNavItems=function(){this._itemNavigation.setItemDomRefs(this._getDomRefs())},r.prototype._getDomRefs=function(){for(var e=[],i=this.getItems(),o=0;o<i.length;o++)t.merge(e,i[o]._getDomRefs());return e},r.prototype._adaptPopoverPositionParams=function(){this.getShowArrow()?(this._marginLeft=10,this._marginRight=10,this._marginBottom=10,this._arrowOffset=18,this._offsets=[\"0 -18\",\"18 0\",\"0 18\",\"-18 0\"],this._myPositions=[\"center bottom\",\"begin top\",\"center top\",\"end top\"],this._atPositions=[\"center top\",\"end top\",\"center bottom\",\"begin top\"]):(this._marginTop=0,this._marginLeft=0,this._marginRight=0,this._marginBottom=0,this._arrowOffset=0,this._offsets=[\"0 0\",\"0 0\",\"0 0\",\"0 0\"],this._myPositions=[\"begin bottom\",\"begin top\",\"begin top\",\"end top\"],this._atPositions=[\"begin top\",\"end top\",\"begin bottom\",\"begin top\"])},r.prototype.exit=function(){this._itemNavigation&&this._itemNavigation.destroy()},r.prototype._selectItem=function(t){this.fireItemSelect(t);var e=t.item;this._selectedItem&&this._selectedItem._unselect(),e._select(),this._selectedItem=e,this.setAssociation(\"selectedItem\",e,!0)},r.prototype.getSelectedItem=function(){var t=this.getAssociation(\"selectedItem\");return t?sap.ui.getCore().byId(t):null},r.prototype.setSelectedItem=function(e,i){t.sap.require(\"sap.tnt.NavigationListItem\");var o;return this._selectedItem&&this._selectedItem._unselect(),e?\"string\"==typeof e||e instanceof sap.tnt.NavigationListItem?(o=\"string\"==typeof e?sap.ui.getCore().byId(e):e,o instanceof sap.tnt.NavigationListItem?(o._select(),this._selectedItem=o,sap.ui.core.Control.prototype.setAssociation.call(this,\"selectedItem\",e,i)):(t.sap.log.warning(\"Type of selectedItem association should be a valid NavigationListItem object or ID. New value was not set.\"),this)):(t.sap.log.warning(\"Type of selectedItem association should be string or instance of sap.tnt.NavigationListItem. New value was not set.\"),this):(this._selectedItem=null,sap.ui.core.Control.prototype.setAssociation.call(this,\"selectedItem\",e,i))},r.prototype._openPopover=function(t,e){var i=this,s=e.getSelectedItem();s&&e.isGroupSelected&&(s=null);var a=this._popover=new o({showHeader:!1,horizontalScrolling:!1,verticalScrolling:!0,initialFocus:s,afterClose:function(){i._popover&&(i._popover.destroy(),i._popover=null)},content:e,ariaLabelledBy:[r._sAriaPopupLabelId]}).addStyleClass(\"sapContrast sapContrastPlus\");a._adaptPositionParams=this._adaptPopoverPositionParams,a.openBy(t)},r.prototype._closePopover=function(){this._popover&&this._popover.close()},r},!0);",
	"sap/tnt/NavigationListItem.js": "sap.ui.define([\"jquery.sap.global\",\"./library\",\"sap/ui/core/Item\",\"sap/ui/core/Icon\",\"./NavigationList\",\"sap/ui/core/Renderer\",\"sap/ui/core/IconPool\"],function(t,e,i,a,s,n,r){\"use strict\";var o=i.extend(\"sap.tnt.NavigationListItem\",{metadata:{library:\"sap.tnt\",properties:{icon:{type:\"sap.ui.core.URI\",group:\"Misc\",defaultValue:\"\"},expanded:{type:\"boolean\",group:\"Misc\",defaultValue:!0},hasExpander:{type:\"boolean\",group:\"Misc\",defaultValue:!0},visible:{type:\"boolean\",group:\"Appearance\",defaultValue:!0}},defaultAggregation:\"items\",aggregations:{items:{type:\"sap.tnt.NavigationListItem\",multiple:!0,singularName:\"item\"},_expandIconControl:{type:\"sap.ui.core.Icon\",multiple:!1,visibility:\"hidden\"}},events:{select:{parameters:{item:{type:\"sap.ui.core.Item\"}}}}}});return o.expandIcon=\"sap-icon://navigation-right-arrow\",o.collapseIcon=\"sap-icon://navigation-down-arrow\",o.prototype._getExpandIconControl=function(){var t=this.getAggregation(\"_expandIconControl\");if(!t){var e=this.getExpanded();t=new a({src:e?o.collapseIcon:o.expandIcon,visible:this.getItems().length>0&&this.getHasExpander(),useIconTooltip:!1,tooltip:this._getExpandIconTooltip(!e)}).addStyleClass(\"sapTntNavLIExpandIcon\"),this.setAggregation(\"_expandIconControl\",t,!0)}return t},o.prototype._getExpandIconTooltip=function(t){if(!this.getEnabled())return\"\";var e=t?\"Icon.expand\":\"Icon.collapse\";return this.getNavigationList()._resourceBundle.getText(e)},o.prototype.getLevel=function(){var t=this.getParent();return\"sap.tnt.NavigationListItem\"==t.getMetadata().getName()?t.getLevel()+1:0},o.prototype.getNavigationList=function(){for(var t=this.getParent();t&&\"sap.tnt.NavigationList\"!=t.getMetadata().getName();)t=t.getParent();return t},o.prototype.createPopupList=function(){for(var t,e,i,a=[],n=this.getNavigationList(),r=n.getSelectedItem(),p=this.getItems(),d=0;d<p.length;d++)e=p[d],e.getVisible()&&(i=new o({key:e.getId(),text:e.getText(),textDirection:e.getTextDirection(),enabled:e.getEnabled()}),a.push(i),r==e&&(t=i));var l=new o({expanded:!0,hasExpander:!1,key:this.getId(),text:this.getText(),enabled:this.getEnabled(),textDirection:this.getTextDirection(),items:a}),g=new s({itemSelect:this.onPopupItemSelect.bind(this),items:[l]}).addStyleClass(\"sapTntNavLIPopup\");return r==this&&(t=l,g.isGroupSelected=!0),g.setSelectedItem(t),g},o.prototype.onPopupItemSelect=function(t){var e=t.getParameter(\"item\");e=sap.ui.getCore().byId(e.getKey()),e._selectItem(t)},o.prototype._selectItem=function(t){var e={item:this};this.fireSelect(e),this.getNavigationList()._selectItem(e)},o.prototype.onkeydown=function(e){if(!(e.isMarked(\"subItem\")||(e.setMarked(\"subItem\"),this.getLevel()>0))){var i=sap.ui.getCore().getConfiguration().getRTL();e.shiftKey&&189==e.which||e.which==t.sap.KeyCodes.NUMPAD_MINUS||e.which==t.sap.KeyCodes.ARROW_RIGHT&&i||e.which==t.sap.KeyCodes.ARROW_LEFT&&!i?this.collapse()&&(e.preventDefault(),e.target=null):(e.which==t.sap.KeyCodes.NUMPAD_PLUS||e.shiftKey&&e.which==t.sap.KeyCodes.PLUS||e.which==t.sap.KeyCodes.ARROW_LEFT&&i||e.which==t.sap.KeyCodes.ARROW_RIGHT&&!i)&&this.expand()&&(e.preventDefault(),e.target=null)}},o.prototype.expand=function(t){if(!(this.getExpanded()||!this.getHasExpander()||0==this.getItems().length||this.getLevel()>0)){this.setProperty(\"expanded\",!0,!0),this.$().find(\".sapTntNavLIGroup\").attr(\"aria-expanded\",!0);var e=this._getExpandIconControl();e.setSrc(o.collapseIcon),e.setTooltip(this._getExpandIconTooltip(!1));var i=this.$().find(\".sapTntNavLIGroupItems\");return i.stop(!0,!0).slideDown(t||\"fast\",function(){i.toggleClass(\"sapTntNavLIHiddenGroupItems\")}),this.getNavigationList()._updateNavItems(),!0}},o.prototype.collapse=function(t){if(this.getExpanded()&&this.getHasExpander()&&0!=this.getItems().length&&!(this.getLevel()>0)){this.setProperty(\"expanded\",!1,!0),this.$().find(\".sapTntNavLIGroup\").attr(\"aria-expanded\",!1);var e=this._getExpandIconControl();e.setSrc(o.expandIcon),e.setTooltip(this._getExpandIconTooltip(!0));var i=this.$().find(\".sapTntNavLIGroupItems\");return i.stop(!0,!0).slideUp(t||\"fast\",function(){i.toggleClass(\"sapTntNavLIHiddenGroupItems\")}),this.getNavigationList()._updateNavItems(),!0}},o.prototype.ontap=function(t){if(!t.isMarked(\"subItem\")&&this.getEnabled()){t.setMarked(\"subItem\"),t.preventDefault();var e=this.getNavigationList(),i=sap.ui.getCore().byId(t.target.id);if(1==this.getLevel()){var a=this.getParent();return void(this.getEnabled()&&a.getEnabled()&&this._selectItem(t))}if(e.getExpanded()||0==this.getItems().length){if(!i||\"sap.ui.core.Icon\"!=i.getMetadata().getName()||!i.$().hasClass(\"sapTntNavLIExpandIcon\"))return void this._selectItem(t);this.getExpanded()?this.collapse():this.expand()}else{var s=this.createPopupList();e._openPopover(this,s)}}},o.prototype.onsapenter=o.prototype.ontap,o.prototype.onsapspace=o.prototype.ontap,o.prototype.render=function(t,e,i,a){this.getVisible()&&(0===this.getLevel()?this.renderFirstLevelNavItem(t,e,i,a):this.renderSecondLevelNavItem(t,e,i,a))},o.prototype.renderGroupItem=function(t,e,i,a){var s,n=e.getExpanded(),r=this.getExpanded(),p=this.getText(),d={level:\"1\",posinset:i+1,setsize:this._getVisibleItems(e).length};if(n&&0!==this.getItems().length&&(d.expanded=r),t.write(\"<div\"),t.addClass(\"sapTntNavLIItem\"),t.addClass(\"sapTntNavLIGroup\"),this.getEnabled()?t.write(' tabindex=\"-1\"'):t.addClass(\"sapTntNavLIItemDisabled\"),n?d.role=\"treeitem\":(s=this.getTooltip_AsString()||p,s&&t.writeAttributeEscaped(\"title\",s),d.label=p,d.role=\"button\",d.haspopup=!0),t.writeAccessibilityState(d),e.getExpanded()&&(s=this.getTooltip_AsString()||p,s&&t.writeAttributeEscaped(\"title\",s),t.writeAttributeEscaped(\"aria-label\",p)),t.writeClasses(),t.write(\">\"),this._renderIcon(t),e.getExpanded()){var l=this._getExpandIconControl();l.setVisible(this.getItems().length>0&&this.getHasExpander()),l.setSrc(this.getExpanded()?o.collapseIcon:o.expandIcon),l.setTooltip(this._getExpandIconTooltip(!this.getExpanded())),this._renderText(t),t.renderControl(l)}t.write(\"</div>\")},o.prototype.renderFirstLevelNavItem=function(t,e,i,a){var s,n=this._getVisibleItems(this),r=n.length,o=this.getExpanded(),p=e.getExpanded();if(t.write('<li aria-hidden=\"true\" '),t.writeElementData(this),this.getEnabled()&&!p&&t.write(' tabindex=\"-1\"'),t.write(\">\"),this.renderGroupItem(t,e,i),p){t.write('<ul aria-hidden=\"true\" '),t.writeAttribute(\"role\",\"group\"),t.addClass(\"sapTntNavLIGroupItems\"),o||t.addClass(\"sapTntNavLIHiddenGroupItems\"),t.writeClasses(),t.write(\">\");for(var d=0;d<r;d++)s=n[d],s.render(t,e,d,r);t.write(\"</ul>\")}t.write(\"</li>\")},o.prototype.renderSecondLevelNavItem=function(t,e,i,a){var s=this.getParent();t.write(\"<li\"),t.writeElementData(this),t.addClass(\"sapTntNavLIItem\"),t.addClass(\"sapTntNavLIGroupItem\"),this.getEnabled()&&s.getEnabled()?t.write(' tabindex=\"-1\"'):t.addClass(\"sapTntNavLIItemDisabled\");var n=this.getText(),r=this.getTooltip_AsString()||n;r&&t.writeAttributeEscaped(\"title\",r),t.writeAccessibilityState({role:\"treeitem\",level:\"2\",posinset:i+1,setsize:a}),t.writeClasses(),t.write(\">\"),this._renderText(t),t.write(\"</li>\")},o.prototype._renderIcon=function(t){var e=this.getIcon(),i=r.getIconInfo(e);e?(t.write(\"<span\"),t.addClass(\"sapUiIcon\"),t.addClass(\"sapTntNavLIGroupIcon\"),t.writeAttribute(\"aria-hidden\",!0),i&&!i.suppressMirroring&&t.addClass(\"sapUiIconMirrorInRTL\"),i&&(t.writeAttribute(\"data-sap-ui-icon-content\",i.content),t.addStyle(\"font-family\",\"'\"+i.fontFamily+\"'\")),t.writeClasses(),t.writeStyles(),t.write(\"></span>\")):t.write('<span class=\"sapUiIcon sapTntNavLIGroupIcon\" aria-hidden=\"true\"></span>')},o.prototype._renderText=function(t){t.write(\"<span\"),t.addClass(\"sapMText\"),t.addClass(\"sapTntNavLIText\"),t.addClass(\"sapMTextNoWrap\"),t.writeClasses();var e=this.getTextDirection();e!==sap.ui.core.TextDirection.Inherit&&t.writeAttribute(\"dir\",e.toLowerCase());var i=n.getTextAlign(sap.ui.core.TextAlign.Begin,e);i&&(t.addStyle(\"text-align\",i),t.writeStyles()),t.write(\">\"),t.writeEscaped(this.getText()),t.write(\"</span>\")},o.prototype._unselect=function(){var t=this.$(),e=this.getNavigationList();e&&(t.removeClass(\"sapTntNavLIItemSelected\"),e.getExpanded()?(0==this.getLevel()&&(t=t.find(\".sapTntNavLIGroup\")),t.removeAttr(\"aria-selected\")):t.removeAttr(\"aria-pressed\"))},o.prototype._select=function(){var t=this.$(),e=this.getNavigationList();e&&(t.addClass(\"sapTntNavLIItemSelected\"),e.getExpanded()?(0==this.getLevel()&&(t=t.find(\".sapTntNavLIGroup\")),t.attr(\"aria-selected\",!0)):(t.attr(\"aria-pressed\",!0),e._closePopover()))},o.prototype._getDomRefs=function(){var t=[];if(!this.getEnabled())return t;var e=this.$();if(t.push(e.find(\".sapTntNavLIGroup\")[0]),this.getExpanded())for(var i=e.find(\".sapTntNavLIGroupItem\"),a=0;a<i.length;a++)t.push(i[a]);return t},o.prototype._getVisibleItems=function(t){for(var e,i=[],a=t.getItems(),s=0;s<a.length;s++)e=a[s],e.getVisible()&&i.push(e);return i},o},!0);",
	"sap/tnt/NavigationListRenderer.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"jquery.sap.global\",\"sap/ui/core/Renderer\"],function(e,t){\"use strict\";var r={};return r.render=function(e,t){var r,a=t.getItems(),i=t.getExpanded(),s=[];e.write(\"<ul\"),e.writeControlData(t);var n=t.getWidth();n&&i&&e.addStyle(\"width\",n),e.writeStyles(),e.addClass(\"sapTntNavLI\"),i||e.addClass(\"sapTntNavLICollapsed\"),e.writeClasses(),r=i?\"tree\":\"toolbar\",e.writeAttribute(\"role\",r),e.write(\">\"),a.forEach(function(e){e.getVisible()&&s.push(e)}),s.forEach(function(r,a){r.render(e,t,a,void 0)}),e.write(\"</ul>\")},r},!0);",
	"sap/tnt/SideNavigation.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"jquery.sap.global\",\"./library\",\"sap/ui/core/Control\",\"sap/ui/core/ResizeHandler\",\"sap/ui/core/Icon\",\"sap/ui/core/delegate/ScrollEnablement\",\"./SideNavigationRenderer\"],function(t,e,i,o,n,s,a){\"use strict\";var r=i.extend(\"sap.tnt.SideNavigation\",{metadata:{library:\"sap.tnt\",properties:{expanded:{type:\"boolean\",group:\"Misc\",defaultValue:!0}},defaultAggregation:\"item\",aggregations:{item:{type:\"sap.tnt.NavigationList\",multiple:!1,bindable:\"bindable\"},fixedItem:{type:\"sap.tnt.NavigationList\",multiple:!1},footer:{type:\"sap.tnt.NavigationList\",multiple:!1},_topArrowControl:{type:\"sap.ui.core.Icon\",multiple:!1,visibility:\"hidden\"},_bottomArrowControl:{type:\"sap.ui.core.Icon\",multiple:!1,visibility:\"hidden\"}},associations:{selectedItem:{type:\"sap.tnt.NavigationListItem\",multiple:!1}},events:{itemSelect:{parameters:{item:{type:\"sap.ui.core.Item\"}}}}}});return r.prototype.init=function(){this._scroller=new s(this,this.getId()+\"-Flexible-Content\",{horizontal:!1,vertical:!0}),this.data(\"sap-ui-fastnavgroup\",\"true\",!0)},r.prototype.setAggregation=function(t,e,i){return e&&e.attachItemSelect&&e.attachItemSelect(this._itemSelectionHandler.bind(this)),sap.ui.base.ManagedObject.prototype.setAggregation.apply(this,arguments)},r.prototype.setExpanded=function(t){if(this.getExpanded()===t)return this;if(this.setProperty(\"expanded\",t,!0),!this.getDomRef())return this;var e,i=this,o=this.$();return i._hasActiveAnimation&&(i._finishAnimation(!t),o.stop()),t&&(i.$().toggleClass(\"sapTntSideNavigationNotExpanded\",!t),i.getAggregation(\"item\")&&i.getAggregation(\"item\").setExpanded(t),i.getAggregation(\"fixedItem\")&&i.getAggregation(\"fixedItem\").setExpanded(t)),i._hasActiveAnimation=!0,e=t?\"15rem\":\"3rem\",o.animate({width:e},{duration:300,complete:function(){var t=i.getExpanded();i._finishAnimation(t)}}),this},r.prototype._finishAnimation=function(t){this._hasActiveAnimation&&this.getDomRef()&&(this.$().toggleClass(\"sapTntSideNavigationNotExpandedWidth\",!t),t||(this.$().toggleClass(\"sapTntSideNavigationNotExpanded\",!t),this.getAggregation(\"item\")&&this.getAggregation(\"item\").setExpanded(t),this.getAggregation(\"fixedItem\")&&this.getAggregation(\"fixedItem\").setExpanded(t)),this.$().css(\"width\",\"\"),this._hasActiveAnimation=!1,this._toggleArrows())},r.prototype.onBeforeRendering=function(){var t=this.getSelectedItem();t&&this.setSelectedItem(t,!0),this._deregisterControl()},r.prototype.onAfterRendering=function(){this._ResizeHandler=o.register(this.getDomRef(),this._toggleArrows.bind(this)),this._toggleArrows()},r.prototype.setSelectedItem=function(t,e){var i,o=this.getAggregation(\"item\"),n=this.getAggregation(\"fixedItem\");t||(o.setSelectedItem&&o.setSelectedItem(null,!0),n.setSelectedItem&&n.setSelectedItem(null,!0)),i=\"string\"==typeof t?sap.ui.getCore().byId(t):t;var s=i&&i.getNavigationList&&i.getNavigationList()===o,a=i&&i.getNavigationList&&i.getNavigationList()===n;return s&&(o.setSelectedItem(i,e),n&&n.setSelectedItem(null,!0)),a&&(n.setSelectedItem(i,e),o.setSelectedItem(null,!0)),sap.ui.core.Control.prototype.setAssociation.call(this,\"selectedItem\",i,!0)},r.prototype.exit=function(){this._scroller&&(this._scroller.destroy(),this._scroller=null),this._deregisterControl()},r.prototype._itemSelectionHandler=function(t){var e=t.getSource().getId(),i=this.getAggregation(\"item\"),o=this.getAggregation(\"fixedItem\"),n=t.getParameter(\"item\");i&&o&&e===i.getId()&&o.setSelectedItem(null),i&&o&&e===o.getId()&&i.setSelectedItem(null),sap.ui.core.Control.prototype.setAssociation.call(this,\"selectedItem\",n,!0),this.fireItemSelect({item:n})},r.prototype._deregisterControl=function(){this._ResizeHandler&&(o.deregister(this._ResizeHandler),this._ResizeHandler=null)},r.prototype._getTopArrowControl=function(){var t=this.getAggregation(\"_topArrowControl\"),e=this;return t||(t=new n({src:\"sap-icon://navigation-up-arrow\",noTabStop:!0,useIconTooltip:!1,tooltip:\"\",press:this._arrowPress.bind(e)}).addStyleClass(\"sapTntSideNavigationScrollIcon sapTntSideNavigationScrollIconUp\"),this.setAggregation(\"_topArrowControl\",t,!0)),t},r.prototype._getBottomArrowControl=function(){var t=this.getAggregation(\"_bottomArrowControl\"),e=this;return t||(t=new n({src:\"sap-icon://navigation-down-arrow\",noTabStop:!0,useIconTooltip:!1,tooltip:\"\",press:this._arrowPress.bind(e)}).addStyleClass(\"sapTntSideNavigationScrollIcon sapTntSideNavigationScrollIconDown\"),this.setAggregation(\"_bottomArrowControl\",t,!0)),t},r.prototype._toggleArrows=function(){var t=this.getDomRef();if(t){var e=this.$(\"Flexible\")[0],i=this.$(\"Flexible-Content\")[0],o=this.getExpanded();if(this._hasActiveAnimation)return t.querySelector(\".sapTntSideNavigationScrollIconUp\").style.display=\"none\",void(t.querySelector(\".sapTntSideNavigationScrollIconDown\").style.display=\"none\");i.offsetHeight>e.offsetHeight&&!o?(t.querySelector(\".sapTntSideNavigationScrollIconUp\").style.display=\"block\",t.querySelector(\".sapTntSideNavigationScrollIconDown\").style.display=\"block\",t.querySelector(\".sapTntSideNavigationScrollIconDown\").classList.remove(\"sapTntSideNavigationScrollIconDisabled\")):(t.querySelector(\".sapTntSideNavigationScrollIconUp\").style.display=\"none\",t.querySelector(\".sapTntSideNavigationScrollIconDown\").style.display=\"none\")}},r.prototype._arrowPress=function(t){t.preventDefault();var e=document.getElementById(t.oSource.sId),i=!!e.classList.contains(\"sapTntSideNavigationScrollIconDown\"),o=this.$(\"Flexible\"),n=i?40:-40;o[0].scrollTop+=n},r},!0);",
	"sap/tnt/SideNavigationRenderer.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([],function(){\"use strict\";var e={};return e.render=function(e,t){this.startSideNavigation(e,t),this.renderArrowUp(e,t),this.renderItem(e,t),this.renderArrowDown(e,t),this.renderFixedItem(e,t),this.renderFooter(e,t),this.endSideNavigation(e,t)},e.startSideNavigation=function(e,t){var i=t.getAggregation(\"item\"),r=t.getAggregation(\"fixedItem\"),n=t.getExpanded();e.write(\"<div\"),e.writeControlData(t),e.writeAttribute(\"role\",\"navigation\"),e.addClass(\"sapTntSideNavigation\"),e.addClass(\"sapContrast sapContrastPlus\"),n||(e.addClass(\"sapTntSideNavigationNotExpanded\"),e.addClass(\"sapTntSideNavigationNotExpandedWidth\")),!n&&i&&i.setExpanded(!1),!n&&r&&r.setExpanded(!1),e.writeClasses(),e.write(\">\")},e.endSideNavigation=function(e,t){e.write(\"</div>\")},e.renderArrowUp=function(e,t){e.renderControl(t._getTopArrowControl())},e.renderArrowDown=function(e,t){e.renderControl(t._getBottomArrowControl())},e.renderItem=function(e,t){var i=t.getAggregation(\"item\");e.write('<div id=\"'+t.getId()+'-Flexible\" tabindex=\"-1\" class=\"sapTntSideNavigationFlexible sapTntSideNavigationVerticalScrolling\">'),e.write('<div id=\"'+t.getId()+'-Flexible-Content\" class=\"sapTntSideNavigationFlexibleContent\">'),e.renderControl(i),e.write(\"</div></div>\")},e.renderFixedItem=function(e,t){var i=t.getAggregation(\"fixedItem\");null!==i&&(!1===i.getExpanded()&&i.setExpanded(!1),e.write('<div class=\"sapTntSideNavigationSeparator\" role=\"separator\" aria-orientation=\"horizontal\"></div>'),e.write('<div class=\"sapTntSideNavigationFixed\">'),e.renderControl(i),e.write(\"</div>\"))},e.renderFooter=function(e,t){t.getAggregation(\"footer\")&&(e.write('<footer class=\"sapTntSideNavigationFooter\">'),e.renderControl(t.getAggregation(\"footer\")),e.write(\"</footer>\"))},e},!0);",
	"sap/tnt/ToolHeader.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"jquery.sap.global\",\"./library\",\"sap/ui/core/Control\",\"sap/m/OverflowToolbar\",\"sap/m/OverflowToolbarAssociativePopover\",\"./ToolHeaderRenderer\"],function(t,o,e,s,a,r){\"use strict\";var p=s.extend(\"sap.tnt.ToolHeader\",{metadata:{library:\"sap.tnt\",properties:{},aggregations:{}}});return p.prototype.init=function(){s.prototype.init.apply(this,arguments),this.addStyleClass(\"sapTntToolHeader sapContrast sapContrastPlus\")},p.prototype._getPopover=function(){var t;return this.getAggregation(\"_popover\")||(t=new a(this.getId()+\"-popover\",{showHeader:!1,showArrow:!sap.ui.Device.system.phone,modal:!1,horizontalScrolling:!sap.ui.Device.system.phone,contentWidth:sap.ui.Device.system.phone?\"100%\":\"auto\"}).addStyleClass(\"sapTntToolHeaderPopover sapContrast sapContrastPlus\"),t.oControlsManager._preProcessSapMButton=this._preProcessPopoverControlsSapMButton.bind(t.oControlsManager),sap.ui.Device.system.phone&&(t.attachBeforeOpen(this._shiftPopupShadow,this),t.attachAfterOpen(this._shiftPopupShadow,this)),t.attachAfterClose(this._popOverClosedHandler,this),this.setAggregation(\"_popover\",t,!0)),this.getAggregation(\"_popover\")},p.prototype._preProcessPopoverControlsSapMButton=function(t){this._mControlsCache[t.getId()]={buttonType:t.getType()},t.getIcon()?t.addStyleClass(\"sapMOTAPButtonWithIcon\"):t.addStyleClass(\"sapMOTAPButtonNoIcon\"),t.attachEvent(\"_change\",this._onSapMButtonUpdated,this)},p.prototype._getBestActionSheetPlacement=function(){return sap.m.PlacementType.Bottom},p},!0);",
	"sap/tnt/ToolHeaderRenderer.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"sap/ui/core/Renderer\",\"sap/m/OverflowToolbarRenderer\",\"sap/m/BarInPageEnabler\"],function(e,r,t){\"use strict\";var n=e.extend(r);return n.renderBarContent=function(e,r){var o,a=!1;r._getVisibleContent().forEach(function(d){o=\"sap.tnt.ToolHeaderUtilitySeparator\"==d.getMetadata().getName(),!a&&o&&r._getOverflowButtonNeeded()&&(n.renderOverflowButton(e,r),a=!0),t.addChildClassTo(d,r),e.renderControl(d)}),!a&&r._getOverflowButtonNeeded()&&n.renderOverflowButton(e,r)},n},!0);",
	"sap/tnt/ToolHeaderUtilitySeparator.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"jquery.sap.global\",\"./library\",\"sap/ui/core/Control\"],function(r,e,t){\"use strict\";return t.extend(\"sap.tnt.ToolHeaderUtilitySeparator\",{metadata:{library:\"sap.tnt\",properties:{}},renderer:{render:function(){}}})},!0);",
	"sap/tnt/ToolPage.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"./library\",\"sap/ui/core/Control\",\"sap/ui/Device\",\"sap/ui/core/ResizeHandler\",\"./ToolPageRenderer\"],function(e,t,i,s,n){\"use strict\";var r=t.extend(\"sap.tnt.ToolPage\",{metadata:{library:\"sap.tnt\",properties:{sideExpanded:{type:\"boolean\",group:\"Misc\",defaultValue:!0}},aggregations:{header:{type:\"sap.tnt.ToolHeader\",multiple:!1},sideContent:{type:\"sap.tnt.SideNavigation\",multiple:!1},mainContents:{type:\"sap.ui.core.Control\",multiple:!0,singularName:\"mainContent\"}},events:{}}});return r.prototype.toggleSideContentMode=function(){return this.setSideExpanded(!this.getSideExpanded())},r.prototype.setSideExpanded=function(e){var t=this.getAggregation(\"sideContent\"),s=this.getDomRef();if(this.setProperty(\"sideExpanded\",e,!0),t){var n=!!i.system.phone||e;t.setExpanded(n)}return s?(e?s.querySelector(\".sapTntToolPageContentWrapper\").classList.remove(\"sapTntToolPageAsideCollapsed\"):s.querySelector(\".sapTntToolPageContentWrapper\").classList.add(\"sapTntToolPageAsideCollapsed\"),this):this},r.prototype.onBeforeRendering=function(){this._deregisterControl()},r.prototype.onAfterRendering=function(){this._ResizeHandler=s.register(this.getDomRef(),this._mediaQueryHandler.bind(this)),this._updateLastMediaQuery()},r.prototype.exit=function(){this._deregisterControl()},r.prototype._deregisterControl=function(){this._ResizeHandler&&(s.deregister(this._ResizeHandler),this._ResizeHandler=null)},r.prototype._mediaQueryHandler=function(){var e=this.getAggregation(\"sideContent\");if(null!==e&&(this._currentMediaQuery=this._getDeviceAsString(),this._getLastMediaQuery()!==this._currentMediaQuery)){switch(this._currentMediaQuery){case\"Combi\":this.setSideExpanded(!0);break;case\"Tablet\":this.setSideExpanded(!1);break;case\"Phone\":this.setSideExpanded(!1),e.setExpanded(!0);break;default:this.setSideExpanded(!0)}this._updateLastMediaQuery()}},r.prototype._getLastMediaQuery=function(){return this._lastMediaQuery},r.prototype._updateLastMediaQuery=function(){return this._lastMediaQuery=this._getDeviceAsString(),this},r.prototype._getDeviceAsString=function(){return i.system.combi?\"Combi\":i.system.phone?\"Phone\":i.system.tablet?\"Tablet\":\"Desktop\"},r},!0);",
	"sap/tnt/ToolPageRenderer.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([],function(){\"use strict\";var e={};return e.render=function(e,t){var i=t.getAggregation(\"header\");e.write(\"<div\"),e.writeControlData(t),e.addClass(\"sapTntToolPage\"),i&&e.addClass(\"sapTntToolPageWithHeader\"),e.writeClasses(),e.write(\">\"),i&&(e.write(\"<header>\"),e.write('<div id=\"'+t.getId()+'-header\" class=\"sapTntToolPageHeader\">'),e.renderControl(i),e.write(\"</div>\"),e.write(\"</header>\")),this.renderContentWrapper(e,t),e.write(\"</div>\")},e.renderContentWrapper=function(e,t){var i=sap.ui.Device.system.desktop;e.write('<div class=\"sapTntToolPageContentWrapper'),i&&t.getSideExpanded()||e.write(\" sapTntToolPageAsideCollapsed\"),e.write('\">'),this.renderAsideContent(e,t),this.renderMainContent(e,t),e.write(\"</div>\")},e.renderAsideContent=function(e,t){var i=sap.ui.Device.system.desktop,n=t.getAggregation(\"sideContent\"),r=t.getSideExpanded();e.write('<aside id=\"'+t.getId()+'-aside\" class=\"sapTntToolPageAside\">'),e.write('<div class=\"sapTntToolPageAsideContent\">'),n&&n.getExpanded()!==r&&n.setExpanded(r),i||t.setSideExpanded(!1),e.renderControl(n),e.write(\"</div>\"),e.write(\"</aside>\")},e.renderMainContent=function(e,t){var i=t.getAggregation(\"mainContents\");i&&(e.write('<div id=\"'+t.getId()+'-main\" class=\"sapTntToolPageMain\">'),e.write('<div class=\"sapTntToolPageMainContent\">'),e.write('<div class=\"sapTntToolPageMainContentWrapper\">'),i.forEach(e.renderControl),e.renderControl(),e.write(\"</div>\"),e.write(\"</div>\"),e.write(\"</div>\"))},e},!0);"
}, "sap/tnt/library-preload");