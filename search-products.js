const products =[
    { name: 'samsung s3 phone', price: 12000},
    { name: 'asus laptop d34', price: 32000},
    { name: 'apple smart watch', price: 18000},
    { name: 'boshundhara binding paper', price: 80},
    { name: 'lg smart phone', price: 12000},
    { name: 'old granny land phone', price: 100},
    { name: 'samsung watch', price: 100},
    { name: 'Dell laptop', price: 3100},
    { name: 'lenovo laptop', price: 4100},
  ] ;

  function searchProducts(products, searchText){
    const matched = [];
   for(const product of products){
       const name = product.name;
    if(name.indexOf(searchText ) != -1){
         matched.push(product);
    }
       
   }
   return matched;

  }

  const matched = searchProducts(products, 'Laptop');
  console.log(matched);