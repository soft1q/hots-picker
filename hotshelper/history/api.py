from .models import Record
from rest_framework import viewsets, permissions
from .serializers import RecordSerializer 

class RecordViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = RecordSerializer

    def get_queryset(self):
        return self.request.user.history.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

