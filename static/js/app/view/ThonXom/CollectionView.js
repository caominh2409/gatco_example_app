define(function (require) {
    "use strict";
    var $                   = require('jquery'),
        _                   = require('underscore'),
        Gonrin				= require('gonrin');
    
    var template 			= require('text!app/view/ThonXom/tpl/collection.html'),
    	schema 				= require('json!schema/ThonXomSchema.json');
    
    return Gonrin.CollectionView.extend({
    	template : template,
    	modelSchema	: schema,
    	urlPrefix: "/api/v1/",
    	collectionName: "thonxom",
    	uiControl:{
    		fields: [
	    	     { 
	    	    	field: "id",label:"ID", 
	    	     },
		     	 
		     	 { field: "ma", label: "Mã"},
		     	 { field: "ten", label: "Tên", width:250 },
		     	 {
	            	 field: "xaphuong_id", 
	            	 label: "Xa Phuong",
	            	 foreign: "xaphuong",
	            	 foreignValueField: "id",
	            	 foreignTextField: "ten",
	           	 },
	           	{
		        	 field: "xaphuong", 
		        	 visible: false
		         },
		     ],
		     onRowClick: function(event){
		    		if(event.rowId){
		        		var path = this.collectionName + '/model?id='+ event.rowId;
		        		this.getApp().getRouter().navigate(path);
		        	}
		    	}
    	},
	    render:function(){
	    	 this.applyBindings();
	    	 return this;
    	},
    	
    });

});