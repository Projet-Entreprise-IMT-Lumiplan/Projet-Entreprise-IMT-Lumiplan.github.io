# -*- coding: utf-8 -*-
"""
Created on Sat Nov 19 19:22:02 2022

@author: matia
"""

from openpyxl import load_workbook
import json

path=("C:/Users/matia/Documents/FISE A2/Projet Commande Entreprise/conversion xlsm-json/ModificationFormeDonnée.xlsm")
workbook = load_workbook(path)
worksheet = workbook["Contrats"]

def getValue(col,row):
    return worksheet[col+str(row)].value

from datetime import date, datetime

def json_serial(obj):
    """JSON serializer for objects not serializable by default json code"""

    if isinstance(obj, (datetime, date)):
        return obj.isoformat()
    raise TypeError ("Type %s not serializable" % type(obj))

dict ={"dataContrats": {}}

alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
          "Q","R","S","T","U","V","W","X","Y","Z"]

dict["dataContrats"]["SI Metier"]={}
dict["dataContrats"]["Infra et Reseaux"]={}

for i in range(2,23):
    id_outil=int(getValue("A",i))
    if id_outil not in dict["dataContrats"]["SI Metier"] :
        n=1
        dict["dataContrats"]["SI Metier"][id_outil]={}
        dict["dataContrats"]["SI Metier"][id_outil]["Licence"+str(n)]={}
        for j in range(2,25):
            if type(getValue(alphabet[j], i))==datetime:
                dict["dataContrats"]["SI Metier"][id_outil]["Licence"+str(1)][getValue(alphabet[j], 1)]=json_serial(getValue(alphabet[j], i))
            else:
                dict["dataContrats"]["SI Metier"][id_outil]["Licence"+str(1)][getValue(alphabet[j], 1)]=getValue(alphabet[j], i)
    else:
        n+=1
        dict["dataContrats"]["SI Metier"][id_outil]["Licence"+str(n)]={}
        for j in range(2,25):
            if type(getValue(alphabet[j], i))==datetime:
                dict["dataContrats"]["SI Metier"][id_outil]["Licence"+str(1)][getValue(alphabet[j], 1)]=json_serial(getValue(alphabet[j], i))
            else:
                dict["dataContrats"]["SI Metier"][id_outil]["Licence"+str(n)][getValue(alphabet[j], 1)]=getValue(alphabet[j], i)
        dict["dataContrats"]["SI Metier"][id_outil]["Nombre Licences"]=n      
    
for i in range(23,38):
    id_outil=int(getValue("A",i))
    if id_outil not in dict["dataContrats"]["Infra et Reseaux"] :
        n=1
        dict["dataContrats"]["Infra et Reseaux"][id_outil]={}
        dict["dataContrats"]["Infra et Reseaux"][id_outil]["Licence"+str(n)]={}
        for j in range(2,25):
            if type(getValue(alphabet[j], i))==datetime:
                dict["dataContrats"]["Infra et Reseaux"][id_outil]["Licence"+str(1)][getValue(alphabet[j], 1)]=json_serial(getValue(alphabet[j], i))
            else:
                dict["dataContrats"]["Infra et Reseaux"][id_outil]["Licence"+str(1)][getValue(alphabet[j], 1)]=getValue(alphabet[j], i)
    else:
        n+=1
        dict["dataContrats"]["Infra et Reseaux"][id_outil]["Licence"+str(n)]={}
        for j in range(2,25):
            if type(getValue(alphabet[j], i))==datetime:
                dict["dataContrats"]["Infra et Reseaux"][id_outil]["Licence"+str(1)][getValue(alphabet[j], 1)]=json_serial(getValue(alphabet[j], i))
            else:
                dict["dataContrats"]["Infra et Reseaux"][id_outil]["Licence"+str(n)][getValue(alphabet[j], 1)]=getValue(alphabet[j], i)
    dict["dataContrats"]["Infra et Reseaux"][id_outil]["Nombre Licences"]=n  

print(dict)


with open('dataContrats.json','w') as fp:
    json.dump(dict, fp, indent=7)