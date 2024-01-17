import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import ErrorAlert from "@/components/ui/error-alert";
import { getEventById } from "@/dummyData";
import { useRouter } from "next/router";

export default function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventid;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>이벤트를 찾을 수 없습니다. </p>
      </ErrorAlert>
    );
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAll={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
