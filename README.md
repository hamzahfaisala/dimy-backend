# dimy-backend

## to be able to test the api, plase import the "dimy-backend.sql" into your local environment.

## how to run

run this command on your terminal
1. npm install
2. npm run dev

## api documentation

get_customer
method : get
endpoint : /customer

get_product
method : get
endpoint : /product

get_payment_method
method : get
endpoint : /payment_method

get_transaction
method : get
endpoint : /transaction

create_transaction
method : post
endpoint : /transaction
body:
{
        "customer_id" : //integer//,
        "product_id" : //integer//,
        "payment_method_id" : //integer// 
}