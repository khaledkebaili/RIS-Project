from rest_framework import viewsets
from .models import Doctors, Patient, Equipement, ExamenRadiologique, Worklist, RendezVous, ImageRadiologique
from .serializers import DoctorSerializer, PatientSerializer, EquipementSerializer, ExamenRadiologiqueSerializer, WorklistSerializer, RendezVousSerializer, ImageRadiologiqueSerializer

class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctors.objects.all()
    serializer_class = DoctorSerializer

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

class EquipementViewSet(viewsets.ModelViewSet):
    queryset = Equipement.objects.all()
    serializer_class = EquipementSerializer

class ExamenRadiologiqueViewSet(viewsets.ModelViewSet):
    queryset = ExamenRadiologique.objects.all()
    serializer_class = ExamenRadiologiqueSerializer

class WorklistViewSet(viewsets.ModelViewSet):
    queryset = Worklist.objects.all()
    serializer_class = WorklistSerializer

class RendezVousViewSet(viewsets.ModelViewSet):
    queryset = RendezVous.objects.all()
    serializer_class = RendezVousSerializer

class ImageRadiologiqueViewSet(viewsets.ModelViewSet):
    queryset = ImageRadiologique.objects.all()
    serializer_class = ImageRadiologiqueSerializer
