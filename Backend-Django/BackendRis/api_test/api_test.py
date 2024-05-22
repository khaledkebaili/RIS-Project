import requests

endpoint="http://127.0.0.1:8080/worklist/patient/"
response=requests.get(endpoint,params={'nom':'Hajlaoui','prenom':'Firas'})

#response=requests.get(endpoint,json={'query':'Hello'},params={'name':'Firas'})


print(response.json())
print(response.status_code)

# import requests

# endpoint = "http://127.0.0.1:8080/worklist/patient/"

# # Données JSON pour le nouveau patient
# donnees_patient = {
#     "nom": "Kalil",
#     "prenom": "Ahmed",
#     "date_naissance": "1975-07-01",
#     "sexe": "H",
#     "adresse": "123 Rue Jdida",
#     "numero_telephone": "78562532"
# }

# # Envoyer la requête POST avec les données JSON
# response = requests.post(endpoint, json=donnees_patient)

# # Afficher la réponse
# print(response.json())
# print(response.status_code)
