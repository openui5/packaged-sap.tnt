jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "sap.tnt.library-preload",
	"modules": {
		"sap/tnt/library.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"jquery.sap.global\",\"sap/ui/core/library\",\"sap/m/library\"],function(t){\"use strict\";return sap.ui.getCore().initLibrary({name:\"sap.tnt\",version:\"1.48.7\",dependencies:[\"sap.ui.core\",\"sap.m\"],types:[],interfaces:[],controls:[\"sap.tnt.NavigationList\",\"sap.tnt.ToolHeaderUtilitySeparator\",\"sap.tnt.ToolHeader\",\"sap.tnt.SideNavigation\",\"sap.tnt.ToolPage\"],elements:[\"sap.tnt.NavigationListItem\"]}),sap.tnt});",
		"sap/tnt/NavigationList.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"jquery.sap.global\",\"./library\",\"sap/ui/core/Control\",\"sap/m/Popover\",\"sap/ui/core/delegate/ItemNavigation\",\"sap/ui/core/InvisibleText\"],function(t,e,i,o,s,a){\"use strict\";var n=i.extend(\"sap.tnt.NavigationList\",{metadata:{library:\"sap.tnt\",properties:{width:{type:\"sap.ui.core.CSSSize\",group:\"Dimension\"},expanded:{type:\"boolean\",group:\"Misc\",defaultValue:!0}},defaultAggregation:\"items\",aggregations:{items:{type:\"sap.tnt.NavigationListItem\",multiple:!0,singularName:\"item\"}},associations:{ariaDescribedBy:{type:\"sap.ui.core.Control\",multiple:!0,singularName:\"ariaDescribedBy\"},ariaLabelledBy:{type:\"sap.ui.core.Control\",multiple:!0,singularName:\"ariaLabelledBy\"}},events:{itemSelect:{parameters:{item:{type:\"sap.ui.core.Item\"}}}}}});return n.prototype.init=function(){this._itemNavigation=new s,this._itemNavigation.setCycling(!1),this.addEventDelegate(this._itemNavigation),this._itemNavigation.setPageSize(10),this._itemNavigation.setDisabledModifiers({sapnext:[\"alt\",\"meta\"],sapprevious:[\"alt\",\"meta\"]}),this._resourceBundle=sap.ui.getCore().getLibraryResourceBundle(\"sap.ui.core\"),sap.ui.getCore().getConfiguration().getAccessibility()&&!n._sAriaPopupLabelId&&(n._sAriaPopupLabelId=new a({text:\"\"}).toStatic().getId())},n.prototype.onAfterRendering=function(){this._itemNavigation.setRootDomRef(this.getDomRef()),this._itemNavigation.setItemDomRefs(this._getDomRefs()),this._selectedItem&&this._selectedItem._select()},n.prototype._updateNavItems=function(){this._itemNavigation.setItemDomRefs(this._getDomRefs())},n.prototype._getDomRefs=function(){for(var e=[],i=this.getItems(),o=0;o<i.length;o++)t.merge(e,i[o]._getDomRefs());return e},n.prototype._adaptPopoverPositionParams=function(){this.getShowArrow()?(this._marginLeft=10,this._marginRight=10,this._marginBottom=10,this._arrowOffset=18,this._offsets=[\"0 -18\",\"18 0\",\"0 18\",\"-18 0\"],this._myPositions=[\"center bottom\",\"begin top\",\"center top\",\"end top\"],this._atPositions=[\"center top\",\"end top\",\"center bottom\",\"begin top\"]):(this._marginTop=0,this._marginLeft=0,this._marginRight=0,this._marginBottom=0,this._arrowOffset=0,this._offsets=[\"0 0\",\"0 0\",\"0 0\",\"0 0\"],this._myPositions=[\"begin bottom\",\"begin top\",\"begin top\",\"end top\"],this._atPositions=[\"begin top\",\"end top\",\"begin bottom\",\"begin top\"])},n.prototype.exit=function(){this._itemNavigation&&this._itemNavigation.destroy()},n.prototype._selectItem=function(t){this.fireItemSelect(t);var e=t.item;this._selectedItem&&this._selectedItem._unselect(),e._select(),this._selectedItem=e},n.prototype.getSelectedItem=function(){return this._selectedItem},n.prototype.setSelectedItem=function(t){this._selectedItem&&this._selectedItem._unselect(),t&&t._select(),this._selectedItem=t},n.prototype._openPopover=function(t,e){var i=this,s=e.getSelectedItem();s&&e.isGroupSelected&&(s=null);var a=this._popover=new o({showHeader:!1,horizontalScrolling:!1,verticalScrolling:!0,initialFocus:s,afterClose:function(){i._popover=null},content:e,ariaLabelledBy:[n._sAriaPopupLabelId]}).addStyleClass(\"sapContrast sapContrastPlus\");a._adaptPositionParams=this._adaptPopoverPositionParams,a.openBy(t)},n.prototype._closePopover=function(){this._popover&&this._popover.close()},n},!0);",
		"sap/tnt/NavigationListItem.js": "sap.ui.define([\"jquery.sap.global\",\"./library\",\"sap/ui/core/Item\",\"sap/ui/core/Icon\",\"./NavigationList\",\"sap/ui/core/Renderer\",\"sap/ui/core/IconPool\"],function(t,e,a,i,s,r,n){\"use strict\";var o=a.extend(\"sap.tnt.NavigationListItem\",{metadata:{library:\"sap.tnt\",properties:{icon:{type:\"sap.ui.core.URI\",group:\"Misc\",defaultValue:\"\"},expanded:{type:\"boolean\",group:\"Misc\",defaultValue:!0},hasExpander:{type:\"boolean\",group:\"Misc\",defaultValue:!0}},defaultAggregation:\"items\",aggregations:{items:{type:\"sap.tnt.NavigationListItem\",multiple:!0,singularName:\"item\"},_expandIconControl:{type:\"sap.ui.core.Icon\",multiple:!1,visibility:\"hidden\"}},events:{select:{parameters:{item:{type:\"sap.ui.core.Item\"}}}}}});return o.expandIcon=\"sap-icon://navigation-right-arrow\",o.collapseIcon=\"sap-icon://navigation-down-arrow\",o.prototype._getExpandIconControl=function(){var t=this.getAggregation(\"_expandIconControl\");if(!t){var e=this.getExpanded();t=new i({src:e?o.collapseIcon:o.expandIcon,visible:this.getItems().length>0&&this.getHasExpander(),useIconTooltip:!1,tooltip:this._getExpandIconTooltip(!e)}).addStyleClass(\"sapTntNavLIExpandIcon\"),this.setAggregation(\"_expandIconControl\",t,!0)}return t},o.prototype._getExpandIconTooltip=function(t){if(!this.getEnabled())return\"\";var e=t?\"Icon.expand\":\"Icon.collapse\";return this.getNavigationList()._resourceBundle.getText(e)},o.prototype.getLevel=function(){var t=this.getParent();return\"sap.tnt.NavigationListItem\"==t.getMetadata().getName()?t.getLevel()+1:0},o.prototype.getNavigationList=function(){for(var t=this.getParent();t&&\"sap.tnt.NavigationList\"!=t.getMetadata().getName();)t=t.getParent();return t},o.prototype.createPopupList=function(){for(var t,e,a,i=[],r=this.getNavigationList(),n=r.getSelectedItem(),p=this.getItems(),d=0;d<p.length;d++)e=p[d],a=new o({key:e.getId(),text:e.getText(),textDirection:e.getTextDirection(),enabled:e.getEnabled()}),i.push(a),n==e&&(t=a);var l=new o({expanded:!0,hasExpander:!1,key:this.getId(),text:this.getText(),enabled:this.getEnabled(),textDirection:this.getTextDirection(),items:i}),g=new s({itemSelect:this.onPopupItemSelect.bind(this),items:[l]}).addStyleClass(\"sapTntNavLIPopup\");return n==this&&(t=l,g.isGroupSelected=!0),g.setSelectedItem(t),g},o.prototype.onPopupItemSelect=function(t){var e=t.getParameter(\"item\");e=sap.ui.getCore().byId(e.getKey()),e._selectItem(t)},o.prototype._selectItem=function(t){var e={item:this};this.fireSelect(e),this.getNavigationList()._selectItem(e)},o.prototype.onkeydown=function(e){if(!(e.isMarked(\"subItem\")||(e.setMarked(\"subItem\"),this.getLevel()>0))){var a=sap.ui.getCore().getConfiguration().getRTL();e.shiftKey&&189==e.which||e.which==t.sap.KeyCodes.NUMPAD_MINUS||e.which==t.sap.KeyCodes.ARROW_RIGHT&&a||e.which==t.sap.KeyCodes.ARROW_LEFT&&!a?this.collapse()&&(e.preventDefault(),e.target=null):(e.which==t.sap.KeyCodes.NUMPAD_PLUS||e.shiftKey&&e.which==t.sap.KeyCodes.PLUS||e.which==t.sap.KeyCodes.ARROW_LEFT&&a||e.which==t.sap.KeyCodes.ARROW_RIGHT&&!a)&&this.expand()&&(e.preventDefault(),e.target=null)}},o.prototype.expand=function(t){if(!(this.getExpanded()||!this.getHasExpander()||0==this.getItems().length||this.getLevel()>0)){this.setProperty(\"expanded\",!0,!0),this.$().attr(\"aria-expanded\",!0);var e=this._getExpandIconControl();e.setSrc(o.collapseIcon),e.setTooltip(this._getExpandIconTooltip(!1));var a=this.$().find(\".sapTntNavLIGroupItems\");return a.stop(!0,!0).slideDown(t||\"fast\",function(){a.toggleClass(\"sapTntNavLIHiddenGroupItems\")}),this.getNavigationList()._updateNavItems(),!0}},o.prototype.collapse=function(t){if(this.getExpanded()&&this.getHasExpander()&&0!=this.getItems().length&&!(this.getLevel()>0)){this.setProperty(\"expanded\",!1,!0),this.$().attr(\"aria-expanded\",!1);var e=this._getExpandIconControl();e.setSrc(o.expandIcon),e.setTooltip(this._getExpandIconTooltip(!0));var a=this.$().find(\".sapTntNavLIGroupItems\");return a.stop(!0,!0).slideUp(t||\"fast\",function(){a.toggleClass(\"sapTntNavLIHiddenGroupItems\")}),this.getNavigationList()._updateNavItems(),!0}},o.prototype.ontap=function(t){if(!t.isMarked(\"subItem\")&&this.getEnabled()){t.setMarked(\"subItem\"),t.preventDefault();var e=this.getNavigationList(),a=sap.ui.getCore().byId(t.target.id);if(1==this.getLevel()){var i=this.getParent();return void(this.getEnabled()&&i.getEnabled()&&this._selectItem(t))}if(e.getExpanded()||0==this.getItems().length){if(!a||\"sap.ui.core.Icon\"!=a.getMetadata().getName()||!a.$().hasClass(\"sapTntNavLIExpandIcon\"))return void this._selectItem(t);this.getExpanded()?this.collapse():this.expand()}else{var s=this.createPopupList();e._openPopover(this,s)}}},o.prototype.onsapenter=o.prototype.ontap,o.prototype.onsapspace=o.prototype.ontap,o.prototype.render=function(t,e){0==this.getLevel()?this.renderFirstLevelNavItem(t,e):this.renderSecondLevelNavItem(t,e)},o.prototype.renderGroupItem=function(t,e){if(t.write(\"<div\"),t.addClass(\"sapTntNavLIItem\"),t.addClass(\"sapTntNavLIGroup\"),this.getEnabled()?e.getExpanded()&&t.write(' tabindex=\"-1\"'):t.addClass(\"sapTntNavLIItemDisabled\"),e.getExpanded()){var a=this.getText(),i=this.getTooltip_AsString()||a;i&&t.writeAttributeEscaped(\"title\",i),t.writeAttributeEscaped(\"aria-label\",a)}if(t.writeClasses(),t.write(\">\"),this._renderIcon(t),e.getExpanded()){var s=this._getExpandIconControl();s.setVisible(this.getItems().length>0&&this.getHasExpander()),s.setSrc(this.getExpanded()?o.collapseIcon:o.expandIcon),s.setTooltip(this._getExpandIconTooltip(!this.getExpanded())),this._renderText(t),t.renderControl(s)}t.write(\"</div>\")},o.prototype.renderFirstLevelNavItem=function(t,e){var a,i=this.getItems(),s=this.getExpanded(),r=e.getExpanded();t.write(\"<li\"),t.writeElementData(this),t.writeAttribute(\"aria-expanded\",this.getExpanded()),t.writeAttribute(\"aria-level\",1),this.getEnabled()&&!r&&t.write(' tabindex=\"-1\"');var n=this.getText();if(r)t.writeAttribute(\"role\",\"treeitem\");else{var n=this.getText(),o=this.getTooltip_AsString()||n;o&&t.writeAttributeEscaped(\"title\",o),t.writeAttributeEscaped(\"aria-label\",n),t.writeAttribute(\"role\",\"button\"),t.writeAttribute(\"aria-haspopup\",!0)}if(t.writeAttribute(\"tabindex\",\"0\"),t.write(\">\"),this.renderGroupItem(t,e),r){t.write(\"<ul\"),t.writeAttribute(\"role\",\"group\"),t.addClass(\"sapTntNavLIGroupItems\"),s||t.addClass(\"sapTntNavLIHiddenGroupItems\"),t.writeClasses(),t.write(\">\");for(var p=0;p<i.length;p++)a=i[p],a.render(t,e,this);t.write(\"</ul>\")}t.write(\"</li>\")},o.prototype.renderSecondLevelNavItem=function(t,e){var a=this.getParent();t.write(\"<li\"),t.writeElementData(this),t.addClass(\"sapTntNavLIItem\"),t.addClass(\"sapTntNavLIGroupItem\"),this.getEnabled()&&a.getEnabled()?t.write(' tabindex=\"-1\"'):t.addClass(\"sapTntNavLIItemDisabled\");var i=this.getText(),s=this.getTooltip_AsString()||i;s&&t.writeAttributeEscaped(\"title\",s),t.writeAttribute(\"role\",\"treeitem\"),t.writeAttribute(\"aria-level\",2),t.writeClasses(),t.write(\">\"),this._renderText(t),t.write(\"</li>\")},o.prototype._renderIcon=function(t){var e=this.getIcon(),a=n.getIconInfo(e);e?(t.write(\"<span\"),t.addClass(\"sapUiIcon\"),t.addClass(\"sapTntNavLIGroupIcon\"),t.writeAttribute(\"aria-hidden\",!0),a&&!a.suppressMirroring&&t.addClass(\"sapUiIconMirrorInRTL\"),a&&(t.writeAttribute(\"data-sap-ui-icon-content\",a.content),t.addStyle(\"font-family\",\"'\"+a.fontFamily+\"'\")),t.writeClasses(),t.writeStyles(),t.write(\"></span>\")):t.write('<span class=\"sapUiIcon sapTntNavLIGroupIcon\" aria-hidden=\"true\"></span>')},o.prototype._renderText=function(t){t.write(\"<span\"),t.addClass(\"sapMText\"),t.addClass(\"sapTntNavLIText\"),t.addClass(\"sapMTextNoWrap\"),t.writeClasses();var e=this.getTextDirection();e!==sap.ui.core.TextDirection.Inherit&&t.writeAttribute(\"dir\",e.toLowerCase());var a=r.getTextAlign(sap.ui.core.TextAlign.Begin,e);a&&(t.addStyle(\"text-align\",a),t.writeStyles()),t.write(\">\"),t.writeEscaped(this.getText()),t.write(\"</span>\")},o.prototype._unselect=function(){var t=this.$(),e=this.getNavigationList();e&&(t.removeClass(\"sapTntNavLIItemSelected\"),e.getExpanded()?(0==this.getLevel()&&(t=t.find(\".sapTntNavLIGroup\")),t.removeAttr(\"aria-selected\")):t.removeAttr(\"aria-pressed\"))},o.prototype._select=function(){var t=this.$(),e=this.getNavigationList();e&&(t.addClass(\"sapTntNavLIItemSelected\"),e.getExpanded()?(0==this.getLevel()&&(t=t.find(\".sapTntNavLIGroup\")),t.attr(\"aria-selected\",!0)):(t.attr(\"aria-pressed\",!0),e._closePopover()))},o.prototype._getDomRefs=function(){var t=[];if(!this.getEnabled())return t;var e=this.$();if(t.push(e.find(\".sapTntNavLIGroup\")[0]),this.getExpanded())for(var a=e.find(\".sapTntNavLIGroupItem\"),i=0;i<a.length;i++)t.push(a[i]);return t},o},!0);",
		"sap/tnt/NavigationListRenderer.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"jquery.sap.global\",\"sap/ui/core/Renderer\"],function(e,t){\"use strict\";var r={};return r.render=function(e,t){var r,a,s=t.getItems(),i=t.getExpanded();e.write(\"<ul\"),e.writeControlData(t);var d=t.getWidth();d&&i&&e.addStyle(\"width\",d),e.writeStyles(),e.addClass(\"sapTntNavLI\"),i||e.addClass(\"sapTntNavLICollapsed\"),e.writeClasses(),a=i?\"tree\":\"toolbar\",e.writeAttribute(\"role\",a),e.write(\">\");for(var l=0;l<s.length;l++)r=s[l],r.render(e,t);e.write(\"</ul>\")},r},!0);",
		"sap/tnt/SideNavigation.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"jquery.sap.global\",\"./library\",\"sap/ui/core/Control\",\"sap/ui/core/ResizeHandler\",\"sap/ui/core/Icon\",\"sap/ui/core/delegate/ScrollEnablement\"],function(t,e,i,o,n,r){\"use strict\";var a=i.extend(\"sap.tnt.SideNavigation\",{metadata:{library:\"sap.tnt\",properties:{expanded:{type:\"boolean\",group:\"Misc\",defaultValue:!0}},defaultAggregation:\"item\",aggregations:{item:{type:\"sap.tnt.NavigationList\",multiple:!1,bindable:\"bindable\"},fixedItem:{type:\"sap.tnt.NavigationList\",multiple:!1},footer:{type:\"sap.tnt.NavigationList\",multiple:!1},_topArrowControl:{type:\"sap.ui.core.Icon\",multiple:!1,visibility:\"hidden\"},_bottomArrowControl:{type:\"sap.ui.core.Icon\",multiple:!1,visibility:\"hidden\"}},events:{itemSelect:{parameters:{item:{type:\"sap.ui.core.Item\"}}}}}});return a.prototype.init=function(){this._scroller=new r(this,this.getId()+\"-Flexible-Content\",{horizontal:!1,vertical:!0}),this.data(\"sap-ui-fastnavgroup\",\"true\",!0)},a.prototype.setAggregation=function(t,e,i){return e&&e.attachItemSelect&&e.attachItemSelect(this._itemSelectionHandler.bind(this)),sap.ui.base.ManagedObject.prototype.setAggregation.apply(this,arguments)},a.prototype.setExpanded=function(t){if(this.getExpanded()===t)return this;if(this.setProperty(\"expanded\",t,!0),!this.getDomRef())return this;var e,i=this,o=this.$();return i._hasActiveAnimation&&(i._finishAnimation(!t),o.stop()),t&&(i.$().toggleClass(\"sapTntSideNavigationNotExpanded\",!t),i.getAggregation(\"item\")&&i.getAggregation(\"item\").setExpanded(t),i.getAggregation(\"fixedItem\")&&i.getAggregation(\"fixedItem\").setExpanded(t)),i._hasActiveAnimation=!0,e=o.parents(\".sapUiSizeCompact\").length>0?t?\"15rem\":\"2rem\":t?\"15rem\":\"3rem\",o.animate({width:e},{duration:300,complete:function(){var t=i.getExpanded();i._finishAnimation(t)}}),this},a.prototype._finishAnimation=function(t){this._hasActiveAnimation&&this.getDomRef()&&(this.$().toggleClass(\"sapTntSideNavigationNotExpandedWidth\",!t),t||(this.$().toggleClass(\"sapTntSideNavigationNotExpanded\",!t),this.getAggregation(\"item\")&&this.getAggregation(\"item\").setExpanded(t),this.getAggregation(\"fixedItem\")&&this.getAggregation(\"fixedItem\").setExpanded(t)),this.$().css(\"width\",\"\"),this._hasActiveAnimation=!1,this._toggleArrows())},a.prototype.onBeforeRendering=function(){this._deregisterControl()},a.prototype.onAfterRendering=function(){this._ResizeHandler=o.register(this.getDomRef(),this._toggleArrows.bind(this)),this._toggleArrows()},a.prototype.exit=function(){this._scroller&&(this._scroller.destroy(),this._scroller=null),this._deregisterControl()},a.prototype._itemSelectionHandler=function(t){var e=t.getSource().getId(),i=this.getAggregation(\"item\"),o=this.getAggregation(\"fixedItem\");i&&o&&e===i.getId()&&o.setSelectedItem(null),i&&o&&e===o.getId()&&i.setSelectedItem(null),this.fireItemSelect({item:t.getParameter(\"item\")})},a.prototype._deregisterControl=function(){this._ResizeHandler&&(o.deregister(this._ResizeHandler),this._ResizeHandler=null)},a.prototype._getTopArrowControl=function(){var t=this.getAggregation(\"_topArrowControl\"),e=this;return t||(t=new n({src:\"sap-icon://navigation-up-arrow\",noTabStop:!0,useIconTooltip:!1,tooltip:\"\",press:this._arrowPress.bind(e)}).addStyleClass(\"sapTntSideNavigationScrollIcon sapTntSideNavigationScrollIconUp\"),this.setAggregation(\"_topArrowControl\",t,!0)),t},a.prototype._getBottomArrowControl=function(){var t=this.getAggregation(\"_bottomArrowControl\"),e=this;return t||(t=new n({src:\"sap-icon://navigation-down-arrow\",noTabStop:!0,useIconTooltip:!1,tooltip:\"\",press:this._arrowPress.bind(e)}).addStyleClass(\"sapTntSideNavigationScrollIcon sapTntSideNavigationScrollIconDown\"),this.setAggregation(\"_bottomArrowControl\",t,!0)),t},a.prototype._toggleArrows=function(){var t=this.getDomRef();if(t){var e=this.$(\"Flexible\")[0],i=this.$(\"Flexible-Content\")[0],o=this.getExpanded();if(this._hasActiveAnimation)return t.querySelector(\".sapTntSideNavigationScrollIconUp\").style.display=\"none\",void(t.querySelector(\".sapTntSideNavigationScrollIconDown\").style.display=\"none\");i.offsetHeight>e.offsetHeight&&!o?(t.querySelector(\".sapTntSideNavigationScrollIconUp\").style.display=\"block\",t.querySelector(\".sapTntSideNavigationScrollIconDown\").style.display=\"block\",t.querySelector(\".sapTntSideNavigationScrollIconDown\").classList.remove(\"sapTntSideNavigationScrollIconDisabled\")):(t.querySelector(\".sapTntSideNavigationScrollIconUp\").style.display=\"none\",t.querySelector(\".sapTntSideNavigationScrollIconDown\").style.display=\"none\")}},a.prototype._arrowPress=function(t){t.preventDefault();var e=document.getElementById(t.oSource.sId),i=!!e.classList.contains(\"sapTntSideNavigationScrollIconDown\"),o=this.$(\"Flexible\"),n=i?40:-40;o[0].scrollTop+=n},a},!0);",
		"sap/tnt/SideNavigationRenderer.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([],function(){\"use strict\";var e={};return e.render=function(e,t){this.startSideNavigation(e,t),this.renderArrowUp(e,t),this.renderItem(e,t),this.renderArrowDown(e,t),this.renderFixedItem(e,t),this.renderFooter(e,t),this.endSideNavigation(e,t)},e.startSideNavigation=function(e,t){var i=t.getAggregation(\"item\"),r=t.getAggregation(\"fixedItem\"),n=t.getExpanded();e.write(\"<div\"),e.writeControlData(t),e.writeAttribute(\"role\",\"navigation\"),e.addClass(\"sapTntSideNavigation\"),e.addClass(\"sapContrast sapContrastPlus\"),n||(e.addClass(\"sapTntSideNavigationNotExpanded\"),e.addClass(\"sapTntSideNavigationNotExpandedWidth\")),!n&&i&&i.setExpanded(!1),!n&&r&&r.setExpanded(!1),e.writeClasses(),e.write(\">\")},e.endSideNavigation=function(e,t){e.write(\"</div>\")},e.renderArrowUp=function(e,t){e.renderControl(t._getTopArrowControl())},e.renderArrowDown=function(e,t){e.renderControl(t._getBottomArrowControl())},e.renderItem=function(e,t){var i=t.getAggregation(\"item\");e.write('<div id=\"'+t.getId()+'-Flexible\" tabindex=\"-1\" class=\"sapTntSideNavigationFlexible sapTntSideNavigationVerticalScrolling\">'),e.write('<div id=\"'+t.getId()+'-Flexible-Content\" class=\"sapTntSideNavigationFlexibleContent\">'),e.renderControl(i),e.write(\"</div></div>\")},e.renderFixedItem=function(e,t){var i=t.getAggregation(\"fixedItem\");null!==i&&(!1===i.getExpanded()&&i.setExpanded(!1),e.write('<div class=\"sapTntSideNavigationSeparator\" role=\"separator\" aria-orientation=\"horizontal\"></div>'),e.write('<div class=\"sapTntSideNavigationFixed\">'),e.renderControl(i),e.write(\"</div>\"))},e.renderFooter=function(e,t){t.getAggregation(\"footer\")&&(e.write('<footer class=\"sapTntSideNavigationFooter\">'),e.renderControl(t.getAggregation(\"footer\")),e.write(\"</footer>\"))},e},!0);",
		"sap/tnt/ToolHeader.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"jquery.sap.global\",\"./library\",\"sap/ui/core/Control\",\"sap/m/OverflowToolbar\",\"sap/m/OverflowToolbarAssociativePopover\"],function(t,o,e,s,a){\"use strict\";var r=s.extend(\"sap.tnt.ToolHeader\",{metadata:{library:\"sap.tnt\",properties:{},aggregations:{}}});return r.prototype.init=function(){s.prototype.init.apply(this,arguments),this.addStyleClass(\"sapTntToolHeader sapContrast sapContrastPlus\"),this.setHTMLTag(sap.m.IBarHTMLTag.Header)},r.prototype._getPopover=function(){var t;return this.getAggregation(\"_popover\")||(t=new a(this.getId()+\"-popover\",{showHeader:!1,showArrow:!sap.ui.Device.system.phone,modal:!1,horizontalScrolling:!sap.ui.Device.system.phone,contentWidth:sap.ui.Device.system.phone?\"100%\":\"auto\"}).addStyleClass(\"sapTntToolHeaderPopover sapContrast sapContrastPlus\"),t.oControlsManager._preProcessSapMButton=this._preProcessPopoverControlsSapMButton.bind(t.oControlsManager),sap.ui.Device.system.phone&&(t.attachBeforeOpen(this._shiftPopupShadow,this),t.attachAfterOpen(this._shiftPopupShadow,this)),t.attachAfterClose(this._popOverClosedHandler,this),this.setAggregation(\"_popover\",t,!0)),this.getAggregation(\"_popover\")},r.prototype._preProcessPopoverControlsSapMButton=function(t){this._mControlsCache[t.getId()]={buttonType:t.getType()},t.getIcon()?t.addStyleClass(\"sapMOTAPButtonWithIcon\"):t.addStyleClass(\"sapMOTAPButtonNoIcon\"),t.attachEvent(\"_change\",this._onSapMButtonUpdated,this)},r.prototype._getBestActionSheetPlacement=function(){return sap.m.PlacementType.Bottom},r},!0);",
		"sap/tnt/ToolHeaderRenderer.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"sap/ui/core/Renderer\",\"sap/m/OverflowToolbarRenderer\",\"sap/m/BarInPageEnabler\"],function(e,r,t){\"use strict\";var n=e.extend(r);return n.renderBarContent=function(e,r){var o,a=!1;r._getVisibleContent().forEach(function(d){o=\"sap.tnt.ToolHeaderUtilitySeparator\"==d.getMetadata().getName(),!a&&o&&r._getOverflowButtonNeeded()&&(n.renderOverflowButton(e,r),a=!0),t.addChildClassTo(d,r),e.renderControl(d)}),!a&&r._getOverflowButtonNeeded()&&n.renderOverflowButton(e,r)},n},!0);",
		"sap/tnt/ToolHeaderUtilitySeparator.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"jquery.sap.global\",\"./library\",\"sap/ui/core/Control\"],function(r,e,t){\"use strict\";return t.extend(\"sap.tnt.ToolHeaderUtilitySeparator\",{metadata:{library:\"sap.tnt\",properties:{}},renderer:{render:function(){}}})},!0);",
		"sap/tnt/ToolPage.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"./library\",\"sap/ui/core/Control\",\"sap/ui/Device\",\"sap/ui/core/ResizeHandler\"],function(e,t,i,s){\"use strict\";var n=t.extend(\"sap.tnt.ToolPage\",{metadata:{library:\"sap.tnt\",properties:{sideExpanded:{type:\"boolean\",group:\"Misc\",defaultValue:!0}},aggregations:{header:{type:\"sap.tnt.ToolHeader\",multiple:!1},sideContent:{type:\"sap.tnt.SideNavigation\",multiple:!1},mainContents:{type:\"sap.ui.core.Control\",multiple:!0,singularName:\"mainContent\"}},events:{}}});return n.prototype.toggleSideContentMode=function(){return this.setSideExpanded(!this.getSideExpanded())},n.prototype.setSideExpanded=function(e){var t=this.getAggregation(\"sideContent\"),s=this.getDomRef();if(this.setProperty(\"sideExpanded\",e,!0),t){var n=!!i.system.phone||e;t.setExpanded(n)}return s?(e?s.querySelector(\".sapTntToolPageContentWrapper\").classList.remove(\"sapTntToolPageAsideCollapsed\"):s.querySelector(\".sapTntToolPageContentWrapper\").classList.add(\"sapTntToolPageAsideCollapsed\"),this):this},n.prototype.onBeforeRendering=function(){this._deregisterControl()},n.prototype.onAfterRendering=function(){this._ResizeHandler=s.register(this.getDomRef(),this._mediaQueryHandler.bind(this)),this._updateLastMediaQuery()},n.prototype.exit=function(){this._deregisterControl()},n.prototype._deregisterControl=function(){this._ResizeHandler&&(s.deregister(this._ResizeHandler),this._ResizeHandler=null)},n.prototype._mediaQueryHandler=function(){var e=this.getAggregation(\"sideContent\");if(null!==e&&(this._currentMediaQuery=this._getDeviceAsString(),this._getLastMediaQuery()!==this._currentMediaQuery)){switch(this._currentMediaQuery){case\"Combi\":this.setSideExpanded(!0);break;case\"Tablet\":this.setSideExpanded(!1);break;case\"Phone\":this.setSideExpanded(!1),e.setExpanded(!0);break;default:this.setSideExpanded(!0)}this._updateLastMediaQuery()}},n.prototype._getLastMediaQuery=function(){return this._lastMediaQuery},n.prototype._updateLastMediaQuery=function(){return this._lastMediaQuery=this._getDeviceAsString(),this},n.prototype._getDeviceAsString=function(){return i.system.combi?\"Combi\":i.system.phone?\"Phone\":i.system.tablet?\"Tablet\":\"Desktop\"},n},!0);",
		"sap/tnt/ToolPageRenderer.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([],function(){\"use strict\";var e={};return e.render=function(e,t){var n=t.getAggregation(\"header\");e.write(\"<div\"),e.writeControlData(t),e.addClass(\"sapTntToolPage\"),n&&e.addClass(\"sapTntToolPageWithHeader\"),e.writeClasses(),e.write(\">\"),n&&(e.write('<div id=\"'+t.getId()+'-header\" class=\"sapTntToolPageHeader\">'),e.renderControl(n),e.write(\"</div>\")),this.renderContentWrapper(e,t),e.write(\"</div>\")},e.renderContentWrapper=function(e,t){var n=sap.ui.Device.system.desktop;e.write('<div class=\"sapTntToolPageContentWrapper'),n&&t.getSideExpanded()||e.write(\" sapTntToolPageAsideCollapsed\"),e.write('\">'),this.renderAsideContent(e,t),this.renderMainContent(e,t),e.write(\"</div>\")},e.renderAsideContent=function(e,t){var n=sap.ui.Device.system.desktop,i=t.getAggregation(\"sideContent\"),r=t.getSideExpanded();e.write('<aside id=\"'+t.getId()+'-aside\" class=\"sapTntToolPageAside\">'),e.write('<div class=\"sapTntToolPageAsideContent\">'),i&&i.getExpanded()!==r&&i.setExpanded(r),n||t.setSideExpanded(!1),e.renderControl(i),e.write(\"</div>\"),e.write(\"</aside>\")},e.renderMainContent=function(e,t){var n=t.getAggregation(\"mainContents\");n&&(e.write('<div id=\"'+t.getId()+'-main\" class=\"sapTntToolPageMain\">'),e.write('<div class=\"sapTntToolPageMainContent\">'),e.write('<div class=\"sapTntToolPageMainContentWrapper\">'),n.forEach(e.renderControl),e.renderControl(),e.write(\"</div>\"),e.write(\"</div>\"),e.write(\"</div>\"))},e},!0);"
	}
});