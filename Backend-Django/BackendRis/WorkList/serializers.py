from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DoctorViewSet, PatientViewSet, EquipementViewSet, ExamenRadiologiqueViewSet, WorklistViewSet, RendezVousViewSet, ImageRadiologiqueViewSet

router = DefaultRouter()
router.register(r'doctors', DoctorViewSet)
router.register(r'patients', PatientViewSet)
router.register(r'equipements', EquipementViewSet)
router.register(r'examens_radiologiques', ExamenRadiologiqueViewSet)
router.register(r'worklists', WorklistViewSet)
router.register(r'rendez_vous', RendezVousViewSet)
router.register(r'images_radiologiques', ImageRadiologiqueViewSet)

urlpatterns = router.urls
