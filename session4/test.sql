select
	concat("FirstName",' ',"LastName") as FullName
from 
	"Customer" 
order by 
	"FirstName" asc;
  
  
select
	 min("Bytes"),
  max("Milliseconds"), 
  sum("UnitPrice") 
from "Track";



select 
	"Bytes"/1000
  		as 
    	  KiloBytes, 
  "Milliseconds"/1000 
  		as 
      	  Seconds,
   ("Bytes"/1000) / ("Milliseconds"/1000) 
   		as 
   		  Speed --just in case
from "Track";



select
	count("City") 
from "Employee" 
group by "City";



select 
	"InvoiceDate", 
    count("InvoiceDate"), 
    sum("Total") 
from "Invoice" 
		where 
"InvoiceDate">='Jan 01 2009 00:00:00' and "InvoiceDate"<'Apr 01 2009 00:00:00' 
group by "InvoiceDate";

