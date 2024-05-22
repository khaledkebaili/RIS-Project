from rest_framework import serializers

from .models import Patient
class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model=Patient
        fields=('id_patient','nom','prenom','date_naissance','sexe','adresse','numero_telephone')
        