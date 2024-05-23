from django.contrib import admin

from .models import *



# Register your models here.
admin.site.register([Worklist,ImageRadiologique,ExamenRadiologique,RendezVous,Equipement,Doctors,Patient])
