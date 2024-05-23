from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models


class Doctors(AbstractUser):
    speciality = models.CharField(max_length=100)

    groups = models.ManyToManyField(
        Group,
        related_name="doctor_user_set",  # Custom related name
        blank=True,
        help_text=(
            "The groups this user belongs to. A user will get all permissions granted to each of their groups."
        ),
        related_query_name="doctor",
    )

    user_permissions = models.ManyToManyField(
        Permission,
        related_name="doctor_user_set",  # Custom related name
        blank=True,
        help_text=("Specific permissions for this user."),
        related_query_name="doctor",
    )


class Worklist(models.Model):
    id = models.AutoField(primary_key=True)
    id_examen = models.ForeignKey("ExamenRadiologique", on_delete=models.CASCADE)
    date_creation = models.DateTimeField(auto_now_add=True)
    statut = models.CharField(
        max_length=20,
        choices=[
            ("en_attente", "En attente"),
            ("en_cours", "En cours"),
            ("terminee", "Terminée"),
        ],
    )
    priorite = models.IntegerField()
    notes = models.TextField(blank=True, null=True)


class Patient(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    birthday = models.DateField()
    address = models.TextField()
    mobile_number = models.CharField(max_length=15)
    insurance_name = models.CharField(max_length=100)
    CIN = models.CharField(max_length=20)
    social_security_number = models.CharField(max_length=20)
    situation = models.CharField(max_length=100)
    doctor = models.ForeignKey(Doctors, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Equipement(models.Model):
    id_equipement = models.AutoField(primary_key=True)
    nom_equipement = models.CharField(max_length=100)
    fabricant = models.CharField(max_length=100)
    modele = models.CharField(max_length=100)
    annee_achat = models.IntegerField()

    def __str__(self):
        return self.nom_equipement


class RendezVous(models.Model):
    id = models.AutoField(primary_key=True)
    date_heure_rendez_vous = models.DateTimeField()
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    Doctor = models.ForeignKey(Doctors, on_delete=models.CASCADE)
    type_examen = models.CharField(max_length=100)

    def __str__(self):
        return f"Rendez-vous pour {self.patient} avec {self.Doctor}"


class ExamenRadiologique(models.Model):
    id = models.AutoField(primary_key=True)
    date_heure_examen = models.DateTimeField()
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    Doctor = models.ForeignKey(Doctors, on_delete=models.CASCADE)
    equipement = models.ForeignKey(Equipement, on_delete=models.CASCADE)
    resultats = models.TextField()

    def __str__(self):
        return f"Examen radiologique pour {self.patient} par {self.Doctor}"


class ImageRadiologique(models.Model):
    id = models.AutoField(primary_key=True)
    examen_radiologique = models.ForeignKey(
        ExamenRadiologique, on_delete=models.CASCADE
    )
    chemin_acces_image = models.CharField(max_length=255)
    date_heure_creation = models.DateTimeField()

    def __str__(self):
        return f"Image radiologique pour {self.examen_radiologique}"
