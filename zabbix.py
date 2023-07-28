

def busca_item_por_key(zapi, chave):


    tabela_esperada=["lastvalue","hostid","lastclock","itemid","name"]
    itens_com_key= zapi.item.get(output=  tabela_esperada ,   sortfield	= "lastvalue",     search= {"key_": chave})
    hosts = zapi.host.get(output=["hostid", "name"])


    filtro=lambda x : x["hostid"] ==i["hostid"]
    resultado=[]
    for i in itens_com_key:
        
        linha = i.copy()
        name_host=   [x["name"] for x in   list(filter(filtro, hosts )) ]
        if (len(name_host) > 0 ) :
            linha["host"]= name_host[0]
            resultado.append(linha)

        # print(linha)


    return (resultado)








def pesquisa_item_por_key_texto(zapi):

    items = zapi.item.get(output="extend", search={'key_':"a3tech.get"}, groupids="26")

    lista_de_hostid=[]
    if  (len(items) > 0 ):
        for i in items :
            lista_de_hostid.append(i["hostid"])
           #  print(i["hostid"])

    # x = zapi.hostgroup.get(output="extend")
    x = zapi.host.get(output="extend", hostids=lista_de_hostid)

    #y=[d['host'] for d in x]
    y=[]
    for i in x :
        hostid=i["hostid"]
        host=i["host"]

        #y.append(dic)
        z= [p["lastvalue"] for p in items if p['hostid'] == hostid]

        z=z[0].strip().split("\n")
        for j in z :
            print(j.split("::"))
            if       len(j.split("::")) > 1  :
                dic={"hosp":host.split("-")[1],"vm":j.split("::")[0], "state" : j.split("::")[1]  }
                y.append(dic)
    return (y)





def pesquisa_item_por_key_texto1(zapi):

    items = zapi.item.get(output="extend", search={'key_':"a3tech.get"}, groupids="26")

    lista_de_hostid=[]
    if  (len(items) > 0 ):
        for i in items :
            lista_de_hostid.append(i["hostid"])
           #  print(i["hostid"])

    # x = zapi.hostgroup.get(output="extend")
    x = zapi.host.get(output="extend", hostids=lista_de_hostid)

    #y=[d['host'] for d in x]
    y=[]
    for i in x :
        hostid=i["hostid"]
        host=i["host"]

        #y.append(dic)
        z= [p["lastvalue"] for p in items if p['hostid'] == hostid]

        z=z[0].strip().split("\n")
        for j in z :
            print(j.split("::"))
            if       len(j.split("::")) > 1  :
                dic={"hosp":host.split("-")[1],"vm":j.split("::")[0], "state" : j.split("::")[1]  }
                y.append(dic)
    return (y)





def xx():
  filtro=lambda x : x["itemid"] ==  item
  filtro_tabela=lambda x : x["itemid"] ==  item
  busca_no_historico = list(filter(filtro, historico_da_key))












