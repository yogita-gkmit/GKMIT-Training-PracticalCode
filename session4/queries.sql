select
	concat("FirstName",' ',"LastName") as FullName
from 
	"Customer" 
order by 
	"FirstName" asc;
  
 -- in this query i used concat so that it could be full name  
  
select
	min("Bytes"),
  	max("Milliseconds"), 
  	sum("UnitPrice") 
from "Track";

-- in this query, min function is to minimum of all bytes, max function is to find 
-- the maximum of all and sum function is to calculate the sum of all the unit prices 

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

-- in this query, 1kb=1000b and 1s=1000ms so to convert i divided them with 1000 and speed = distance/time so i just put this formulae here

select
	count("City") 
from "Employee" 
group by "City";

-- in this query, group by will give keep unique cities and count will store the count of duplicates 

select 
	"InvoiceDate", 
    count("InvoiceDate"), 
    sum("Total") 
from "Invoice" 
		where 
"InvoiceDate">='Jan 01 2009 00:00:00' and "InvoiceDate"<'Apr 01 2009 00:00:00' 
group by "InvoiceDate";

-- in this query, invoicedate is filtering out on the basis of invoicedate from 1 jan 2009 to 31 march 2009 
-- and the count of duplicate invoiceDates and sum of total which have same invoiceDate



select 
	Extract(month from "InvoiceDate"),
    count("InvoiceDate"), 
    sum("Total")
from "Invoice"
where 
	"InvoiceDate">='Jan 01 2009' and "InvoiceDate"<'Apr 01 2009'
group by 
	Extract(month from "InvoiceDate");
  


select 
	t1."Name", pl."Name"
from "Track" t1 inner join "PlaylistTrack" pt
	on t1."TrackId" = pt."TrackId"
 inner join "Playlist" pl
on pt."PlaylistId" = pl."PlaylistId" order by  pl."Name" desc; 



select 
	count(t1."Name") as "TrackCount", 
  	pl."Name"
from "Track" t1 
inner join "PlaylistTrack" pt on 
			t1."TrackId" = pt."TrackId"
inner join "Playlist" pl on 
    	pt."PlaylistId" = pl."PlaylistId" 
group by  
		pl."Name"
order by 
		"TrackCount" desc;

select 
	count(t1."Name") as "TrackCount", 
	pl."Name"
from "Track" t1 
inner join "PlaylistTrack" pt on 
			t1."TrackId" = pt."TrackId"
inner join "Playlist" pl on 
    	pt."PlaylistId" = pl."PlaylistId" 
group by  
		pl."Name"
having 
		count(t1."Name")>'100'
order by 
		"TrackCount" desc; 



select 
	"Name", 
    (
      select 
     	count("TrackId") 
     from 
      	"PlaylistTrack" pt
      where 
      	pt."PlaylistId"=pl."PlaylistId"
    ) as "PlayCount"
from
	"Playlist" pl;

