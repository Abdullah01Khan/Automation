
 describe ('get api', function () {

    let accessToken = '8bc56af2bb3d48ed831ecb1c1c4a88e920085f8f0db0b2c796a23910e7bf49b7'

    it('get user', function () {

        cy.request({

            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/759400',
            headers: {
                'authorization' : "Bearer" + accessToken
            }
        }).then((res)=> {
            expect(res.status).to.eq(200)
            expect(res.body.gender).to.eq('female')
        })
    })

 })