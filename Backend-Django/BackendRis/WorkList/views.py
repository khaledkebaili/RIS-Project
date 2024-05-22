import json
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import PatientSerializer
from .models import Patient

@api_view(['GET', 'POST'])
def SetPatient(request):
    if request.method == 'GET':
        # Récupérer les paramètres de requête GET
        nom = request.GET.get('nom', None)
        prenom = request.GET.get('prenom', None)

        # Vérifier si les paramètres de nom et de prénom sont présents
        if nom and prenom:
            # Rechercher le patient dans la base de données 
            query = Patient.objects.filter(nom=nom, prenom=prenom)
            # Sérialiser les données du patient
            serializer = PatientSerializer(query, many=True)
            # Renvoyer la réponse JSON avec les données du patient
            return Response(serializer.data)
        else:
            return Response({'erreur': 'Paramètres de nom et de prénom manquants dans la requête GET'})
    
    elif request.method == 'POST':
        # Récupérer les données JSON de la requête POST
        data = json.loads(request.body)
        
        # Sérialiser les données du patient
        serializer = PatientSerializer(data=data)
        
        # Vérifier la validité du sérialiseur
        if serializer.is_valid():
            # Sauvegarder le nouveau patient dans la base de données
            serializer.save()
            # Retourner une réponse JSON indiquant que le patient a été ajouté avec succès
            return Response({'message': 'Patient ajouté avec succès'})
        else:
            # Retourner une réponse JSON avec les erreurs de validation
            return Response(serializer.errors, status=400)

    else:
        return Response({'erreur': 'Méthode non autorisée'})
