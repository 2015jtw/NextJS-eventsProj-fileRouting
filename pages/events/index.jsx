import { getAllEvents } from "../../data/dummy-data"
import EventList from "../../components/events/event-list";
import EventSearch from '../../components/events/event-search';
import { Fragment } from "react";
import {useRouter} from "next/router";

export default function AllEventsPage(){
    const router = useRouter();
    const allEvents = getAllEvents();

    function findEventsHandler(selectedYear, selectedMonth){

        const fullpath = `/events/${selectedYear}/${selectedMonth}`;
        router.push(fullpath);
    }

    return(
        <Fragment>
            <EventSearch onSearch={findEventsHandler} />
            <EventList items={allEvents} />
        </Fragment>
    )
}