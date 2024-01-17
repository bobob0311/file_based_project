import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/dummyData";
import { useRouter } from "next/router";

export default function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  console.log(filterData);

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filterYear = +filterData[0];
  const filterMonth = +filterData[1];

  if (
    isNaN(filterYear) ||
    isNaN(filterMonth) ||
    filterMonth < 1 ||
    filterMonth > 12 ||
    filterYear > 2030 ||
    filterYear < 2021
  ) {
    return (
      <>
        <ErrorAlert>
          <p>유효한 년도와 월을 선택해주세요 </p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Event</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: filterYear,
    month: filterMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Event</Button>
        </div>
      </>
    );
  }

  const date = new Date(filterYear, filterMonth - 1);
  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}
