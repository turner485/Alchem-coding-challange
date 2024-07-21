from django.urls import path
from .views import EventViewList, EventDetail

urlpatterns = [
    path("eventdata/", EventViewList.as_view(), name="event_data_list"),
    path("eventdata/<int:pk>/", EventDetail.as_view(), name="event-detail"),
]
