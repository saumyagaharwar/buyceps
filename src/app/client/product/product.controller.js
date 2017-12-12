angular.module('buycepsApp').controller("productController", function($scope , $state) {
  
   console.log("productController");
 
  $scope.myInterval = 3000;
  $scope.heading = "My Product";
  $scope.vari = $state.current.name;
  $scope.productDetails = {"_id" : "Product_Id" , "name" : "Product Name", "title" : "Product Title", "quantity" : "Quantity", "description" : "Full Product description and name of Product", "category" : "Product Category", "size" : "Size of Product","price" : "Product Price : 100", "region" : "Region" };
 $scope.slides = [
    {
      image: 'images/product.png'
    },
    {
      image: 'images/logo_light.png'
    },
    {
      image: 'images/logo.png'
    }
   
  ];
 $scope.cartBtn = function() {
  
   //var val = document.getElementById("cartQty").innerHTML;
   //var newVal = parseInt(val,10) +1;
   document.getElementById("cartQty").innerHTML = 1;
   document.getElementById("cartQty").style.display="block";
};
  
});