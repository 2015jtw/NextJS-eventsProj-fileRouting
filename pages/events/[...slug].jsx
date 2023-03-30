import { useRouter } from "next/router"
import { getFilteredEvents } from "../../data/dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import { Fragment } from "react";
import Button from "../../components/UI/button";
import ErrorAlert from "../../components/UI/error-alert";

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
            

            <Fragment>
                <ErrorAlert>
                    <p className="center">Invalid Filter. Please adjust values.</p>
                </ErrorAlert>
                
                <div className="center">
                    <Button link='/events'>Show all Events</Button>
                </div>
            </Fragment>
        )
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    })

    if(!filteredEvents || filteredEvents.length === 0){
        return(
            <Fragment>
                <ErrorAlert>
                    <p className="center">No events found.</p>
                </ErrorAlert>
                
                <div className="center">
                    <Button link='/events'>Show all Events</Button>
                </div>
                
            </Fragment>
        )
    }

    const date = new Date(numYear, numMonth - 1);

    return(
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    )
}