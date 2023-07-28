# from flask import (Flask, render_template)
from flask import (Flask ,render_template)
from zabbix import ( busca_item_por_key ,pesquisa_item_por_key_texto)
from login_no_zabbix import  login_no_zabbix


app = Flask(__name__)


@app.route("/")
def pagina_raiz():
    return (render_template("home.html"))




@app.route("/item")
def pagina_item():
    zapi= login_no_zabbix()

    #return busca_item_por_key(zapi,  "vfs.fs.size[c:,free]"  )
    return busca_item_por_key(zapi,  "vfs.fs.size[c:,free]"  )


@app.route("/api/disco")
def api_disco():
    zapi= login_no_zabbix()

    # return "---- Ola"
    return busca_item_por_key(zapi,  "vfs.fs.size[c:,free]"  )
    #return busca_item_por_key(zapi,  "a3tech.get-vm[]"  )



@app.route("/api/vms")
def api_vms():
    zapi= login_no_zabbix()
    name="a3tech.get-vm[]"
    x= pesquisa_item_por_key_texto(zapi)
    return x


@app.route("/item/<name>")
def pagina_item_nome(name):
    zapi= login_no_zabbix()

    #return busca_item_por_key(zapi,  "vfs.fs.size[c:,free]"  )
    return busca_item_por_key(zapi, name  )
