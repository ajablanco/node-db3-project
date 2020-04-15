-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT p.ProductName,
  c.CategoryName
FROM Product as p
Join Category as c ON p.Categoryid = c.ID


-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
Select o.id,
  s.CompanyName
FROM [Order] as o
Join Shipper as s ON o.shipvia = s.ID
where o.orderdate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.


Select p.productname,
  o.quantity
FROM Product as p
Join  OrderDetail as o ON p.id = o.productID
where o.orderid = '10251'
order by p.productname

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

Select o.id,
  c.companyName, e.LastName
FROM [Order] as o 
Join Customer as c ON o.customerid = c.ID
Join Employee as e ON e.id = o.employeeid