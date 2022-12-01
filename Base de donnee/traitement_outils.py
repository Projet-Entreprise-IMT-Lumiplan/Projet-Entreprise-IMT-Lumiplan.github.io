# -*- coding: utf-8 -*-
"""
Created on Wed Nov 16 10:22:38 2022

@author: alexandre
"""

from openpyxl import load_workbook
import json

path=("C:/Users/alexa/OneDrive/Bureau/2A LESSON/Luminan/BaseDeDonnée/Good BDD/Fichier XLSM/basededonneeluminan.xlsm")
workbook = load_workbook(path)
worksheet = workbook["Liste des outils"]

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

dict ={"dataOutils": {}}

alphabet=["C","D","E","F","G","H","I","J","K","L","M","N","O","P",
          "Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE",
          "AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR",
          "AS","AT","AU","AV","AW","AX","AY","AZ"]


for i in range(2,35):
    #nom_prenom=getValue("E",i)+ " " +getValue("D",i)
    
    #Creation du dictionnaire associé au collaborateur numero id_user
    #id_user = int(str(getValue("C", i).strip("=")))
    id_outils = i - 2
    dict["dataOutils"][id_outils]={}
    
    #Identifiant Outils
    dict["dataOutils"][id_outils]["Identifiant outils"] = id_outils
    
    #Outils
    dict["dataOutils"][id_outils]["Outils"] = getValue("B", i)
    
    #Description
    dict["dataOutils"][id_outils]["Description"] = getValue("C", i)
    
    #Mots cles recherche
    #Description
    dict["dataOutils"][id_outils]["Mots cles recherche"] = getValue("D", i)
    
    #Referent
    dict["dataOutils"][id_outils]["Referent"] = getValue("E", i)
    
    #Equipe admin
    dict["dataOutils"][id_outils]["Equipe admin"] = getValue("F", i)
    #KU
    dict["dataOutils"][id_outils]["KU"] = getValue("G", i)
    #Integrateur
    dict["dataOutils"][id_outils]["Integrateur"] = getValue("H", i)
    
            

print(dict)


with open('dataContratOutils.json','w') as fp:
    json.dump(dict, fp, indent=7)