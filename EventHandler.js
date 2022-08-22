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

    getSummary()
    {

    }
}