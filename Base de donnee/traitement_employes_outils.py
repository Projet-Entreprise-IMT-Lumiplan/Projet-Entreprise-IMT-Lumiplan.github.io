# -*- coding: utf-8 -*-
"""
Created on Wed Nov 16 10:22:38 2022

@author: matias et alexandre
"""

from openpyxl import load_workbook
import json

path=("C:/Users/alexa/OneDrive/Bureau/2A LESSON/Luminan/BaseDeDonnée/Good BDD/Fichier XLSM/basededonneeluminan.xlsm")
workbook = load_workbook(path)
worksheet = workbook["Liste employés-outils"]

def getValue(col,row):
    
    if worksheet[col + str(row)].value is not None: 
        return worksheet[col+str(row)].value
    else :
        return "null"
    
from datetime import date, datetime

def json_serial(obj):
    """JSON serializer for objects not serializable by default json code"""

    if isinstance(obj, (datetime, date)):
        return obj.isoformat()
    raise TypeError ("Type %s not serializable" % type(obj))

dict ={"dataEmployesOutils": {}}

alphabet=["C","D","E","F","G","H","I","J","K","L","M","N","O","P",
          "Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE",
          "AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR",
          "AS","AT","AU","AV","AW","AX","AY","AZ"]

#identifiantOutils[j] = [identifiantOutil, nombreDAttributDansLeFichierXLSM]
identifiantOutils=[[5, 1], [0, 2], [1, 1], [8, 1], [9, 1], [3, 3], [4, 3], [6, 3], [7, 4], [31, 1], [18, 2], [19, 1], [20, 1], [21, 1], [32, 1], [22, 1], [23, 2], [24, 1], [25, 1], [26, 2], [28, 1], [29, 1], [30, 1]]

for i in range(4,230):
    #nom_prenom=getValue("E",i)+ " " +getValue("D",i)
    
    #Creation du dictionnaire associé au collaborateur numero id_user
    #id_user = int(str(getValue("C", i).strip("=")))
    id_user = i - 4
    dict["dataEmployesOutils"][id_user]={}
    
    #Nom
    dict["dataEmployesOutils"][id_user]["Nom"] = getValue("D", i)
    #Prenom
    dict["dataEmployesOutils"][id_user]["Prenom"] = getValue("E", i)
    #Statut
    dict["dataEmployesOutils"][id_user]["Statut"] = getValue("F", i)
    #Code Nature de Contrat
    dict["dataEmployesOutils"][id_user]["Code Nature de Contrat"] = getValue("G", i)
    
    #Date Debut Contrat
    if type(getValue("H",i))==datetime:
        dict["dataEmployesOutils"][id_user]["Date Debut Contrat"] = json_serial(getValue("H", i))
    else:
        dict["dataEmployesOutils"][id_user]["Date Debut Contrat"] = getValue("H", i)
        
    #Date Fin Contrat
    if type(getValue("I", i))==datetime:
        dict["dataEmployesOutils"][id_user]["Date Fin Contrat"] = json_serial(getValue("I", i))
    else:
        dict["dataEmployesOutils"][id_user]["Date Fin Contrat"] = getValue("I", i)
        
    #Utilisateur SYLOB (sondage)
    dict["dataEmployesOutils"][id_user]["Utilisateur SYLOB (sondage)"] = getValue("J", i)
    
    #Creation des sous-dictionnaire SI Metier et Infra et Reseaux
    dict["dataEmployesOutils"][id_user]["SI Metier"]={}
    dict["dataEmployesOutils"][id_user]["SI Infra et Reseaux"]={}
    
    #Implémentation des données outils SI Metier
    index = 8;
    for j in range(0,10):
        dict["dataEmployesOutils"][id_user]["SI Metier"][identifiantOutils[j][0]]={}
        dict["dataEmployesOutils"][id_user]["SI Metier"][identifiantOutils[j][0]]["Identifiant outils"]=identifiantOutils[j][0]
        dict["dataEmployesOutils"][id_user]["SI Metier"][identifiantOutils[j][0]]["Nom outils"]=getValue(alphabet[index], 2)
        for k in range(0, identifiantOutils[j][1]):
            dict["dataEmployesOutils"][id_user]["SI Metier"][identifiantOutils[j][0]][getValue(alphabet[index], 3)]=getValue(alphabet[index], i)
            index += 1
            
    #Implémentation des données outils SI Infra et Reseaux
    for j in range(10, 23):
        dict["dataEmployesOutils"][id_user]["SI Infra et Reseaux"][identifiantOutils[j][0]]={}
        dict["dataEmployesOutils"][id_user]["SI Infra et Reseaux"][identifiantOutils[j][0]]["Identifiant outils"]=identifiantOutils[j][0]
        dict["dataEmployesOutils"][id_user]["SI Infra et Reseaux"][identifiantOutils[j][0]]["Nom outils"]=getValue(alphabet[index], 2)
        for k in range(0, identifiantOutils[j][1]):
            dict["dataEmployesOutils"][id_user]["SI Infra et Reseaux"][identifiantOutils[j][0]][getValue(alphabet[index], 3)]=getValue(alphabet[index], i)
            index += 1
            

print(dict)


with open('dataEmployesOutils.json','w') as fp:
    json.dump(dict, fp, indent=7)

