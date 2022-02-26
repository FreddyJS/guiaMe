import sys
import json

class Nodo:
    def __init__(self, id, padre, coste_acumulado):
        self.id = id
        self.padre = padre
        self.coste_acumulado = coste_acumulado


class ListaNodos:
    def __init__(self):
        self.nodos = []

    def push(self, nodo):
        self.nodos.append(nodo)

    def pop(self):
        if (len(self.nodos) == 0):
            return None
        else:
            return self.nodos.pop()

    def pop(self):
        coste = float("inf")
        resultado = None
        for n in self.nodos:
            if (n.coste_acumulado < coste):
                resultado = n
                coste = n.coste_acumulado
        
        self.nodos.remove(resultado)
        return resultado

    def getPadre(self, id):
        for n in self.nodos:
            if (n.id == id):
                return n.padre
        
        return None

    def vacia(self):
        if (len(self.nodos) == 0):
            return True
        else:
            return False


    def contiene(self, nodo):
        for n in self.nodos:
            if (n.id == nodo.id):
                return True
        
        return False

    def imprime(self):
        print("------------- FRONTERA -----------")
        for n in self.nodos:
            print("MARCA: " + n.id + ", COSTE ACUMULADO: " + str(n.coste_acumulado))




class Mapa:
    def __init__(self,fichero):
        with open(fichero, 'r') as f:
            data=f.read()
            f.close()

        self.mapa = json.loads(data)


    def enlaces(self, id):
        for marca in self.mapa:
            if (marca["id"] == id):
                return marca["enlaces"]

        return []
    

    def getMarca(self, habitacion_id):
        for marca in self.mapa:
            if (marca["tipo"] == "habitaciones"):
                if (habitacion_id in marca["habitaciones"]):
                    return marca["id"]

        return None



def get_ruta(mapa, inicio, fin):
    mapa = Mapa(mapa)
    visitados = ListaNodos()
    frontera = ListaNodos()
    direcciones = []

    marca_inicio = mapa.getMarca(inicio)
    marca_fin = mapa.getMarca(fin)


    nodo = Nodo(marca_inicio,marca_inicio,0)
    frontera.push(nodo)

    while (not frontera.vacia()):
        #frontera.imprime()
        nodo = frontera.pop()
        if (nodo.id == marca_fin):
            resultado = [nodo.padre, nodo.id]
            paso = nodo.padre
            while (paso != marca_inicio):
                paso = visitados.getPadre(paso)
                resultado.insert(0,paso)
        
            return resultado

        visitados.push(nodo)
        hijos = mapa.enlaces(nodo.id)
        for hijo in hijos:
            id = hijo.get("id")
            coste_acumulado = nodo.coste_acumulado + hijo.get("distancia")
            nodo_hijo = Nodo(id, nodo.id, coste_acumulado)
            #print("Direcciones del nodo :" + nodo_hijo.id + " -> " + str(hijo.get("direccion")))
            if (not visitados.contiene(nodo_hijo)):
                frontera.push(nodo_hijo)


def get_direcciones(mapa, ruta):
    mapa = Mapa(mapa)
    i = 0
    direcciones = []
    try:
        while True:
            e = mapa.enlaces(ruta[i])
            for enl in e:
                if(enl.get("id") == ruta[i+1]):
                    print("Girando... " + str(enl.get("direccion")) + "   ")

        
            i+=1
    except IndexError as error:        
        print("Ruta calculada.")
    return

ruta = get_ruta("mapa-hospital.json", sys.argv[1], sys.argv[2])
get_direcciones("mapa-hospital.json", ruta)


#ruta = get_ruta("mapa-hospital.json", "08", "03")
#print(str(ruta) + "\n\n")

