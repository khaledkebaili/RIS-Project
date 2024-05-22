from django.urls import path
from .views import SetPatient



urlpatterns=[

    path('patient/',SetPatient),

]