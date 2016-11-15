'use strict'


const Hash = use('Hash')
const User = use('App/Model/User')
const Validator = use('Validator')

class UserController {
    * doLogin (request, response) {
    const felhasznalonev = request.input('felhasznalonev')
    const jelszo = request.input('jelszo')
    try {
        yield request.auth.attempt(felhasznalonev, jelszo)
        response.route('main')
    } catch (err) {
      yield request.withAll().andWith({ error: err }).flash()
      response.route('login')
    }
  }

  /**
   *
   */
  * doRegister (request, response) {
    const userData = request.all()

    const validation = yield Validator.validateAll(userData, {
      felhasznalonev: 'required|alpha_numeric|unique:users',
      email: 'required|email|unique:users',
      nev: 'required|max:30',
      jelszo: 'required|min:4',
      jelszo_ujra: 'required|same:password'
    })

    if (validation.fails()) {
      yield request
        .withOut('password', 'password_again')
        .andWith({ errors: validation.messages() })
        .flash()

      response.route('register')
	  return;
	  
    }
	
    const user = new User()
    user.felhasznalonev = userData.felhasznalonev
    user.email = userData.email
    user.nev = userData.nev
    user.jelszo = yield Hash.make(userData.jelszo)

    yield user.save()

    yield request.auth.login(user)
    
    response.route('register')
  }

  /**
   *
   */
  * doLogout (request, response) {
    yield request.auth.logout()
    response.route('main')
  }

  /**
   *
   */
  * login (request, response) {
    if (request.currentUser) {
      response.route('main')
      return
    }

    yield response.sendView('login')
  }

  /**
   *
   */
  * register (request, response) {
    if (request.currentUser) {
      response.route('main')
      return
    }

    yield response.sendView('register')
  }

   * doLogout (request, response) {
    yield request.auth.logout()
    response.route('main')
  }

  * profile (request, response) {
    yield response.sendView('user_profile')
  }

   * doPasswordEdit (request, response) {
    const userData = request.all()
    console.log('alma')
    const validation = yield Validator.validateAll(userData, {
      old_jelszo: 'required',
      new_jelszo: 'required|min:4',
      new_jelszo_again: 'required|same:new_password'
    })

    if (validation.fails()) {
      yield request
        .with({ errors: validation.messages() })
        .flash()
		
     response.route('profile')
	 return;
    }
	
    const user = request.currentUser
    const isSame = yield Hash.verify(userData.old_jelszo, user.jelszo)

    if (!isSame) {
      yield request
        .with({ errors: [{ message: 'Bad actual password.' }] })
        .flash()
		
      response.route('profile')
	  return
    }

    user.jelszo = yield Hash.make(userData.new_jelszo)

    yield user.update()

    yield request
      .with({ success: 'Password changed successfully.' })
      .flash()
	
    response.route('profile')
  }

  /**
   *
   */
  * doProfileEdit (request, response) {
    const userData = request.all()
    const user = request.currentUser
    const rules = { felhasznalonev: 'required|max:30' }

    if (userData.felhasznalonev !== user.felhasznalonev) {
      rules.felhasznalonev = 'required|alpha_numeric|unique:users'
    }

    if (userData.email !== user.email) {
      rules.email = 'required|email|unique:users'
    }

    const validation = yield Validator.validateAll(userData, rules)

    if (validation.fails()) {
      yield request
        .with({ errors: validation.messages() })
        .flash()

      response.route('profile')
	  return;
    }
	
    user.felhasznalonev = userData.felhasznalonev
    user.email = userData.email
    user.nev = userData.nev

    yield user.update()

    yield request
      .with({ success: 'Profile changed successfully.' })
      .flash()
	
    response.route('profile')
  }

}

module.exports = UserController
