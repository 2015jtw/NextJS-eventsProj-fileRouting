import {getFeaturedEvents} from '../data/dummy-data'
import EventList from '../components/events/event-list';

export default function FeaturedEventsPage(){

    const featuredEvents = getFeaturedEvents();

    return(
        <div>
            <h1>Featured Events Page</h1>

            <EventList items={featuredEvents} />

            
        </div>
    )
}