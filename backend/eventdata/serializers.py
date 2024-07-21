# serializers.py
from rest_framework import serializers
from .models import EventData


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventData
        fields = ["id", "event", "created_at"]
