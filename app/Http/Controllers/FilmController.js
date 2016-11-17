'use strict'

const Eloadas = use('App/Model/E')
const Film = use('App/Model/Film')
const Seat = use('App/Model/Seat')
//const User = use('App/Model/User')
const Validator = use('Validator')
const Helpers = use('Helpers')
const fs = use('fs')

class FilmController {


  * main (request, response) {
    // load all categories
    const films = yield Film.all()
    const eloadasok = yield Film.all()

    yield response.sendView('main', { films: films .toJSON() })
    
  }

    * create (request, response) {
    const  filmek = yield Film.all()

    yield response.sendView('film_create', { filmek: filmek.toJSON() })
  }

  /**
   *
   */
  * doCreate (request, response) {
    const filmData = request.all()
    const validation = yield Validator.validateAll(filmData, {
      cim: 'required',
      mufaj: 'required',
      hossz: 'required',
      korhatar: 'required',
      rendezo: 'required',
      leiras: 'required',
      //szinkronizalt: 'required'
    })

    if (validation.fails()) {
      yield request
        .withAll()
        .andWith({ errors: validation.messages() })
        .flash()

      response.route('film_create')
    } else {
      //const category = yield Category.find(recipeData.category)

      /*if (!category) {
        yield request
          .withAll()
          .andWith({ errors: [{ message: 'category doesn\'t exist' }] })
          .flash()

        response.route('recipe_create')
      } else {*/
       /* const recipeImage = request.file('image', { maxSize: '1mb', allowedExtensions: ['jpg', 'JPG'] })

        if (recipeImage.clientSize() > 0 && !recipeImage.validate()) {
          yield request
            .withAll()
            .andWith({ errors: [{ message: recipeImage.errors() }] })
            .flash()

          response.route('film_create')
          return
        } */

        const film = new Film()
        film.cim = filmData.cim
        film.mufaj = filmData.mufaj
        film.hossz = filmData.hossz
        film.korhatar = filmData.korhatar
        film.rendezo = filmData.rendezo
        film.leiras = filmData.leiras
        film.szinkronizalt = filmData.szinkronizalt
        //film.created_by_id = 1 // TODO: Replace

        // TODO: these lines should be executed atomically
        yield film.save()
        //yield recipeImage.move(Helpers.publicPath() + '/images', `${recipe.id}.jpg`)
        //yield recipeImage.move(Helpers.publicPath() + '/images', `${recipe.id}.jpg`)

       response.route('main')
      }
    }


    * edit (request, response) {
    const filmId = request.param('id')
    const film = yield Film.find(filmId)
	
    if (!film) {
	  yield response.notFound('Film not found.')
	  return;
    } 
	
    /*if (film.created_by_id !== request.currentUser.id) {
      response.unauthorized('Access denied.')
    }*/

    //yield recipe.related('category').load()
    //yield recipe.related('created_by').load()

    //const categories = yield Category.all()

    yield response.sendView('film_edit', { film: film.toJSON() })
  }

  /**
   *
   */
  * doEdit (request, response) {
    const filmId = request.param('id')
    const film = yield Film.find(filmId)

    if (!film) {
	    yield response.notFound('Film not found.')
	  return;
    } 
	
    /*if (recipe.created_by_id !== request.currentUser.id) {
      yield response.unauthorized('Access denied.')
	  return;
    }*/
	  
    const filmData = request.all()
    const validation = yield Validator.validateAll(filmData, {
      cim: 'required',
      mufaj: 'required',
      hossz: 'required',
      korhatar: 'required',
      rendezo: 'required',
      leiras: 'required',
      //szinkronizalt: 'required'
    })

    
    if (validation.fails()) {
      yield request
        .with({ errors: validation.messages() })
        .flash()

      yield response.route('film_edit', {id:film.id})
	  return;
    } 
    
    /*const recipeImage = request.file('image', { maxSize: '1mb', allowedExtensions: ['jpg', 'JPG'] })

    if (recipeImage.clientSize() > 0) {
      yield recipeImage.move(Helpers.publicPath() + '/images', `${recipe.id}.jpg`)

      if (!recipeImage.moved()) {
        yield request
          .with({ errors: [{ message: recipeImage.errors() }] })
          .flash()

        response.route('recipe_edit', {id: recipe.id})
        return
      }
    }*/

        film.cim = filmData.cim
        film.mufaj = filmData.mufaj
        film.hossz = filmData.hossz
        film.korhatar = filmData.korhatar
        film.rendezo = filmData.rendezo
        film.leiras = filmData.leiras
        //film.szinkronizalt = filmData.szinkronizalt

    yield film.update()

    response.route('film_page', { id: film.id })
    
  }


    * show (request, response) {
    const filmId = request.param('id')
    const film = yield Film.find(filmId)

    if (film) {

      const fileName = `/images/${film.id}.jpg`
      const imageExists = yield fileExists(`${Helpers.publicPath()}/${fileName}`)
      const filmImage = imageExists ? fileName : false

      yield response.sendView('film_page', { film: film.toJSON(), filmImage })
    } else {
      response.notFound('Film not found.')
    }
  }

  * filmFoglalas(request, response) {
    const filmId = request.param('id')
    const film = yield Film.find(filmId)

    const helyek = yield Seat.all()
    

    if (film) {

      yield response.sendView('film_foglalas', { film: film.toJSON(), helyek: helyek.toJSON()})
    } else {
      response.notFound('Film not found.')
    }
  }

  * doFilmFoglalas(request, response) {
    const helyData = request.all()
    const filmId = request.param('id')
    const film = yield Film.find(filmId)

    const helyek = yield Seat.all()

    const seatNames = [
      'f1A', 'f1B', 'f1C', 'f1D', 'f1E', 'f1F',
      'f2A', 'f2B', 'f2C', 'f2D', 'f2E', 'f2F',
      'f3A', 'f3B', 'f3C', 'f3D', 'f3E', 'f3F',
      'f4A', 'f4B', 'f4C', 'f4D', 'f4E', 'f4F',
      'f5A', 'f5B', 'f5C', 'f5D', 'f5E', 'f5F',
      'f6A', 'f6B', 'f6C', 'f6D', 'f6E', 'f6F'
    ]

    const ids = yield Seat.ids()

    var i;
    var count = 0;
    for (i = 0; i < seatNames.length; i++) {
      var valtozo = seatNames[i]
      if (helyData.valtozo == 1) {
          const hely = yield Seat.find(ids[i])
          hely.foglalt = 1;
          //yield hely.update()
          count = count + 1;
      }
    }
     response.route('main')
    
    
  }

  * doDelete (request, response) {
    const filmId = request.param('id')
    const film = yield Film.find(filmId)
    if (film) {
      /*if (recipe.created_by_id !== request.currentUser.id) {
        response.unauthorized('Access denied.')
      }*/

      //recipe.deleted = true
      yield film.delete()

      response.route('main')
    } else {
      response.notFound('Film not found.')
    }
  }

    * create_eloadas (request, response) {
    const  eloadasok = yield Eloadas.all()
    const films = yield Film.all()
    yield response.sendView('eloadas_create', { eloadasok: eloadasok.toJSON(), films: films .toJSON() })
  }

  /**
   *
   */
  * doCreate_eloadas (request, response) {
    const eaData = request.all()
    const validation = yield Validator.validateAll(eaData, {
      //datum: 'required',
      ido: 'required',
      terem: 'required',
      film_id: 'required'
    })

    if (validation.fails()) {
      yield request
        .withAll()
        .andWith({ errors: validation.messages() })
        .flash()

      response.route('eloadas_create')
    } else {

        var res = eaData.film_id.split(".");
        eaData.film_id = res[0]
        console.log(eaData.film_id)


        const ea = new Eloadas()
        ea.ido = eaData.ido
        ea.terem = eaData.terem
        ea.film_id = eaData.film_id

        yield ea.save()
        
        response.route('eloadas_page', {id:ea.id})
      }
    }


    * edit_eloadas (request, response) {
    const eaId = request.param('id')
    const ea = yield Eloadas.find(eaId)
	
    if (!ea) {
	  yield response.notFound('Eloadas not found.')
	  return;
    }

    yield response.sendView('eloadas_edit', { ea: ea.toJSON() })
  }

  /**
   *
   */
  * doEdit_eloadas (request, response) {
    const eaId = request.param('id')
    const ea = yield Eloadas.find(eaId)

    if (!ea) {
	    yield response.notFound('Eloadas not found.')
	  return;
    } 
	  console.log('alma')
    const eaData = request.all()
    const validation = yield Validator.validateAll(eaData, {
      ido: 'required',
    })

    
    if (validation.fails()) {
      yield request
        .with({ errors: validation.messages() })
        .flash()

      yield response.route('eloadas_edit', {id:ea.id})
	  return;
    } 

        ea.ido = eaData.ido

    yield ea.update()

    response.route('eloadas_page', { id: ea.id })
    
  }

   * show_eloadas (request, response) {
    const eaId = request.param('id')
    const ea = yield Eloadas.find(eaId)

    if (ea) {

      yield response.sendView('eloadas_page', { ea: ea.toJSON()})
    } else {
      response.notFound('Eloadas not found.')
    }
  }

  }

  function fileExists(fileName) {
  return new Promise((resolve, reject) => {
    fs.access(fileName, fs.constants.F_OK, err => {
      if (err) resolve(false)
      else resolve(true)
    })
  })
}



  


module.exports = FilmController

const Route = use('Route')

Route.get('/', 'FilmController.main').as('main')
