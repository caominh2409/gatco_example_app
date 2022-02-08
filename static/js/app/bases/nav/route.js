define(function (require) {
	"use strict";
	var $ = require('jquery'),
		_ = require('underscore'),
		Gonrin = require('gonrin');
	return [
		{
			"collectionName": "quocgia", 
			"route": "quocgia/collection(/:id)",
			"$ref": "app/view/QuocGia/CollectionView",
		},
		{
			"collectionName": "quocgia",
			"route": "quocgia/model(/:id)",
			"$ref": "app/view/QuocGia/ModelView",
		},
		{
			"collectionName": "tinhthanh",
			"route": "tinhthanh/collection(/:id)",
			"$ref": "app/view/TinhThanh/CollectionView",
		},
		{
			"collectionName": "tinhthanh",
			"route": "tinhthanh/model(/:id)",
			"$ref": "app/view/TinhThanh/ModelView",
		},
		{
			"collectionName": "xaphuong", 
			"route": "xaphuong/collection(/:id)",
			"$ref": "app/view/XaPhuong/CollectionView",
		},
		{
			"collectionName": "xaphuong",
			"route": "xaphuong/model(/:id)",
			"$ref": "app/view/XaPhuong/ModelView",
		},
		{
			"collectionName": "thonxom", 
			"route": "thonxom/collection(/:id)",
			"$ref": "app/view/ThonXom/CollectionView",
		},
		{
			"collectionName": "thonxom",
			"route": "thonxom/model(/:id)",
			"$ref": "app/view/ThonXom/ModelView",
		},

		{
			"collectionName": "khachhang",
			"route": "khachhang/collection(/:id)",
			"$ref": "app/view/KhachHang/CollectionView",
		},
		{
			"collectionName": "khachhang",
			"route": "khachhang/model(/:id)",
			"$ref": "app/view/KhachHang/ModelView",
		},
		{
			"collectionName": "hanghoa",
			"route": "hanghoa/collection(/:id)",
			"$ref": "app/view/HangHoa/CollectionView",
		},
		{
			"collectionName": "hanghoa",
			"route": "hanghoa/model(/:id)",
			"$ref": "app/view/HangHoa/ModelView",
		},
		{
			"collectionName": "hoadon",
			"route": "hoadon/collection(/:id)",
			"$ref": "app/view/HoaDon/CollectionView",
		},
		{
			"collectionName": "hoadon",
			"route": "hoadon/model(/:id)",
			"$ref": "app/view/HoaDon/ModelView",
		},
	];

});


