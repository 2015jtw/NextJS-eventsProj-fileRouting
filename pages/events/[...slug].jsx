import { useRouter } from "next/router"
import { getFilteredEvents } from "../../data/dummy-data";
import EventList from "../../components/events/event-list";

export default function FilteredEventsPage(){

    const router = useRouter();
    const filteredData = router.query.slug;

    if(!filteredData){
        return(
            <p className="center">Loading...</p>
        )
    }

    const filteredYear = filteredData[0];
    const filteredMonth = filteredData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if(isNaN(numYear) || isNaN(numMonth) || numMonth < 1 || numMonth > 12 || numYear < 2021 || numYear > 2030){
        return(
            <p className="center">Invalid Filter. Please adjust values.</p>
        )
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    })

    if(!filteredEvents || filteredEvents.length === 0){
        return(
            <p className="center">No events found.</p>
        )
    }

    return(
        <div>
            <EventList items={filteredEvents} />
        </div>
    )
}