from rest_framework import routers 
from .api import HeroViewSet

router = routers.DefaultRouter()
router.register('api/heroes', HeroViewSet, 'heroes')

urlpatterns = router.urls