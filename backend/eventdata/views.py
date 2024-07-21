# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import EventData
from .serializers import EventSerializer


class EventViewList(APIView):
    def get(self, request):
        events = EventData.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EventDetail(APIView):
    def get(self, request, pk):
        try:
            event = EventData.objects.get(pk=pk)
        except EventData.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = EventSerializer(event)
        return Response(serializer.data)

    def delete(self, request, pk):
        try:
            event = EventData.objects.get(pk=pk)
        except EventData.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
