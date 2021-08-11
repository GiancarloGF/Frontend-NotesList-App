describe('Note app', function() {
      beforeEach(function() {
            //Delete all notes and all users.
            cy.request('POST','http://localhost:3001/api/testing/reset')
            const user={
                  name:'root',
                  username:'root',
                  password:'sekret'
            }
            // Create new user
            cy.request('POST','http://localhost:3001/api/users/',user)
            cy.visit('http://localhost:3000')
      })
      
      it('front page can be opened', function() {
            //   cy.visit('http://localhost:3000')
            cy.contains('Notes')
            cy.contains('Notes app, Giancarlo Guerra 2021')
      })

      it('login form can be opened', function() {
            // cy.visit('http://localhost:3000')
            cy.contains('Log in').click()
      })

      it('user can login', function () {
            cy.contains('Log in').click()
            // cy.get('input:first').type('root')
            // cy.get('input:last').type('salainen')
            cy.get('#username').type('root')
            cy.get('#password').type('sekret')
            cy.get('#login-button').click()

            cy.contains('Hola root 🖐, puedes crear una nueva nota 📝')
      }) 

      // it.only('login fails with wrong password', function() {->only se usa para probar solo un test
      it('login fails with wrong password', function() {
            cy.contains('Log in').click()
            cy.get('#username').type('mluukkai')
            cy.get('#password').type('wrong')
            cy.get('#login-button').click()
            // Verifica que se encuentre la notificion de error
            cy.get('.error').contains('Wrong credentials')
            // Verifica que no se encuentre la notificion de exito
            cy.get('html').should('not.contain','Login exitoso')
      })

      describe('when logged in', function() {
            beforeEach(function() {
            //   cy.contains('Log in').click()
            //   cy.get('input:first').type('root')
            //   cy.get('input:last').type('sekret')
            //   cy.get('#login-button').click()
            // Borramos el codigo de arriba ya que cypress recomienda hacer solicitud http directamente(velocidad)
            //Tambien se ha creado un comando personalizado ya que es codigo que se utiliza en varios lugares.->cypres/support/commands.js
            cy.login({username:'root',password:'sekret'})

            })
        
            it('a new note can be created', function() {
            //   cy.contains('New note').click()
            //   cy.get('input').type('a note created by cypress')
            //   cy.contains('save').click()

            //Usamos comando personalizado probando directamente con solicitud HTTP(segun recomendacion de cypress)
                  cy.createNote({
                        content:'a note created by cypress',
                        important:false
                  })
            // Luego verificamos que contenga el texto probado.
                  cy.contains('a note created by cypress')
            })

            describe('and a note exists', function () {
                  beforeEach(function () {
                        // cy.contains('New note').click()
                        // cy.get('input').type('another note cypress')
                        // cy.contains('save').click()
                        //Usamos comando personalizado probando directamente con solicitud HTTP(segun recomendacion de cypress)
                        cy.createNote({ content: 'first note', important: false })      
			      cy.createNote({ content: 'second note', important: false })      
			      cy.createNote({ content: 'third note', important: false })  
                  })
      
                  it('one of those can be made important', function () {
                        // Verificamos que al hacer click en make important se convierta el texto en make not important.
                       cy.contains('second note').parent().find('button').as('theButton')
                       cy.get('@theButton').click();
                       cy.get('@theButton').should('contain','make not important')
                        
                  })
            })
      })

      

    })