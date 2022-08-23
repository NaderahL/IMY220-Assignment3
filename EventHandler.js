class EventHandler
{
    //Constructor
    constructor(events)
	{
		this.events = events;

        //Test
        //console.log(events);
	}

    getEventsBetweenDates(start, end)
    {
        
        //-------------START-------------
        //console.log(start);
        const convertedDateStart = new Date(start);
        //console.log(convertedDateStart);

        //-------------END-------------
        //console.log(end);
        const convertedDateEnd = new Date(end);
        //console.log(convertedDateEnd);
        //console.log("-------------------------------------------------------");
        //console.log("-------------------------------------------------------");


        var count=0;
        
        return events.filter(() => 
		{
            //-------------START-------------
			//console.log(events[count].dateStart);
            var DS = new Date (events[count].dateStart);
            //console.log(DS);

            //-------------END-------------
            //console.log(events[count].dateEnd);
            var ED = new Date (events[count].dateEnd)
            //console.log(ED);

            count++;
            //console.log("-------------------------------------------------------");

            return ((DS >= convertedDateStart) && (ED <= convertedDateEnd));
		});
    }

    getByMonth(month)
    {
        //console.log(month);
        var count=0;
        
        return events.filter(() => 
		{
            //-------------START-------------
			//console.log(events[count].dateStart);
            var DS = new Date (events[count].dateStart);
            //console.log(DS);
            var monthDS = DS.getMonth() + 1;
            //console.log(monthDS);

            count++;

            return (monthDS===month);
		});
    }

    getUniqueDateAndSort() 
    {
		return events.reduce((accumulator, currValue) =>
		{
			if(accumulator.every((events) => 
            {return (events.dateStart != currValue.dateStart) && (events.dateEnd != currValue.dateEnd)})) accumulator.push(currValue);
			//return accumulator;

            return accumulator.sort(function (a, b)
            {
                var dateA = new Date(a.dateStart).getTime();
                var dateB = new Date(b.dateStart).getTime();
                
                //console.log(dateA);
                //console.log(dateB);
                return dateA - dateB;
                
            })

		}, []);
    }

    getSummary(args)
    {
        let list;

		if(args && arguments[0].constructor === Array) 
        {
			list = arguments[0];
        }
        else
        {
		    list = args ? Array.prototype.slice.apply(arguments) : this.events;
        }

		return list.map((event) =>
		{
            if(event.dateStart === event.dateEnd)
            {
                return "On " + event.dateStart + ": " + event.name + " (" + event.description + ")";
                //On [dateStart]: [name] ( [description] )
            }
            else
            {
                return "From " + event.dateStart + " to " + event.dateEnd + ": " + event.name + " (" + event.description + ")";
                //From [dateStart] to [dateEnd]: [name] ( [description] )
            }    
            
		});
    }
}

Array.prototype.getEventsBetweenDates= function(start, end)
{
    if(Array.isArray(this))
    {
        const handler = new EventHandler(this);
        return handler.getEventsBetweenDates(start,end);
    }
    else
    {
        return [];
    }
};

Array.prototype.getByMonth = function(month)
{
    if(Array.isArray(this))
    {
        const handler = new EventHandler(this);
        return handler.getByMonth(month);
    }
    else
    {
        return [];
    }
};

Array.prototype.getUniqueDateAndSort = function()
{
    if(Array.isArray(this))
    {
        const handler = new EventHandler(this);
        return handler.getUniqueDateAndSort();
    }
    else
    {
        return [];
    }
};

Array.prototype.getSummary = function(args)
{
    if(Array.isArray(this))
    {
        const handler = new EventHandler(this);
        return handler.getSummary(args);
    }
    else
    {
        return [];
    }
};