from django.db import models

# Create your models here.

class Worklist(models.Model):
    id_worklist = models.AutoField(primary_key=True)
    id_examen = models.ForeignKey('ExamenRadiologique', on_delete=models.CASCADE)
    date_creation = models.DateTimeField(auto_now_add=True)
    statut = models.CharField(max_length=20, choices=[('en_attente', 'En attente'), ('en_cours', 'En cours'), ('terminee', 'Terminée')])
    priorite = models.IntegerField()
    notes = models.TextField(blank=True, null=True)

class Patient(models.Model):
    id_patient = models.AutoField(primary_key=True)
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    date_naissance = models.DateField()
    sexe =models.CharField(max_length=20, choices=[('H', 'Homme'), ('F', 'Femme')])
    adresse = models.CharField(max_length=255)
    numero_telephone = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.nom} {self.prenom}"


class Medecin(models.Model):
    id_medecin = models.AutoField(primary_key=True)
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    specialite = models.CharField(max_length=100)
    adresse_email = models.EmailField()
    numero_telephone = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.nom} {self.prenom}"


class Equipement(models.Model):
    id_equipement = models.AutoField(primary_key=True)
    nom_equipement = models.CharField(max_length=100)
    fabricant = models.CharField(max_length=100)
    modele = models.CharField(max_length=100)
    annee_achat = models.IntegerField()

    def __str__(self):
        return self.nom_equipement


class RendezVous(models.Model):
    id_rendez_vous = models.AutoField(primary_key=True)
    date_heure_rendez_vous = models.DateTimeField()
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    medecin = models.ForeignKey(Medecin, on_delete=models.CASCADE)
    type_examen = models.CharField(max_length=100)

    def __str__(self):
        return f"Rendez-vous pour {self.patient} avec {self.medecin}"


class ExamenRadiologique(models.Model):
    id_examen = models.AutoField(primary_key=True)
    date_heure_examen = models.DateTimeField()
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    medecin = models.ForeignKey(Medecin, on_delete=models.CASCADE)
    equipement = models.ForeignKey(Equipement, on_delete=models.CASCADE)
    resultats = models.TextField()

    def __str__(self):
        return f"Examen radiologique pour {self.patient} par {self.medecin}"


class ImageRadiologique(models.Model):
    id_image = models.AutoField(primary_key=True)
    examen_radiologique = models.ForeignKey(ExamenRadiologique, on_delete=models.CASCADE)
    chemin_acces_image = models.CharField(max_length=255)
    date_heure_creation = models.DateTimeField()

    def __str__(self):
        return f"Image radiologique pour {self.examen_radiologique}"