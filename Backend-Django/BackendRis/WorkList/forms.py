from django import forms

from BackendRis.WorkList.models import Patient
class PatientForms(forms.Form):
    class Meta:
        model=Patient
        fields=('id_patient','nom','sexe','prenom','date_naissance','adresse','numero_telephone')
        