from rest_framework import routers 
from .api import RecordViewSet

router = routers.DefaultRouter()
router.register('api/history', RecordViewSet, 'history')

urlpatterns = router.urls