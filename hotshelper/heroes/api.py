from heroes.models import Hero
from rest_framework import viewsets, permissions
from .serializers import HeroSerializer 

class HeroViewSet(viewsets.ModelViewSet):
    queryset = Hero.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = HeroSerializer