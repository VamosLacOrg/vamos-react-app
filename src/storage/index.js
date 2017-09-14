import Realm from 'realm'
import store from '../store'

class Store {
  static get () { return realm.objects(Store.schema.name) }
  static schema = {
    name: 'Store',
    primaryKey: 'id',
    properties: {
      id: {type: 'string'},
      lang:{type: 'string', default: ''},
      places: {type: 'list', objectType: 'Place'},
      createdTimestamp: {type: 'date'}
    }
  }
}

class Place {
  static get () { return realm.objects(Place.schema.name) }
  static schema = {
    name: 'Place',
    primaryKey: 'id',
    properties: {
      id: 'int',
      placeId: 'int',
      establecimiento: 'string',
      tipo: 'string',
      calle: 'string',
      altura: 'string',
      piso_dpto: 'string',
      cruce: 'string',
      barrio_localidad: 'string',
      partido_comuna: 'string',
      provincia_region: 'string',
      pais: 'string',
      aprobado: 'bool',
      observacion: 'string',
      formattedAddress: 'string',
      latitude: 'float',
      longitude: 'float',
      rateReal: 'float',
      cantidad_votos: 'float',
      habilitado: 'bool',
      condones: 'bool',
      prueba: 'bool',
      ssr: 'bool',
      dc: 'bool',
      mac: 'bool',
      ile: 'bool',
      tel_testeo: 'string',
      mail_testeo: 'string',
      horario_testeo: 'string',
      responsable_testeo: 'string',
      web_testeo: 'string',
      ubicacion_testeo: 'string',
      observaciones_testeo: 'string',
      tel_dc: 'string',
      mail_dc: 'string',
      horario_dc: 'string',
      responsable_dc: 'string',
      web_dc: 'string',
      ubicacion_dc: 'string',
      observaciones_dc: 'string',
      tel_distrib: 'string',
      mail_distrib: 'string',
      horario_distrib: 'string',
      responsable_distrib: 'string',
      web_distrib: 'string',
      ubicacion_distrib: 'string',
      comentarios_distrib: 'string',
      tel_infectologia: 'string',
      mail_infectologia: 'string',
      horario_infectologia: 'string',
      responsable_infectologia: 'string',
      web_infectologia: 'string',
      ubicacion_infectologia: 'string',
      comentarios_infectologia: 'string',
      tel_ssr: 'string',
      mail_ssr: 'string',
      horario_ssr: 'string',
      responsable_ssr: 'string',
      web_ssr: 'string',
      ubicacion_ssr: 'string',
      comentarios_ssr: 'string',
      tel_vac: 'string',
      mail_vac: 'string',
      horario_vac: 'string',
      responsable_vac: 'string',
      web_vac: 'string',
      ubicacion_vac: 'string',
      comentarios_vac: 'string',
      tel_mac: 'string',
      mail_mac: 'string',
      horario_mac: 'string',
      responsable_mac: 'string',
      web_mac: 'string',
      ubicacion_mac: 'string',
      comentarios_mac: 'string',
      tel_ile: 'string',
      mail_ile: 'string',
      horario_ile: 'string',
      responsable_ile: 'string',
      web_ile: 'string',
      ubicacion_ile: 'string',
      comentarios_ile: 'string',
      friendly_condones: 'bool',
      friendly_vacunatorios: 'bool',
      friendly_prueba: 'bool',
      friendly_ssr: 'bool',
      friendly_ile: 'bool',
      friendly_infectologia: 'bool',
      friendly_dc: 'bool',
      friendly_mac: 'bool'
    }
  }
}

export const _getStore = (id) => {
  const store = realm.objectForPrimaryKey(Store, id);
  return store
}

export const _updateStore = async (store, value, type) => {
  // alert('update store '+ value.length +" "+ type);
  console.log(store);
  console.log(value);
  switch (type) {
    case "lang":{
      realm.write(() => {
        try {
          store.lang = value
        } catch (e) {
          // alert('error realm '+e);
          console.warn(e)
        }
      })
      break;
    }

    case "places":{
      realm.write(() => {
        try {
          store.places = value
        } catch (e) {
          // alert('error realm '+e);
          console.warn(e)
        }
      })
      break;
    }

    // case "cities":{
    //   realm.write(() => {
    //     try {
    //       store.places = value
    //     } catch (e) {
    //       alert('error realm '+e);
    //       console.warn(e)
    //     }
    //   })
    //   break;
    // }


    default:

  }
}

export const _createStore = (id) => {
  realm.write(() => {
    realm.create(Store.schema.name, {
      id: id,
      places: [],
      createdTimestamp: new Date()
    })
  })
}

export const _deleteStore = (store) => {
  realm.write(() => {
    realm.delete(store)
  })
}

// const serializedState = JSON.stringify(state) save
// let serializedState = JSON.parse(value) load

const realm = new Realm({schema: [Place,Store]})
