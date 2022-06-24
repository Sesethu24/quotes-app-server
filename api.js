module.exports = function (app, db) {

    app.post('/api/login', async function(req, res){

       try {

            const {username, password} = req.body;

            const logUser= await db.oneOrNone(`select * from love_user where username= $1`, [username])
			if (logUser == null) {
				res.json({
					status: 'error',
					message: 'please register'
				})
			}else{
				res.json({
					status: 'success',
					message: 'successfully logged in'
				})
			}

        } catch (err) {
            console.log(err);
			res.json({
				status: 'error',
				error: err.message
			})
        }
    });

    app.post('/api/register', async function (req, res) {

		try {

			const {username, password} = req.body;
            const regUser = await db.oneOrNone(`select * from love_user where username=$1`,[username]);

			if (regUser == null) {
				await db.oneOrNone(`insert into love_user( username, password) values($1,$2) on conflict do nothing`, [ username, password]);
				
			   res.json({
				   status: 'success',
				   message: 'User successfully registered'
   
			   });
			}else{
				this.message = 'user already exists!'
   
			}
			
			 
		} catch (err) {
			console.log(err);
			res.json({
				status: 'error',
				error: err.message
			})
		}
	});

// 	app.post('/api/login', async (req, res) => {
//    const user = users.find(user => user.username = req.body.username) 
//    if (user == null) {
//        return res.status(400).send('cannot find user')
//     }
//    try {
//      if(await bcrypt.compare(req.body.password, user.password) ) {
//         // jwt.sign()
//         res.json({
//             token: 'password'
//         })
//      }else{
//          res.send('not allowed')
//      }
    
//    } catch {
//     res.status(500).send()
//    }
    
// })
 
 }