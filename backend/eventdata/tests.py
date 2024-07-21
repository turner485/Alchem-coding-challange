from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import EventData
from .serializers import EventSerializer


class EventViewListTests(APITestCase):
    def setUp(self):
        self.url = reverse("event_data_list")

    def test_get_event_list(self):
        # Create some test data
        EventData.objects.create(event="Test Event 1")
        EventData.objects.create(event="Test Event 2")

        # Make a GET request
        response = self.client.get(self.url)

        # Check that the response is 200 OK
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check that the response data matches the created data
        events = EventData.objects.all()
        serializer = EventSerializer(events, many=True)
        self.assertEqual(response.data, serializer.data)

    def test_post_event(self):
        data = {"event": "New Event"}

        # Make a POST request
        response = self.client.post(self.url, data, format="json")

        # Check that the response is 201 Created
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # Check that the event was created
        self.assertEqual(EventData.objects.count(), 1)
        self.assertEqual(EventData.objects.get().event, "New Event")

    def test_delete_event(self):
        # Create some test data
        event = EventData.objects.create(event="Event to be deleted")
        delete_url = reverse("event-detail", args=[event.id])

        # Make a DELETE request
        response = self.client.delete(delete_url)

        # Check that the response is 204 No Content
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

        # Check that the event was deleted
        self.assertEqual(EventData.objects.count(), 0)
